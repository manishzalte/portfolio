import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, Volume1 } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  url: string;
  duration: string;
  ncsUrl: string;
}

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioLoaded, setAudioLoaded] = useState(false);

  // Single NCS track for now
  const track: Track = {
    id: 1,
    title: "who am I ?",
    artist: "yanvince",
    url: "/yanvince - who am I_ [NCS Release].mp3",
    duration: "4:28",
    ncsUrl: "http://ncs.io/whoami"
  };

  // Autoplay when component mounts and audio is loaded
  useEffect(() => {
    if (audioRef.current && audioLoaded && !hasUserInteracted) {
      // Try to autoplay
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        console.log('Autoplay successful');
      }).catch((err) => {
        console.log('Autoplay blocked by browser, waiting for user interaction');
        setError('Click play to start music (browser autoplay blocked)');
      });
    }
  }, [audioLoaded, hasUserInteracted]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = volume;
      }
    }
  }, [isMuted, volume]);

  const handlePlay = async () => {
    try {
      setError(null);
      setHasUserInteracted(true);
      setIsLoading(true);
      
      if (audioRef.current) {
        await audioRef.current.play();
        setIsPlaying(true);
        console.log('Play successful');
      }
    } catch (err) {
      console.error('Play error:', err);
      setError('Failed to play audio');
      setIsPlaying(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePause = () => {
    try {
      setError(null);
      setHasUserInteracted(true);
      
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
        console.log('Pause successful');
      }
    } catch (err) {
      console.error('Pause error:', err);
      setError('Failed to pause audio');
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    setIsMuted(false);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setAudioLoaded(true);
      setError(null);
      setIsLoading(false);
      console.log('Audio loaded successfully:', audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Desktop Music Player - Full Card (md and up) */}
      <div className="hidden md:block fixed top-32 right-4 z-50">
        <div className="bg-spiderman-red/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-spiderman-blue/30 spiderman-glow w-80">
          {/* NCS Badge */}
          <div className="text-center mb-2">
            <span className="inline-block bg-spiderman-blue text-white text-xs px-2 py-1 rounded-full font-bold">
              NCS
            </span>
          </div>

          {/* Error Message - Fixed height to prevent size changes */}
          <div className="h-12 mb-2 flex items-center justify-center">
            {error && (
              <div className="text-center p-2 bg-yellow-500/20 text-yellow-300 text-xs rounded-lg">
                {error}
              </div>
            )}
          </div>

          {/* Loading Indicator - Fixed height to prevent size changes */}
          <div className="h-12 mb-2 flex items-center justify-center">
            {isLoading && (
              <div className="text-center p-2 bg-spiderman-blue/20 text-spiderman-blue text-xs rounded-lg">
                Loading audio...
              </div>
            )}
          </div>

          {/* Track Info */}
          <div className="text-center mb-3">
            <h4 className="text-white font-spiderman text-sm font-bold spiderman-text-glow">
              {track.title}
            </h4>
            <p className="text-spiderman-blue text-xs">
              {track.artist}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-spiderman-blue/30 rounded-full appearance-none cursor-pointer slider-spiderman"
              style={{
                background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${(currentTime / (duration || 1)) * 100}%, rgba(0, 102, 204, 0.3) ${(currentTime / (duration || 1)) * 100}%, rgba(0, 102, 204, 0.3) 100%)`
              }}
            />
            <div className="flex justify-between text-xs text-spiderman-blue mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Play and Pause Buttons */}
          <div className="flex items-center justify-center space-x-2 mb-3">
            <button
              onClick={handlePlay}
              disabled={isLoading || isPlaying}
              className="p-2 bg-spiderman-red text-white rounded-lg hover:bg-spiderman-red-dark hover:spiderman-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Play size={16} />
            </button>
            
            <button
              onClick={handlePause}
              disabled={isLoading || !isPlaying}
              className="p-2 bg-spiderman-blue text-white rounded-lg hover:bg-spiderman-blue-dark hover:spiderman-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Pause size={16} />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center justify-center space-x-2 mb-3">
            <button
              onClick={handleMute}
              className="text-spiderman-blue hover:text-white transition-colors duration-300"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-20 h-1 bg-spiderman-blue/30 rounded-full appearance-none cursor-pointer slider-spiderman"
            />
          </div>

          {/* NCS Attribution Link */}
          <a
            href={track.ncsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-xs text-spiderman-blue hover:text-white transition-colors duration-300 mb-2 flex items-center justify-center space-x-1"
          >
            <span>Free Download</span>
          </a>

          {/* Music Icon */}
          <div className="text-center">
            <Music size={16} className="text-spiderman-blue mx-auto" />
          </div>
        </div>
      </div>

      {/* Mobile Music Player - Stripe Design (below md) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-spiderman-red/95 backdrop-blur-md border-t border-spiderman-blue/30 spiderman-glow">
          {/* Main Stripe */}
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Left Side - Track Info */}
              <div className="flex items-center space-x-3 flex-1 min-w-0">
                {/* NCS Badge */}
                <span className="inline-block bg-spiderman-blue text-white text-xs px-2 py-1 rounded-full font-bold flex-shrink-0">
                  NCS
                </span>
                
                {/* Track Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-white font-spiderman text-sm font-bold spiderman-text-glow truncate">
                    {track.title}
                  </h4>
                  <p className="text-spiderman-blue text-xs truncate">
                    {track.artist}
                  </p>
                </div>
              </div>

              {/* Center - Play/Pause Button */}
              <div className="flex items-center space-x-2 mx-4">
                <button
                  onClick={handlePlay}
                  disabled={isLoading || isPlaying}
                  className="p-2 bg-spiderman-red text-white rounded-full hover:bg-spiderman-red-dark hover:spiderman-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play size={20} />
                </button>
                
                <button
                  onClick={handlePause}
                  disabled={isLoading || !isPlaying}
                  className="p-2 bg-spiderman-blue text-white rounded-full hover:bg-spiderman-blue-dark hover:spiderman-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Pause size={20} />
                </button>
              </div>

              {/* Right Side - Volume and Menu */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                {/* Volume Button */}
                <button
                  onClick={() => setShowVolume(!showVolume)}
                  className="p-2 text-spiderman-blue hover:text-white transition-colors duration-300"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume1 size={18} />}
                </button>

                {/* Music Icon */}
                <Music size={18} className="text-spiderman-blue" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-spiderman-blue/30 rounded-full appearance-none cursor-pointer slider-spiderman"
                style={{
                  background: `linear-gradient(to right, #FF0000 0%, #FF0000 ${(currentTime / (duration || 1)) * 100}%, rgba(0, 102, 204, 0.3) ${(currentTime / (duration || 1)) * 100}%, rgba(0, 102, 204, 0.3) 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-spiderman-blue mt-1">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Volume Slider - Expandable */}
            {showVolume && (
              <div className="mt-3 flex items-center space-x-2">
                <VolumeX size={16} className="text-spiderman-blue" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="flex-1 h-1 bg-spiderman-blue/30 rounded-full appearance-none cursor-pointer slider-spiderman"
                />
                <Volume2 size={16} className="text-spiderman-blue" />
              </div>
            )}
          </div>

          {/* Error Message - Mobile */}
          {error && (
            <div className="px-4 pb-3">
              <div className="text-center p-2 bg-yellow-500/20 text-yellow-300 text-xs rounded-lg">
                {error}
              </div>
            </div>
          )}

          {/* Loading Indicator - Mobile */}
          {isLoading && (
            <div className="px-4 pb-3">
              <div className="text-center p-2 bg-spiderman-blue/20 text-spiderman-blue text-xs rounded-lg">
                Loading audio...
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={track.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onError={(e) => {
          console.error('Audio error:', e);
          setError('Error loading audio file');
          setIsLoading(false);
        }}
        preload="metadata"
      />
    </>
  );
};

export default MusicPlayer;
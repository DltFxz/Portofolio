import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPlay,
  FiPause,
  FiSkipBack,
  FiSkipForward,
  FiVolume2,
  FiVolumeX,
  FiMusic,
  FiChevronUp,
  FiChevronDown,
} from "react-icons/fi";

interface Song {
  title: string;
  artist: string;
  file: string;
}

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef(false);

  const playlist: Song[] = [
    { title: "West Coast", artist: "Lana Del Rey", file: "/audio/lana.mp3" },
    { title: "Remember The Time", artist: "Michael Jackson", file: "/audio/remember_the_time.mp3" },
    { title: "I Wanna Be Yours", artist: "Arctic Monkeys", file: "/audio/i-wanna-be-yours.mp3" },
  ];

  const currentSong = playlist[currentSongIndex];

  // Update audio source
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.file;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  // Audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!dragRef.current && audio) {
        setCurrentTime(audio.currentTime);
      }
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => handleNext();
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  // Drag events - LIGHTER VERSION
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current || !progressRef.current || !audioRef.current) return;

      const rect = progressRef.current.getBoundingClientRect();
      const percent = Math.max(
        0,
        Math.min(1, (e.clientX - rect.left) / rect.width),
      );
      const newTime = percent * (duration || 0);

      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!dragRef.current || !progressRef.current || !audioRef.current) return;

      const rect = progressRef.current.getBoundingClientRect();
      const percent = Math.max(
        0,
        Math.min(1, (e.touches[0].clientX - rect.left) / rect.width),
      );
      const newTime = percent * (duration || 0);

      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    };

    const handleUp = () => {
      dragRef.current = false;
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleUp);
    };
  }, [duration]);

  const handleProgressStart = (e: React.MouseEvent | React.TouchEvent) => {
    dragRef.current = true;
    setIsDragging(true);

    if (!progressRef.current || !audioRef.current || !duration) return;

    const rect = progressRef.current.getBoundingClientRect();
    let clientX: number;

    if ("touches" in e) {
      clientX = e.touches[0]?.clientX || 0;
    } else {
      clientX = e.clientX;
    }

    const percent = Math.max(
      0,
      Math.min(1, (clientX - rect.left) / rect.width),
    );
    const newTime = percent * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  const handleNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  const handlePrev = () => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    setCurrentSongIndex(
      (prev) => (prev - 1 + playlist.length) % playlist.length,
    );
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;


const playerRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (playerRef.current && !playerRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);


  return (
    <div ref={playerRef} className="fixed bottom-4 right-4 z-50">
      <audio ref={audioRef} preload="auto" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-gray-900/20 backdrop-blur-lg border border-gray-800 rounded-2xl p-5 w-72 shadow-2xl mb-3"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center ${isPlaying ? "animate-pulse" : ""}`}
                >
                  <FiMusic className="text-primary" size={16} />
                </div>
                <span className="text-sm text-gray-400">Now Playing</span>
              </div>
              <span className="text-xs text-gray-600">
                {currentSongIndex + 1} / {playlist.length}
              </span>
            </div>

            {/* Song Info */}
            <div className="text-center mb-4">
              <h4 className="text-white font-semibold truncate">
                {currentSong.title}
              </h4>
              <p className="text-gray-400 text-sm truncate">
                {currentSong.artist}
              </p>
            </div>

            {/* Progress Bar - LIGHTER DRAG */}
            <div className="mb-4 select-none">
              <div
                ref={progressRef}
                className="h-1.5 bg-gray-700/50 rounded-full cursor-pointer relative group"
                onMouseDown={handleProgressStart}
                onTouchStart={handleProgressStart}
              >
                <div
                  className="h-full bg-primary rounded-full relative"
                  style={{
                    width: `${progressPercent}%`,
                    transition: isDragging ? "none" : "width 0.05s linear",
                  }}
                >
                  <div
                    className={`absolute -right-1.5 -top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-md transition-transform ${
                      isDragging ? "scale-125" : "scale-0 group-hover:scale-100"
                    }`}
                  />
                </div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={handlePrev}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiSkipBack size={20} />
              </button>
              <button
                onClick={handlePlayPause}
                className="bg-primary hover:bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                {isPlaying ? (
                  <FiPause size={22} />
                ) : (
                  <FiPlay size={22} className="ml-1" />
                )}
              </button>
              <button
                onClick={handleNext}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FiSkipForward size={20} />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={handleMute}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <FiVolumeX size={16} />
                ) : (
                  <FiVolume2 size={16} />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-gray-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full"
              />
            </div>

            {/* Playlist */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <p className="text-xs text-gray-500 mb-2">Playlist</p>
              <div className="space-y-1 max-h-24 overflow-y-auto scrollbar-hide">
                {playlist.map((song, index) => (
                  <button
                    key={song.file}
                    onClick={() => {
                      setCurrentSongIndex(index);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left flex items-center gap-3 p-2 rounded-lg transition-all text-xs ${
                      index === currentSongIndex
                        ? "bg-primary/10 text-primary"
                        : "text-gray-400 hover:bg-gray-800/50"
                    }`}
                  >
                    <span className="w-5 text-center">
                      {index === currentSongIndex && isPlaying
                        ? "🎵"
                        : index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="truncate font-medium">{song.title}</p>
                      <p className="truncate text-gray-500">{song.artist}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-2xl transition-all ml-auto ${
          isPlaying
            ? "bg-primary text-white shadow-primary/25"
            : "bg-gray-900/95 text-gray-400 border border-gray-800"
        }`}
      >
        {isPlaying ? (
          <>
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium">Now Playing</span>
          </>
        ) : (
          <>
            <FiMusic size={16} />
            <span className="text-sm">Music</span>
          </>
        )}
        {isOpen ? <FiChevronDown size={16} /> : <FiChevronUp size={16} />}
      </motion.button>
    </div>
  );
};

export default MusicPlayer;

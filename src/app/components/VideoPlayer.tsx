"use client";

import { useEffect, useRef, useState } from "react";
import {
  Maximize,
  Pause,
  Play,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
} from "lucide-react";

type VideoPlayerProps = {
  src: string;
  poster?: string;
  title?: string;
};

export default function VideoPlayer({
  src,
  poster,
  title = "Video",
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };

  const skip = (seconds: number) => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = Math.max(
      0,
      Math.min(video.currentTime + seconds, video.duration || 0)
    );
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };
  
  const handleVolumeChange = (value: number) => {
  const video = videoRef.current;

  if (!video) return;

  video.volume = value;
  setVolume(value);

  if (value === 0) {
    video.muted = true;
    setIsMuted(true);
  } else {
    video.muted = false;
    setIsMuted(false);
    }
  };

  const handleSeek = (value: number) => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = value;
    setCurrentTime(value);
  };

  const toggleFullscreen = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await video.requestFullscreen();
    }
  };

  const formatTime = (time: number) => {
    if (!Number.isFinite(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        handleLoadedMetadata
      );
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div className="group relative overflow-hidden bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        className="block h-auto max-h-[80vh] w-full object-contain"
        aria-label={title}
        onClick={togglePlay}
      />

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-4 pb-4 pt-12 text-white opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
        {/* Progress */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          step="0.1"
          value={currentTime}
          onChange={(event) =>
            handleSeek(Number(event.target.value))
          }
          className="mb-3 w-full cursor-pointer accent-white"
          aria-label="Video progress"
        />

        <div className="flex items-center gap-2">
          {/* Play / Pause */}
          <button
            type="button"
            onClick={togglePlay}
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause size={18} />
            ) : (
              <Play size={18} />
            )}
          </button>

          {/* Back 10 */}
          <button
            type="button"
            onClick={() => skip(-10)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
            aria-label="Go back 10 seconds"
          >
            <RotateCcw size={18} />
          </button>

          {/* Forward 10 */}
          <button
            type="button"
            onClick={() => skip(10)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
            aria-label="Go forward 10 seconds"
          >
            <RotateCw size={18} />
          </button>

          {/* Volume */}
          <button
            type="button"
            onClick={toggleMute}
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX size={18} />
            ) : (
              <Volume2 size={18} />
            )}
          </button>

          <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={(event) =>
          handleVolumeChange(Number(event.target.value))
          }
          className="w-16 cursor-pointer accent-white sm:w-20"
          aria-label="Volume"
          />

          {/* Time */}
          <span className="ml-1 font-mono text-[11px] tracking-wide text-white/80">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={toggleFullscreen}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-white/15"
            aria-label="Enter fullscreen"
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
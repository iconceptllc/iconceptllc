"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { videos, type VideoKey } from "@/lib/videos";

type Props = {
  videoKey: VideoKey;
  title: string;
  playback?: boolean;
  priority?: boolean;
};

const PLAY_EVENT = "iconcept-youtube-play";

export default function VideoPoster({ videoKey, title, playback = false, priority = false }: Props) {
  const { youtubeId, poster, posterFit } = videos[videoKey];
  const instanceId = useId();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playback || !youtubeId) return;
    const stopOtherPlayer = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== instanceId) setPlaying(false);
    };
    window.addEventListener(PLAY_EVENT, stopOtherPlayer);
    return () => window.removeEventListener(PLAY_EVENT, stopOtherPlayer);
  }, [instanceId, playback, youtubeId]);

  if (playing && youtubeId) {
    return (
      <iframe
        style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <div className="video-poster" style={posterFit ? { background: "#000" } : undefined}>
      <Image src={poster} alt={title} fill priority={priority} sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: posterFit ?? "cover" }} />
      {playback && youtubeId && (
        <button
          className="video-poster-play"
          type="button"
          aria-label={`Play ${title}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            document.querySelectorAll<HTMLIFrameElement>("iframe[data-pause-on-play]").forEach((iframe) => {
              iframe.contentWindow?.postMessage(
                JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
                "https://www.youtube.com",
              );
            });
            window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: instanceId }));
            setPlaying(true);
          }}
        >
          <span aria-hidden="true">▶</span>
        </button>
      )}
      <style jsx>{`
        .video-poster { position: relative; width: 100%; height: 100%; overflow: hidden; }
        .video-poster-play { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; background: transparent; color: white; cursor: pointer; display: grid; place-items: center; }
        .video-poster-play span { display: grid; place-items: center; width: 64px; height: 64px; border-radius: 50%; background: rgba(0, 0, 0, .68); font-size: 25px; padding-left: 4px; }
        .video-poster-play:focus-visible { outline: 3px solid white; outline-offset: -3px; }
      `}</style>
    </div>
  );
}

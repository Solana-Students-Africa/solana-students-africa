/** Plays a video only while it's on screen; the poster covers the moment it takes to start. With preload="none", offscreen videos never download. */
export const playWhenVisible = (video: HTMLVideoElement) => {
  const observer = new IntersectionObserver(([entry]) => {
    // play() rejects if a pause interrupts it, which is expected here.
    if (entry.isIntersecting) video.play().catch(() => {});
    else video.pause();
  });
  observer.observe(video);
  return () => observer.disconnect();
};

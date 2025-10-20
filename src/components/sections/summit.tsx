import { Container } from "@/components/ui/container";
import { useState, useRef } from "react";

const SummitSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  };
  return (
    <Container
      className="summit-section w-full bg-black px-6 pt-10 pb-20 md:pt-32"
      as="section"
      id="summit"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 md:gap-16">
        <div className="w-full max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">About the SSA Summit</h2>
        </div>

        <div className="flex w-full max-w-4xl flex-col gap-8">
          {/* First Event Card */}
          <div className="rounded-4xl bg-black/80 p-8 text-white backdrop-blur-[100px]">
            <h3 className="mb-4 text-2xl font-semibold">The Inaugural Summit</h3>
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              The first-ever Solana Students Africa Summit was a landmark event that brought
              together over 200 students from across the continent. Held in partnership with leading
              universities and blockchain organizations, the summit featured workshops, hackathon
              finale, and networking opportunities that empowered participants to explore the
              possibilities of Web3 technology on the Solana blockchain.
            </p>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC07959.jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC08554.jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC08597.jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC08705.jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC08766.jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC08925.jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC09172.jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC09248 (1).jpg"
                  alt="SSA Summit 2025"
                  className="h-auto max-w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Milestone Card */}
          <div className="rounded-4xl bg-black/80 p-8 text-white backdrop-blur-[100px]">
            <h3 className="mb-4 text-2xl font-semibold">A Milestone for Africa</h3>
            <p className="text-base leading-relaxed text-white/90 md:text-lg">
              This summit marked a significant step in establishing Africa as a key player in the
              global Web3 ecosystem. By connecting students with mentors, industry experts, and
              cutting-edge resources, we've laid the foundation for a vibrant community of
              blockchain innovators who are ready to build the future of decentralized technology.
            </p>
          </div>

          {/* Large Featured Photo */}
          <div className="group relative w-full overflow-hidden rounded-3xl">
            <img
              src="/images/SSA2025/DSC08928.jpg"
              alt="SSA Summit 2025 - A Milestone for Africa"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          {/* Experience the Summit Video Section */}
          <div className="mt-12 w-full space-y-6">
            <div className="text-center">
              <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                Experience the Summit
              </h3>
              <p className="mx-auto max-w-2xl text-sm text-white/70 md:text-base">
                Watch highlights from our inaugural summit featuring inspiring talks, hands-on
                workshops, and the vibrant community that's building the future of Web3 in Africa.
              </p>
            </div>

            <div className="w-full">
              <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black">
                {/* Add video autoplay with /videos/ */}
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  playsInline
                  muted
                  className="absolute inset-0 h-full w-full cursor-pointer object-cover"
                  onClick={handleVideoClick}
                >
                  <source src="/videos/experience-summit-video.mp4" type="video/mp4" />
                </video>

                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute right-4 bottom-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-black/70"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    // Muted icon
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      />
                    </svg>
                  ) : (
                    // Unmuted icon
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Additional photos */}
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC09172.jpg"
                  alt="Summit Moment"
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC08554.jpg"
                  alt="Summit Moment"
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC08597.jpg"
                  alt="Summit Moment"
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src="/images/SSA2025/DSC07959.jpg"
                  alt="Summit Moment"
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SummitSection;

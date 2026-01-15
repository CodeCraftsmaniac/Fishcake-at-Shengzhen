import { SlideContainer } from "../presentation/SlideContainer";
import fishcakeLogo from "@/assets/fishcake-logo-final.png";
import { QRCodeSVG } from "qrcode.react";

// App Store URLs
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.aspect.aspect";
const APP_STORE_URL = "https://apps.apple.com/us/app/fishcake/id6461646093";

// SVG Icons
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const Slide21Placeholder = () => {
  return (
    <SlideContainer>
      <div className="relative z-10 text-center">
        {/* Logo with refined glow effect */}
        <div className="mb-6 animate-scale-in">
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute w-40 h-40 rounded-full bg-accent/20 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute w-32 h-32 rounded-full bg-primary/15 blur-2xl animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="relative animate-glow-pulse">
              <img
                src={fishcakeLogo}
                alt="Fishcake Logo"
                className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-[0_0_40px_rgba(255,200,0,0.5)]"
              />
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 animate-slide-up">
          Fishcake
        </h1>

        {/* Tagline */}
        <p
          className="text-xl md:text-2xl font-display font-bold text-primary mb-6 animate-slide-up"
          style={{
            animationDelay: "200ms",
            textShadow: '0 0 30px rgba(255, 140, 0, 0.4)'
          }}
        >
          The RWS Standard Layer
        </p>

        {/* Links Section */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
          {/* Websites */}
          <div className="flex justify-center gap-4 mb-3">
            <a href="https://fishcake.org" className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border/50 rounded-full text-sm text-foreground hover:border-primary/50 transition-colors">
              <GlobeIcon />
              fishcake.org
            </a>
            <a href="https://fishcake.io" className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border/50 rounded-full text-sm text-foreground hover:border-primary/50 transition-colors">
              <GlobeIcon />
              fishcake.io
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 mb-6">
            <a href="https://x.com/fishcake_labs" className="flex items-center gap-2 px-3 py-1.5 bg-card/30 border border-border/30 rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors">
              <XIcon />
              @fishcake_labs
            </a>
            <a href="https://t.me/Fishcake_Labs" className="flex items-center gap-2 px-3 py-1.5 bg-card/30 border border-border/30 rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors">
              <TelegramIcon />
              Telegram
            </a>
            <a href="https://github.com/FishcakeLab" className="flex items-center gap-2 px-3 py-1.5 bg-card/30 border border-border/30 rounded-full text-xs text-muted-foreground hover:text-foreground transition-colors">
              <GithubIcon />
              GitHub
            </a>
          </div>

          {/* Dual QR Codes with real links */}
          <div className="flex justify-center gap-8 mb-4">
            {/* Google Play QR */}
            <div className="text-center">
              <div
                className="inline-block bg-white p-3 rounded-xl"
                style={{ boxShadow: '0 0 25px rgba(255, 255, 255, 0.15)' }}
              >
                <QRCodeSVG
                  value={GOOGLE_PLAY_URL}
                  size={80}
                  level="M"
                  includeMargin={false}
                />
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-muted-foreground">
                <PlayStoreIcon />
                <span className="text-xs">Google Play</span>
              </div>
            </div>

            {/* App Store QR */}
            <div className="text-center">
              <div
                className="inline-block bg-white p-3 rounded-xl"
                style={{ boxShadow: '0 0 25px rgba(255, 255, 255, 0.15)' }}
              >
                <QRCodeSVG
                  value={APP_STORE_URL}
                  size={80}
                  level="M"
                  includeMargin={false}
                />
              </div>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-muted-foreground">
                <AppleIcon />
                <span className="text-xs">App Store</span>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground/70 text-xs">Scan to download the app</p>

          {/* Final closure line */}
          <p className="text-muted-foreground/50 text-sm mt-4 tracking-wide">
            Build with it. Run on it. Extend it.
          </p>
        </div>
      </div>
    </SlideContainer>
  );
};

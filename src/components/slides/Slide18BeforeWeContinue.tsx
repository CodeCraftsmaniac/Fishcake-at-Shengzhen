import { SlideContainer } from "../presentation/SlideContainer";
import { SlideTitle } from "../presentation/SlideTitle";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Gift, Sparkles } from "lucide-react";

const FCC_CLAIM_URL = "https://fishcake.io/event?activityId=3360";

export const Slide18BeforeWeContinue = () => {
  return (
    <SlideContainer>
      <div className="text-center">
        <SlideTitle>Before We Continue — A Question</SlideTitle>

        <div className="mt-10 mb-8 animate-slide-up">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
            How many of you have{" "}
            <span className="text-primary">claimed a reward</span> today?
          </h2>
        </div>

        {/* QR Code with premium styling */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <div className="relative inline-block">
            {/* Outer glow rings */}
            <div
              className="absolute inset-0 rounded-3xl animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(255,200,0,0.2) 0%, transparent 70%)',
                transform: 'scale(1.5)',
              }}
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 60%)',
                transform: 'scale(1.3)',
              }}
            />

            {/* QR Code container */}
            <div
              className="relative bg-white p-5 rounded-2xl"
              style={{
                boxShadow: '0 0 60px rgba(255, 200, 0, 0.4), 0 20px 40px rgba(0,0,0,0.3)',
              }}
            >
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-lg" />

              <QRCodeSVG
                value={FCC_CLAIM_URL}
                size={180}
                level="M"
                includeMargin={false}
              />
            </div>
          </div>

          {/* Scan instruction */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <Smartphone className="w-4 h-4 text-primary" />
            <p className="text-primary font-mono text-sm">
              Scan to claim your reward
            </p>
          </div>

          {/* URL */}
          <p className="text-muted-foreground font-mono text-xs mt-2">
            {FCC_CLAIM_URL}
          </p>
        </div>

        {/* CTA Messages */}
        <div className="animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "500ms" }}>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Haven't claimed */}
            <div
              className="p-5 rounded-xl flex items-center"
              style={{
                background: 'linear-gradient(135deg, rgba(15,15,20,0.9) 0%, rgba(25,25,35,0.8) 100%)',
                border: '1px solid rgba(255,140,0,0.15)',
                minHeight: '100px',
              }}
            >
              <div className="flex items-center gap-4">
                <Gift className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">If you haven't yet —</p>
                  <p className="text-primary font-bold text-lg">You're about to.</p>
                </div>
              </div>
            </div>

            {/* Already claimed */}
            <div
              className="p-5 rounded-xl flex items-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(25,25,35,0.8) 100%)',
                border: '1px solid rgba(255,140,0,0.25)',
                minHeight: '100px',
              }}
            >
              <div className="flex items-center gap-4">
                <Sparkles className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">If you have —</p>
                  <p className="text-accent font-bold text-lg">You know what's next.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
};

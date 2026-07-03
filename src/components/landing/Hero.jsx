import { useMemo } from "react";

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateStars(count) {
  return Array.from({ length: count }, (_, i) => ({
    cx: seededRandom(i * 12.9898) * 1600,
    cy: seededRandom(i * 78.233) * 500,
    r: seededRandom(i * 37.719) * 1.6 + 0.4,
    opacity: seededRandom(i * 93.989) * 0.7 + 0.3,
  }));
}

export default function HeroBackground() {
  const stars = useMemo(() => generateStars(45), []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-base">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          {/* diagonal backdrop: blue top-left -> dark navy center -> pink/purple bottom-right */}
          <linearGradient id="bgWash" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B2FD4" />
            <stop offset="18%" stopColor="#1A1250" />
            <stop offset="45%" stopColor="#0A0A1A" />
            <stop offset="70%" stopColor="#2A0E45" />
            <stop offset="100%" stopColor="#7A1E5E" />
          </linearGradient>

          <radialGradient id="bgGlowTL" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5B4CF0" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#5B4CF0" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bgGlowBR" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E23FA6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E23FA6" stopOpacity="0" />
          </radialGradient>

          {/* planet: blue-purple highlight top-left fading to hot pink/orange bottom-right */}
          <radialGradient id="planetBase" cx="38%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#C9B8FF" />
            <stop offset="35%" stopColor="#9B7BE8" />
            <stop offset="60%" stopColor="#7C4FD0" />
            <stop offset="100%" stopColor="#5B2E9E" />
          </radialGradient>
          <radialGradient id="planetPinkSide" cx="72%" cy="72%" r="60%">
            <stop offset="0%" stopColor="#FF8A5B" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F0508C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F0508C" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="planetRim" cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="97%" stopColor="#F5D9FF" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F5D9FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="planetGlowOuter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0409A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E0409A" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="waveBlue" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0%" stopColor="#4C3BD6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3B1E8A" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="wavePink" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8A2A9E" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#E0409A" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="ridgeGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7C6CF0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#F0ABFC" stopOpacity="1" />
            <stop offset="100%" stopColor="#F0508C" stopOpacity="0.9" />
          </linearGradient>

          <pattern id="gridPattern" width="38" height="38" patternUnits="userSpaceOnUse">
            <path d="M38 0 L0 0 0 38" fill="none" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="1" />
          </pattern>
          <linearGradient id="fadeMask" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="gridFade">
            <rect x="0" y="0" width="1600" height="900" fill="url(#fadeMask)" />
          </mask>

          <filter id="blurLg" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <filter id="blurSm" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.3" />
          </filter>
        </defs>

        {/* backdrop */}
        <rect x="0" y="0" width="1600" height="900" fill="url(#bgWash)" />
        <rect x="0" y="0" width="900" height="700" fill="url(#bgGlowTL)" />
        <rect x="700" y="200" width="900" height="700" fill="url(#bgGlowBR)" />

        {/* stars */}
        {stars.map((s, i) => (
          <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill="#ffffff" opacity={s.opacity} />
        ))}

        {/* planet ambient glow */}
        <circle cx="1230" cy="400" r="420" fill="url(#planetGlowOuter)" filter="url(#blurLg)" />

        {/* back arc of ring (behind planet) */}
        <path
          d="M 940 330 A 300 70 -14 1 1 1520 400"
          fill="none" stroke="#E9D5FF" strokeOpacity="0.45" strokeWidth="1.5"
          filter="url(#blurSm)"
        />

        {/* planet body */}
        <circle cx="1230" cy="400" r="195" fill="url(#planetBase)" />
        <circle cx="1230" cy="400" r="195" fill="url(#planetPinkSide)" />
        <circle cx="1230" cy="400" r="195" fill="url(#planetRim)" />

        {/* front arc of ring (in front of planet) */}
        <path
          d="M 940 330 A 300 70 -14 0 0 1520 400"
          fill="none" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2"
          transform="translate(0 55)"
        />
        <path
          d="M 940 330 A 300 70 -14 0 0 1520 400"
          fill="none" stroke="#F5D9FF" strokeOpacity="0.35" strokeWidth="1"
          strokeDasharray="4 5"
          transform="translate(0 63)"
        />

        {/* bright dots on ring */}
        <circle cx="1000" cy="310" r="2.5" fill="#F0ABFC" filter="url(#blurSm)" />
        <circle cx="1330" cy="518" r="3" fill="#ffffff" filter="url(#blurSm)" />

        {/* wavy dunes - blue on left, pink on right */}
        <path
          d="M0,690 C180,640 340,730 560,690 C780,650 900,700 1050,680
             C1220,655 1380,700 1600,660 L1600,900 L0,900 Z"
          fill="url(#waveBlue)"
        />
        <path
          d="M700,720 C880,660 1040,760 1250,700 C1380,665 1500,690 1600,670
             L1600,900 L700,900 Z"
          fill="url(#wavePink)"
        />
        <g mask="url(#gridFade)">
          <path
            d="M0,690 C180,640 340,730 560,690 C780,650 900,700 1050,680
               C1220,655 1380,700 1600,660 L1600,900 L0,900 Z"
            fill="url(#gridPattern)"
          />
        </g>
        <path
          d="M0,690 C180,640 340,730 560,690 C780,650 900,700 1050,680
             C1220,655 1380,700 1600,660"
          fill="none" stroke="url(#ridgeGlow)" strokeWidth="2.5"
          filter="url(#blurSm)"
        />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-r from-base/80 via-base/30 to-transparent" />
    </div>
  );
}
import {
  FlaskConical,
  BookOpen,
  Users,
  TrendingUp,
  Newspaper,
  Lock,
  Dumbbell,
  Pill,
  HeartPulse,
  Apple,
  Send,
  Check,
  Shield,
} from "lucide-react";
import heroLab from "../assets/hero-lab.jpg";
import aboutMuscle from "../assets/about-muscle.jpg";
import aboutDna from "../assets/about-dna.jpg";
import aboutLab from "../assets/about-lab.jpg";
import bottleMolecules from "../assets/bottle-molecules.jpg";
import scientist from "../assets/scientist.jpg";

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1z" />
  </svg>
);

const TIKTOK_URL = "https://www.tiktok.com/@tru4mlabs?_r=1&_t=ZN-96ZwYzI26nm";
const TELEGRAM_URL = "https://t.me/+NGRfhcu1tJw3ZjJk";

const navItems = ["Home", "About", "Research", "Community", "Updates", "Contact"];

const features = [
  { icon: FlaskConical, label: "Research\nFocused" },
  { icon: BookOpen, label: "Educational\nContent" },
  { icon: Users, label: "Community\nDriven" },
  { icon: TrendingUp, label: "Performance\nOptimisation" },
  { icon: Newspaper, label: "Industry News\n& Updates" },
  { icon: Lock, label: "Private Community\nAccess" },
];

const researchAreas = [
  { icon: FlaskConical, title: "Performance\nResearch", desc: "Exploring performance enhancement through research & data." },
  { icon: Dumbbell, title: "Training\nOptimisation", desc: "Evidence-based training methods & program discussions." },
  { icon: Pill, title: "Supplement\nEducation", desc: "Educational discussions on compounds, ingredients & mechanisms." },
  { icon: HeartPulse, title: "Recovery\nStrategies", desc: "Recovery protocols, sleep, stress & overall health optimisation." },
  { icon: Apple, title: "Nutrition\nScience", desc: "Nutrition strategies, macros, meal planning & performance fuel." },
  { icon: TrendingUp, title: "Industry News\n& Updates", desc: "Stay updated with the latest research & industry developments." },
];

const benefits = [
  "Research based discussions",
  "Educational & informational content",
  "Community driven platform",
  "Private Telegram access",
  "Industry insights & updates",
  "Motivation & accountability",
];

function Logo() {
  return (
    <div className="leading-none">
      <div className="font-display text-3xl font-bold tracking-tight">
        <span className="text-primary">TRU4M</span>
      </div>
      <div className="font-display text-xs tracking-[0.4em] text-foreground/80 mt-0.5">LABS</div>
    </div>
  );
}

// Red Button Component (same style everywhere)
function RedButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wider px-6 py-3 rounded-md text-sm red-glow transition ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <Logo />
          <ul className="hidden lg:flex items-center gap-8 text-sm">
            {navItems.map((n, i) => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase()}`}
                  className={`hover:text-primary transition-colors ${i === 0 ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/90"}`}
                >
                  {n}
                </a>
              </li>
            ))}
          </ul>
          <RedButton href={TELEGRAM_URL}>
            <Send className="w-4 h-4" /> JOIN RESEARCH COMMUNITY
          </RedButton>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-[0.3em] mb-4">
              WELCOME TO TRU4M LABS
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              ADVANCED RESEARCH.
              <br />
              PERFORMANCE.
              <br />
              <span className="text-primary text-red-glow">KNOWLEDGE.</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
              TRU4M LABS is a research-based community dedicated to educational discussions,
              performance optimisation, supplement research, and industry insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <RedButton href={TELEGRAM_URL}>
                <Send className="w-4 h-4" /> JOIN TELEGRAM
              </RedButton>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border border-border hover:border-primary text-foreground font-display tracking-wider px-7 py-4 rounded-md transition"
              >
                <TikTokIcon className="w-4 h-4" /> FOLLOW TIKTOK
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <img
              src={heroLab}
              alt="TRU4M Labs research"
              width={1280}
              height={896}
              className="relative w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Feature strip */}
        <div className="max-w-7xl mx-auto mt-12 card-grad rounded-xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <f.icon className="w-7 h-7 text-primary shrink-0" />
                <span className="text-sm font-semibold whitespace-pre-line leading-tight">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-2">ABOUT</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-2">
              <span className="text-primary">TRU4M</span> LABS
            </h3>
            <div className="w-16 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We are a research-focused platform built for individuals who are passionate about
              performance, science, and evidence-based discussions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to share knowledge, explore research, and build a community that values
              education, experience, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[aboutMuscle, aboutDna, aboutLab].map((src, i) => (
              <div key={i} className="overflow-hidden rounded-lg skew-card aspect-[3/4]">
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section id="research" className="px-6 py-16">
        <div className="max-w-7xl mx-auto card-grad rounded-xl p-8 md:p-12">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 bg-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-wider">
              RESEARCH AREAS
            </h2>
            <div className="h-px w-12 bg-primary" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {researchAreas.map((a) => (
              <div
                key={a.title}
                className="card-grad rounded-lg p-5 text-center hover:border-primary/60 transition"
              >
                <a.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h4 className="font-display font-bold text-sm whitespace-pre-line mb-2">
                  {a.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY JOIN + COMMUNITY */}
      <section id="community" className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">
          <div className="card-grad rounded-xl p-8 md:p-10 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-6">
                WHY JOIN <span className="text-primary">TRU4M</span> LABS?
              </h3>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/20 border border-primary flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={bottleMolecules}
              alt="Tru4m supplement"
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div
            id="join"
            className="card-grad rounded-xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <div className="relative">
              <p className="text-primary tracking-[0.3em] text-xs font-semibold mb-2">JOIN THE</p>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">
                RESEARCH COMMUNITY
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Be part of a growing community built on knowledge, research, and performance.
              </p>
              <RedButton href={TELEGRAM_URL} className="w-full max-w-md mb-6">
                <Send className="w-4 h-4" /> JOIN TELEGRAM COMMUNITY
              </RedButton>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/40 border border-border rounded-lg p-3 flex items-center gap-3 hover:border-primary transition"
                >
                  <TikTokIcon className="w-8 h-8 text-primary" />
                  <div className="text-xs">
                    <div className="text-muted-foreground">Follow Us On TikTok</div>
                    <div className="font-semibold">@tru4mlabs</div>
                  </div>
                </a>
                <RedButton href={TELEGRAM_URL} className="w-full">
                  <Send className="w-4 h-4" /> JOIN TELEGRAM
                </RedButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto card-grad rounded-xl p-6 grid lg:grid-cols-[1fr_auto] gap-6 items-center overflow-hidden relative">
          <div className="flex gap-4">
            <Shield className="w-10 h-10 text-primary shrink-0" />
            <div>
              <h4 className="font-display font-bold mb-1">DISCLAIMER</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                TRU4M LABS is intended for educational, informational, and research discussion
                purposes only. Content shared within the community does not constitute qualified
                medical advice. Always consult a qualified healthcare professional before making
                decisions relating to health, training, supplementation, or lifestyle changes.
              </p>
            </div>
          </div>
          <img
            src={scientist}
            alt=""
            loading="lazy"
            className="hidden lg:block w-64 h-32 object-cover rounded-md"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="px-6 py-12 border-t border-border/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <Logo />
            <p className="text-xs tracking-[0.3em] text-muted-foreground mt-4">
              RESEARCH · EDUCATION · COMMUNITY
            </p>
          </div>
          <div>
            <h5 className="font-display font-bold mb-4 text-sm tracking-wider">QUICK LINKS</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#research" className="hover:text-primary">Research Areas</a></li>
              <li><a href="#community" className="hover:text-primary">Community</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-display font-bold mb-4 text-sm tracking-wider">CONNECT</h5>
            <div className="space-y-3">
              <RedButton href={TELEGRAM_URL} className="w-full justify-start">
                <Send className="w-4 h-4" /> JOIN TELEGRAM
              </RedButton>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-border hover:border-primary rounded-md px-4 py-3 text-sm transition"
              >
                <TikTokIcon className="w-4 h-4 text-primary" /> FOLLOW TIKTOK
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
          © 2024 TRU4M LABS. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default Index
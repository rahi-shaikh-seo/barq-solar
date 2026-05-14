import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import heroImg from "@/assets/solar-hero.jpg";
import installerImg from "@/assets/solar-installer.jpg";
import homeImg from "@/assets/solar-home.jpg";
import logo from "@/assets/barq-solar-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Barq Solar — Home, Commercial & Industrial Solar Systems" },
      {
        name: "description",
        content:
          "Barq Solar Energy Service — Affordable 3KW+, 4KW+, 5KW+ solar systems with 25-year warranty, 5-year free maintenance and ₹78,000 government subsidy.",
      },
      { property: "og:title", content: "Barq Solar — Solar Energy Service" },
      {
        property: "og:description",
        content: "Below-market pricing, 25-year warranty, free maintenance and special scratch coupon offers.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
});

const PHONE_1 = "9327133123";
const PHONE_2 = "9106865612";
const EMAIL = "info@burqsolar.in";

type Lang = "gu" | "en";

const T = {
  gu: {
    address: "જુહાપુરા ચાર રસ્તા, સિલ્વર પ્લાઝા, પેહલો માળ, શોપ નં. 5",
    brandSub: "એનર્જી સર્વિસ",
    nav: { about: "અમારા વિશે", services: "સેવાઓ", why: "કેમ પસંદ કરવું", offer: "સ્પેશિયલ ઑફર", contact: "સંપર્ક" },
    callBtn: "કૉલ કરો",
    heroTag: "બર્ક સોલાર એનર્જી સર્વિસ",
    heroTitle1: "સૂર્યથી ઊર્જા,",
    heroTitle2: "તમારા ઘર સુધી",
    heroDesc: "માર્કેટથી ઓછી કિંમતમાં 3KW+, 4KW+, 5KW+ હોમ, ઇન્ડસ્ટ્રિયલ અને કોમર્શિયલ સોલાર સિસ્ટમ. 25 વર્ષ વોરંટી, 5 વર્ષ ફ્રી મેન્ટેનન્સ સાથે.",
    heroCta1: "ફ્રી સાઇટ વિઝિટ",
    heroCta2: "🎁 સ્ક્રેચ કૂપન ઑફર",
    stats: [
      { v: "₹78,000", l: "સરકારી સબસીડી" },
      { v: "25 વર્ષ", l: "વોરંટી (ટૂટવાના ચાન્સ નથી)" },
      { v: "5 વર્ષ", l: "સંપૂર્ણ ફ્રી સર્વિસ અને મેન્ટેનન્સ" },
      { v: "10 વર્ષ", l: "રિપ્લેસમેન્ટ વોરંટી" },
    ],
    expYears: "વર્ષનો અનુભવ અને જ્ઞાન",
    aboutKicker: "🏆 બમ્પર ફાયદો",
    aboutTitle: "આખા માર્કેટ કરતાં સૌથી સસ્તું.",
    aboutDesc: "અમે માર્કેટથી ઓછી કિંમતમાં 3KW+, 4KW+, 5KW+ હોમ, ઇન્ડસ્ટ્રિયલ અને કોમર્શિયલ સોલાર સિસ્ટમ લગાવી આપીએ છીએ — અનુભવ, ગુણવત્તા અને વિશ્વસનીયતા સાથે.",
    aboutFeats: ["અનુભવ અને જ્ઞાન", "એક જ જગ્યાએ સંપૂર્ણ સેવા", "વિશ્વસનીયતા", "ઉચ્ચ ગુણવત્તા ધોરણ"],
    brandsLabel: "🔋 અમારા વિશ્વસનીય બ્રાન્ડ્સ:",
    servicesKicker: "⚡ અમારી સેવાઓ",
    servicesTitle: "સંપૂર્ણ સોલાર સોલ્યુશન",
    servicesDesc: "ડિઝાઇનથી લઈ ઇન્સ્ટોલેશન અને મેન્ટેનન્સ સુધી — બધું એક જ જગ્યાએ.",
    services: [
      { t: "હોમ સોલાર સિસ્ટમ", d: "ઘર માટે કસ્ટમ ડિઝાઇન, ઓછા બિલ અને 25 વર્ષની વોરંટી." },
      { t: "ઇન્ડસ્ટ્રિયલ સોલાર સિસ્ટમ", d: "ફેક્ટરી અને પ્લાન્ટ માટે હાઇ-કેપેસિટી સિસ્ટમ." },
      { t: "કોમર્શિયલ સોલાર સિસ્ટમ", d: "દુકાન, ઑફિસ અને કોમ્પ્લેક્સ માટે પાવર સોલ્યુશન." },
      { t: "3KW+ / 4KW+ / 5KW+", d: "દરેક જરૂરિયાત માટે યોગ્ય ક્ષમતાનો સોલાર પ્લાન્ટ ઉપલબ્ધ." },
      { t: "ઇન્સ્ટોલેશન અને મેન્ટેનન્સ", d: "પ્રોફેશનલ ઇન્સ્ટોલેશન અને 5 વર્ષ ફ્રી મેન્ટેનન્સ." },
      { t: "રિમોટ મોનિટરિંગ", d: "તમારી સિસ્ટમના પ્રદર્શન પર સતત નજર." },
    ],
    qualityKicker: "🔧 પ્રોડક્ટ અને ક્વોલિટી",
    qualityTitle: "શ્રેષ્ઠ મટીરીયલ, લાંબી ઉંમર",
    qualityList: [
      "Inverter — 10 વર્ષ રિપ્લેસમેન્ટ વોરંટી",
      "Solar Panel — 25 વર્ષ વોરંટી (ટૂટવાના ચાન્સ નથી)",
      "Polycab Cable નો ઉપયોગ",
      "મજબૂત GI સ્ટ્રક્ચર મટીરીયલ",
      "5 વર્ષ સંપૂર્ણ ફ્રી સર્વિસ અને મેન્ટેનન્સ",
    ],
    whyKicker: "⭐ Barq સોલાર કેમ પસંદ કરવું?",
    whyTitle: "તમારા માટે યોગ્ય પાર્ટનર",
    why: [
      { t: "સ્પર્ધાત્મક કિંમત", d: "માર્કેટ કરતા ઓછી અને યોગ્ય કિંમતે સેવા." },
      { t: "ઉચ્ચ ગુણવત્તા", d: "આશરે 25 વર્ષની સિસ્ટમ આયુષ્ય." },
      { t: "ઝડપી ઉપલબ્ધતા", d: "બધા મુખ્ય કોમ્પોનેન્ટ્સ ભારતમાં ઉપલબ્ધ." },
      { t: "કસ્ટમ ડિઝાઇન", d: "દરેક ગ્રાહકની જરૂરિયાત મુજબ ખાસ ડિઝાઇન." },
      { t: "સર્વિસ સપોર્ટ", d: "રિમોટ મોનિટરિંગ અને ઝડપી મેન્ટેનન્સ." },
      { t: "વિશ્વાસપાત્ર સર્વિસ", d: "ફાસ્ટ ઇન્સ્ટોલેશન અને બેસ્ટ સર્વિસ ગેરંટી." },
    ],
    offerTag: "🎁 સ્પેશિયલ ઑફર",
    offerTitle: "4 સ્ક્રેચ કૂપન — દરેક ગ્રાહકને!",
    offerDesc: "તમે જે કૂપન સ્ક્રેચ કરશો, તે રકમ સીધી તમારી સોલાર સિસ્ટમની કિંમતમાંથી ઘટાડવામાં આવશે. ઉપરાંત ₹78,000 સરકારી સબસિડી અને માર્કેટથી ઓછી કિંમત.",
    bookNow: "હમણાં બુક કરો",
    couponLabel: "સ્ક્રેચ કૂપન",
    discount: "ડિસ્કાઉન્ટ",
    goalKicker: "🎯 અમારું લક્ષ્ય",
    goalTitle: "સ્વચ્છ ઊર્જા, સ્વચ્છ ભવિષ્ય",
    goals: [
      "સસ્તી અને શુદ્ધ ઊર્જા ઉપલબ્ધ કરાવવી",
      "પર્યાવરણ પર સકારાત્મક અસર",
      "કાર્બન ફૂટપ્રિન્ટ ઘટાડવો",
      "ગ્રાહકોને વધુ રિટર્ન આપવું",
    ],
    contactKicker: "📞 સંપર્ક કરો",
    contactTitle: "ફ્રી સાઇટ વિઝિટ અને ક્વોટ",
    contactDesc: "તમારી જગ્યા માટે યોગ્ય સોલાર સોલ્યુશનની મફત સલાહ માટે આજેજ કૉલ કરો.",
    mobile: "મોબાઈલ",
    email: "ઈમેલ",
    office: "ઓફિસ",
    formTitle: "ફ્રી ક્વોટ મેળવો",
    formDesc: "ફોર્મ ભરો, અમે તમને જલદી જવાબ આપીશું.",
    fName: "તમારું નામ",
    fPhone: "મોબાઈલ નંબર",
    fSelect: "સિસ્ટમ પસંદ કરો",
    fOptions: ["3KW+ હોમ સોલાર", "4KW+ હોમ સોલાર", "5KW+ હોમ સોલાર", "કોમર્શિયલ", "ઇન્ડસ્ટ્રિયલ"],
    fMsg: "તમારી જરૂરિયાત જણાવો",
    fSubmit: "ક્વોટ મોકલો",
    copyright: "Barq Solar Energy Service",
  },
  en: {
    address: "Juhapura Char Rasta, Silver Plaza, 1st Floor, Shop No. 5",
    brandSub: "Energy Service",
    nav: { about: "About", services: "Services", why: "Why Us", offer: "Special Offer", contact: "Contact" },
    callBtn: "Call Now",
    heroTag: "Barq Solar Energy Service",
    heroTitle1: "Energy from the Sun,",
    heroTitle2: "Right to Your Home",
    heroDesc: "Affordable 3KW+, 4KW+, 5KW+ home, industrial and commercial solar systems with 25-year warranty and 5 years of free maintenance.",
    heroCta1: "Free Site Visit",
    heroCta2: "🎁 Scratch Coupon Offer",
    stats: [
      { v: "₹78,000", l: "Government Subsidy" },
      { v: "25 Years", l: "Warranty (No Breakage Risk)" },
      { v: "5 Years", l: "Completely Free Service & Maintenance" },
      { v: "10 Years", l: "Replacement Warranty" },
    ],
    expYears: "Years of Experience & Expertise",
    aboutKicker: "🏆 Bumper Benefit",
    aboutTitle: "Cheapest in the Entire Market.",
    aboutDesc: "We install 3KW+, 4KW+, 5KW+ home, industrial and commercial solar systems at below-market prices — with experience, quality and trust.",
    aboutFeats: ["Experience & Knowledge", "Complete Service Under One Roof", "Trusted & Reliable", "Top Quality Standards"],
    brandsLabel: "🔋 Our Trusted Brands:",
    servicesKicker: "⚡ Our Services",
    servicesTitle: "Complete Solar Solutions",
    servicesDesc: "From design to installation and maintenance — everything in one place.",
    services: [
      { t: "Home Solar System", d: "Custom design for homes, lower bills and 25-year warranty." },
      { t: "Industrial Solar System", d: "High-capacity systems for factories and plants." },
      { t: "Commercial Solar System", d: "Power solutions for shops, offices and complexes." },
      { t: "3KW+ / 4KW+ / 5KW+", d: "Right-sized solar plant available for every need." },
      { t: "Installation & Maintenance", d: "Professional installation and 5 years of free maintenance." },
      { t: "Remote Monitoring", d: "Continuous tracking of your system's performance." },
    ],
    qualityKicker: "🔧 Product & Quality",
    qualityTitle: "Best Materials, Long Lifespan",
    qualityList: [
      "Inverter — 10 Year Replacement Warranty",
      "Solar Panel — 25 Year Warranty (No Breakage Risk)",
      "Polycab Cable Used",
      "Strong GI Structure Material",
      "5 Years Completely Free Service & Maintenance",
    ],
    whyKicker: "⭐ Why Choose Barq Solar?",
    whyTitle: "The Right Partner For You",
    why: [
      { t: "Competitive Pricing", d: "Service at fair, below-market prices." },
      { t: "Top Quality", d: "Approximately 25-year system lifespan." },
      { t: "Fast Availability", d: "All major components available in India." },
      { t: "Custom Design", d: "Designed specifically for each customer's needs." },
      { t: "Service Support", d: "Remote monitoring and quick maintenance." },
      { t: "Trusted Service", d: "Fast installation and best service guarantee." },
    ],
    offerTag: "🎁 Special Offer",
    offerTitle: "4 Scratch Coupons — For Every Customer!",
    offerDesc: "The coupon you scratch — that amount is directly deducted from your solar system's price. Plus ₹78,000 government subsidy and below-market pricing.",
    bookNow: "Book Now",
    couponLabel: "Scratch Coupon",
    discount: "Discount",
    goalKicker: "🎯 Our Mission",
    goalTitle: "Clean Energy, Cleaner Future",
    goals: [
      "Provide affordable & pure energy",
      "Positive impact on the environment",
      "Reduce carbon footprint",
      "Deliver greater returns to customers",
    ],
    contactKicker: "📞 Get in Touch",
    contactTitle: "Free Site Visit & Quote",
    contactDesc: "Call today for free advice on the right solar solution for your space.",
    mobile: "Mobile",
    email: "Email",
    office: "Office",
    formTitle: "Get a Free Quote",
    formDesc: "Fill the form and we'll respond shortly.",
    fName: "Your Name",
    fPhone: "Mobile Number",
    fSelect: "Select System",
    fOptions: ["3KW+ Home Solar", "4KW+ Home Solar", "5KW+ Home Solar", "Commercial", "Industrial"],
    fMsg: "Tell us your requirement",
    fSubmit: "Send Quote",
    copyright: "Barq Solar Energy Service",
  },
} as const;

function Index() {
  const [lang, setLang] = useState<Lang>("gu");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = T[lang];
  const toggle = () => setLang((l) => (l === "gu" ? "en" : "gu"));

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="hidden bg-[var(--dark)] text-[var(--dark-foreground)]/80 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-10">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <IconPin /> {t.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <IconPhone /> {PHONE_1} / {PHONE_2}
            </span>
            <span className="opacity-40">|</span>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-[var(--accent)]">
              <IconMail /> {EMAIL}
            </a>
            <span className="opacity-40">|</span>
            <span>www.barqsolar.in</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Barq Solar" className="h-10 w-auto sm:h-12" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#about" className="hover:text-primary">{t.nav.about}</a>
            <a href="#services" className="hover:text-primary">{t.nav.services}</a>
            <a href="#why" className="hover:text-primary">{t.nav.why}</a>
            <a href="#offer" className="hover:text-primary">{t.nav.offer}</a>
            <a href="#contact" className="hover:text-primary">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language toggle */}
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle language"
              className="inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs font-semibold"
            >
              <span
                className={`rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 transition-colors ${
                  lang === "gu" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                ગુ
              </span>
              <span
                className={`rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 transition-colors ${
                  lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}
              >
                EN
              </span>
            </button>
            <a
              href={`tel:${PHONE_1}`}
              className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] hover:opacity-90 sm:inline-flex"
            >
              <IconPhone /> {t.callBtn}
            </a>
            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="grid h-9 w-9 place-items-center rounded-lg border border-border md:hidden"
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
            <div className="flex flex-col gap-1">
              {(["about", "services", "why", "offer", "contact"] as const).map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-secondary"
                >
                  {t.nav[key]}
                </a>
              ))}
              <a
                href={`tel:${PHONE_1}`}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground sm:hidden"
              >
                <IconPhone /> {t.callBtn}
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImg}
            alt="Solar farm at sunset"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--dark)]/90 via-[var(--dark)]/70 to-[var(--dark)]/30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
          <div className="max-w-2xl text-[var(--dark-foreground)]">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {t.heroTag}
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              {t.heroTitle1}
              <br />
              <span className="text-accent">{t.heroTitle2}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--dark-foreground)]/80 md:text-lg">
              {t.heroDesc}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_1}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-[var(--shadow-glow)] hover:opacity-90"
              >
                {t.heroCta1} <IconArrow />
              </a>
              <a
                href="#offer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--dark-foreground)]/30 px-6 py-3 font-semibold text-[var(--dark-foreground)] hover:bg-[var(--dark-foreground)]/10"
              >
                {t.heroCta2}
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip — perfectly half-overlapping the hero */}
        <div className="relative z-20 mx-auto w-full max-w-6xl translate-y-1/2 px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 divide-y divide-border rounded-2xl border border-border bg-background shadow-[var(--shadow-card)] md:grid-cols-4 md:divide-x md:divide-y-0">
            {t.stats.map((s) => (
              <div key={s.l} className="px-4 py-4 text-center sm:px-6 md:py-8">
                <div className="font-display text-xl font-bold text-primary sm:text-2xl md:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer for the bottom half of the stats strip that pokes into this section */}
      <div aria-hidden className="h-24 md:h-32" />

      {/* About */}
      <section id="about" className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img src={homeImg} alt="Solar installation" className="rounded-2xl shadow-[var(--shadow-card)]" />
            <div className="absolute -bottom-6 -right-6 hidden w-56 rounded-2xl bg-primary p-5 text-primary-foreground shadow-[var(--shadow-card)] md:block">
              <div className="font-display text-3xl font-bold">12+</div>
              <div className="text-sm opacity-90">{t.expYears}</div>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.aboutKicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.aboutDesc}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[<IconBolt />, <IconLeaf />, <IconShield />, <IconBattery />].map((icon, idx) => (
                <div key={idx} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    {icon}
                  </span>
                  <div className="font-medium">{t.aboutFeats[idx]}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm">
              <strong className="text-accent-foreground">{t.brandsLabel}</strong>{" "}
              <span className="text-foreground/80">Adani · Waaree · Renews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section id="offer" className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
        <div className="overflow-hidden rounded-2xl bg-[image:var(--gradient-sun)] p-5 sm:rounded-3xl sm:p-8 md:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-[var(--dark)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--dark)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--dark-foreground)]">
                {t.offerTag}
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold md:text-5xl">
                {t.offerTitle}
              </h2>
              <p className="mt-4 max-w-md text-[var(--dark)]/80">
                {t.offerDesc}
              </p>
              <a
                href={`tel:${PHONE_1}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--dark)] px-6 py-3 font-semibold text-[var(--dark-foreground)] hover:opacity-90"
              >
                <IconPhone /> {t.bookNow}
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["₹5,000", "₹10,000", "₹15,000", "₹20,000"].map((c, i) => (
                <div
                  key={c}
                  className="rounded-2xl border-2 border-dashed border-[var(--dark)]/40 bg-background/90 p-6 text-center shadow-[var(--shadow-card)]"
                  style={{ transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg)` }}
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {t.couponLabel}
                  </div>
                  <div className="mt-2 font-display text-3xl font-bold text-primary">{c}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{t.discount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="reveal bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.servicesKicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              {t.servicesTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t.servicesDesc}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[<IconHome />, <IconFactory />, <IconShop />, <IconBolt />, <IconWrench />, <IconMonitor />].map(
              (icon, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    {icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{t.services[idx].t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.services[idx].d}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.qualityKicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              {t.qualityTitle}
            </h2>
            <ul className="mt-6 space-y-4">
              {t.qualityList.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <IconCheck />
                  </span>
                  <span className="text-foreground/90">{q}</span>
                </li>
              ))}
            </ul>
          </div>
          <img src={installerImg} alt="Residential solar" className="rounded-2xl shadow-[var(--shadow-card)]" />
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="reveal bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.whyKicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              {t.whyTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.why.map((w, i) => (
              <div key={w.t} className="rounded-2xl border border-border bg-card p-6">
                <div className="font-display text-3xl font-bold text-accent">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">✔️ {w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Goal */}
      <section className="reveal bg-[var(--dark)] py-20 text-[var(--dark-foreground)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              {t.goalKicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              {t.goalTitle}
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.goals.map((g) => (
              <div
                key={g}
                className="rounded-2xl border border-[var(--dark-foreground)]/10 bg-[var(--dark-foreground)]/5 p-6 text-center backdrop-blur"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
                  <IconLeaf />
                </div>
                <p className="mt-4 text-sm">{g}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="reveal mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t.contactKicker}
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.contactDesc}
            </p>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${PHONE_1}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <IconPhone />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{t.mobile}</div>
                  <div className="font-display text-xl font-bold">{PHONE_1}</div>
                </div>
              </a>
              <a
                href={`tel:${PHONE_2}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <IconPhone />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{t.mobile}</div>
                  <div className="font-display text-xl font-bold">{PHONE_2}</div>
                </div>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                  <IconMail />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{t.email}</div>
                  <div className="font-display text-lg font-bold">{EMAIL}</div>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-foreground">
                  <IconPin />
                </span>
                <div>
                  <div className="text-xs text-muted-foreground">{t.office}</div>
                  <div className="font-medium">
                    {t.address}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
          >
            <h3 className="font-display text-xl font-semibold">{t.formTitle}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t.formDesc}
            </p>
            <div className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder={t.fName}
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                type="tel"
                placeholder={t.fPhone}
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <select className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary">
                <option>{t.fSelect}</option>
                {t.fOptions.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <textarea
                rows={3}
                placeholder={t.fMsg}
                className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90"
              >
                {t.fSubmit} <IconArrow />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-[var(--dark)] py-8 text-[var(--dark-foreground)]/80 sm:py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm sm:px-6 md:flex-row md:text-left lg:px-10">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Barq Solar" className="h-8 w-auto sm:h-10" />
            <span>© {new Date().getFullYear()} {t.copyright}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:gap-5 sm:text-sm">
            <a href={`mailto:${EMAIL}`} className="hover:text-accent">{EMAIL}</a>
            <span className="hidden sm:inline">www.barqsolar.in</span>
            <a href={`tel:${PHONE_1}`} className="hover:text-accent">{PHONE_1}</a>
            <a href={`tel:${PHONE_2}`} className="hover:text-accent">{PHONE_2}</a>
          </div>
        </div>
      </footer>

      {/* Sticky Call Now Button */}
      <a
        href={`tel:${PHONE_1}`}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          background: "var(--gradient-leaf)",
          color: "var(--primary-foreground)",
          boxShadow: "0 8px 25px -5px color-mix(in oklab, var(--primary) 40%, transparent)",
        }}
      >
        <IconPhone /> Call Now
      </a>
    </div>
  );
}

/* ---------- Icons ---------- */
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

function IconPin() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
  );
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
  );
}
function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
  );
}
function IconArrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" {...stroke}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
}
function IconBolt() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>;
}
function IconLeaf() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M21 3c-9 0-16 5-16 13 0 2 1 4 2 5 8 0 14-7 14-16 0-1 0-2 0-2zM5 21c2-7 7-12 14-13" /></svg>;
}
function IconShield() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M12 2 4 5v7c0 5 3.5 9 8 10 4.5-1 8-5 8-10V5l-8-3z" /></svg>;
}
function IconBattery() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M22 10v4M7 10v4M11 10v4" /></svg>;
}
function IconHome() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 11 12 3l9 8v10a1 1 0 0 1-1 1h-5v-7H10v7H4a1 1 0 0 1-1-1V11z" /></svg>;
}
function IconFactory() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 21V10l6 4V10l6 4V7l6 4v10H3z" /><path d="M7 21v-4M12 21v-4M17 21v-4" /></svg>;
}
function IconShop() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M3 9 5 4h14l2 5M3 9v11h18V9M3 9h18M9 14h6" /></svg>;
}
function IconWrench() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><path d="M14.7 6.3a4 4 0 0 0 5 5l-9.4 9.4a2.8 2.8 0 1 1-4-4l9.4-9.4z" /></svg>;
}
function IconMonitor() {
  return <svg width="22" height="22" viewBox="0 0 24 24" {...stroke}><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>;
}
function IconCheck() {
  return <svg width="14" height="14" viewBox="0 0 24 24" {...stroke}><path d="M5 12l5 5L20 7" /></svg>;
}
function IconMenu() {
  return <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M4 6h16M4 12h16M4 18h16" /></svg>;
}
function IconX() {
  return <svg width="20" height="20" viewBox="0 0 24 24" {...stroke}><path d="M18 6 6 18M6 6l12 12" /></svg>;
}

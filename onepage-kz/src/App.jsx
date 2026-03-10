import React, { useRef, useState, useEffect } from "react";

import enzoImg from "./assets/enzo.jpg"
import enzoTiktok from "./assets/media/enzoTiktok.png";
import enzoFacebook from "./assets/media/enzoFacebook.png";
import enzoF4 from "./assets/Actu/enzoF4.jpg";
import enzoCalendar from "./assets/Actu/enzoCalendar.png";
import enzoKZ from "./assets/Actu/enzoKZ.png";
import enzoCircuit from "./assets/Actu/enzoCircuit.png";
import enzoBackground from "./assets/enzoBackground.png";
import enzoCDSport from "./assets/Actu/enzoCDSport.jpg"









/**
 * One-page sponsor sheet (React + Tailwind)
 * - Remplace les valeurs entre crochets [...] par les infos d'Enzo
 * - Si tu n'utilises pas Tailwind, je te fais une version CSS classique
 */
export default function OnePageSponsorKZ() {
  const images = [
  "/images/image_5.jpg",
  "/images/image_7.jpg",
  "/images/image_8.jpg",
  "/images/image_9.jpg",
  "/images/image_10.jpg",
  "/images/image_11.jpg",
  "/images/image_12.jpg",
];
  const data = {
    pilotName: "Enzo Belicot",
    age: 16,
    region: "Nouvelle-Aquitaine",
    category: "KZ (Shifter 125cc)",
    seasonTitle: "Enzo Bélicot ",
    headline: "From karting to Formula 4.New season, new challenges, same mindset 💪,KZ2 battles, full commitment, no limits. Follow my journey and support the grind",
    // Mets ici un lien vers une belle photo (ou laisse vide et ça met un placeholder)
    heroImageUrl: enzoBackground,
news: [
{
  date: "Mars 2026",
  title: "Test Formule 4",
  desc: "Premiers roulages en monoplace avec CD Sport sur le circuit de Lédenon.",
  img: enzoCDSport,
  tag: "F4",
},
  {
    date: "Fév 2026",
    title: "First run en KZ",
    desc: "Découverte du shifter, premières sensations et réglages.",
    img: enzoKZ, // 👈 ta photo locale
    link: "https://www.instagram.com/p/DUgf_sZjQ34/",
    tag: "Instagram",
  },
  {
    date: "Fév 2026",
    title: "Session d'entraînement",
    desc: "Travail des trajectoires et régularité.",
    img: enzoCircuit,
    link: "https://www.instagram.com/belicot_enzo_driver/",
    tag: "Training",
  },
    {
    date: "Fév 2026",
    title: "First Run en F4",
    desc: "Deuxième fois en F4 sur le circuit de Nogaro avec @cd.sport",
    img: enzoF4,
    link: "https://www.instagram.com/belicot_enzo_driver/",
    tag: "Training",
  },
  {
    date: "Mars 2026",
    title: "Prochaine course",
    desc: "Objectif : progression et top 10.",
    img: enzoCalendar,
    link: "#packs",
    tag: "Objectif",
  },
],
gallery: [
  // TikTok (preuve sociale)
  {
    type: "video",
    poster: enzoTiktok,
    caption: "Finale Trophée Atlantique – Magescq",
    date: "24/11/2024",
    sub: "Mention par eyeofvalentin : « jeune talent en pleine ascension »",
    tag: "TikTok",
    link: "https://www.tiktok.com/@eyeofvalentin/video/7440973658052463904?_r=1&_t=ZN-93x0LsyzjGg",
  },

    { src: "/images/image_5.jpg" },
    { src: "/images/image_7.jpg" },
    { src: "/images/image_8.jpg" },
    { src: "/images/image_9.jpg" },
    { src: "/images/image_10.jpg" },
    { src: "/images/image_11.jpg" },
    { src: "/images/image_12.jpg" },
  //https://www.facebook.com/reel/3651126745042247
/* {
    type: "video",
    poster: enzoFacebook,
    caption: "Reaction Time !!!",
    date: "24/11/2024",
    sub: "Mention par Karting Emotion and Passion : « The fatest driver»",
    tag: "Facebook",
    link: "https://www.facebook.com/reel/3651126745042247",
  },*/
  // Tu peux ajouter des images ensuite :
  // { type:"image", src: ..., caption:"...", date:"...", tag:"Photo" }
],


    highlights: [
      { k: "Catégorie", v: "KZ (kart le plus rapide, boîte 6 rapports)" },
      { k: "Programme", v: "8 à 10 courses (régional + quelques nationales)" },
      { k: "Objectifs", v: "Progression KZ • Top 10 réguliers • Podiums régionaux" },
      { k: "Local", v: "Pilote + projet ancrés en Nouvelle-Aquitaine" },
    ],

    results: [
      "Coupe de France Karting 2025 – Val d’Argenton",
      "Coupe de France Karting 2024 – Angerville",
      "Championnat de France 2024 – Muret",
      // Ajoute d’autres lignes si besoin
    ],

    sponsorBenefits: [
      "Logo sur le kart (carénage avant, flancs, arrière) selon le pack",
      "Logo sur la combinaison / supports (selon le pack)",
      "Mentions & contenus sur réseaux sociaux (photos/vidéos week-ends de course)",
      "Association à un projet jeune talent + valeurs performance / rigueur",
      "Possibilité d’invitations en course (selon accord)",
    ],

    packs: [
      {
        name: "Bronze",
        price: "500 €",
        perks: ["Logo petit format sur kart", "Mention réseaux sociaux"],
      },
      {
        name: "Argent",
        price: "1 000 €",
        perks: ["Logo moyen sur kart", "Logo combinaison (selon place)", "Réseaux sociaux"],
      },
      {
        name: "Or",
        price: "2 000 €+",
        perks: ["Logo principal (premium)", "Visibilité maximale paddock", "Contenus réguliers"],
      },
    ],

    // Budget (optionnel)
    budget: {
      total: "12 000 – 15 000 €",
      note:
        "Objectif : financer une partie de la saison via des partenaires locaux et régionaux.",
    },

    contact: {
      contactName: "[Bélicot Bernard/ Manager]",
      phone: "+33771722777",
      email: "b.belicot@gmail.com",
      instagram: "https://www.instagram.com/belicot_enzo_driver/",
    },

    // QR code optionnel (mets une URL et je te ferai une version avec QR si tu veux)
    websiteOrLink: "[Lien dossier / Insta / site]",
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top bar */}
      <div className="w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-red-600" />
            <div className="leading-tight">
              <div className="text-sm text-white/70">Saison 2026</div>
              <div className="font-semibold tracking-tight">{data.category}</div>
            </div>
          </div>
          <div className="text-sm text-white/70">
            {data.pilotName} • {data.age} ans • {data.region}
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          {data.heroImageUrl ? (
            <img
              src={data.heroImageUrl}
              alt="Karting KZ"
              className="h-full w-full object-cover opacity-35"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.8))]" />
          )}
        </div>

<div className="relative mx-auto max-w-[1800px] px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Partenariat sportif • Visibilité locale & régionale
              </div>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                {data.seasonTitle}
              </h1>

              <p className="mt-4 text-lg text-white/80">{data.headline}</p>
              <p
  className="mt-6 text-5xl font-extrabold text-red-500"
  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.08em" }}
>
   🚀THE WORK STARTS NOW.
</p>

              

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-500"
                >
                  Devenir partenaire
                </a>
                <a
                  href="#packs"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  Voir les packs
                </a>
              </div>
                          <div className="mt-6">
                <Card title="Résultats & expérience">
              <ul className="space-y-2 text-sm text-white/80">
                {data.results.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

            </Card>
            </div>
            </div>
            

            {/* Quick facts card */}
<div className="lg:col-span-5 flex lg:justify-end">
  <div className="self-start w-full max-w-[200px] shrink-0 mx-auto lg:mx-0 rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900/80 to-neutral-950/90 p-3 shadow-xl backdrop-blur relative overflow-hidden">

    <div className="absolute -top-10 -left-10 w-28 h-28 bg-red-600/20 blur-2xl rounded-full" />

    {/* IMAGE */}
    <div className="flex justify-center relative">
      <div className="w-32 h-40 rounded-lg border border-white/20 bg-black/20 overflow-hidden">
        <img
          src={enzoImg}
          alt="Enzo Belicot"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
        KZ Driver
      </div>
    </div>

    {/* TITLE */}
    <div className="text-[10px] font-semibold text-white/60 mt-2 text-center tracking-widest uppercase">
      FICHE PILOTE
    </div>

    {/* INFOS */}
    <div className="mt-1 space-y-1.5 text-xs">
      <CompactRow label="Nom" value="Enzo Belicot" />
      <CompactRow label="Âge" value="16 ans" />
      <CompactRow label="Région" value="Nouvelle-Aquitaine" />
      <CompactRow label="Catégorie" value="KZ" />
    </div>

  </div>
</div>





          </div>

          {/* Highlights */}
     {/* Highlights */}
      <HorizontalRail title="Mon actu">
  {data.news.map((n, idx) => (
    <div
      key={idx}
      className="snap-start shrink-0 w-[300px] md:w-[360px] rounded-2xl border border-white/10 bg-neutral-900/60 overflow-hidden hover:border-white/20 transition"
    >
      {/* IMAGE */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={n.img}
          alt={n.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{n.date}</span>
          <span className="px-2 py-1 rounded-full bg-white/10">
            {n.tag}
          </span>
        </div>

        <div className="mt-2 text-base font-semibold">
          {n.title}
        </div>

        <div className="mt-2 text-sm text-white/75">
          {n.desc}
        </div>

        {n.link && (
          <a
            href={n.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-red-400 hover:text-red-300"
          >
            Voir →
          </a>
        )}
      </div>
    </div>
  ))}
</HorizontalRail>

<section className="mx-auto  px-4 md:px-6 py-10 md:py-14">
  <div className="mb-6">
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <span className="h-2 w-2 rounded-full bg-red-500" />
      Mon parcours
    </div>

    <h2 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight">
      Du KZ à la Formule 4
    </h2>

    <p className="mt-3 max-w-3xl text-sm md:text-base text-white/70 leading-relaxed">
      Enzo évolue aujourd’hui en KZ, la catégorie la plus rapide et la plus exigeante du karting.
      Ses premières expériences en Formule 4 montrent aussi une progression vers le sport automobile
      moderne et les monoplaces.
    </p>
  </div>

  <div className="grid gap-6 lg:grid-cols-2">
    {/* KZ */}
    <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight">Le KZ</h3>
        <span className="rounded-full bg-red-600/15 px-3 py-1 text-xs font-semibold text-red-300 border border-red-500/20">
          Karting haut niveau
        </span>
      </div>

      <p className="mt-4 text-sm text-white/75 leading-relaxed">
        Le KZ est la catégorie la plus spectaculaire du karting. Il s’agit d’un kart à boîte de vitesses,
        très rapide, très physique, et réservé à des pilotes déjà expérimentés.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>125cc 2 temps avec boîte 6 rapports</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>Catégorie la plus rapide et la plus technique du karting</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>Exige précision, engagement physique et régularité</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>Très formateur pour progresser vers l’automobile</span>
        </li>
      </ul>
    </div>

    {/* F4 */}
    <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold tracking-tight">La Formule 4</h3>
        <span className="rounded-full bg-red-600/15 px-3 py-1 text-xs font-semibold text-red-300 border border-red-500/20">
          Première étape vers la monoplace
        </span>
      </div>

      <p className="mt-4 text-sm text-white/75 leading-relaxed">
        La Formule 4 est une catégorie de monoplace conçue pour accompagner les jeunes pilotes vers
        le sport automobile. C’est souvent la première grande étape après le karting.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-white/80">
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>Monoplace de formation vers la compétition auto</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>Travail du freinage, de l’aéro et de la gestion de course</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>Passage naturel pour les pilotes issus du karting de haut niveau</span>
        </li>
        <li className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
          <span>Étape clé pour construire un projet sportif plus ambitieux</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<div id="packs" className="mt-10">
 

  <HorizontalRail title="Packs sponsoring">
    {data.packs.map((p) => (
      <div
        key={p.name}
        className="snap-start shrink-0 w-[300px] md:w-[380px] rounded-2xl border border-white/10 bg-black/30 p-6 relative overflow-hidden hover:border-white/20 transition"
      >
        {/* Glow premium */}
        {p.name === "Or" && (
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full" />
        )}
        {p.name === "Argent" && (
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-zinc-200/20 blur-3xl rounded-full" />
        )}
        {p.name === "Bronze" && (
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full" />
        )}

        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <LaurelTier tier={p.name} />
            <div className="text-lg font-bold">{p.name}</div>
          </div>

          <div className="text-base font-bold text-red-500 whitespace-nowrap">
            {p.price}
          </div>
        </div>

        {/* perks */}
        <ul className="mt-4 space-y-2 text-sm text-white/80">
          {p.perks.map((x, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </HorizontalRail>
</div>

<HorizontalRail title="Points clés">
  {data.highlights.map((h, idx) => (
    <RailCard key={idx}>
      <div className="text-xs text-white/60">{h.k}</div>
      <div className="mt-1 text-sm font-semibold">{h.v}</div>
    </RailCard>
  ))}
</HorizontalRail>
<GalleryRail title="Galerie" items={data.gallery} />
 

{/* PACKS FULL WIDTH */}

        </div>
      </section>


      {/* Body */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: results + benefits */}
          <div className="lg:col-span-7">
       

            <div className="mt-6">
              <Card title="Ce que gagne votre entreprise">
                <ul className="space-y-2 text-sm text-white/80">
                  {data.sponsorBenefits.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* Right: packs */}
          
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-center">
          <div className="text-sm font-semibold">
            {data.pilotName} • {data.category} • Saison 2026
          </div>
          <div className="text-xs text-white/60">
            Contact : {data.contact.contactName} — {data.contact.phone} — {data.contact.email}
          </div>
        </div>
      </section>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
      <div className="text-lg font-bold tracking-tight">{title}</div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
      <div className="text-xs text-white/60">{label}</div>
      <div className="text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
function CompactRow({ label, value }) {
  return (
    <div className="flex justify-between items-center border-b border-white/5 pb-1">
      <span className="text-white/50">{label}</span>
      <span className="font-medium text-white">{value}</span>
    </div>
  );
}

function LaurelBadge({ tier = "gold", label }) {
  const cfg = {
    gold: {
      text: label ?? "OR",
      ring: "bg-yellow-500/15 border-yellow-400/30 text-yellow-300",
      stroke: "#fbbf24",
      fill: "rgba(251,191,36,0.22)",
      accent: "rgba(251,191,36,0.35)",
    },
    silver: {
      text: label ?? "ARGENT",
      ring: "bg-zinc-400/15 border-zinc-200/25 text-zinc-200",
      stroke: "#e5e7eb",
      fill: "rgba(229,231,235,0.18)",
      accent: "rgba(229,231,235,0.28)",
    },
    bronze: {
      text: label ?? "BRONZE",
      ring: "bg-orange-500/15 border-orange-400/30 text-orange-300",
      stroke: "#fb923c",
      fill: "rgba(251,146,60,0.20)",
      accent: "rgba(251,146,60,0.32)",
    },
  }[tier];

  return (
    <span
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full border ${cfg.ring} text-xs font-semibold tracking-wide`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Couronne laurier gauche */}
        <path
          d="M9.2 6.2c-2.5.9-4.1 3.2-4.5 6.2-.2 1.8.2 3.6 1.2 5.1"
          fill="none"
          stroke={cfg.stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.95"
        />
        {/* Feuilles gauche */}
        <path
          d="M6.3 9.4c.9-.1 1.7.2 2.3.8-.9.2-1.7.1-2.3-.8Z
             M5.6 12c.9.1 1.6.6 2 1.3-.9 0-1.6-.2-2-1.3Z
             M6 14.9c.8.3 1.4.9 1.6 1.7-.9-.2-1.4-.6-1.6-1.7Z"
          fill={cfg.fill}
          stroke={cfg.stroke}
          strokeWidth="0.6"
          opacity="0.95"
        />

        {/* Couronne laurier droite */}
        <path
          d="M14.8 6.2c2.5.9 4.1 3.2 4.5 6.2.2 1.8-.2 3.6-1.2 5.1"
          fill="none"
          stroke={cfg.stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.95"
        />
        {/* Feuilles droite */}
        <path
          d="M17.7 9.4c-.9-.1-1.7.2-2.3.8.9.2 1.7.1 2.3-.8Z
             M18.4 12c-.9.1-1.6.6-2 1.3.9 0 1.6-.2 2-1.3Z
             M18 14.9c-.8.3-1.4.9-1.6 1.7.9-.2 1.4-.6 1.6-1.7Z"
          fill={cfg.fill}
          stroke={cfg.stroke}
          strokeWidth="0.6"
          opacity="0.95"
        />

        {/* Petit cercle “médaille” */}
        <circle
          cx="12"
          cy="12"
          r="3.2"
          fill={cfg.accent}
          stroke={cfg.stroke}
          strokeWidth="0.9"
        />
        <path
          d="M12 10.2l.55 1.1 1.22.18-.88.86.21 1.21L12 13.1l-1.1.58.21-1.21-.88-.86 1.22-.18.55-1.1Z"
          fill={cfg.stroke}
          opacity="0.95"
        />
      </svg>

      <span>{cfg.text}</span>
    </span>
  );
}
function Laurel({ color = "#fbbf24" }) {
  return (
    <div className="relative w-12 h-8 flex items-center justify-center">

      {/* GAUCHE */}
      <svg
        viewBox="0 0 100 100"
        className="absolute left-0 h-full"
        fill={color}
      >
        <path d="M50 90
                 C20 70, 10 40, 30 10
                 C20 30, 30 60, 50 90 Z" />
      </svg>

      {/* DROITE */}
      <svg
        viewBox="0 0 100 100"
        className="absolute right-0 h-full scale-x-[-1]"
        fill={color}
      >
        <path d="M50 90
                 C20 70, 10 40, 30 10
                 C20 30, 30 60, 50 90 Z" />
      </svg>
    </div>
  );
}
function LaurelTier({ tier }) {
  const color =
    tier === "Or"
      ? "#fbbf24"
      : tier === "Argent"
        ? "#e5e7eb"
        : "#fb923c";

  return <Laurel color={color} />;
}

function HorizontalRail({ title, children }) {
  const ref = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollByPx = (px) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: px, behavior: "smooth" });
  };

  const updateScrollState = () => {
    const el = ref.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

useEffect(() => {
  updateScrollState();

  const t1 = setTimeout(updateScrollState, 0);
  const t2 = setTimeout(updateScrollState, 200); // le temps que les images s'affichent

  const el = ref.current;
  if (!el) return;

  el.addEventListener("scroll", updateScrollState, { passive: true });
  window.addEventListener("resize", updateScrollState);

  return () => {
    clearTimeout(t1);
    clearTimeout(t2);
    el.removeEventListener("scroll", updateScrollState);
    window.removeEventListener("resize", updateScrollState);
  };
}, []);

  return (
    <div className="relative">
      {title && (
        <div className="mb-3 flex items-center justify-between">
          <div className="text-lg font-bold tracking-tight">{title}</div>
          <div className="text-xs text-white/60"></div>
        </div>
      )}

  {canScrollLeft && (
  <button
    type="button"
    onClick={() => scrollByPx(-340)}
    className="flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black hover:bg-white shadow-lg backdrop-blur"
    aria-label="Défiler à gauche"
  >
    <span className="text-xl md:text-2xl leading-none">‹</span>
  </button>
)}

{canScrollRight && (
  <button
    type="button"
    onClick={() => scrollByPx(340)}
    className="flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-black hover:bg-white shadow-lg backdrop-blur"
    aria-label="Défiler à droite"
  >
    <span className="text-xl md:text-2xl leading-none">›</span>
  </button>
)}


      <div
        ref={ref}
        className="rail-scroll flex gap-4 overflow-x-auto pb-2 pr-4 snap-x snap-mandatory scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
      >
        {children}
      </div>

      <style>{`.rail-scroll::-webkit-scrollbar { display: none; }`}</style>
    </div>
  );
}

function RailCard({ children }) {
  return (
    <div className="snap-start shrink-0 w-[280px] md:w-[320px] rounded-2xl border border-white/10 bg-neutral-900/50 p-5">
      {children}
    </div>
  );
}
function GalleryRail({ title = "Galerie", items = [] }) {
  const ref = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const scrollByPx = (px) => ref.current?.scrollBy({ left: px, behavior: "smooth" });

  return (
    <div className="relative mt-10">
      <div className="mb-3 flex items-center justify-between">
        <div className="text-lg font-bold tracking-tight">{title}</div>
        <div className="text-xs text-white/60"></div>
      </div>

      <button
        type="button"
        onClick={() => scrollByPx(-420)}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white text-2xl font-bold hover:bg-black/80 backdrop-blur shadow-xl transition-all hover:scale-110"
        aria-label="Défiler à gauche"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={() => scrollByPx(420)}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white text-2xl font-bold hover:bg-black/80 backdrop-blur shadow-xl transition-all hover:scale-110"
        aria-label="Défiler à droite"
      >
        ›
      </button>

  <div
  ref={ref}
  className={`rail-scroll flex gap-4 pb-2 pr-4 snap-x snap-mandatory scroll-smooth
    ${items.length <= 1 ? "justify-center overflow-hidden" : "overflow-x-auto"}`}
>

        {items.map((it, idx) => (
          <div
            key={idx}
            className="snap-start shrink-0 w-[260px] md:w-[320px] rounded-2xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition"
          >
            {it.type === "video" ? (
              <a
                href={it.link}
                target="_blank"
                rel="noreferrer"
                className="block relative h-44 md:h-52"
                title="Voir la vidéo"
              >
                <img
                  src={it.poster}
                  alt={it.caption ?? "Vidéo"}
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-red-600/90 flex items-center justify-center text-white text-2xl shadow-xl">
                    ▶
                  </div>
                </div>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setOpenIndex(idx)}
                className="block w-full text-left"
              >
                <div className="h-44 md:h-52 w-full overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.alt ?? it.caption ?? "Photo"}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </button>
            )}

            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                {it.date ? (
                  <div className="text-xs text-white/60">{it.date}</div>
                ) : (
                  <div />
                )}
                {it.tag && (
                  <div className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/70">
                    {it.tag}
                  </div>
                )}
              </div>

              {it.caption && <div className="mt-1 text-sm font-semibold">{it.caption}</div>}
              {it.sub && <div className="mt-1 text-xs text-white/60 leading-relaxed">{it.sub}</div>}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .rail-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {openIndex !== null && items[openIndex]?.type === "image" && (
        <Lightbox
          item={items[openIndex]}
          onClose={() => setOpenIndex(null)}
          onPrev={() => {
            const prev = findPrevImageIndex(items, openIndex);
            if (prev !== null) setOpenIndex(prev);
          }}
          onNext={() => {
            const next = findNextImageIndex(items, openIndex);
            if (next !== null) setOpenIndex(next);
          }}
        />
      )}
    </div>
  );
}
function LedenonTrack() {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold tracking-tight">Circuit de Lédenon</h3>
          <p className="text-sm text-white/60">Premiers roulages en Formule 4</p>
        </div>
        <span className="rounded-full bg-red-600/20 px-3 py-1 text-xs text-red-300 border border-red-500/20">
          F4 Test
        </span>
      </div>

      <svg
        viewBox="0 0 800 500"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* fond */}
        <rect x="0" y="0" width="800" height="500" rx="24" fill="#0a0a0a" />

        {/* glow */}
        <path
          d="M170 390
             C120 350, 120 250, 180 200
             C230 155, 300 170, 320 230
             C340 290, 300 350, 340 390
             C380 430, 470 420, 510 360
             C550 300, 520 220, 570 170
             C620 120, 710 145, 710 220
             C710 300, 650 360, 560 380
             C470 400, 330 435, 170 390Z"
          stroke="rgba(239,68,68,0.25)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* circuit principal */}
        <path
          id="ledenon-path"
          d="M170 390
             C120 350, 120 250, 180 200
             C230 155, 300 170, 320 230
             C340 290, 300 350, 340 390
             C380 430, 470 420, 510 360
             C550 300, 520 220, 570 170
             C620 120, 710 145, 710 220
             C710 300, 650 360, 560 380
             C470 400, 330 435, 170 390Z"
          stroke="#e5e7eb"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ligne départ */}
        <line
          x1="255"
          y1="404"
          x2="285"
          y2="368"
          stroke="#ffffff"
          strokeWidth="4"
        />
        <line
          x1="265"
          y1="412"
          x2="295"
          y2="376"
          stroke="#ffffff"
          strokeWidth="4"
        />

        {/* label */}
        <text
          x="40"
          y="55"
          fill="#ffffff"
          fontSize="26"
          fontWeight="700"
          fontFamily="sans-serif"
        >
          LEDENON
        </text>

        {/* point animé */}
        <circle r="10" fill="#ef4444">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#ledenon-path" />
          </animateMotion>
        </circle>

        {/* halo */}
        <circle r="22" fill="rgba(239,68,68,0.18)">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#ledenon-path" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

function findPrevImageIndex(items, from) {
  for (let i = from - 1; i >= 0; i--) if (items[i]?.type === "image") return i;
  return null;
}
function findNextImageIndex(items, from) {
  for (let i = from + 1; i < items.length; i++) if (items[i]?.type === "image") return i;
  return null;
}

function Lightbox({ item, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt ?? item.caption ?? "Photo"}
          className="w-full max-h-[80vh] object-contain rounded-2xl border border-white/10 bg-black"
        />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 -right-3 h-12 w-12 rounded-full bg-black/70 border border-white/10 text-white text-2xl flex items-center justify-center"
          aria-label="Fermer"
        >
          ×
        </button>

        {/* Prev/Next */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 border border-white/10 text-white text-2xl hidden md:flex items-center justify-center"
          aria-label="Précédent"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-black/60 border border-white/10 text-white text-2xl hidden md:flex items-center justify-center"
          aria-label="Suivant"
        >
          ›
        </button>

        {item.caption && (
          <div className="mt-3 text-sm text-white/80 text-center">
            {item.caption}
          </div>
        )}
      </div>
    </div>
  );
}

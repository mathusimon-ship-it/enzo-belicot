import React, { useRef, useState, useEffect } from "react";
import enzoSimulator from "./assets/media/enzoSimulator.mp4";
import enzoSimulatorThumb from "./assets/media/enzoSimulatorThumb.jpg";
import enzoImg from "./assets/enzo.jpg";
import enzoTiktok from "./assets/media/enzoTiktok.png";
import enzoFacebook from "./assets/media/enzoFacebook.png";
import enzoF4 from "./assets/Actu/enzoF4.jpg";
import enzoCalendar from "./assets/Actu/enzoCalendar.png";
import enzoKZ from "./assets/Actu/enzoKZ.png";
import enzoBackground from "./assets/enzoBackground.png";
import enzoCDSport from "./assets/Actu/enzoCDSport.jpg";









/**
 * One-page sponsor sheet (React + Tailwind)
 * - Remplace les valeurs entre crochets [...] par les infos d'Enzo
 * - Si tu n'utilises pas Tailwind, je te fais une version CSS classique
 */
export default function OnePageSponsorKZ() {
  const data = {
    pilotName: "Enzo Bélicot",
    age: 16,
    region: "Pays Basque • Nouvelle-Aquitaine",
    category: "Formule 4 • Objectif Porsche GT Cup",
    seasonTitle: "Enzo Bélicot",
    headline: "Près de 500 candidats, 8 pilotes en piste, un seul vainqueur. Formé à la FFSA Academy puis en Formule 4 (1:21.4 à Lédenon), Enzo vise l’une des huit places — et trace sa route vers les 24 Heures du Mans.",
    // Mets ici un lien vers une belle photo (ou laisse vide et ça met un placeholder)
    heroImageUrl: enzoBackground,
news: [
  {
    date: "Août 2026",
    title: "Préparation sur simulateur",
    desc: "Sessions d’entraînement au centre PSR pour travailler régularité, repères et préparation mentale avant les prochaines échéances.",
    video: enzoSimulator,
    poster: enzoSimulatorThumb,
    tag: "Sim Racing",
  },
  {
    date: "2026",
    title: "1:21.4 à Lédenon",
    desc: "Chrono de référence en Formule 4 avec l’école CD Sport sur le circuit de Lédenon.",
    img: enzoCDSport,
    tag: "F4 • CD Sport",
  },
  {
    date: "2026",
    title: "Cap sur les sélections Porsche",
    desc: "Dossier de candidature prévu le 5 octobre, avant les sélections du 31 octobre au 2 novembre 2026.",
    img: enzoCalendar,
    link: "#porsche",
    tag: "Objectif 2026",
  },
  {
    date: "Fév 2026",
    title: "Roulage Formule 4 à Nogaro",
    desc: "Nouvelle séance de travail en monoplace avec CD Sport : freinage, trajectoires et exploitation de la voiture.",
    img: enzoF4,
    link: "https://www.instagram.com/belicot_enzo_driver/",
    tag: "Training",
  },
  {
    date: "2024",
    title: "3e du Trophée Atlantique",
    desc: "Une saison FFSA Academy conclue par une 3e place au Trophée Atlantique.",
    img: enzoKZ,
    tag: "Palmarès",
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

    { type: "image", src: "/images/image_5.jpg" },
    { type: "image", src: "/images/image_7.jpg" },
    { type: "image", src: "/images/image_8.jpg" },
    { type: "image", src: "/images/image_9.jpg" },
    { type: "image", src: "/images/image_10.jpg" },
    { type: "image", src: "/images/image_11.jpg" },
    { type: "image", src: "/images/image_12.jpg" },
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
      { k: "Championnat de France Junior 2024", v: "15e après seulement 18 mois de pratique" },
      { k: "Kart-Mag • 72 pilotes", v: "+21 places en finale après être reparti dernier" },
      { k: "Performance", v: "Record du tour lors du meeting Kart-Mag" },
      { k: "Formule 4 • Lédenon", v: "1:21.4 avec l’école CD Sport" },
    ],

    results: [
      "2022 — Débuts à Briscous : podiums dès la première saison UFOLEP (2e et 3e)",
      "2023 — FFSA Nouvelle-Aquitaine et sélection nationale FFSA Academy au Mans",
      "2024 — 15e du Championnat de France Junior FFSA Academy",
      "2024 — 3e du Trophée Atlantique",
      "2024 — 3e place collective en Coupe de France avec la Nouvelle-Aquitaine",
      "Kart-Mag — +21 places en finale et record du tour parmi 72 pilotes",
      "2025–2026 — Formation Formule 4 CD Sport, roulages en France et en Espagne",
      "2026 — Chrono de référence : 1:21.4 à Lédenon",
    ],

    timeline: [
      {
        year: "2022",
        title: "Débuts karting — Briscous",
        text: "Découverte à 12 ans. Podiums dès la première saison UFOLEP avec une 2e et une 3e place.",
      },
      {
        year: "2023",
        title: "FFSA Nouvelle-Aquitaine + détection nationale",
        text: "Sélectionné par la FFSA Academy au Mans après une progression rapide face à des pilotes plus expérimentés.",
      },
      {
        year: "2024",
        title: "Championnat de France Junior FFSA Academy",
        text: "15e du championnat après 18 mois de pratique, 3e du Trophée Atlantique et 3e place collective en Coupe de France avec la Nouvelle-Aquitaine.",
      },
      {
        year: "2025–26",
        title: "Passage à la monoplace — Formule 4",
        text: "Entraînements avec CD Sport à Lédenon, Nogaro et sur d’autres circuits de France et d’Espagne. Référence : 1:21.4 à Lédenon.",
      },
      {
        year: "2026",
        title: "Objectif — Sélections Porsche GT Cup",
        text: "Dossier prévu le 5 octobre. Sélections du 31 octobre au 2 novembre 2026.",
      },
    ],

    sponsorBenefits: [
      "Visibilité sur la combinaison, le casque et les supports officiels selon le partenariat",
      "Photos et vidéos dédiées pendant les roulages, les sélections et les week-ends de course",
      "Journées circuit, hospitalité paddock et rencontres avec les équipes ou clients",
      "Interventions d’Enzo en entreprise et contenus dédiés à la marque",
      "Exclusivité sectorielle et naming possibles pour les partenaires majeurs",
    ],

    partnerships: [
      {
        name: "Sélections Porsche",
        price: "10–15 k€",
        kicker: "Échéance immédiate",
        perks: [
          "Équipement pilote FIA et préparation spécifique",
          "Roulages F4, coaching et simulateur",
          "Logistique des sélections du 31 oct. au 2 nov.",
          "Priorité sur le partenariat de la saison 2027",
        ],
      },
      {
        name: "Scénario GT 2027",
        price: "370 k€ min.",
        kicker: "Budget saison complète",
        perks: [
          "Si Enzo remporte les sélections ou est repéré par une écurie",
          "Saison d’avril à octobre 2027",
          "Exposition paddock et média renforcée",
          "Budget partenaires ajustable si une écurie prend en charge une partie de la saison",
        ],
      },
      {
        name: "Scénario F4 2027",
        price: "250 k€ min.",
        kicker: "Budget saison complète",
        perks: [
          "Saison monoplace complète si le scénario GT ne se concrétise pas",
          "Capitaliser sur la formation CD Sport et les chronos 2026",
          "Poursuivre la trajectoire vers le GT et l’endurance",
          "Nouvelle candidature GT possible ensuite",
        ],
      },
    ],

    budget: {
      total: "10 000 – 15 000 €",
      note: "Enveloppe recherchée pour préparer et équiper Enzo pour les sélections Porsche GT Cup 2026.",
    },

    contact: {
      contactName: "Bernard Bélicot • Sixty-Four Racing",
      phone: "+33771722777",
      email: "b.belicot@gmail.com",
      instagram: "https://www.instagram.com/belicot_enzo_driver/",
    },

    websiteOrLink: "https://www.enzobelicot.fr/",
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
              alt="Enzo Bélicot en piste"
              className="h-full w-full object-cover opacity-35"
            />
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.1),rgba(0,0,0,0.8))]" />
          )}
        </div>

<div className="relative mx-auto max-w-[1800px] px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
            

        <div className="mt-5 inline-block">
  <h1
    className="uppercase text-[#f2efea]"
    style={{
      fontFamily: '"Anton", sans-serif',
      fontWeight: 400,
      fontSize: "clamp(56px, 9vw, 104px)",
      lineHeight: 0.95,
      letterSpacing: "0.01em",
    }}
  >
    <span className="block">ENZO</span>
    <span className="block">BÉLICOT</span>
  </h1>

  <div
    className="mt-2 h-3 w-full"
    style={{
      background:
        "repeating-linear-gradient(90deg,#ef0900 0 42px,#f2efea 42px 84px)",
    }}
  />
</div>

              <p className="mt-4 text-lg text-white/80">{data.headline}</p>
              <p
  className="mt-6 text-5xl font-extrabold text-red-500"
  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.08em" }}
>
   OBJECTIF PORSCHE GT CUP.
</p>

              

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 hover:bg-red-500"
                >
                  Devenir partenaire
                </a>
                <a
                  href="#porsche"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  Voir le projet 2026–2027
                </a>
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
          alt="Enzo Bélicot"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute -bottom-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
        F4 Driver
      </div>
    </div>

    {/* TITLE */}
    <div className="text-[10px] font-semibold text-white/60 mt-2 text-center tracking-widest uppercase">
      FICHE PILOTE
    </div>

    {/* INFOS */}
    <div className="mt-1 space-y-1.5 text-xs">
      <CompactRow label="Nom" value="Enzo Bélicot" />
      <CompactRow label="Âge" value="16 ans" />
      <CompactRow label="Région" value="Pays Basque" />
      <CompactRow label="Catégorie" value="Formule 4" />
    </div>

  </div>
</div>





            {/* BANDEAU CHIFFRES CLÉS */}
            <div className="lg:col-span-12 mt-2 grid overflow-hidden border border-white/10 bg-[#151517] sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-red-600 px-6 py-7 md:px-8 md:py-9">
                <div className="text-5xl md:text-6xl font-extrabold leading-none text-[#f2efea]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  8/500
                </div>
                <div className="mt-4 text-base md:text-lg font-bold uppercase leading-snug text-white" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.055em" }}>
                  Huit pilotes retenus sur ~500 candidats — sélections Porsche GT Cup 2026
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-7 sm:border-l sm:border-t-0 md:px-8 md:py-9">
                <div className="text-5xl md:text-6xl font-extrabold leading-none text-[#f2efea]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  15<sup className="text-2xl md:text-3xl">e</sup>
                </div>
                <div className="mt-4 text-base md:text-lg font-bold uppercase leading-snug text-white/80" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.055em" }}>
                  Championnat de France Junior Karting 2024 — après 18 mois de pratique
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-7 sm:border-l lg:border-t-0 md:px-8 md:py-9">
                <div className="text-5xl md:text-6xl font-extrabold leading-none text-[#f2efea]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  +21
                </div>
                <div className="mt-4 text-base md:text-lg font-bold uppercase leading-snug text-white/80" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.055em" }}>
                  Places regagnées en finale, record du tour — meeting Kart-Mag, 72 pilotes
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-7 sm:border-l lg:border-t-0 md:px-8 md:py-9">
                <div className="text-5xl md:text-6xl font-extrabold leading-none text-[#f2efea]" style={{ fontFamily: '"Bebas Neue", sans-serif' }}>
                  1:21.4
                </div>
                <div className="mt-4 text-base md:text-lg font-bold uppercase leading-snug text-white/80" style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.055em" }}>
                  Chrono en Formule 4 — circuit de Lédenon, école CD Sport
                </div>
              </div>
            </div>

          </div>

          {/* SECTEUR 1 — L'HISTOIRE */}
          <section className="mt-12 md:mt-16 overflow-hidden rounded-[28px] bg-[#0b0b0c] text-white">
            <div className="px-5 py-8 md:px-10 md:py-12">
              <div className="flex items-center gap-4">
                <div
                  className="text-[11px] md:text-xs font-extrabold uppercase text-red-600"
                  style={{ letterSpacing: "0.28em" }}
                >
                  Secteur 1 — L'histoire
                </div>
                <div className="h-px w-16 bg-red-600" />
              </div>

              <h2
                className="mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.92]"
                style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.015em" }}
              >
                Forgé ailleurs.<br />
                Révélé en piste.
              </h2>

              <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-white/70">
                Enzo n'a pas grandi dans les paddocks. Sa vitesse s'est construite sur d'autres
                terrains — et c'est ce qui rend son profil unique.
              </p>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="space-y-3">
                  {[
                    {
                      title: "La discipline du danseur",
                      text: "Dix ans au conservatoire et à l'école du Malandain Ballet Biarritz : écoute, concentration, mémorisation — et une résistance à la critique précieuse face aux ingénieurs.",
                    },
                    {
                      title: "Le sang-froid du sauveteur",
                      text: "Sauveteur côtier formé à Biarritz dès 8 ans — à 10 ans, il sauve un homme de la noyade. Ce calme-là ne s'apprend pas en salle de briefing.",
                    },
                    {
                      title: "Un athlète complet",
                      text: "Skieur médaillé d'or à 12 ans, surfeur, judoka, coureur de fond. Brevet d'Initiation Aéronautique 2026 : la trajectoire, sur terre comme dans les airs.",
                    },
                    {
                      title: "Le pilote-ingénieur",
                      text: "En première, il prépare un Bac cyber sécurité avec option aéronautique et vise une école d'ingénieur automobile. Anglais courant. Un profil qui comprend la voiture autant qu'il la pilote.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border-l-4 border-red-600 bg-[#151517] px-5 py-5 md:px-6"
                    >
                      <h3
                        className="text-xl md:text-2xl font-extrabold uppercase leading-tight"
                        style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.035em" }}
                      >
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base leading-relaxed text-white/70">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <figure className="lg:pl-3">
                  <div className="overflow-hidden border border-white/10 bg-black">
                    <img
                      src="/images/enzo_palmares.jpeg"
                      alt="Enzo Bélicot au stand avec son kart FFSA Academy"
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-[11px] md:text-xs font-bold uppercase text-white/50"
                    style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.12em" }}
                  >
                    Au stand — Championnat de France Junior, FFSA Academy
                  </figcaption>
                </figure>
              </div>
            </div>

            <div
              className="h-3"
              style={{
                background:
                  "repeating-linear-gradient(90deg,#ef0900 0 42px,#f2efea 42px 84px)",
              }}
            />
          </section>

          {/* PALMARÈS / RÉSULTATS & EXPÉRIENCE */}
          <PalmaresTimeline />

          {/* Highlights */}
     {/* Highlights */}


<section id="porsche" className="mt-12 md:mt-16 bg-[#0b0b0c] text-white">
  <div className="px-5 py-8 md:px-10 md:py-12">
    <div className="flex items-center gap-4">
      <div
        className="text-[11px] md:text-xs font-extrabold uppercase text-red-600"
        style={{ letterSpacing: "0.28em" }}
      >
        Secteur 3 — Le projet
      </div>
      <div className="h-px w-16 bg-red-600" />
    </div>

    <h2
      className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.9]"
      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.01em" }}
    >
      Huit en piste.<br />
      Un seul vainqueur.
    </h2>

    <p className="mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-white/70">
      Du 31 octobre au 2 novembre 2026, la filière Porsche GT Cup organise ses sélections :
      sur près de 500 candidatures, 8 pilotes seulement prendront la piste — sous les yeux
      des écuries du championnat, qui peuvent soutenir un pilote jusqu'à la prise en charge
      de sa saison. Quel que soit le résultat, Enzo court en 2027 : championnat GT s'il est
      vainqueur ou repéré, saison Formule 4 sinon. Un même cap : Le Mans.
    </p>

    <div className="mt-8 grid md:grid-cols-4 border border-white/10">
      {[
        ["5 OCT. 2026", "CANDIDATURE", "Dossier déposé — palmarès, chronos F4, profil."],
        ["31 OCT. – 2 NOV.", "SÉLECTIONS GT CUP", "8 pilotes en piste, un seul vainqueur."],
        ["2027", "CHAMPIONNAT GT OU F4", "Dans les deux cas, Enzo court en 2027."],
        ["Objectif", "24H DU MANS", "Pilote professionnel — viser la victoire en équipe."],
      ].map((step, i) => (
        <div
          key={step[1]}
          className={`min-h-[150px] p-5 md:p-6 border-white/10 ${
            i > 0 ? "border-t md:border-t-0 md:border-l" : ""
          } ${i === 1 ? "bg-red-600" : i === 2 ? "bg-red-900/80" : "bg-[#1a1a1d]"}`}
        >
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            {step[0]}
          </div>
          <div
            className="mt-2 text-xl md:text-2xl font-extrabold uppercase leading-none"
            style={{ fontFamily: '"Bebas Neue", sans-serif' }}
          >
            {step[1]}
          </div>
          <p className="mt-3 text-xs md:text-sm leading-relaxed text-white/75">{step[2]}</p>
        </div>
      ))}
    </div>

    <figure className="mt-8">
      <div className="overflow-hidden bg-black border border-white/10">
        <img
          src="/images/enzo_leprojet.jpeg"
          alt="Enzo Bélicot en Formule 4"
          className="w-full max-h-[760px] object-cover object-center"
          loading="lazy"
        />
      </div>
      <figcaption
        className="mt-3 text-[10px] md:text-xs font-bold uppercase text-white/45"
        style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.12em" }}
      >
        Formule 4 — École CD Sport
      </figcaption>
    </figure>
  </div>

  <div
    className="mt-14 h-3"
    style={{ background: "repeating-linear-gradient(90deg,#ef0900 0 42px,#f2efea 42px 84px)" }}
  />
</section>






<GalerieEnPiste />

 

{/* PACKS FULL WIDTH */}

        </div>
      </section>


      {/* Body */}
      <section className="mx-auto max-w-[1800px] px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: results + benefits */}
          <div className="lg:col-span-12">
       

            <section className="mt-6 w-full">
              <div className="rounded-[28px] border border-white/10 bg-[#151517] p-6 md:p-8">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <div className="flex items-center gap-4">
                      <div
                        className="text-[11px] md:text-xs font-extrabold uppercase text-red-600"
                        style={{ letterSpacing: "0.28em" }}
                      >
                        Partenaires
                      </div>
                      <div className="h-px w-16 bg-red-600" />
                    </div>

                    <h2
                      className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.92]"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.01em" }}
                    >
                      Montez à bord.
                    </h2>

                    <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-white/70">
                      Associer votre entreprise à Enzo, c'est soutenir un jeune talent du Pays Basque
                      en route vers l'élite — et offrir à votre marque une histoire forte à raconter.
                      Le projet est porté par l'association <strong className="text-white">Sixty-Four Racing</strong> ;
                      premier soutien acquis : le centre simulateur <strong className="text-white">PSR</strong>,
                      présent sur le casque.
                    </p>

                    <ul className="mt-7 space-y-4 text-sm md:text-base text-white/85">
                      {[
                        "Visibilité sur la combinaison, le casque et les supports — en course et sur tous les contenus",
                        "Journées circuit et hospitalité paddock pour vos clients et vos équipes",
                        "Contenus dédiés sur les réseaux sociaux — photos et vidéos des week-ends de course",
                        "Rencontres et interventions d'Enzo au sein de votre entreprise",
                        "Exclusivité sectorielle possible pour les partenaires majeurs",
                      ].map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-1.5 h-3 w-3 shrink-0 bg-red-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-7 text-xs md:text-sm leading-relaxed text-white/45">
                      Cadre contractuel sécurisé via l'association Sixty-Four Racing — contreparties
                      écrites, versements échelonnés possibles.
                    </p>
                  </div>

                  <div className="border border-white/10 bg-[#101011] p-6 md:p-8 self-start">
                    <h3
                      className="text-2xl md:text-3xl font-extrabold uppercase leading-tight"
                      style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
                    >
                      Devenez le partenaire des sélections.
                    </h3>

                    <p className="mt-4 text-sm md:text-base leading-relaxed text-white/70">
                      Décision avant fin septembre 2026 : votre logo sur l'équipement d'Enzo dès le
                      dossier de candidature du 5 octobre — avec priorité sur le partenariat de la
                      saison 2027. Chaque partenariat est construit sur mesure : les montants et
                      contreparties détaillés figurent dans le dossier, remis sur demande.
                    </p>

                    <a
                      href={`mailto:${data.contact.email}?subject=Dossier%20de%20partenariat%20Enzo%20B%C3%A9licot`}
                      className="mt-6 inline-flex items-center justify-center bg-red-600 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white hover:bg-red-500"
                    >
                      Demander le dossier
                    </a>

                    <div className="mt-6 text-sm text-white/60">
                      Bernard Bélicot · 07 71 72 27 77 · b.belicot@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right: packs */}
          
        </div>

      <section className="mt-14 md:mt-20 w-full bg-[#0b0b0c]">
        <div className="px-2 md:px-0">
          <div className="flex items-center gap-4">
            <div
              className="text-[11px] md:text-xs font-extrabold uppercase text-red-600"
              style={{ letterSpacing: "0.28em" }}
            >
              Actualités
            </div>
            <div className="h-px w-16 bg-red-600" />
          </div>

          <h2
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.9]"
            style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.01em" }}
          >
            Dernières sorties.
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                date: "31 OCT. – 2 NOV. 2026",
                title: "SÉLECTIONS PORSCHE GT CUP",
                desc: "~500 candidats, 8 pilotes en piste, un seul vainqueur. Le rendez-vous de la saison.",
              },
              {
                date: "2026",
                title: "CHRONO : 1:21.4 À LÉDENON",
                desc: "Temps de référence signé en Formule 4 avec l’école CD Sport.",
              },
              {
                date: "24/11/2024",
                title: "FINALE TROPHÉE ATLANTIQUE — MAGESCQ",
                desc: "Podium final : 3e du Trophée. « Jeune talent en pleine ascension. »",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="min-h-[190px] border-t-[3px] border-red-600 bg-[#171719] p-6 md:p-7"
              >
                <div
                  className="text-[10px] md:text-xs font-bold uppercase text-white/45"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {item.date}
                </div>
                <h3
                  className="mt-4 text-xl md:text-2xl font-extrabold uppercase leading-tight"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.02em" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-white/65">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-14 h-3"
          style={{
            background:
              "repeating-linear-gradient(90deg,#ef0900 0 42px,#f2efea 42px 84px)",
          }}
        />
      </section>

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

function ProjectStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
      <div className="text-2xl md:text-3xl font-extrabold text-red-500">{value}</div>
      <div className="mt-1 text-sm text-white/65">{label}</div>
    </div>
  );
}

function PalmaresTimeline() {
  const steps = [
    {
      year: "2022",
      title: "Débuts karting — Briscous (64)",
      text: "Découverte à 12 ans. Podiums dès la première saison UFOLEP.",
    },
    {
      year: "2023",
      title: "FFSA Nouvelle-Aquitaine + détection nationale",
      text: "Face à des pilotes bien plus expérimentés. En septembre, sélectionné par la FFSA Academy au Mans parmi l’élite nationale.",
    },
    {
      year: "2024",
      title: "Championnat de France Junior FFSA Academy",
      text: "15e après seulement 18 mois de pratique. 3e du Trophée Atlantique. 3e place collective en Coupe de France avec la Nouvelle-Aquitaine — une première depuis 25 ans.",
    },
    {
      year: "2025–26",
      title: "La monoplace — Formule 4",
      text: "Page karting refermée : cap sur l’automobile. École itinérante CD Sport, circuits de France et d’Espagne. Chrono de référence : 1:21.4 à Lédenon. Entraînement simulateur au centre PSR.",
    },
    {
      year: "2026",
      title: "Objectif — Sélections Porsche GT Cup",
      text: "Dossier déposé le 5 octobre. Sélections du 31 octobre au 2 novembre : ~500 candidats, 8 pilotes en piste, un seul vainqueur — sous les yeux des écuries du championnat.",
      active: true,
    },
  ];

  return (
    <section className="mt-12 md:mt-16 rounded-[28px] bg-[#f2efea] text-neutral-950 overflow-hidden">
      <div className="px-5 py-8 md:px-10 md:py-12">
        <div className="flex items-center gap-4">
          <div
            className="text-[11px] md:text-xs font-extrabold uppercase text-red-600"
            style={{ letterSpacing: "0.28em" }}
          >
            Secteur 2 — Le palmarès
          </div>
          <div className="h-px w-16 bg-red-600" />
        </div>

        <h2
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.95]"
          style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.015em" }}
        >
          Trois ans. Zéro détour.
        </h2>

        <div className="relative mt-10 md:mt-14">
          <div className="absolute left-[10px] md:left-[11px] top-2 bottom-3 w-[2px] bg-neutral-900" />

          <div className="space-y-10 md:space-y-12">
            {steps.map((step) => (
              <div key={step.year} className="relative pl-12 md:pl-14">
                <span
                  className={`absolute left-0 top-1.5 h-5 w-5 ${
                    step.active ? "bg-red-600" : "bg-neutral-950"
                  }`}
                />

                <div
                  className="text-3xl md:text-4xl font-extrabold text-red-600 leading-none"
                  style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                >
                  {step.year}
                </div>

                <h3
                  className="mt-3 text-xl md:text-2xl font-extrabold uppercase leading-tight"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.035em" }}
                >
                  {step.title}
                </h3>

                <p className="mt-2 max-w-4xl text-[15px] md:text-lg leading-relaxed text-neutral-700">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-12 bg-neutral-950 px-5 py-6 md:px-8 md:py-7 text-white">
          <div
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-tight"
            style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.025em" }}
          >
            Dernier → 15e <span className="text-white/70">•</span>{" "}
            <span className="text-red-500">+21 places</span>{" "}
            <span className="text-white/70">•</span> Record du tour
          </div>

          <p className="mt-3 max-w-5xl text-sm md:text-base leading-relaxed text-white/70">
            Meeting international Kart-Mag, 72 pilotes. Sorti de piste en finale et relégué dernier,
            Enzo repart du bac à graviers et signe la remontée du week-end — dépassements comptés à
            voix haute par le speaker.
          </p>
        </div>
      </div>
    </section>
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
function GalerieEnPiste() {
  const photos = [
    {
      src: enzoCDSport,
      alt: "Formule 4 en pit lane",
      label: "Formule 4 — Pit lane",
    },
    {
      src: enzoF4,
      alt: "Enzo dans le cockpit de la Formule 4",
      label: "Concentration — Cockpit F4",
    },
    {
      src: enzoKZ,
      alt: "Enzo en karting à Magescq",
      label: "Karting — Magescq",
    },
    {
      src: "/images/image_5.jpg",
      alt: "Entraînement avec CD Sport",
      label: "Entraînement CD Sport",
    },
  ];

  const videos = [
    {
      label: "Vidéo — Finale Trophée Atlantique (TikTok)",
      href: "https://www.tiktok.com/@eyeofvalentin/video/7440973658052463904?_r=1&_t=ZN-93x0LsyzjGg",
    },
    {
      label: "Vidéo — Moments forts (Facebook)",
      href: "https://www.facebook.com/reel/855080000442826",
    },
  ];

  return (
    <section className="mt-14 md:mt-20 bg-[#0b0b0c] text-white">
      <div className="px-2 md:px-0">
        <div className="flex items-center gap-4">
          <div
            className="text-[11px] md:text-xs font-extrabold uppercase text-red-600"
            style={{ letterSpacing: "0.28em" }}
          >
            Galerie
          </div>
          <div className="h-px w-16 bg-red-600" />
        </div>

        <h2
          className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-[0.9]"
          style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.01em" }}
        >
          En piste.
        </h2>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.label}
              className="group relative aspect-[1.15/1] overflow-hidden border border-white/10 bg-neutral-950"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-4 pb-4 pt-14">
                <div
                  className="text-sm md:text-base font-extrabold uppercase text-white"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.07em" }}
                >
                  {photo.label}
                </div>
              </div>
            </div>
          ))}

          {videos.map((video) => (
            <a
              key={video.label}
              href={video.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex aspect-[1.15/1] items-center justify-center overflow-hidden border border-white/15 bg-[#0d0d0e] hover:border-red-600/60 transition"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,9,0,0.08),transparent_45%)]" />
              <div className="relative flex flex-col items-center px-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl text-white shadow-lg shadow-red-600/20 transition group-hover:scale-110">
                  ▶
                </div>
                <div
                  className="mt-5 text-sm md:text-base font-extrabold uppercase text-white/85"
                  style={{ fontFamily: '"Bebas Neue", sans-serif', letterSpacing: "0.07em" }}
                >
                  {video.label}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
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

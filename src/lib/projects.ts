import { media } from "@/src/lib/media";

export type Project = {
  slug: string;
  title: string;
  category: string;
  subcategory?: string;
  type: string;
  year: number;

  /* ============================================================
     PROJECT MEDIA
     ============================================================ */

  media: {
    thumbnail: string;
    image?: string;
    video?: string;
    gallery?:string[];
  };

  description?: string;
  services?: string[];

  liveUrl?: string;

  aspect: "portrait" | "landscape" | "square";
  size: "small" | "medium" | "large" | "wide";

  objectPosition?: string;
};

export const projects: Project[] = [
  /* ============================================================
     PHOTOGRAPHY
     ============================================================ */

  {
    slug: "chptr-iv-chriselda",
    title: "CHPTR IV - Chriselda",
    category: "Photography",
    subcategory: "Editorial",
    type: "Editorial Photography",
    year: 2026,

    media: {
      thumbnail: media.photography.chriselda01,
      image: media.photography.chriselda01,

      gallery: [
        media.photography.chriselda01,
        media.photography.chriselda02,
      ],
    },

    description:
      "An editorial portrait series exploring character, presence and visual storytelling.",

    services: [
      "Creative Direction",
      "Photography",
      "Retouching",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  {
    slug: "teekay-nokwanda-couple-moment",
    title: "Teekay & Nokwanda Couple Moment",
    category: "Photography",
    subcategory: "Portraits",
    type: "Portrait Photography",
    year: 2025,

    media: {
      thumbnail: media.photography.teekayNokwanda01,
      image: media.photography.teekayNokwanda01,
    },

    description:
      "A portrait moment captured with a natural and intimate visual approach.",

    services: [
      "Photography",
      "Retouching",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  /* ============================================================
     VIDEOGRAPHY
     ============================================================ */

  {
    slug: "long-target-ngimuhle",
    title: "Long Target - Ngimuhle (Cover)",
    subcategory: "Artist Visuals",
    category: "Videography",
    type: "Music Video",
    year: 2026,

    media: {
      thumbnail: media.videography.longTargetNgimuhle.thumbnail,
      video: media.videography.longTargetNgimuhle.video,
    },

    description:
      "A music visual created for Long Target's Ngimuhle, combining performance, atmosphere and cinematic visual storytelling.",

    services: [
      "Direction",
      "Cinematography",
      "Editing",
    ],

    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
  },

  {
    slug: "sellwane",
    title: "Sellwane",
    category: "Videography",
    subcategory: "Editorial",
    type: "Editorial Short Clip",
    year: 2025,

    media: {
      thumbnail: media.videography.sellwaneEditorial.thumbnail,
      video: media.videography.sellwaneEditorial.video,
    },

    description:
      "An editorial visual exploring movement, styling and atmosphere.",

    services: [
      "Direction",
      "Cinematography",
      "Editing",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  /* ============================================================
     GRAPHIC DESIGN & BRAND IDENTITY
     ============================================================ */

  {
    slug: "Vinlaco",
    title: "Vinlaco Brand Identity",
    category: "Graphic Design & Brand Identity",
    subcategory: "Brand Identity",
    type: "Brand Identity",
    year: 2026,

    media: {
      thumbnail: media.graphicDesign.vinlaco,
      image: media.graphicDesign.vinlaco,
    },

    description:
      "A visual identity project developed around a distinct brand direction.",

    services: [
      "Brand Identity",
      "Graphic Design",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  //Patience Khoza x Khanyisile - Indlu Yothando Imizwilili
  {
    slug: "Patience Khoza x Khanyisile - Indlu Yothando Imizwilili",
    title: "Patience Khoza x Khanyisile - Indlu Yothando Imizwilili",
    category: "Graphic Design & Brand Identity",
    subcategory: "Music Cover Art",
    type: "Music Cover Art",
    year: 2026,

    media: {
      thumbnail: media.graphicDesign.patienceKhanyiIndlu,
      image: media.graphicDesign.patienceKhanyiIndlu,
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "square",
    size: "medium",
    objectPosition: "center",
  },
   
  //LONG TARGET FT STRUCTURE - CAMAGU
  {
    slug: "Long Target - Camagu",
    title: "Long Target ft Structure & Tyla Shez - Camagu",
    category: "Graphic Design & Brand Identity",
    subcategory: "Music Cover Art",
    type: "Music Cover Art",
    year: 2025,

    media: {
      thumbnail: media.graphicDesign.longTargetStructure,
      image: media.graphicDesign.longTargetStructure,
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "square",
    size: "medium",
    objectPosition: "center",
  },

  //Long Target - Angizodlala
  {
    slug: "Target - Angizodlala",
    title: "Long Target - Angizodlala",
    category: "Graphic Design & Brand Identity",
    subcategory: "Music Cover Art",
    type: "Music Cover Art",
    year: 2025,

    media: {
      thumbnail: media.graphicDesign.longTargetAngizodlala,
      image: media.graphicDesign.longTargetAngizodlala,
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "square",
    size: "medium",
    objectPosition: "center",
  },

  //Patience Khoza - Bayekele
  {
    slug: "Patience Khoza - Bayekele",
    title: "Patience Khoza - Bayekele",
    category: "Graphic Design & Brand Identity",
    subcategory: "Music Cover Art",
    type: "Music Cover Art",
    year: 2026,

    media: {
      thumbnail: media.graphicDesign.patiencekBayekele,
      image: media.graphicDesign.patiencekBayekele,
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "square",
    size: "medium",
    objectPosition: "center",
  },
  /* ============================================================
     WEB DESIGN & DEVELOPMENT
     ============================================================ */

  {
    slug: "project-name-7",
    title: "Project Name",
    category: "Web Design & Development",
    type: "Website",
    year: 2026,

    media: {
      thumbnail: "/projects/web-01.jpg",
      image: "/projects/web-01.jpg",
    },

    description:
      "A digital experience combining visual design, responsive development and interaction.",

    services: [
      "UI Design",
      "Web Development",
    ],

    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
  },

  {
    slug: "project-name-8",
    title: "Project Name",
    category: "Web Design & Development",
    type: "Digital Experience",
    year: 2026,

    media: {
      thumbnail: "/projects/web-02.jpg",
      image: "/projects/web-02.jpg",
    },

    description:
      "A digital project designed to bring brand identity and functionality together.",

    services: [
      "Web Design",
      "Web Development",
    ],

    aspect: "landscape",
    size: "wide",
    objectPosition: "center",
  },
];

export const CATEGORIES = [
  "Photography",
  "Videography",
  "Graphic Design & Brand Identity",
  "Web Design & Development",
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
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
        media.photography.chriselda03,
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

      gallery:[
        media.photography.teekayNokwanda01,
        media.photography.teekayNokwanda02,
        media.photography.teekayNokwanda03,
      ]
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

  {
    slug: "soga-2024",
    title: "SOGA - 2024 NYE",
    category: "Photography",
    subcategory: "Events",
    type: "Events Photography",
    year: 2024,

    media: {
      thumbnail: media.photography.soga202401,
      image: media.photography.soga202401,

      gallery: [
        media.photography.soga202401,
        media.photography.soga202402,
        media.photography.soga202403,
        media.photography.soga202404,
        media.photography.soga202405,
      ],
    },

    description:
      "An editorial portrait series exploring character, presence and visual storytelling.",

    services: [
      "Creative Direction",
      "Photography",
      "Retouching",
    ],

    aspect: "landscape",
    size: "medium",
    objectPosition: "center",
  },

  {
    slug: "simphiwe-portrait",
    title: "Simphiwe",
    category: "Photography",
    subcategory: "Portraits",
    type: "Portrait Photography",
    year: 2025,

    media: {
      thumbnail: media.photography.simphiwe01,
      image: media.photography.simphiwe01,

      gallery:[
        media.photography.simphiwe01,
        media.photography.simphiwe02,
        media.photography.simphiwe03,
      ]
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
    slug: "vinlaco",
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
    slug: "patience-Khoza-x-Khanyisile-Indlu-Yothando-Imizwilili",
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
    slug: "long-target-camagu",
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
    slug: "target-angizodlala",
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
    slug: "patience-khoza-bayekele",
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

  {
    slug: "chptr-iv-chriselda-cover-design",
    title: "CHPTR IV - Chriselda Cover Design",
    category: "Graphic Design & Brand Identity",
    subcategory: "Editorial Cover",
    type: "Editorial Cover",
    year: 2026,

    media: {
      thumbnail: media.graphicDesign.chptrivChriselda01,
      image: media.graphicDesign.chptrivChriselda01,

      gallery: [
        media.graphicDesign.chptrivChriselda01,
        media.graphicDesign.chptrivChriselda02,
      ],
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  }, 

  {
    slug: "chptr-iv-minehle-cover-design",
    title: "CHPTR IV - Minenhle Cover Design",
    category: "Graphic Design & Brand Identity",
    subcategory: "Editorial Cover",
    type: "Editorial Cover",
    year: 2026,

    media: {
      thumbnail: media.graphicDesign.chptrivMinenhle01,
      image: media.graphicDesign.chptrivMinenhle02,

      gallery: [
        media.graphicDesign.chptrivMinenhle01,
        media.graphicDesign.chptrivMinenhle02,
      ],
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  {
    slug: "chptr-iv-siphelele-cover-design",
    title: "CHPTR IV - Siphelele Cover Design",
    category: "Graphic Design & Brand Identity",
    subcategory: "Editorial Cover",
    type: "Editorial Cover",
    year: 2026,

    media: {
      thumbnail: media.graphicDesign.chptrivSiphelele01,
      image: media.graphicDesign.chptrivSiphelele01,

      gallery: [
        media.graphicDesign.chptrivSiphelele01,
        media.graphicDesign.chptrivSiphelele02,
      ],
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },

  {
    slug: "vinlaco-marketing-design",
    title: "Vinlaco - Marketing Design",
    category: "Graphic Design & Brand Identity",
    subcategory: "Marketing Design",
    type: "Marketing Design",
    year: 2026,

    media: {
      thumbnail: media.graphicDesign.vinlacoHoodiePromo,
      image: media.graphicDesign.vinlacoHoodiePromo,

    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "portrait",
    size: "medium",
    objectPosition: "center",
  },
  
  /* ============================================================
     WEB DESIGN & DEVELOPMENT
     ============================================================ 

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
  },*/
];

export const CATEGORIES = [
  "Photography",
  "Videography",
  "Graphic Design & Brand Identity",
 // "Web Design & Development",
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
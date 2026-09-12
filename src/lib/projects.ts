import { media } from "@/src/lib/media";

export type Project = {
  slug: string;
  title: string;
  category: string;
  type: string;

  /* ============================================================
     PROJECT MEDIA
     ============================================================ */

  media: {
    thumbnail: string;
    image?: string;
    video?: string;
  };

  description?: string;
  services?: string[];

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
    type: "Editorial Photography",

    media: {
      thumbnail: media.photography.chriselda01,
      image: media.photography.chriselda01,
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
    type: "Portrait Photography",

    // Temporary image until the correct R2 asset is uploaded
    media: {
      thumbnail: media.photography.chriselda01,
      image: media.photography.chriselda01,
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
    category: "Videography",
    type: "Music Video",

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
    type: "Editorial Short Clip",

    media: {
      thumbnail:
        "/portfolio/videography/editorial/Sellwane-EditorialWalk.png",
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
    slug: "project-name-5",
    title: "Project Name",
    category: "Graphic Design & Brand Identity",
    type: "Brand Identity",

    media: {
      thumbnail: "/projects/branding-01.jpg",
      image: "/projects/branding-01.jpg",
    },

    description:
      "A visual identity project developed around a distinct brand direction.",

    services: [
      "Brand Identity",
      "Graphic Design",
    ],

    aspect: "square",
    size: "medium",
    objectPosition: "center",
  },

  {
    slug: "project-name-6",
    title: "Project Name",
    category: "Graphic Design & Brand Identity",
    type: "Campaign Design",

    media: {
      thumbnail: "/projects/design-01.jpg",
      image: "/projects/design-01.jpg",
    },

    description:
      "A campaign design project focused on visual communication and consistency.",

    services: [
      "Graphic Design",
      "Campaign Design",
    ],

    aspect: "landscape",
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
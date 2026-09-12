export const R2_BASE_URL =
  "https://pub-803b3b3d93b74c55b52a07f14de345ae.r2.dev";

export function r2Url(path: string) {
  return `${R2_BASE_URL}/${path}`;
}

export const media = {
  /* ============================================================
     PHOTOGRAPHY
     ============================================================ */

  photography: {
    chriselda01: r2Url(
      "portfolio/photography/editorial/Chriselda--BY-01.jpg"
    ),
  },

  /* ============================================================
     VIDEOGRAPHY
     ============================================================ */

  videography: {
    longTargetNgimuhle: {
      video: r2Url(
        "portfolio/videography/artist-visuals/Airic & Nolly M - Ngimuhle (Long Target).mp4"
      ),

      thumbnail: r2Url(
        "portfolio/videography/artist-visuals/Ngimuhle-Long-Target-Thumbnail.jpg"
      ),
    },
  },

  /* ============================================================
     GRAPHIC DESIGN
     ============================================================ */

  graphicDesign: {},

  /* ============================================================
     WEB DEVELOPMENT
     ============================================================ */

  webDevelopment: {},
};
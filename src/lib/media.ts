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
    teekayNokwanda01: r2Url("portfolio/photography/portrait/TK--Nokwanda-01.jpg"),
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
    sellwaneEditorial: {
      video: r2Url("portfolio/videography/editorial/Sellwane Rihanna - BBHMM.mp4"),

      thumbnail: r2Url("portfolio/videography/editorial/Sellwane-editorial-thumbnail.png"),
    }
  },

  /* ============================================================
     GRAPHIC DESIGN
     ============================================================ */

  graphicDesign: {
    vinlaco: r2Url("portfolio/brand-identity/Vinlaco-v2.jpg"),
    patienceKhanyiIndlu: r2Url("portfolio/graphic-design/music-cover-art/Patience-Khoza-x-Khanyisile---Indlu'-yothand'-imizwilili.png"),
    longTargetStructure: r2Url("portfolio/graphic-design/music-cover-art/Long-Target-x-Structure-Musiq.png"),
    longTargetAngizodlala: r2Url("portfolio/graphic-design/music-cover-art/Long-Target---Art-Cover-(Angizodlala).png"),
    patiencekBayekele: r2Url("portfolio/graphic-design/music-cover-art/Patience-Khoza--3.png"),
  },

  /* ============================================================
     WEB DEVELOPMENT
     ============================================================ */

  webDevelopment: {},
};
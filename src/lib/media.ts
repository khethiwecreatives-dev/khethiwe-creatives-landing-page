import { Video } from "lucide-react";

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
    chriselda01: r2Url("portfolio/photography/editorial/Chriselda--BY-01.jpg"),
    chriselda02: r2Url("portfolio/photography/editorial/Chriselda--BY-02.jpg"),
    chriselda03: r2Url("portfolio/photography/editorial/Chriselda--BY-03.jpg"),

    teekayNokwanda01: r2Url("portfolio/photography/portrait/TK--Nokwanda-01.jpg"),
    teekayNokwanda02: r2Url("portfolio/photography/portrait/TK--Nokwanda-02.jpg"),
    teekayNokwanda03: r2Url("portfolio/photography/portrait/TK--Nokwanda-03.jpg"),

    soga202401: r2Url("portfolio/photography/events/Soga01-2024.jpg"),
    soga202402: r2Url("portfolio/photography/events/Soga02-2024.jpg"),
    soga202403: r2Url("portfolio/photography/events/Soga03-2024.jpg"),
    soga202404: r2Url("portfolio/photography/events/Soga04-2024.jpg"),
    soga202405: r2Url("portfolio/photography/events/Soga05-2024.jpg"),

    simphiwe01: r2Url("portfolio/photography/portrait/Simphiwe-01.jpg"),
    simphiwe02: r2Url("portfolio/photography/portrait/Simphiwe-02.jpg"),
    simphiwe03: r2Url("portfolio/photography/portrait/Simphiwe-03.jpg"),

    enhle01: r2Url("portfolio/photography/editorial/Enhle--BG-01.jpg"),
    enhle02: r2Url("portfolio/photography/editorial/Enhle--BG-02.jpg"),
    enhle03: r2Url("portfolio/photography/editorial/Enhle--BG-03.jpg"),

    siphelele01: r2Url("portfolio/photography/editorial/Siphelele--01.jpg"),
    siphelele02: r2Url("portfolio/photography/editorial/Siphelele--02.jpg"),
    siphelele03: r2Url("portfolio/photography/editorial/Siphelele--03.jpg"),
    siphelele04: r2Url("portfolio/photography/editorial/Siphelele--04.jpg"),


    longTargetCamagu01: r2Url("portfolio/photography/artist-photography/longTarget--Camagu01.jpg"),
    longTargetCamagu02: r2Url("portfolio/photography/artist-photography/longTarget--Camagu02.jpg"),
    longTargetCamagu03: r2Url("portfolio/photography/artist-photography/longTarget--Camagu03.jpg"),
    longTargetCamagu04: r2Url("portfolio/photography/artist-photography/longTarget--Camagu04.jpg"),

    patienceKhozaIndlu01: r2Url("portfolio/photography/artist-photography/patienceKhoza--IndluYothando-01.jpg"),
    patienceKhozaIndlu02: r2Url("portfolio/photography/artist-photography/patienceKhoza--IndluYothando-02.jpg"),
    patienceKhozaIndlu03: r2Url("portfolio/photography/artist-photography/patienceKhoza--IndluYothando-03.jpg"),
    patienceKhozaIndlu04: r2Url("portfolio/photography/artist-photography/patienceKhoza--IndluYothando-04.jpg"),
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
    },
    mbaliCinematic: {
      video: r2Url("portfolio/videography/cinematics/Mbali Brightt HD.mp4"),

      thumbnail: r2Url("portfolio/videography/cinematics/mbaliCinematic--thumbnail.png"),
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

    chptrivChriselda01: r2Url("portfolio/graphic-design/editorial-design/CHPTR-IV-BY--Chriselda.png"),
    chptrivChriselda02: r2Url("portfolio/graphic-design/editorial-design/CHPTR-IV-BY--Chriselda-P2.png"),
    chptrivMinenhle01: r2Url("portfolio/graphic-design/editorial-design/Minenhle.png"),
    chptrivMinenhle02: r2Url("portfolio/graphic-design/editorial-design/Minenhle-P2.png"),
    chptrivSiphelele01: r2Url("portfolio/graphic-design/editorial-design/CHPTR-IV---Siphelele.png"),
    chptrivSiphelele02: r2Url("portfolio/graphic-design/editorial-design/CHPTR-IV---Siphelele-P2.png"),

    vinlacoHoodiePromo: r2Url("portfolio/graphic-design/marketing-design/Vinlaco-v2-hoodie.jpg"),
    
  },

  /* ============================================================
     WEB DEVELOPMENT
     ============================================================ */

  webDevelopment: {},
};
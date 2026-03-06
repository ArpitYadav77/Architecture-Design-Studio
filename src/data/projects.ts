// ─── Centralized project data ───────────────────────────────────────────────
// All images are lazily resolved at import time in the consuming component.
// We store the raw asset module paths here and re-export them with slugs so
// every part of the app (home preview, portfolio grid, detail page) shares
// the same source of truth.

export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;           // primary / hero image (cover — shown on card + detail hero)
  gallery: string[];       // detail-page gallery: [interior1, interior2, ...]
  tagline: string;         // short one-liner shown on card hover
  description: string;     // body text on detail page
  area?: string;           // gross floor / site area
  client?: string;
  status?: string;
  isLandmark?: boolean;
}

// ── resolved at module level so images are bundled by Vite ──────────────────

// ── Real project assets (WebP — 91% smaller than PNG originals) ──────────────
// Vidhan Sabha
import vidhanSabhaImg         from "@/assets/Punjab_Haryana_HC.webp";

//Baghat_university
import baghatCover              from "@/assets/bhagat_cover.png";
import baghatInt1               from "@/assets/baghat_interior.png";
import baghatInt2               from "@/assets/bhagat_exterior.png";

// Punjab & Haryana High Court
import punjabHCImg            from "@/assets/Punjab_Haryana_HC.webp";

// Chandigarh square cover (was .webp, only .png exists)
import chandigarhSqCover      from "@/assets/chandigarh_square.png";

// Amritsar Residence
import amritsarCover          from "@/assets/Amritsar.webp";
import amritsarInt1           from "@/assets/Amritsar_cover_Interior.webp";
import amritsarInt2           from "@/assets/Amritsar_Interior.webp";
import amritsarInt3           from "@/assets/Amritsar_Interior2.webp";
import amritsarInt4           from "@/assets/Amritsar_cover2_interior.webp";

// Chandigarh Golf Club
import golfCover              from "@/assets/chandigarh_golf_cover.webp";
import golfTopview            from "@/assets/Chandigarh_Golf_Club_topview.webp";

// Paras Downtown Mall, Zirakpur
import chandigarhSq2          from "@/assets/chandigarh_square2.webp";

// Kasauli Retreat
import kasauliCover           from "@/assets/Kasuli_cover.webp";
import kasauliInterior        from "@/assets/Kasauli_Interior.webp";
import kasauliSideview        from "@/assets/sideview_Kasuli.webp";
import kasauliInt2            from "@/assets/Kasuli_interior2.webp";
import kasauliInt3            from "@/assets/kasuli_interior3.webp";

// University Campus (webp files missing — using closest available png fallbacks)
import universityCover        from "@/assets/Lajpat_Rai_uni1.png";
import universityInt1         from "@/assets/Lajpat_Rai_uni2.png";
import universityInt2         from "@/assets/Lajpat_Rai_uni3.png";
import uniAdmin               from "@/assets/ranbir_uni.png";
import uniBuilding            from "@/assets/ranbir_singh1.png";
import uniBuildingInt         from "@/assets/ranbir_uni_interior.png";
import uniLibrary             from "@/assets/ranbir_university_interior.png";

// Vidhan Sabha extra (webp missing — reusing HC image)
import vidhanSabha2           from "@/assets/Punjab_Haryana_HC.webp";

// Amritsar exterior
import amritsarExterior       from "@/assets/Amrtisar_exterior.webp";

// Galaxy Mall
import ambalaMallCover        from "@/assets/Ambala_Mall.webp";
import ambalaInt1             from "@/assets/Ambala_interior.webp";
import ambalaInt2             from "@/assets/Ambala_interior2.webp";
import ambalaInt3             from "@/assets/Ambala_interior3.webp";

// Clinic (webp files missing — using numbered png fallbacks)
import clinicCover            from "@/assets/clinic1.png";
import clinicInt1             from "@/assets/clinic2.png";
import clinicPassage          from "@/assets/clinic3.png";

// Farmhouse
import farmhouseCover         from "@/assets/farmhouse.webp";
import farmhouseExt1          from "@/assets/farmhouse_exterior.webp";
import farmhouseExt2          from "@/assets/farmhouse_exterior2.webp";
import farmhouseInt1          from "@/assets/farmhouse_interior.webp";
import farmhouseInt2          from "@/assets/farmhouse_interior2.webp";
import farmhouseInt3          from "@/assets/farmhouse_interior3.webp";

// Haryana CM Residence
import haryanaCMInterior      from "@/assets/haryana_CM_interior.webp";

// HP Tower (HP_tower.webp & HP_tower2.webp missing — using png / interior fallback)
import hpTowerCover           from "@/assets/HP_tower.png";
import hpTower2               from "@/assets/HP_interior.webp";
import hpInterior             from "@/assets/HP_interior.webp";

// LandMark Wave (all webp files missing — using Wave_state png as placeholders)
import landmarkWaveCover      from "@/assets/Wave_state1.png";
import landmarkWaveExt        from "@/assets/Wave_state2.png";
import landmarkWaveInt1       from "@/assets/Wave_state3.png";
import landmarkWaveInt2       from "@/assets/Wave_state4.png";

// Mohali Club (webp files missing for cover & interior — using png fallbacks)
import mohaliClubCover        from "@/assets/Mohali_club.png";
import mohaliClubInt1         from "@/assets/mohali_club2.png";
import mohaliInt2             from "@/assets/mohali_interior2.webp";

// Reception
import receptionCover         from "@/assets/Reception_cover.webp";
import receptionInt1          from "@/assets/reception_interior.webp";
import receptionInt2          from "@/assets/reception_interior2.webp";
import receptionInt3          from "@/assets/reception_interior3.webp";

// NV Distilleries
import nvCover                from "@/assets/NV_cover.png";
import nvExterior             from "@/assets/NV_exterior.png";
import nvExterior2            from "@/assets/NV_exterior2.png";
import nvExterior3            from "@/assets/NV_exterior3.png";
import nvInterior             from "@/assets/NV_interior.png";
import nvInterior2            from "@/assets/NV_interior2.png";

// TRIAM Tower
import triamCover             from "@/assets/triam_cover.png";
import triamExterior          from "@/assets/traim_exterior.png";
import triamExterior2         from "@/assets/triam_exterior2.png";

// Kurukshetra University
import kurkushetraExterior    from "@/assets/kurkushetra_exterior.png";
import kurkushetraExterior3   from "@/assets/kurkushetra_exterior3.png";
import kurkushetraExterior4   from "@/assets/kurkushetra_exterior4.png";
import kurkushetraInterior    from "@/assets/kurkushetra_interior.png";
import kurkushetraInterior1   from "@/assets/kurkushetra_interior1.png";
import kurkushetraInterior2   from "@/assets/kurkushetra_interior2.png";
import kurshetraExte          from "@/assets/kurshetra_exte.png";

// RGTPP Residential Township
import rgtppTower             from "@/assets/residence_tower.png";

// ── New image imports (added for new assets) ─────────────────────────────────

// Chandigarh Square series (1–25)
import csCoverPng from "@/assets/chandigarh_square.png";
import csMap from "@/assets/chandigarh_square_map.png";
import cs1 from "@/assets/chandigarh_square1.png";
import cs2 from "@/assets/chandigarh_square2.png";
import cs3 from "@/assets/chandigarh_square3.png";
import cs4 from "@/assets/chandigarh_square4.png";
import cs5 from "@/assets/chandigarh_square5.png";
import cs6 from "@/assets/chandigarh_square6.png";
import cs7 from "@/assets/chandigarh_square7.png";
import cs8 from "@/assets/chandigarh_square8.png";
import cs9 from "@/assets/chandigarh_square9.png";
import cs10 from "@/assets/chandigarh_square10.png";
import cs11 from "@/assets/chandigarh_square11.png";
import cs12 from "@/assets/chandigarh_square12.png";
import cs13 from "@/assets/chandigarh_square13.png";
import cs14 from "@/assets/chandigarh_square14.png";
import cs15 from "@/assets/chandigarh_square15.png";
import cs16 from "@/assets/chandigarh_square16.png";
import cs17 from "@/assets/chandigarh_square17.png";
import cs18 from "@/assets/chandigarh_square18.png";
import cs19 from "@/assets/chandigarh_square19.png";
import cs20 from "@/assets/chandigarh_square20.png";
import cs21 from "@/assets/chandigarh_square21.png";
import cs22 from "@/assets/chandigarh_square22.png";
import cs23 from "@/assets/chandigarh_square23.png";
import cs24 from "@/assets/chandigarh_square24.png";
import cs25 from "@/assets/chandigarh_square25.png";

// Amritsar series (1–8)
import am1 from "@/assets/Amritsar1.png";
import am2 from "@/assets/Amritsar2.png";
import am3 from "@/assets/Amritsar3.png";
import am4 from "@/assets/Amritsar4.png";
import am5 from "@/assets/Amritsar5.png";
import am6 from "@/assets/Amritsar6.png";
import am7 from "@/assets/Amritsar7.png";
import am8 from "@/assets/Amritsar8.png";
import amInt1Png from "@/assets/Amritsar_interior1.png";

// Clinic series (1–9)
import cl1 from "@/assets/clinic1.png";
import cl2 from "@/assets/clinic2.png";
import cl3 from "@/assets/clinic3.png";
import cl4 from "@/assets/clinic4.png";
import cl5 from "@/assets/clinic5.png";
import cl6 from "@/assets/clinic6.png";
import cl7 from "@/assets/clinic7.png";
import cl8 from "@/assets/clinic8.png";
import cl9 from "@/assets/clinic9.png";

// Farmhouse series (1–8)
import fh1 from "@/assets/farmhouse1.png";
import fh2 from "@/assets/farmhouse2.png";
import fh3 from "@/assets/farmhouse3.png";
import fh4 from "@/assets/farmhouse4.png";
import fh5 from "@/assets/farmhouse5.png";
import fh6 from "@/assets/farmhouse6.png";
import fh7 from "@/assets/farmhouse7.png";
import fh8 from "@/assets/farmhouse8.png";

// BPSMV (Bhagat Phool Singh Mahila Vishwavidyalaya)
import bpsmv1 from "@/assets/BPSMV1.png";
import bpsmv2 from "@/assets/BPSMV2.png";
import bpsmv3 from "@/assets/BPSMV3.png";
import bpsmv4 from "@/assets/BPSMV4.png";
import bpsmv5 from "@/assets/BPSMV5.png";
import bpsv from "@/assets/BPSV.png";

// Mohali Club (additional)
import mohaliClubPng from "@/assets/Mohali_club.png";
import mohaliClub2 from "@/assets/mohali_club2.png";

// NV Distilleries (additional)
import nvExterior4 from "@/assets/NV_exterior4.png";

// Kasauli (additional)
import kasuliCollage from "@/assets/kasuli_collage.png";
import kasuliExteriorPng from "@/assets/kasuli_exterior.png";
import kasuliExterior3 from "@/assets/kasuli_exterior3.png";
import kasuliExterior4 from "@/assets/kasuli_exterior4.png";
import kasuliFloor from "@/assets/kasuli_floor.png";
import kasuliInteriorPng from "@/assets/kasuli_interior.png";

// Ranbir Singh / CRSU
import rs1 from "@/assets/ranbir_singh1.png";
import rs2 from "@/assets/ranbir_singh2.png";
import rs3 from "@/assets/ranbir_singh3.png";
import rs4 from "@/assets/ranbir_singh4.png";
import ranbirUni from "@/assets/ranbir_uni.png";
import ranbirUniInt from "@/assets/ranbir_uni_interior.png";
import ranbirUniInt2 from "@/assets/ranbir_university_interior.png";

// Lajpat Rai University
import lru1 from "@/assets/Lajpat_Rai_uni1.png";
import lru2 from "@/assets/Lajpat_Rai_uni2.png";
import lru3 from "@/assets/Lajpat_Rai_uni3.png";

// Haryana CM (additional)
import haryanaCmPng from "@/assets/haryana_cm.png";

// Mahila Bhawan
import mahilaBhawanImg from "@/assets/Mahila_Bhawan.png";

// Galaxy World Mall
import gwm1 from "@/assets/Galaxy_world_Mall1.png";
import gwm2 from "@/assets/Galaxy_world_Mall2.png";
import gwm3 from "@/assets/Galaxy_world_Mall3.png";
import gwm4 from "@/assets/Galaxy_world_Mall4.png";
import gwm5 from "@/assets/Galaxy_world_Mall5.png";
import galaxyMallPng from "@/assets/galaxy_mall.png";

// Hotel Barog Valley
import hbv1 from "@/assets/Hotel_Barog_Valley1.png";
import hbv2 from "@/assets/Hotel_Barog_Valley2.png";
import hbv3 from "@/assets/Hotel_Barog_Valley3.png";
import hbv4 from "@/assets/Hotel_Barog_Valley4.png";

// Devi Lal University
import dlu1 from "@/assets/Devi_Lal_uni1.png";
import dlu2 from "@/assets/Devi_Lal_uni2.png";
import dlu3 from "@/assets/Devi_Lal_uni3.png";

// Farmville
import fv1 from "@/assets/Farmville6.png";
import fv2 from "@/assets/Farmville2.png";
import fv3 from "@/assets/Farmville3.png";
import fv4 from "@/assets/Farmville4.png";
import fv5 from "@/assets/Farmville5.png";
import fv6 from "@/assets/Farmville1.png";

// Wave State
import ws1 from "@/assets/Wave_state1.png";
import ws2 from "@/assets/Wave_state2.png";
import ws3 from "@/assets/Wave_state3.png";
import ws4 from "@/assets/Wave_state4.png";
import ws5 from "@/assets/Wave_state5.png";
import ws6 from "@/assets/Wave_state6.png";
import ws7 from "@/assets/Wave_state7.png";
import ws8 from "@/assets/Wave_state8.png";
import ws9 from "@/assets/Wave_state9.png";
import ws10 from "@/assets/Wave_state10.png";
import ws11 from "@/assets/Wave_state11.png";
import ws12 from "@/assets/Wave_state12.png";

// Dr. Attri Residence
import dar1 from "@/assets/Dr_Attri_Residence3.png";
import dar2 from "@/assets/Dr_Attri_Residence2.png";
import dar3 from "@/assets/Dr_Attri_Residence1.png";
import dar4 from "@/assets/Dr_Attri_Residence4.png";
import dar5 from "@/assets/Dr_Attri_Residence5.png";
import dar6 from "@/assets/Dr_Attri_Residence6.png";
import dar7 from "@/assets/Dr_Attri_Residence7.png";
import dar8 from "@/assets/Dr_Attri_Residence8.png";
import dar9 from "@/assets/Dr_Attri_Residence9.png";
import dar10 from "@/assets/Dr_Attri_Residence10.png";
import dar11 from "@/assets/Dr_Attri_Residence11.png";

// Dr. Harkant Residence
import dhr1 from "@/assets/Dr_Harkant_residence1.png";
import dhr2 from "@/assets/Dr_Harkant_residence2.png";
import dhr3 from "@/assets/Dr_Harkant_residence3.png";
import dhr4 from "@/assets/Dr_Harkant_residence4.png";
import dhr5 from "@/assets/Dr_Harkant_residence5.png";
import dhr6 from "@/assets/Dr_Harkant_residence6.png";
import dhr7 from "@/assets/Dr_Harkant_residence7.png";
import dhr8 from "@/assets/Dr_Harkant_residence8.png";
import dhr9 from "@/assets/Dr_Harkant_residence9.png";
import dhr10 from "@/assets/Dr_Harkant_residence10.png";

// Ecocity
import eco1 from "@/assets/Ecocity3.png";
import eco2 from "@/assets/Ecocity2.png";
import eco3 from "@/assets/Ecocity1.png";
import eco4 from "@/assets/Ecocity4.png";

// Doon
import doonImg from "@/assets/Doon.png";

// Mandir
import mandirImg from "@/assets/Mandir.png";
import mandir2Img from "@/assets/Mandir2.png";

// SBFI
import sbfiImg from "@/assets/SBFI.png";
import sbfi2Img from "@/assets/SBFI2.png";

// Pt. Sundarlal Sharma Open University
import sunderlalImg1 from "@/assets/SUNDERLAL_UNIVERSITY_1.png";
import sunderlalImg2 from "@/assets/SUNDERLAL_UNIVERSITY_2.png";
import sunderlalImg3 from "@/assets/SUNDERLAL_UNIVERSITY_3.png";
import sunderlalImg4 from "@/assets/SUNDERLAL_UNIVERSITY_4.png";

// Wentworth
import wentworthImg from "@/assets/wentWorth.png";
import wentworth2Img from "@/assets/wentworth2.png";

// ── project catalogue ────────────────────────────────────────────────────────
export const allProjects: ProjectData[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // LANDMARK PROJECTS  (isLandmark: true → appear in the Prestige band)
  // ════════════════════════════════════════════════════════════════════════════

  {
    slug: "luvas-hisar",
    title: "Lala Lajpat Rai University of Veterinary & Animal Sciences",
    category: "Education",
    location: "LUVAS, Hisar",
    year: "2010s",
    image: lru3,
    gallery: [universityCover, universityInt1, universityInt2, uniAdmin, uniLibrary, lru1, lru2, lru3],
    tagline: "A campus designed for knowledge, community, and institutional pride.",
    description:
      "This university campus project embodies Bachitter Singh Associates' commitment to institutional design that balances civic grandeur with functional clarity. The master plan organises academic, administrative, and residential precincts along a central pedestrian spine that encourages movement and interaction between faculties.\n\nThe main administration block anchors the campus with a bold facade that draws from regional architectural tradition while embracing contemporary construction methods. Expansive glazing floods lecture halls and seminar rooms with natural light; landscaped courtyards between blocks create sheltered outdoor spaces for study and congregation.\n\nThe campus plan was designed to accommodate future growth phases — each addition reinforcing the existing spatial grammar rather than competing with it.",
    area: "85,000 sq m",
    client: "State University Trust",
    status: "Built",
    isLandmark: true,
  },

  {
    slug: "crsu-jind",
    title: "Chaudhary Ranbir Singh University",
    category: "Education",
    location: "Jind, Haryana",
    year: "2010s",
    image: rs4,
    gallery: [uniBuildingInt, uniBuilding, ranbirUni, ranbirUniInt, ranbirUniInt2, rs1, rs2, rs3],
    tagline: "A faculty building shaped by clarity, light, and academic purpose.",
    description:
      "The University Building is an academic block within the larger campus masterplan, designed to house lecture halls, seminar rooms, and faculty offices in a composition that balances institutional formality with the openness required for contemporary pedagogy.\n\nThe facade is articulated through a disciplined grid of deep-set windows and projecting concrete fins that control western sun while lending the elevation a measured rhythm. At ground level, covered walkways connect the building to the broader campus circulation — ensuring the block participates in the life of the institution rather than standing apart from it.\n\nInterior planning prioritises natural ventilation and daylight, with corridors oriented to channel prevailing breezes and generous floor-to-ceiling heights that keep classrooms comfortable through the Punjab summer.",
    area: "12,000 sq m",
    client: "State University Trust",
    status: "Built",
  },

  {
    slug: "baghat-university",
    title: "Bhagat Phool Singh Mahila VishWavidyalaya",
    category: "Education",
    location: "Punjab, India",
    year: "2000s",
    image: baghatCover,
    gallery: [baghatInt1, baghatInt2, bpsmv1, bpsmv2, bpsmv3, bpsmv4, bpsmv5, bpsv],
    tagline: "An educational campus designed to foster learning, community, and institutional pride.",
    description:
      "Baghat University is a comprehensive educational campus that embodies Bachitter Singh Associates' commitment to institutional design that balances civic grandeur with functional clarity. The master plan organises academic, administrative, and residential precincts along a central pedestrian spine that encourages movement and interaction between faculties.\n\nThe main administration block anchors the campus with a bold facade that draws from regional architectural tradition while embracing contemporary construction methods. Expansive glazing floods lecture halls and seminar rooms with natural light; landscaped courtyards between blocks create sheltered outdoor spaces for study and congregation.\n\nThe campus plan was designed to accommodate future growth phases — each addition reinforcing the existing spatial grammar rather than competing with it.",
    area: "85,000 sq m",
    client: "State University Trust",
    status: "Built",
    isLandmark: true,
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PORTFOLIO PROJECTS  (appear on homepage Selected Works + full portfolio grid)
  // ════════════════════════════════════════════════════════════════════════════

  {
    slug: "hotel-le-meridien-amritsar",
    title: "HOTEL LE MERIDIEN, AMRITSAR",
    category: "Hospitality",
    location: "Amritsar, Punjab",
    year: "2015",
    image: amritsarCover,
    gallery: [amritsarExterior, amritsarInt1, amritsarInt2, amritsarInt3, amritsarInt4, amInt1Png, am1, am2, am3, am4, am5, am6, am7, am8],
    tagline: "A luxury hotel landmark bringing world-class hospitality to the city of the Golden Temple.",
    description:
      "Hotel Le Meridien, Amritsar is a landmark hospitality commission that demanded architecture capable of holding its own against one of the world's most iconic pilgrimage cities.\n\nThe hotel's design draws from the classical layering and material richness of Amritsari architecture — warm stone cladding, deep-set arched openings, and ornamental grilles — while delivering the spatial efficiency and contemporary comfort expected of an international five-star property. The arrival sequence is ceremonial: a long approach drive, a generous porte-cochère, and a double-height lobby whose proportions command immediate attention.\n\nGuest rooms are oriented to maximise natural light while maintaining privacy; the landscaped podium gardens and rooftop pool create a private world of calm within the city's vibrant fabric.",
    area: "22,000 sq m",
    client: "Le Meridien Hotels & Resorts",
    status: "Built",
  },

  {
    slug: "chandigarh-golf-club",
    title: "Chandigarh Golf Club",
    category: "Hospitality",
    location: "Chandigarh, India",
    year: "2015",
    image: golfCover,
    gallery: [golfTopview],
    tagline: "A hospitality landmark set within the lush greens of Chandigarh.",
    description:
      "The Chandigarh Golf Club commission asked for a clubhouse facility that would be equally at home hosting elite tournament events and relaxed weekend rounds. The design responds to the landscape first — the building traces the contour of the 18th fairway, its long horizontal profile reading as a natural extension of the rolling greens rather than an imposition upon them.\n\nFrom the approach drive, the building presents a welcoming forecourt framed by a generous porte-cochère. Inside, the plan organises changing rooms, pro shop, bar, and dining room in a clear sequence from arrival to the panoramic terrace overlooking the course. The terrace — shaded by a deep cantilevered canopy — functions as the social heart of the building: a place to watch play, celebrate results, and simply enjoy the landscape.\n\nMaterial choices reinforce the relationship with the course: warm sandstone, open timber ceilings, and brass fittings that will patina beautifully over time.",
    area: "4,200 sq m",
    client: "Chandigarh Golf Association",
    status: "Built",
  },

  {
    slug: "paras-downtown-mall-zirakpur",
    title: "Chandigarh Square",
    category: "Commercial",
    location: "Zirakpur, Punjab",
    year: "2012",
    image: chandigarhSqCover,
    gallery: [
      chandigarhSq2, csCoverPng, csMap,
      cs1, cs2, cs3, cs4, cs5, cs6, cs7, cs8, cs9, cs10,
      cs11, cs12, cs13, cs14, cs15, cs16, cs17, cs18, cs19, cs20,
      cs21, cs22, cs23, cs24, cs25,
    ],
    tagline: "A landmark commercial address anchoring Zirakpur's rapidly evolving urban corridor.",
    description:
      "Paras Downtown Mall occupies a prominent site along Zirakpur's main arterial — a location that demanded an architectural response conscious of both its civic visibility and its commercial purpose. The building reads as a composed ensemble of volumes: a taller tower element marking the corner, and a lower podium base that mediates between the street and the formal public space of the forecourt.\n\nThe facade system is a refined grid of pre-cast concrete panels and full-height glazing, its proportions calibrated to the scale of the boulevard. At street level, double-height retail frontage animates the public realm; above, office floors are served by efficient plate configurations that maximise natural light penetration.\n\nThe project was delivered on a fast-track programme while maintaining the firm's characteristic attention to material quality and spatial generosity at the building's public interfaces.",
    area: "22,000 sq m",
    client: "Paras Buildtech",
    status: "Built",
  },

  {
    slug: "kasauli-retreat",
    title: "AMAYA, KASAULI",
    category: "Hospitality",
    location: "Kasauli, Himachal Pradesh",
    year: "2020",
    image: kasauliCover,
    gallery: [kasauliSideview, kasauliInterior, kasauliInt2, kasauliInt3, kasuliCollage, kasuliExteriorPng, kasuliExterior3, kasuliExterior4, kasuliFloor, kasuliInteriorPng],
    tagline: "A hillside retreat where architecture defers entirely to the landscape.",
    description:
      "Perched on a cedar-forested ridge above Kasauli, this private retreat was designed around a deceptively simple proposition: build as little as possible, and make every built element count.\n\nThe single-storey plan traces the contour of the hillside, minimising cut and fill while aligning all primary living spaces toward the valley panorama. The structure is a hybrid of local stone masonry — echoing the vernacular buildings of the region — and precision-fabricated steel that enables the generous overhangs and cantilevered decks which are the building's signature moments.\n\nInteriors are spare and material-honest: exposed stone walls, wide-plank timber floors, and a restrained palette of white-washed surfaces that frame rather than compete with the views. The retreat operates off-grid with solar generation, rainwater harvesting, and passive heating strategies appropriate to the mountain climate.",
    area: "320 sq m",
    client: "Private",
    status: "Completed 2020",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // NEW PROJECTS FROM ASSET SCAN
  // ═══════════════════════════════════════════════════════════════════════════

  {
    slug: "landmark-wave",
    title: "LandMark Wave",
    category: "Residential",
    location: "Chandigarh, India",
    year: "2022",
    image: ws1,
    gallery: [ws2, ws3, ws4, ws5, ws6, ws7, ws8, ws9, ws10, ws11, ws12],
    tagline: "A wave-form commercial landmark reshaping Chandigarh's skyline.",
    description:
      "LandMark Wave is a mixed-use commercial development whose undulating facade gives the project its identity — a continuous surface that rises and dips along the street edge, offering shaded retail frontage at grade and a distinctive silhouette against the city sky.\n\nThe building programme stacks retail at the base, flexible commercial floors above, and a public sky terrace at the crown that frames views across Chandigarh's sector grid. The facade's wave geometry is not merely formal — each curve is oriented to deflect the prevailing west sun while channelling cross-ventilation through the common areas.\n\nMaterial choices reinforce the building's civic ambition: polished stone cladding, fritted glass panels, and warm-toned metal fins that shift in colour through the day as light conditions change.",
    area: "32,000 sq m",
    client: "LandMark Group",
    status: "Built",
    isLandmark: true,
  },


  {
    slug: "hp-tower",
    title: "Hewlett-Packard Tower, HP Town",
    category: "Corporate",
    location: "Chandigarh, India",
    year: "2014",
    image: hpTowerCover,
    gallery: [hpTower2, hpInterior],
    tagline: "Corporate presence and civic identity in one composed tower form.",
    description:
      "HP Tower was designed to serve as a flagship corporate address — a building that announces institutional permanence while offering the spatial flexibility demanded by a major technology and services organisation.\n\nThe tower's profile is defined by its expressed structural frame and the rhythm of its facade panels, which alternate solid and glazed bays to control solar gain on the east and west orientations. The base podium is carved to create a generous covered public plaza — a civic gesture that connects the building to the life of the surrounding precinct.\n\nInternally, floor plates are column-free over large spans, enabling efficient open-plan working arrangements. A shared conference centre and visitor reception occupy the most prominent position in the building — at the junction of the podium and the tower — where views and natural light are maximised.",
    area: "18,500 sq m",
    client: "HP India",
    status: "Built",
  },

  {
    slug: "triam-tower",
    title: "TRIAM TOWER, I-42, SECTOR 83, ALPHA",
    category: "Corporate",
    location: "Sector 83, Alpha, India",
    year: "2020",
    image: triamCover,
    gallery: [triamExterior, triamExterior2],
    tagline: "A bold corporate tower designed for presence and performance.",
    description:
      "TRIAM TOWER at I-42, Sector 83, Alpha is a corporate office development conceived to project institutional confidence while delivering efficient, flexible floor plates suited to modern commercial tenants.\n\nThe tower's facade is a disciplined composition of glass and pre-cast concrete panels that modulate light and scale across the elevation. At street level, a double-height lobby with stone finishes and curated lighting establishes the building's identity from the moment of arrival.\n\nThe project demonstrates Bachitter Singh Associates' ability to deliver corporate architecture that balances civic presence with the pragmatic demands of commercial real estate.",
    area: "15,000 sq m",
    client: "Private Developer",
    status: "Built",
  },

  {
    slug: "nv-distilleries",
    title: "NV DISTILLERIES & BREWERIES PVT. LTD",
    category: "Corporate",
    location: "India",
    year: "2018",
    image: nvCover,
    gallery: [nvExterior, nvExterior2, nvExterior3, nvExterior4, nvInterior, nvInterior2, mandirImg, mandir2Img],
    tagline: "A purpose-built corporate facility for one of India's leading beverage enterprises.",
    description:
      "The NV Distilleries & Breweries corporate facility was designed to house the administrative headquarters and visitor experience centre of one of India's prominent beverage manufacturers.\n\nThe building's plan separates operational and representational functions across two distinct wings connected by a central reception atrium that serves as the building's social and circulatory heart. The facade employs a restrained palette of stone cladding and tinted glazing, projecting corporate sobriety while admitting generous natural light to the office floors.\n\nLandscaping plays an integral role — approach drives, forecourts, and perimeter planting were designed as part of the architectural composition rather than as afterthoughts, ensuring the building reads as a coherent campus from every approach.",
    area: "10,000 sq m",
    client: "NV Distilleries & Breweries Pvt. Ltd",
    status: "Built",
  },

  {
    slug: "mohali-club",
    title: "CLUBHOUSE TDI MOHALI",
    category: "Hospitality",
    location: "Mohali, Punjab",
    year: "2017",
    image: mohaliClubCover,
    gallery: [mohaliClubInt1, mohaliInt2, mohaliClubPng, mohaliClub2],
    tagline: "A members' club conceived for leisure, community, and refined living.",
    description:
      "The Mohali Club is a private members' facility serving one of Punjab's fastest-growing residential and commercial precincts. The brief called for a clubhouse that would feel genuinely exclusive without being unwelcoming — a place where members could entertain guests, conduct informal business, or simply relax in surroundings of understated quality.\n\nThe building is organised around a landscaped internal courtyard that acts as a cooling device, a visual amenity, and a spatial anchor. Dining, bar, and lounge spaces wrap this courtyard on three sides, each zone with a distinct character but unified by a consistent material language of terracotta tile, teak joinery, and painted plaster.\n\nA sports wing to the rear houses a gymnasium, squash courts, and a 25-metre pool. The connection between social and sports wings was designed as a sheltered walkway lined with planting — a transition that reinforces the sense of moving through different parts of a composed estate rather than a single building.",
    area: "6,800 sq m",
    client: "Mohali Club Society",
    status: "Built",
  },

  {
    slug: "farmhouse",
    title: "Farmhouse",
    category: "Residential",
    location: "Punjab, India",
    year: "2019",
    image: farmhouseCover,
    gallery: [farmhouseExt1, farmhouseExt2, farmhouseInt1, farmhouseInt2, farmhouseInt3, fh1, fh2, fh3, fh4, fh5, fh6, fh7, fh8],
    tagline: "A countryside residence where open land and refined living meet.",
    description:
      "This private farmhouse occupies a generous rural landholding outside Chandigarh, its architecture conceived as a series of interlocking volumes that frame views across open fields while maintaining a composed, legible facade from the approach drive.\n\nThe plan separates the house into a formal wing for entertaining and guest accommodation and a private family wing oriented toward the garden and the evening sun. Both wings are connected by a covered verandah that runs the full length of the building — a threshold between interior and landscape that is the most-used space in the house.\n\nConstruction is in load-bearing brick with concrete-framed openings, the external walls finished in a warm ochre plaster that references the agricultural buildings of the Punjab plains. Interior finishes were selected for their material warmth and practicality: stone floors throughout, hand-painted tiles in the kitchen and bathrooms, and bespoke joinery crafted by local workshops.",
    area: "950 sq m",
    client: "Private Family",
    status: "Completed 2019",
  },

  {
    slug: "clinic",
    title: "Clinic",
    category: "Interior",
    location: "Chandigarh, India",
    year: "2021",
    image: clinicCover,
    gallery: [clinicInt1, clinicPassage, cl1, cl2, cl3, cl4, cl5, cl6, cl7, cl8, cl9],
    tagline: "A healthcare interior that prioritises calm, clarity, and patient dignity.",
    description:
      "Designing a medical clinic requires resolving a fundamental tension: the space must be efficient and hygienic, yet calming and humane. This project in Chandigarh addressed that challenge through material restraint, careful spatial sequencing, and a palette chosen to reduce clinical anxiety without sacrificing cleanliness or function.\n\nThe entry and waiting area is deliberately airy, with high ceilings, warm-toned wall panels, and indirect lighting that avoids the harshness of conventional medical environments. Consultation rooms are compact but precisely planned — each with a window, good natural light, and storage that keeps clinical equipment out of sight when not in use.\n\nThe circulation spine — a wide, gently lit passage — connects all zones of the clinic while providing clear wayfinding. Materials throughout are selected for ease of cleaning and long-term durability: porcelain floor tiles, moisture-resistant wall finishes, and solid-core joinery.",
    area: "380 sq m",
    client: "Private Medical Practice",
    status: "Completed 2021",
  },

  {
    slug: "reception",
    title: "Reception",
    category: "Interior",
    location: "India",
    year: "2023",
    image: receptionCover,
    gallery: [receptionInt1, receptionInt2, receptionInt3],
    tagline: "A reception space designed to welcome with elegance and purpose.",
    description:
      "This contemporary reception interior was conceived around a single design intent: to make an instant, lasting impression on every visitor who enters. The space balances a refined material palette with a layout that guides people naturally from arrival to their destination.\n\nThe reception desk is positioned as the visual anchor — a sculpted, backlit centrepiece that communicates identity and authority. Behind it, a textured feature wall provides depth and warmth while concealing service zones from public view. Seating areas are arranged to feel generous and unhurried, with carefully chosen upholstery and ambient lighting that softens the formality of the setting.\n\nFloor finishes transition from polished stone at the entry threshold to warmer material zones in the waiting area, reinforcing the spatial hierarchy of the plan. Every detail — joinery profiles, light fitting selections, and the placement of greenery — was coordinated to deliver a coherent, high-quality environment appropriate to the client's brand and culture.",
    area: "220 sq m",
    client: "Private",
    status: "Completed 2023",
  },

  {
    slug: "haryana-cm-secretariat-interior",
    title: "Haryana Chief Minister Secretariat Building",
    category: "Interior",
    location: "Haryana, India",
    year: "2005",
    image: haryanaCMInterior,
    gallery: [],
    tagline: "An interior of quiet authority befitting the office of the Chief Minister.",
    description:
      "The interior of the Haryana Chief Minister Secretariat Building was designed to project institutional authority while maintaining the warmth and functionality required of a working government building.\n\nPublic-facing areas — the reception hall, conference rooms, and ministerial lobbies — employ a restrained palette of marble, polished plaster, and solid timber that signals quality without ostentation. Private offices and working areas are planned for efficiency and natural light, with bespoke joinery and carefully selected furnishings that reinforce the building's character of measured dignity.\n\nThe project demonstrates the firm's ability to translate civic purpose into interior spaces that serve both protocol and daily governance.",
    area: "2,400 sq m",
    client: "Government of Haryana",
    status: "Built",
  },


  {
    slug: "kurukshetra-university",
    title: "KURUKSHETRA UNIVERSITY, KURUKSHETRA",
    category: "Education",
    location: "Kurukshetra, Haryana",
    year: "2010s",
    image: kurkushetraExterior,
    gallery: [kurshetraExte, kurkushetraExterior3, kurkushetraExterior4, kurkushetraInterior, kurkushetraInterior1, kurkushetraInterior2],
    tagline: "A university campus rooted in academic tradition and contemporary design.",
    description:
      "Kurukshetra University is a comprehensive academic campus that brings together teaching, research, and residential facilities within a masterplan conceived for clarity, connectivity, and growth.\n\nAcademic blocks are arranged along a landscaped central axis that serves as the campus's primary social and circulation spine. Each building is oriented to maximise natural light and cross-ventilation while presenting a composed, institutional facade to the public realm.\n\nThe material palette — exposed concrete frames, brick infill panels, and stone base courses — reflects the firm's commitment to robust, maintenance-friendly construction suited to the demands of a public university.",
    area: "60,000 sq m",
    client: "Kurukshetra University",
    status: "Built",
  },

  {
    slug: "pt-sundarlal-sharma-university",
    title: "PT. SUNDARLAL SHARMA (OPEN) UNIVERSITY, CHHATTISGARH",
    category: "Education",
    location: "Chhattisgarh, India",
    year: "2010s",
    image: sunderlalImg1,
    gallery: [sunderlalImg2, sunderlalImg3, sunderlalImg4],
    tagline: "An open university campus designed for accessible higher education.",
    description:
      "Pt. Sundarlal Sharma (Open) University in Chhattisgarh is an educational campus designed to deliver flexible, accessible higher education to students across the state.\n\nThe masterplan organises academic, examination, and administrative functions around a central courtyard that provides both a gathering space and a climatic buffer against the region's hot summers. Buildings are designed with deep overhangs, shaded verandahs, and cross-ventilated corridors that reduce dependence on mechanical cooling.\n\nThe architecture expresses the university's public mission through generous entrance lobbies, clear wayfinding, and a material language of fair-faced brick and concrete that communicates institutional permanence without unnecessary embellishment.",
    area: "35,000 sq m",
    client: "Pt. Sundarlal Sharma Open University",
    status: "Built",
  },

  {
    slug: "rgtpp-residential-township-hisar",
    title: "Residential Township for RGTPP, Hisar",
    category: "Misc",
    location: "Hisar, Haryana",
    year: "2015",
    image: rgtppTower,
    gallery: [],
    tagline: "A planned residential township serving the Rajiv Gandhi Thermal Power Plant community.",
    description:
      "The Residential Township for RGTPP (Rajiv Gandhi Thermal Power Plant) at Hisar is a planned community designed to provide quality housing, civic amenities, and shared infrastructure for plant employees and their families.\n\nThe township plan organises residential units of varying typologies — from senior officer bungalows to multi-storey staff quarters — along a clear hierarchy of roads and pedestrian green corridors. Community facilities including a school, health centre, recreational club, and markets are placed at the heart of the plan to ensure equitable access from all residential zones.\n\nThe architecture employs a consistent palette of brick and concrete with shaded verandahs and courtyard gardens suited to Haryana's climate, creating a cohesive neighbourhood character across a large and varied programme.",
    area: "48,000 sq m",
    client: "HPGCL / RGTPP",
    status: "Built",
  },

  {
    slug: "haryana-cm-residence",
    title: "Haryana CM Residence",
    category: "Civic & Legislative",
    location: "Haryana, India",
    year: "2005",
    image: haryanaCmPng,
    gallery: [haryanaCMInterior],
    tagline: "An official residence that balances state protocol with domestic grace.",
    description:
      "The Chief Minister's official residence in Haryana demanded an architecture that could hold two competing requirements simultaneously: the formal weight appropriate to a head-of-government residence, and the domestic comfort and privacy expected of a private home.\n\nThe design achieves this through clear zoning — public reception rooms occupy the formal front of the building, while the private residential quarters are set behind a landscaped court that screens them from the arrival sequence. The interior of the formal wing is designed for state occasions: high ceilings, generous circulation, and a material palette of marble, polished plaster, and solid timber that signals institutional quality without resorting to ostentation.\n\nEvery detail — from the pattern of the stone floors to the design of the window hardware — was treated with the same care the firm applies to its major public commissions.",
    area: "2,400 sq m",
    client: "Government of Haryana",
    status: "Built",
    isLandmark: true,
  },

  // ════════════════════════════════════════════════════════════════════════════
  // NEW PROJECTS (added from new asset images)
  // ════════════════════════════════════════════════════════════════════════════

  {
    slug: "galaxy-world-mall",
    title: "Galaxy World Mall",
    category: "Commercial",
    location: "India",
    year: "2020",
    image: galaxyMallPng,
    gallery: [gwm1, gwm2, gwm3, gwm4, gwm5],
    tagline: "A world-class retail and entertainment destination.",
    description:
      "Galaxy World Mall is a large-scale commercial development conceived as a vibrant retail and entertainment destination. The building's design balances civic presence with commercial efficiency, delivering generous floor plates organised around a central atrium that floods the interior with natural light.\n\nThe facade composition employs a layered system of glass and stone that modulates scale and light across the elevation, creating an inviting street-level interface while projecting a confident urban identity at the skyline. Interior planning prioritises intuitive wayfinding, high-quality finishes, and spatial generosity at all public interfaces.",
    area: "40,000 sq m",
    client: "Galaxy Group",
    status: "Built",
  },

  {
    slug: "hotel-barog-valley",
    title: "Hotel Barog Valley",
    category: "Hospitality",
    location: "Barog, Himachal Pradesh",
    year: "2021",
    image: hbv4,
    gallery: [hbv1, hbv2, hbv3],
    tagline: "A valley retreat where architecture and landscape merge seamlessly.",
    description:
      "Hotel Barog Valley is a hospitality project nestled in the scenic hills of Barog, Himachal Pradesh. The design responds to the dramatic topography by stepping the building down the slope, ensuring every guest room captures panoramic valley views.\n\nThe material palette draws from the local vernacular — stone masonry walls, timber-framed windows, and slate roofing — while providing the spatial efficiency and modern comfort expected of a contemporary hotel. Public spaces are oriented towards the valley, with generous terraces and lounges that blur the boundary between built form and landscape.",
    area: "5,500 sq m",
    client: "Private",
    status: "Built",
  },


  {
    slug: "farmville",
    title: "Farmville",
    category: "Residential",
    location: "Punjab, India",
    year: "2022",
    image: fv5,
    gallery: [fv1, fv3, fv4, fv2, fv6],
    tagline: "A rural residential estate blending countryside charm with modern living.",
    description:
      "Farmville is a residential estate that reimagines rural living through a contemporary architectural lens. The project organises a series of dwelling units within a lush, landscaped setting that preserves the openness and tranquillity of the agricultural landscape.\n\nEach residence is designed to frame views across open fields while maintaining privacy and a composed facade from the shared estate roads. Construction employs local materials — brick, stone, and timber — finished to a standard that balances rural authenticity with the expectations of modern domestic comfort.",
    area: "2,800 sq m",
    client: "Private",
    status: "Built",
  },


  {
    slug: "dr-attri-residence",
    title: "Dr. Attri Residence",
    category: "Residential",
    location: "India",
    year: "2022",
    image: dar3,
    gallery: [dar1, dar2, dar4, dar5, dar6, dar7, dar8, dar9, dar10, dar11],
    tagline: "A private residence crafted with precision, warmth, and spatial generosity.",
    description:
      "Dr. Attri Residence is a bespoke private home designed around the client's lifestyle and the site's orientation. The plan separates formal entertaining spaces from the private family wing, connected by a central gallery that serves as both circulation spine and display space.\n\nInteriors are detailed with a restrained palette of natural stone, warm timber, and carefully selected furnishings that create an atmosphere of comfortable refinement. Every room is planned to receive natural light and ventilation, with generous floor-to-ceiling heights that lend the house a sense of calm spaciousness.",
    area: "1,200 sq m",
    client: "Private",
    status: "Completed 2022",
  },

  {
    slug: "dr-harkant-residence",
    title: "Dr. Harkant Residence",
    category: "Residential",
    location: "India",
    year: "2021",
    image: dhr2,
    gallery: [dhr1, dhr3, dhr4, dhr5, dhr6, dhr7, dhr8, dhr9, dhr10],
    tagline: "A contemporary residence balancing openness with intimate domestic scale.",
    description:
      "Dr. Harkant Residence is a private home conceived as a series of interlocking volumes that create a varied sequence of spaces — from the generous double-height living room to the sheltered garden courtyard that anchors the plan.\n\nThe facade is articulated through a disciplined grid of openings and recessed balconies that control sun exposure while lending the elevation a measured rhythm. Interior finishes prioritise material warmth — polished stone floors, oak joinery, and plaster walls in a palette of neutral tones that let the architecture and the furnishings speak for themselves.",
    area: "1,000 sq m",
    client: "Private",
    status: "Completed 2021",
  },

  {
    slug: "ecocity",
    title: "Ecocity",
    category: "Residential",
    location: "Punjab, India",
    year: "2019",
    image: eco3,
    gallery: [eco1, eco2, eco4],
    tagline: "A sustainable urban development integrating ecology and commerce.",
    description:
      "Ecocity is a planned urban development that integrates commercial, retail, and green infrastructure within a masterplan conceived for environmental responsibility and civic quality.\n\nThe project employs passive design strategies — optimal building orientation, generous landscaping, and natural ventilation corridors — to reduce energy consumption while creating a comfortable, pedestrian-friendly environment. The architecture balances commercial efficiency with a commitment to public amenity, delivering a development that serves its community as much as its tenants.",
    area: "30,000 sq m",
    client: "Ecocity Developers",
    status: "Built",
  },

  {
    slug: "doon",
    title: "Doon",
    category: "Residential",
    location: "Dehradun, Uttarakhand",
    year: "2020",
    image: doonImg,
    gallery: [],
    tagline: "A hill-town residence designed for quiet living amidst the Doon Valley.",
    description:
      "This residential project in the Doon Valley responds to the region's temperate climate and lush landscape with an architecture that is restrained, material-honest, and deeply connected to its site.\n\nThe building is oriented to capture the best views while minimising its footprint on the sloped terrain. Local stone and timber feature prominently in both the structure and the finishes, grounding the building in its context.",
    area: "600 sq m",
    client: "Private",
    status: "Built",
  },



  {
    slug: "sbfi",
    title: "SBFI",
    category: "Corporate",
    location: "India",
    year: "2019",
    image: sbfiImg,
    gallery: [sbfi2Img],
    tagline: "A corporate facility designed for functional efficiency and institutional presence.",
    description:
      "The SBFI project is a corporate facility designed to house administrative and operational functions within a building that projects institutional confidence and delivers efficient, flexible floor plates.\n\nThe facade is a composed grid of glass and solid panels that modulates light and scale. At street level, a generous lobby with quality finishes establishes the building's identity from the moment of arrival. Internal planning prioritises natural light, clear circulation, and adaptable working environments.",
    area: "8,000 sq m",
    client: "SBFI",
    status: "Built",
  },

  {
    slug: "wentworth",
    title: "Wentworth",
    category: "Residential",
    location: "India",
    year: "2021",
    image: wentworthImg,
    gallery: [wentworth2Img],
    tagline: "A premium residential project defined by refined design and generous proportions.",
    description:
      "Wentworth is a premium residential project that brings together thoughtful planning, quality materials, and generous proportions to create homes of lasting value.\n\nThe architecture balances a composed, formal exterior with warm, light-filled interiors planned around the rhythms of contemporary family life. Careful attention to detail — from the joinery profiles to the landscaping — ensures a cohesive living environment that rewards daily experience.",
    area: "1,800 sq m",
    client: "Private",
    status: "Built",
  },
];

// ── CMS-managed projects (Decap CMS → /content/projects/*.json) ─────────────
// At build time Vite eagerly imports every JSON file from the content folder.
// When the admin publishes a new project via Decap, it commits a JSON file to
// the repo → Vercel redeploys → the glob picks up the new file automatically.

interface CMSProjectRaw {
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  tagline?: string;
  coverImage: string;
  galleryImages?: string[];
  date?: string;
  area?: string;
  client?: string;
  status?: string;
}

const _cmsModules = import.meta.glob<CMSProjectRaw>(
  "/content/projects/*.json",
  { eager: true, import: "default" },
);

const _cmsProjects: ProjectData[] = Object.entries(_cmsModules)
  .map(([filePath, raw]) => ({
    slug: filePath.split("/").pop()?.replace(".json", "") || "",
    title: raw.title,
    category: raw.category,
    location: raw.location,
    year: raw.year,
    image: raw.coverImage,
    gallery: raw.galleryImages ?? [],
    tagline: raw.tagline ?? "",
    description: raw.description,
    area: raw.area,
    client: raw.client,
    status: raw.status,
    _cmsDate: raw.date, // kept for sorting, stripped below
  }))
  // newest CMS project first
  .sort((a, b) => {
    const da = a._cmsDate ? new Date(a._cmsDate).getTime() : 0;
    const db = b._cmsDate ? new Date(b._cmsDate).getTime() : 0;
    return db - da;
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .map(({ _cmsDate, ...rest }) => rest as ProjectData);

// ── combined dataset: CMS projects (latest first) + hardcoded projects ──────
const _allCombined: ProjectData[] = [..._cmsProjects, ...allProjects];

// ── helper: look up by slug ──────────────────────────────────────────────────
export const getProjectBySlug = (slug: string): ProjectData | undefined =>
  _allCombined.find((p) => p.slug === slug);

// ── landmark subset (for ProjectsPage landmark band) ────────────────────────
export const landmarkProjects = _allCombined
  .filter((p) => p.isLandmark)
  .sort((a, b) => a.title.localeCompare(b.title));

// ── portfolio subset (non-landmark — includes all CMS projects) ─────────────
export const portfolioProjects = _allCombined
  .filter((p) => !p.isLandmark)
  .sort((a, b) => a.title.localeCompare(b.title));

// ── allProjects sorted alphabetically (used for category filtering) ──────────
export const allProjectsSorted = _allCombined
  .slice()
  .sort((a, b) => a.title.localeCompare(b.title));

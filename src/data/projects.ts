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
import vidhanSabhaImg         from "@/assets/Vidhan_Sabha.webp";

// Punjab & Haryana High Court
import punjabHCImg            from "@/assets/Punjab_Haryana_HC.webp";

// Amritsar Residence
import amritsarCover          from "@/assets/Amritsar.webp";
import amritsarInt1           from "@/assets/Amritsar_cover_Interior.webp";
import amritsarInt2           from "@/assets/Amritsar_Interior.webp";
import amritsarInt3           from "@/assets/Amritsar_Interior2.webp";
import amritsarInt4           from "@/assets/Amritsar_cover2_interior.webp";

// Chandigarh Golf Club
import golfCover              from "@/assets/chandigarh_golf_cover.webp";
import golfTopview            from "@/assets/Chandigarh_Golf_Club_topview.webp";

// Chandigarh Square
import chandigarhSqCover      from "@/assets/chandigarh_square.webp";
import chandigarhSq2          from "@/assets/chandigarh_square2.webp";

// Kasauli Retreat
import kasauliCover           from "@/assets/Kasuli_cover.webp";
import kasauliInterior        from "@/assets/Kasauli_Interior.webp";
import kasauliSideview        from "@/assets/sideview_Kasuli.webp";
import kasauliInt2            from "@/assets/Kasuli_interior2.webp";
import kasauliInt3            from "@/assets/kasuli_interior3.webp";

// University Campus
import universityCover        from "@/assets/university_cover.webp";
import universityInt1         from "@/assets/university_interior.webp";
import universityInt2         from "@/assets/university_interior2.webp";
import uniAdmin               from "@/assets/uni_admin_building.webp";
import uniBuilding            from "@/assets/uni_building.webp";
import uniBuildingInt         from "@/assets/uni_building_interior.webp";
import uniLibrary             from "@/assets/Uni_library_building.webp";

// Vidhan Sabha extra
import vidhanSabha2           from "@/assets/vidhan_sabha2.webp";

// Amritsar exterior
import amritsarExterior       from "@/assets/Amrtisar_exterior.webp";

// Ambala Mall
import ambalaMallCover        from "@/assets/Ambala_Mall.webp";
import ambalaInt1             from "@/assets/Ambala_interior.webp";
import ambalaInt2             from "@/assets/Ambala_interior2.webp";
import ambalaInt3             from "@/assets/Ambala_interior3.webp";

// Clinic
import clinicCover            from "@/assets/clinic_cover.webp";
import clinicInt1             from "@/assets/clinic_interior.webp";
import clinicPassage          from "@/assets/clinic_passage_interior.webp";

// Farmhouse
import farmhouseCover         from "@/assets/farmhouse.webp";
import farmhouseExt1          from "@/assets/farmhouse_exterior.webp";
import farmhouseExt2          from "@/assets/farmhouse_exterior2.webp";
import farmhouseInt1          from "@/assets/farmhouse_interior.webp";
import farmhouseInt2          from "@/assets/farmhouse_interior2.webp";
import farmhouseInt3          from "@/assets/farmhouse_interior3.webp";

// Haryana CM Residence
import haryanaCMInterior      from "@/assets/haryana_CM_interior.webp";

// HP Tower
import hpTowerCover           from "@/assets/HP_tower.webp";
import hpTower2               from "@/assets/HP_tower2.webp";
import hpInterior             from "@/assets/HP_interior.webp";

// LandMark Wave
import landmarkWaveCover      from "@/assets/LandMark_wave_cover.webp";
import landmarkWaveExt        from "@/assets/landmark_wave_exterior.webp";
import landmarkWaveInt1       from "@/assets/LandMark_wave_interior.webp";
import landmarkWaveInt2       from "@/assets/landMark_wave_interior2.webp";

// Mohali Club
import mohaliClubCover        from "@/assets/Mohali_club.webp";
import mohaliClubInt1         from "@/assets/mohali_club_interior.webp";
import mohaliInt2             from "@/assets/mohali_interior2.webp";

// ── project catalogue ────────────────────────────────────────────────────────
export const allProjects: ProjectData[] = [

  // ════════════════════════════════════════════════════════════════════════════
  // LANDMARK PROJECTS  (isLandmark: true → appear in the Prestige band)
  // ════════════════════════════════════════════════════════════════════════════

  {
    slug: "vidhan-sabha",
    title: "Vidhan Sabha",
    category: "Civic & Legislative",
    location: "Punjab, India",
    year: "2000s",
    image: vidhanSabhaImg,
    gallery: [vidhanSabha2],
    tagline: "A civic landmark of public trust and architectural permanence.",
    description:
      "The Vidhan Sabha commission represents the pinnacle of Bachitter Singh Associates' civic practice — a legislative assembly campus conceived to reflect democratic authority, public transparency, and enduring architectural permanence.\n\nThe complex is arranged around a central ceremonial axis that draws visitors through a procession of arrival courts, colonnaded galleries, and a principal chamber whose proportions echo the gravitas of institutional purpose. Stone surfaces are detailed to age with dignity, while the plan hierarchy ensures clear separation of public, representative, and administrative precincts.\n\nDelivered over a decade of coordinated design and construction management, the project remains among the most significant legislative commissions in the region — a building that citizens recognise as belonging to them.",
    area: "42,000 sq m",
    client: "Government of Punjab",
    status: "Built",
    isLandmark: true,
  },

  {
    slug: "punjab-haryana-high-court",
    title: "Punjab & Haryana High Court",
    category: "Judiciary",
    location: "Chandigarh, India",
    year: "1990s",
    image: punjabHCImg,
    gallery: [punjabHCImg],
    tagline: "Institutional gravity expressed in restrained, authoritative form.",
    description:
      "The Punjab & Haryana High Court extension and renovation project demanded a response that was simultaneously deferential to Le Corbusier's Chandigarh master plan and confident in its own contemporary voice.\n\nOur approach centred on three principles: civic dignity, material continuity with the existing fabric, and spatial clarity that supports the complex choreography of judicial proceedings. Courtrooms are precisely oriented for natural light while maintaining acoustic integrity; public circulation is separated from the judiciary's internal routes by a layered sequence of lobbies and transitional courts.\n\nThe muscular concrete detailing, brise-soleil screens, and load-bearing masonry walls create a building that reads as permanent — resistant to trend and rooted in place.",
    area: "28,500 sq m",
    client: "High Court of Punjab & Haryana",
    status: "Built",
    isLandmark: true,
  },

  {
    slug: "university-campus",
    title: "University Campus",
    category: "Education",
    location: "Punjab, India",
    year: "2010s",
    image: universityCover,
    gallery: [universityInt1, universityInt2, uniAdmin, uniBuilding, uniBuildingInt, uniLibrary],
    tagline: "A campus designed for knowledge, community, and institutional pride.",
    description:
      "This university campus project embodies Bachitter Singh Associates' commitment to institutional design that balances civic grandeur with functional clarity. The master plan organises academic, administrative, and residential precincts along a central pedestrian spine that encourages movement and interaction between faculties.\n\nThe main administration block anchors the campus with a bold facade that draws from regional architectural tradition while embracing contemporary construction methods. Expansive glazing floods lecture halls and seminar rooms with natural light; landscaped courtyards between blocks create sheltered outdoor spaces for study and congregation.\n\nThe campus plan was designed to accommodate future growth phases — each addition reinforcing the existing spatial grammar rather than competing with it.",
    area: "85,000 sq m",
    client: "State University Trust",
    status: "Built",
    isLandmark: true,
  },

  // ════════════════════════════════════════════════════════════════════════════
  // PORTFOLIO PROJECTS  (appear on homepage Selected Works + full portfolio grid)
  // ════════════════════════════════════════════════════════════════════════════

  {
    slug: "amritsar-residence",
    title: "Amritsar Residence",
    category: "Residential",
    location: "Amritsar, India",
    year: "2018",
    image: amritsarCover,
    gallery: [amritsarExterior, amritsarInt1, amritsarInt2, amritsarInt3, amritsarInt4],
    tagline: "Refined contemporary living rooted in the warmth of Punjabi culture.",
    description:
      "The Amritsar Residence is a private family home commissioned with a clear brief: a house that feels open and generous in its public spaces, while offering absolute privacy and serenity in the private wing.\n\nThe exterior composition presents a confident contemporary facade with deep-set windows and textured stone cladding that references the material heritage of the region. The interior, by contrast, is light and voluminous — double-height living areas dissolve the boundary between formal reception and everyday living, while a central courtyard garden brings landscape and light deep into the plan.\n\nFinishes throughout were selected for longevity and warmth: marble floors in public areas, hand-trowelled plaster walls, and custom joinery in solid timber. Each space was detailed to the same standard of precision applied to the firm's larger civic commissions.",
    area: "680 sq m",
    client: "Private Family",
    status: "Completed 2018",
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
    slug: "chandigarh-square",
    title: "Chandigarh Square",
    category: "Commercial",
    location: "Chandigarh, India",
    year: "2012",
    image: chandigarhSqCover,
    gallery: [chandigarhSq2],
    tagline: "A landmark commercial address at the heart of Chandigarh's civic grid.",
    description:
      "Chandigarh Square occupies a prominent site within the city's sector grid — a location that demanded an architectural response conscious of both its civic visibility and its commercial purpose. The building reads as a composed ensemble of volumes: a taller tower element marking the corner, and a lower podium base that mediates between the street and the formal public space of the forecourt.\n\nThe facade system is a refined grid of pre-cast concrete panels and full-height glazing, its proportions calibrated to the scale of the boulevard. At street level, double-height retail frontage animates the public realm; above, office floors are served by efficient plate configurations that maximise natural light penetration.\n\nThe project was delivered on a fast-track programme while maintaining the firm's characteristic attention to material quality and spatial generosity at the building's public interfaces.",
    area: "22,000 sq m",
    client: "Chandigarh Commercial Developers",
    status: "Built",
  },

  {
    slug: "kasauli-retreat",
    title: "Kasauli Retreat",
    category: "Residential",
    location: "Kasauli, Himachal Pradesh",
    year: "2020",
    image: kasauliCover,
    gallery: [kasauliSideview, kasauliInterior, kasauliInt2, kasauliInt3],
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
    category: "Commercial",
    location: "Chandigarh, India",
    year: "2022",
    image: landmarkWaveCover,
    gallery: [landmarkWaveExt, landmarkWaveInt1, landmarkWaveInt2],
    tagline: "A wave-form commercial landmark reshaping Chandigarh's skyline.",
    description:
      "LandMark Wave is a mixed-use commercial development whose undulating facade gives the project its identity — a continuous surface that rises and dips along the street edge, offering shaded retail frontage at grade and a distinctive silhouette against the city sky.\n\nThe building programme stacks retail at the base, flexible commercial floors above, and a public sky terrace at the crown that frames views across Chandigarh's sector grid. The facade's wave geometry is not merely formal — each curve is oriented to deflect the prevailing west sun while channelling cross-ventilation through the common areas.\n\nMaterial choices reinforce the building's civic ambition: polished stone cladding, fritted glass panels, and warm-toned metal fins that shift in colour through the day as light conditions change.",
    area: "32,000 sq m",
    client: "LandMark Group",
    status: "Built",
    isLandmark: true,
  },

  {
    slug: "ambala-mall",
    title: "Ambala Mall",
    category: "Commercial",
    location: "Ambala, Haryana",
    year: "2016",
    image: ambalaMallCover,
    gallery: [ambalaInt1, ambalaInt2, ambalaInt3],
    tagline: "A retail destination designed for movement, light, and civic life.",
    description:
      "The Ambala Mall is a full-scale retail and entertainment destination anchored by a clear organisational logic: a central atrium that floods the interior with natural light and acts as the social spine around which all retail, dining, and entertainment units are arranged.\n\nThe exterior composition is confident and welcoming — a layered facade of glass and stone that signals the building's scale while maintaining a human-scaled street interface at ground level. Entry sequences are ceremonial without being theatrical, guiding visitors naturally into the atrium and the retail floors beyond.\n\nInterior detailing prioritises durability and ease of maintenance while maintaining a quality of finish appropriate to the building's civic role as a major gathering place for the city.",
    area: "45,000 sq m",
    client: "Ambala Mall Developers",
    status: "Built",
  },

  {
    slug: "hp-tower",
    title: "HP Tower",
    category: "Commercial",
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
    slug: "mohali-club",
    title: "Mohali Club",
    category: "Hospitality",
    location: "Mohali, Punjab",
    year: "2017",
    image: mohaliClubCover,
    gallery: [mohaliClubInt1, mohaliInt2],
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
    gallery: [farmhouseExt1, farmhouseExt2, farmhouseInt1, farmhouseInt2, farmhouseInt3],
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
    gallery: [clinicInt1, clinicPassage],
    tagline: "A healthcare interior that prioritises calm, clarity, and patient dignity.",
    description:
      "Designing a medical clinic requires resolving a fundamental tension: the space must be efficient and hygienic, yet calming and humane. This project in Chandigarh addressed that challenge through material restraint, careful spatial sequencing, and a palette chosen to reduce clinical anxiety without sacrificing cleanliness or function.\n\nThe entry and waiting area is deliberately airy, with high ceilings, warm-toned wall panels, and indirect lighting that avoids the harshness of conventional medical environments. Consultation rooms are compact but precisely planned — each with a window, good natural light, and storage that keeps clinical equipment out of sight when not in use.\n\nThe circulation spine — a wide, gently lit passage — connects all zones of the clinic while providing clear wayfinding. Materials throughout are selected for ease of cleaning and long-term durability: porcelain floor tiles, moisture-resistant wall finishes, and solid-core joinery.",
    area: "380 sq m",
    client: "Private Medical Practice",
    status: "Completed 2021",
  },

  {
    slug: "haryana-cm-residence",
    title: "Haryana CM Residence",
    category: "Civic & Legislative",
    location: "Haryana, India",
    year: "2005",
    image: haryanaCMInterior,
    gallery: [],
    tagline: "An official residence that balances state protocol with domestic grace.",
    description:
      "The Chief Minister's official residence in Haryana demanded an architecture that could hold two competing requirements simultaneously: the formal weight appropriate to a head-of-government residence, and the domestic comfort and privacy expected of a private home.\n\nThe design achieves this through clear zoning — public reception rooms occupy the formal front of the building, while the private residential quarters are set behind a landscaped court that screens them from the arrival sequence. The interior of the formal wing is designed for state occasions: high ceilings, generous circulation, and a material palette of marble, polished plaster, and solid timber that signals institutional quality without resorting to ostentation.\n\nEvery detail — from the pattern of the stone floors to the design of the window hardware — was treated with the same care the firm applies to its major public commissions.",
    area: "2,400 sq m",
    client: "Government of Haryana",
    status: "Built",
    isLandmark: true,
  },
];

// ── helper: look up by slug ──────────────────────────────────────────────────
export const getProjectBySlug = (slug: string): ProjectData | undefined =>
  allProjects.find((p) => p.slug === slug);

// ── landmark subset (for ProjectsPage landmark band) ────────────────────────
export const landmarkProjects = allProjects.filter((p) => p.isLandmark);

// ── portfolio subset (non-landmark) ─────────────────────────────────────────
export const portfolioProjects = allProjects.filter((p) => !p.isLandmark);

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
  image: string;           // primary / hero image (resolved asset URL)
  gallery: string[];       // detail-page gallery images
  tagline: string;         // short one-liner shown on card hover
  description: string;     // body text on detail page
  area?: string;           // gross floor / site area
  client?: string;
  status?: string;
  isLandmark?: boolean;
}

// ── resolved at module level so images are bundled by Vite ──────────────────
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg   from "@/assets/project-commercial.jpg";
import interiorImg     from "@/assets/project-interior.jpg";
import urbanImg        from "@/assets/project-urban.jpg";
import villaImg        from "@/assets/project-villa.jpg";
import museumImg       from "@/assets/project-museum.jpg";
import heroImg         from "@/assets/hero-architecture.jpg";

// ── project catalogue ────────────────────────────────────────────────────────
export const allProjects: ProjectData[] = [
  // ── LANDMARK projects ─────────────────────────────────────────────────────
  {
    slug: "vidhan-sabha",
    title: "Vidhan Sabha",
    category: "Civic & Legislative",
    location: "Punjab, India",
    year: "2000s",
    image: heroImg,
    gallery: [heroImg, commercialImg, urbanImg, museumImg],
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
    image: commercialImg,
    gallery: [commercialImg, heroImg, urbanImg, residentialImg],
    tagline: "Institutional gravity expressed in restrained, authoritative form.",
    description:
      "The Punjab & Haryana High Court extension and renovation project demanded a response that was simultaneously deferential to Le Corbusier's Chandigarh master plan and confident in its own contemporary voice.\n\nOur approach centred on three principles: civic dignity, material continuity with the existing fabric, and spatial clarity that supports the complex choreography of judicial proceedings. Courtrooms are precisely oriented for natural light while maintaining acoustic integrity; public circulation is separated from the judiciary's internal routes by a layered sequence of lobbies and transitional courts.\n\nThe muscular concrete detailing, brise-soleil screens, and load-bearing masonry walls create a building that reads as permanent — resistant to trend and rooted in place.",
    area: "28,500 sq m",
    client: "High Court of Punjab & Haryana",
    status: "Built",
    isLandmark: true,
  },
  {
    slug: "the-wave-museum",
    title: "The Wave Museum",
    category: "Cultural",
    location: "Miami, FL",
    year: "2024",
    image: museumImg,
    gallery: [museumImg, interiorImg, commercialImg, heroImg],
    tagline: "Fluid structure redefining public engagement with art and memory.",
    description:
      "The Wave Museum takes its formal cue from the coastal topography of Miami — a building that appears to have emerged from the shoreline rather than been placed upon it. The undulating roof structure is a hybrid shell engineered in collaboration with Arup, spanning 80 metres without intermediate columns and flooding the main gallery with calibrated, diffuse natural light.\n\nThe public programme threads from street level through a landscaped arrival plaza, into double-height entrance lobbies, and finally into a sequence of galleries whose proportions shift with the exhibit type. Permanent collections occupy controlled, top-lit halls; temporary exhibitions inhabit flexible loft spaces with operable curtain walls that open to the waterfront terrace.\n\nThe project has been shortlisted for the AIA National Honor Award and the World Architecture Festival Cultural category.",
    area: "18,200 sq m",
    client: "City of Miami Cultural Trust",
    status: "Built — 2024",
    isLandmark: true,
  },

  // ── PORTFOLIO projects ─────────────────────────────────────────────────────
  {
    slug: "cedar-house",
    title: "Cedar House",
    category: "Residential",
    location: "Portland, OR",
    year: "2024",
    image: residentialImg,
    gallery: [residentialImg, interiorImg, villaImg, urbanImg],
    tagline: "Refined contemporary living within a Pacific Northwest forest setting.",
    description:
      "Cedar House sits on a steeply wooded lot in the West Hills of Portland, its form negotiated between the tree canopy and the ground plane with deliberate restraint. The structure is lifted slightly above the slope on a concrete plinth, allowing the landscape to pass beneath and the main living volumes to hover at canopy level.\n\nThe material palette — board-formed concrete, Douglas fir cladding, and floor-to-ceiling glazing — was chosen to age alongside the forest. Interior planning prioritises a single great room oriented toward the tree line, with sleeping wings arranged along a spine corridor that draws north light throughout the day.\n\nThe project received LEED Gold certification and the 2024 AIA Oregon Residential Design Award.",
    area: "420 sq m",
    client: "Private",
    status: "Completed 2024",
  },
  {
    slug: "vertex-tower",
    title: "Vertex Tower",
    category: "Commercial",
    location: "Chicago, IL",
    year: "2023",
    image: commercialImg,
    gallery: [commercialImg, interiorImg, heroImg, museumImg],
    tagline: "High-performance commercial tower redefining Chicago's west loop skyline.",
    description:
      "Vertex Tower occupies a prominent corner site in Chicago's West Loop, its 38-storey profile clad in a unitised curtain wall that references the city's tradition of structural expression while achieving LEED Platinum energy performance.\n\nThe tapering plan responds to solar geometry: the broader south face is shaded by integrated horizontal fins; the narrower north face is fully glazed to draw in the diffuse northern light prized by the creative-industry tenants. A publicly accessible sky terrace at level 28 provides panoramic views across the city grid and Lake Michigan.\n\nThe building achieved a WELL Gold accreditation for workplace wellness indicators — air quality, biophilic daylighting, and end-of-trip cycling facilities — making it among the first in Illinois to combine LEED Platinum with WELL Gold.",
    area: "62,000 sq m",
    client: "Meridian Real Estate Partners",
    status: "Completed 2023",
  },
  {
    slug: "the-loft-gallery",
    title: "The Loft Gallery",
    category: "Interior",
    location: "New York, NY",
    year: "2023",
    image: interiorImg,
    gallery: [interiorImg, residentialImg, museumImg, commercialImg],
    tagline: "A raw Tribeca loft transformed into an artist's live-work sanctuary.",
    description:
      "The brief called for transforming a 600 sq m Tribeca raw loft into a combined gallery, studio, and private residence — a space that would be simultaneously gallery-white and warmly domestic, open for collectors on weekends and intimate for everyday life.\n\nThe solution layers three zones along the loft's 40-metre length: a public gallery zone at the street-facing end with polished concrete floors and gallery lighting track; a transitional library-studio in the middle, separated by a full-height bookcase wall that also doubles as an acoustic buffer; and a private residential wing at the rear with warm timber flooring and a kitchen that opens through sliding glass to a planted terrace.\n\nAll existing structural columns were retained and celebrated as compositional elements, their steel flanges wire-brushed and left clear-sealed as a counterpoint to the white plaster ceiling.",
    area: "600 sq m",
    client: "Private collector",
    status: "Completed 2023",
  },
  {
    slug: "dune-villa",
    title: "Dune Villa",
    category: "Residential",
    location: "Scottsdale, AZ",
    year: "2024",
    image: villaImg,
    gallery: [villaImg, residentialImg, urbanImg, interiorImg],
    tagline: "Desert luxury distilled into clean geometric form under an Arizona sky.",
    description:
      "Dune Villa is a private desert retreat set within a 12-acre land holding in the Sonoran Desert. The programme — four bedroom suites, a poolside pavilion, a home theatre, and a contemplative garden — was organised as a linear series of pavilions linked by a shaded walkway that functions as an outdoor circulation spine.\n\nThe architecture is minimal and assertive: rammed-earth walls in three tones of local desert soil, flat concrete roofs with generous overhangs calibrated to the summer sun angle, and floor-to-ceiling pivot doors that fully open the living pavilion to the infinity pool and desert panorama beyond.\n\nPassive cooling strategies — thermal mass, cross-ventilation, and deep shade — reduce mechanical cooling loads by 60% compared to a comparable conventional house. The project achieved Living Future Institute Net Zero Carbon certification.",
    area: "780 sq m",
    client: "Private",
    status: "Completed 2024",
  },
  {
    slug: "civic-promenade",
    title: "Civic Promenade",
    category: "Urban",
    location: "Seattle, WA",
    year: "2022",
    image: urbanImg,
    gallery: [urbanImg, heroImg, residentialImg, museumImg],
    tagline: "1.2 km of re-stitched waterfront returning the city to its shoreline.",
    description:
      "The Seattle Civic Promenade was a major urban-design and landscape commission to reclaim a 1.2-kilometre stretch of the Elliott Bay waterfront for pedestrian and civic use, following the removal of the Alaskan Way Viaduct.\n\nOur masterplan organises the promenade as a sequence of distinct civic rooms — a ferry arrival plaza, a performance lawn, a market canopy, a marina overlook, and a children's nature play zone — each with its own programme identity but united by a continuous paving datum and a double row of native Western Red Cedar planting.\n\nNight-time lighting was designed as an integral part of the public realm, using warm 2700K fixtures embedded in seating elements and bollards to create a safe, inviting atmosphere without light spill onto the bay. The project was awarded the ASLA National Award of Excellence in Urban Design.",
    area: "58,000 sq m (site)",
    client: "City of Seattle Office of the Waterfront",
    status: "Completed 2022",
  },
];

// ── helper: look up by slug ──────────────────────────────────────────────────
export const getProjectBySlug = (slug: string): ProjectData | undefined =>
  allProjects.find((p) => p.slug === slug);

// ── landmark subset (for ProjectsPage landmark band) ────────────────────────
export const landmarkProjects = allProjects.filter((p) => p.isLandmark);

// ── portfolio subset (non-landmark) ─────────────────────────────────────────
export const portfolioProjects = allProjects.filter((p) => !p.isLandmark);

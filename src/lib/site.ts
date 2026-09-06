export const site = {
  name: "Quadri Taxi Service",
  shortName: "Quadri Taxi",
  tagline: "South Goa’s 24/7 private rides, airport transfers & tailored tours",
  description:
    "Quadri Taxi Service is a 24/7 private transportation and tour provider based in South Goa. We handle local commutes, outstation travel, and tailored holiday itineraries with airport taxis, corporate cars, luxury vehicles, and minibuses.",
  url: "https://quadritaxiservice.in",
  phone: "917875333539",
  phoneDisplay: "+91 78753 33539",
  email: "bookings@quadritaxiservice.in",
  hours: "Open 24 hours, every day",
  address: {
    line: "Gogol Housing Board, Margao, Goa 403601",
    street: "Gogol Housing Board",
    locality: "Margao",
    region: "Goa",
    postalCode: "403601",
    country: "IN",
  },
  geo: {
    lat: 15.283606,
    lng: 73.975824,
  },
  mapEmbed:
    "https://maps.google.com/maps?q=Gogol%20Housing%20Board%2C%20Margao%2C%20Goa%20403601&z=16&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Gogol+Housing+Board,+Margao,+Goa+403601",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tours", label: "Tours" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    slug: "airport-taxis",
    title: "Airport taxis",
    summary: "Punctual Dabolim & Mopa pickups with flight tracking and meet-and-greet.",
    details:
      "Land at Dabolim (GOI) or Manohar International Airport (Mopa) and step into an air-conditioned car instead of a queue. We monitor delays, hold a name board, and quote a fixed fare before you fly.",
    extra:
      "Share your flight number when you book. If the aircraft is late we wait without a surprise parking surcharge on standard airport packages. Child seats, extra boot space for surfboards, and hotel drops to Colva, Palolem, Calangute, or Panaji are all routine.",
    image: "/images/svc-airport.jpg",
    imageAlt: "Yellow airport taxis waiting beside a parked aircraft at sunset",
    highlights: ["Dabolim & Mopa", "Meet & greet", "Fixed airport fares"],
    includes: ["Flight tracking", "Name board", "AC sedan or SUV", "Bottled water"],
  },
  {
    slug: "corporate-taxis",
    title: "Corporate taxis",
    summary: "Discreet chauffeur cars for meetings, hotel transfers, and visiting teams.",
    details:
      "Keep your guests on schedule across Margao, Verna, Panaji, and industrial estates. Monthly billing, English-speaking chauffeurs, and vehicles that look the part for boardrooms and resorts.",
    extra:
      "We support single-day offsites, multi-day visiting teams, and hotel–office shuttles. GST invoices, named chauffeurs, and a backup vehicle on request for board-level travel. Verna, Sancoale, Dabolim, Panaji, and Candolim resorts are daily routes.",
    image: "/images/svc-corporate.jpg",
    imageAlt: "Silver Mercedes sedan for corporate chauffeur and executive transfers",
    highlights: ["GST invoices", "Hotel & office loops", "Executive sedans"],
    includes: ["Named chauffeur", "Monthly billing", "Airport + hotel loops", "English briefings"],
  },
  {
    slug: "long-distance-taxi",
    title: "Long distance taxi",
    summary: "Comfortable outstation cars to Maharashtra, Karnataka, and across Goa.",
    details:
      "Mumbai, Pune, Hampi, Gokarna, or a dawn run to a wedding in Belgaum — our drivers know the ghats, rest stops, and night stretches. Choose a sedan, SUV, or tempo for the whole party.",
    extra:
      "One-way drops and round trips are both quoted in advance. Popular corridors include Goa–Pune, Goa–Mumbai, Goa–Hampi, Goa–Gokarna, and Goa–Belagavi. Night driving is available with a rested chauffeur; we plan fuel, meals, and ghat stops so the cabin stays comfortable.",
    image: "/images/svc-road.jpg",
    imageAlt: "Highway traffic at dusk for long-distance and outstation taxi travel",
    highlights: ["Outstation packages", "One-way or round trip", "Night driving available"],
    includes: ["Fixed outstation quote", "Rest-stop planning", "SUV or sedan", "Night departures"],
  },
  {
    slug: "luxury-vehicles",
    title: "Luxury vehicles",
    summary: "Premium SUVs and chauffeur-driven cars for weddings, VIP guests, and celebrations.",
    details:
      "Arrive at a beach wedding or a five-star lobby in a polished Innova Crysta, Fortuner, or similar luxury SUV. White-glove chauffeurs, chilled water, and a vehicle detailed for photographs.",
    extra:
      "Wedding weekends often need more than one car: baraat vehicles, guest airport loops, and a quiet car for the couple. We coordinate timings with your planner, keep cars detailed for photographs, and can stage a second vehicle as backup during peak season.",
    image: "/images/svc-luxury.jpg",
    imageAlt: "White luxury sedan with chrome grille for VIP and wedding transfers",
    highlights: ["Wedding fleets", "VIP transfers", "Photo-ready cars"],
    includes: ["Detailing for photos", "Chilled water", "Chauffeur in formals", "Multi-car weekends"],
  },
  {
    slug: "minibus-taxi",
    title: "Minibus taxi",
    summary: "12–17 seater minibuses for families, church groups, and office outings.",
    details:
      "One vehicle, one driver, the whole group together. Ideal for South Goa sightseeing, church feasts, cricket teams, and hotel staff movements without splitting across three taxis.",
    extra:
      "12- and 17-seater options keep families, parish groups, and office teams together with luggage. Useful for feast days, cricket camps, hotel staff shifts, and school-group sightseeing. We can add a smaller chase car if elders prefer not to climb into a high minibus.",
    image: "/images/svc-minibus.jpg",
    imageAlt: "Tour coach on a coastal cliff road for group and minibus hire",
    highlights: ["Group tours", "Staff transport", "Luggage-friendly"],
    includes: ["12–17 seats", "Group sightseeing", "Staff shuttles", "Luggage hold"],
  },
] as const;

export const tours = [
  {
    title: "South Goa Heritage Day",
    duration: "8 hours",
    from: "Margao",
    points: ["Old Goa churches", "Panaji Latin Quarter", "Miramar sunset"],
    blurb:
      "A slower heritage loop for first-time visitors who want churches, tiled streets, and a river sunset without a packed coach.",
    bestFor: "Couples and families who prefer shade, history, and cafés over club beaches.",
  },
  {
    title: "Spice & Waterfall Circuit",
    duration: "9 hours",
    from: "Colva / Benaulim",
    points: ["Spice plantation lunch", "Dudhsagar viewpoint", "Usgalimal rock carvings"],
    blurb:
      "Inland Goa in one day: plantation lunch, a waterfall viewpoint when the season allows, and a stop at the Usgalimal carvings.",
    bestFor: "Travellers who have already done Colva and want greenery and ghats.",
  },
  {
    title: "Beach-hopping South Coast",
    duration: "6 hours",
    from: "Palolem",
    points: ["Palolem", "Agonda", "Cabo de Rama fort"],
    blurb:
      "Short hops between Palolem, Agonda, and Cabo de Rama so you keep the same bag, the same driver, and time for a swim.",
    bestFor: "Villa stays in Canacona who do not want to self-drive the cliff road.",
  },
  {
    title: "North Goa Highlights",
    duration: "10 hours",
    from: "Any hotel",
    points: ["Fort Aguada", "Calangute & Baga", "Anjuna & Vagator"],
    blurb:
      "A full-day North Goa sampler from a South Goa base — forts, the busier beaches, and a sunset at Vagator if traffic allows.",
    bestFor: "Guests based in Salcete who still want one day in the north.",
  },
  {
    title: "Margao Market & Church Morning",
    duration: "4 hours",
    from: "Gogol / Navelim",
    points: ["Holy Spirit Church", "Municipal market", "Coffee on the square"],
    blurb:
      "A compact local morning: church, market bags, and a café stop — useful on arrival day before a late lunch at the hotel.",
    bestFor: "Guests staying near Margao who want a first orientation.",
  },
  {
    title: "Two-day South Goa unwind",
    duration: "2 days",
    from: "Your hotel",
    points: ["Day 1 south beaches", "Day 2 spice + village lunch", "Hotel pickups both mornings"],
    blurb:
      "The same car and chauffeur for two days so you are not re-briefing a new driver. Pace, lunch, and temple or church stops are yours to set.",
    bestFor: "Families who hate changing cars and want a private rhythm.",
  },
];

export const faqs = [
  {
    q: "Do you operate 24/7 in South Goa?",
    a: "Yes. Quadri Taxi Service runs round the clock for airport landings, late-night hotel transfers, and early outstation departures.",
  },
  {
    q: "Which airports do you cover?",
    a: "We cover Dabolim Airport (GOI) and Manohar International Airport, Mopa, with meet-and-greet and flight tracking.",
  },
  {
    q: "Can you plan a custom holiday itinerary?",
    a: "We design private day tours and multi-day holiday itineraries around beaches, churches, spice farms, and outstation destinations — paced to your group.",
  },
  {
    q: "Where are you based?",
    a: "Our base is Gogol Housing Board, Margao, Goa 403601, with pickups across South and North Goa.",
  },
  {
    q: "How do I get a fare?",
    a: "Message pickup, drop, date, passenger count, and luggage. We reply with a fixed quote before you confirm — no meter surprises on agreed packages.",
  },
  {
    q: "Do you pick up from Madgaon railway station?",
    a: "Yes. Margao (Madgaon) station is close to our Gogol base. Share your train number and coach if you have it; we wait at the exit you prefer.",
  },
  {
    q: "Can I keep the same car for several days?",
    a: "Yes. Multi-day holiday cars are one of our most booked options. The chauffeur stays with your family so pickup times stay simple.",
  },
  {
    q: "What if my flight is delayed?",
    a: "Send the flight number. We track it and adjust the pickup. Standard airport packages include waiting for delayed arrivals; we confirm any extra wait in writing if the delay is unusually long.",
  },
];

export const areas = [
  "Margao & Davorlim",
  "Colva & Benaulim",
  "Palolem & Agonda",
  "Panaji & Old Goa",
  "Calangute, Baga & Anjuna",
  "Verna & industrial estates",
  "Dabolim Airport (GOI)",
  "Mopa Airport",
  "Madgaon railway station",
];

export const howWeBook = [
  {
    step: "01",
    title: "Share the brief",
    text: "WhatsApp or the contact form: pickup, drop, time, people, and bags. Flight or train numbers help.",
  },
  {
    step: "02",
    title: "Lock a fare",
    text: "We send a fixed quote and the vehicle type — sedan, SUV, luxury, or minibus — before you pay anything.",
  },
  {
    step: "03",
    title: "Meet your chauffeur",
    text: "You receive the driver’s name and car details. Airport guests get a name board at arrivals.",
  },
  {
    step: "04",
    title: "Ride on your clock",
    text: "Local hops, outstation highways, or a two-day itinerary. The same desk stays reachable 24/7.",
  },
];

export const pickupTips = [
  "Name, WhatsApp number, and pickup pin or hotel name",
  "Date, time, and whether it is 24-hour clock local time (IST)",
  "Passenger count, child seats, and oversized luggage",
  "Preferred vehicle: Swift Dzire, Innova Crysta, or Ertiga",
  "Flight / train number for airport and station pickups",
  "Preferred language: English, Hindi, or Konkani",
];

export const fleet = [
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    tag: "Sedan",
    seats: "4 passengers",
    image: "/images/swift-dzire.jpeg",
    blurb: "Airport hops and couples — compact AC sedan with a roof rack for extra bags.",
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    tag: "Premium SUV",
    seats: "6–7 passengers",
    image: "/images/innova-crysta.png",
    blurb: "The most requested car for airports, weddings, and long-distance comfort.",
  },
  {
    id: "ertiga",
    name: "Maruti Ertiga",
    tag: "MPV",
    seats: "6 passengers",
    image: "/images/ertiga.jpeg",
    blurb: "Families and small groups — 6-seater with a luggage carrier for South Goa and outstation runs.",
  },
];

export const reviews = [
  {
    name: "Amelia R.",
    place: "London · Palolem villa",
    quote:
      "Airport to Palolem at 1am, then three days of cliff forts and spice farms. Calm driver, cold water, no fuss.",
  },
  {
    name: "Rahul M.",
    place: "Pune · corporate offsite",
    quote:
      "Eight colleagues, one minibus, Verna to Colva on a tight agenda. Invoices arrived the same evening.",
  },
  {
    name: "Sara & Nikhil",
    place: "Wedding in Benaulim",
    quote:
      "Luxury SUVs for the baraat and guest airport loops. The cars looked as good as the venue photos.",
  },
  {
    name: "Fatima K.",
    place: "Hyderabad · family of six",
    quote:
      "Kept one Innova for four days from Gogol. Church feast timing, market stops, and a late Mopa drop — all on one chat thread.",
  },
];

export function whatsappHref(text?: string) {
  const message =
    text ??
    "Hello Quadri Taxi Service, I would like to book a taxi in Goa.";
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:+${site.phone}`;
}

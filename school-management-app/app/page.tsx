"use client";

import { useMemo, useState } from "react";

type Destination = {
  name: string;
  country: string;
  image: string;
  rating: string;
  reviews: string;
  tag: string;
};

const destinations: Destination[] = [
  { name: "Kyoto", country: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "12.4k", tag: "Cultural gem" },
  { name: "Amalfi Coast", country: "Italy", image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "9.8k", tag: "Coastal escape" },
  { name: "Machu Picchu", country: "Peru", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "15.1k", tag: "Bucket list" },
  { name: "Cappadocia", country: "Turkey", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "7.6k", tag: "Above the clouds" },
];

const markers = [
  { x: "21.7%", y: "21.6%", place: "Stanley Park", kind: "stay" },
  { x: "32.1%", y: "26%", place: "Central Park", kind: "city" },
  { x: "24.3%", y: "37%", place: "Palacio de Bellas Artes", kind: "food" },
  { x: "31%", y: "53.9%", place: "Machu Picchu", kind: "stay" },
  { x: "38.9%", y: "59%", place: "Christ the Redeemer", kind: "city" },
  { x: "45.6%", y: "14.4%", place: "Hallgrímskirkja", kind: "stay" },
  { x: "53.5%", y: "26%", place: "Amalfi Cathedral", kind: "stay", dx: 10, dy: 11 },
  { x: "50.5%", y: "21.8%", place: "Eiffel Tower", kind: "city", dx: -10, dy: -8 },
  { x: "48%", y: "30.7%", place: "Jemaa el-Fnaa", kind: "food" },
  { x: "58.5%", y: "27%", place: "Göreme Open-Air Museum", kind: "food", dx: -8, dy: -6 },
  { x: "64.2%", y: "34%", place: "Burj Khalifa", kind: "city", dx: -10, dy: 7 },
  { x: "69.4%", y: "44.9%", place: "Malé Friday Mosque", kind: "stay" },
  { x: "69.6%", y: "32.2%", place: "India Gate", kind: "city", dx: 12, dy: -7 },
  { x: "76.3%", y: "39.9%", place: "Wat Arun", kind: "food" },
  { x: "83.7%", y: "28.9%", place: "Fushimi Inari Taisha", kind: "city", dx: 10, dy: 10 },
  { x: "81.2%", y: "27.6%", place: "Gyeongbokgung Palace", kind: "stay", dx: -10, dy: -9 },
  { x: "80.3%", y: "51.5%", place: "Ubud Monkey Forest", kind: "food" },
  { x: "87.7%", y: "64.6%", place: "Sydney Opera House", kind: "city" },
  { x: "54.6%", y: "64.7%", place: "Table Mountain", kind: "stay" },
];

function Icon({ name, size = 18 }: { name: string; size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    search: <><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></>,
    compass: <><circle cx="12" cy="12" r="9"/><path d="m14.8 9.2-2.2 5.6-5.4 2.1 2.2-5.5 5.4-2.2Z"/></>,
    heart: <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z"/>,
    user: <><circle cx="12" cy="8" r="3.6"/><path d="M4.5 20c.5-4 3.1-6.1 7.5-6.1s7 2.1 7.5 6.1"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3.4 12h17.2M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    pin: <><path d="M19 10c0 5.3-7 11-7 11S5 15.3 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/></>,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function Home() {
  const [activeNav, setActiveNav] = useState("Explore");
  const [activeFilter, setActiveFilter] = useState("All places");
  const [selected, setSelected] = useState("Kyoto");
  const [saved, setSaved] = useState<string[]>([]);
  const [zoom, setZoom] = useState(1);

  const filtered = useMemo(() => activeFilter === "All places" ? destinations : destinations.filter((d) => activeFilter === "Top rated" ? Number(d.rating) >= 4.9 : d.tag === activeFilter), [activeFilter]);
  const toggleSaved = (name: string) => setSaved((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setActiveNav("Explore")}><span className="brand-mark"><Icon name="compass" size={21}/></span><span>Wanderly</span></button>
        <nav>{["Explore", "Trips", "Saved"].map((item) => <button key={item} className={activeNav === item ? "nav-active" : ""} onClick={() => setActiveNav(item)}>{item}{item === "Saved" && saved.length > 0 ? <b>{saved.length}</b> : null}</button>)}</nav>
        <div className="header-actions"><button className="search-button" aria-label="Search"><Icon name="search" size={19}/></button><button className="avatar" aria-label="Account">EM</button></div>
      </header>

      <section className="intro"><div><p className="eyebrow">YOUR NEXT ADVENTURE</p><h1>Explore the world,<br/><em>one place at a time.</em></h1><p className="intro-copy">Discover remarkable places, build your dream itinerary, and make every journey feel like a story worth telling.</p></div><button className="plan-button" onClick={() => setActiveNav("Trips")}><Icon name="spark" size={17}/> Start planning</button></section>

      <section className="toolbar"><div className="filter-group">{["All places", "Top rated", "Cultural gem", "Coastal escape"].map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? "filter-active" : ""}>{filter}</button>)}</div><button className="view-control"><Icon name="map" size={17}/> Map view <Icon name="chevron" size={15}/></button></section>

      <section className="map-panel" aria-label="Interactive map of world destinations">
        <div className="map-grid" style={{ transform: `scale(${zoom})` }}>
          {markers.map((marker) => <button className={`map-marker ${marker.place === selected ? "selected-marker" : ""}`} style={{ left: `calc(${marker.x} + ${marker.dx ?? 0}px)`, top: `calc(${marker.y} + ${marker.dy ?? 0}px)` }} key={marker.place} onClick={() => setSelected(marker.place)} aria-label={`Select ${marker.place}`}><span><Icon name="pin" size={15}/></span>{marker.place === selected && <strong>{marker.place}</strong>}</button>)}
        </div>
        <div className="map-note"><span className="live-dot"/> 42 places trending now</div>
        <a className="map-credit" href="https://mapswire.com/maps/world-political-maps/" target="_blank" rel="noreferrer">Political map: Mapswire</a>
        <div className="map-controls"><button onClick={() => setZoom(Math.min(1.2, zoom + .1))} aria-label="Zoom in"><Icon name="plus"/></button><button onClick={() => setZoom(Math.max(.85, zoom - .1))} aria-label="Zoom out"><Icon name="minus"/></button><button aria-label="Map layers"><Icon name="layers"/></button></div>
      </section>

      <section className="recommendations"><div className="section-heading"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Popular right now</h2></div><button className="text-link">See all destinations <Icon name="arrow" size={17}/></button></div><div className="destination-grid">{filtered.map((place) => <article className="destination-card" key={place.name} onClick={() => setSelected(place.name)}><div className="destination-photo" style={{ backgroundImage: `url(${place.image})` }}><span className="photo-tag">{place.tag}</span><button className={saved.includes(place.name) ? "saved heart-button" : "heart-button"} onClick={(event) => { event.stopPropagation(); toggleSaved(place.name); }} aria-label={`Save ${place.name}`}><Icon name="heart" size={17}/></button></div><div className="destination-info"><div><h3>{place.name}</h3><p><Icon name="pin" size={14}/>{place.country}</p></div><div className="rating"><span>★</span> {place.rating}<small>({place.reviews})</small></div></div></article>)}</div></section>

      <section className="bottom-callout"><div className="callout-icon"><Icon name="calendar" size={21}/></div><div><p className="eyebrow">MAKE IT YOURS</p><h2>Ready to turn inspiration into an itinerary?</h2></div><button className="plan-button" onClick={() => setActiveNav("Trips")}>Create a trip <Icon name="arrow" size={17}/></button></section>
    </main>
  );
}

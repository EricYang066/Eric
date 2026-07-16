"use client";

import { useMemo, useState, useCallback, useRef } from "react";

type Destination = {
  name: string;
  country: string;
  image: string;
  rating: string;
  reviews: string;
  tag: string;
};

type Activity = {
  id: string;
  name: string;
  icon: string;
  duration: string;
};

type ScheduledActivity = {
  activityId: string;
  date: string;
  time: string;
  notes: string;
};

type TripPlan = {
  startDate: string;
  endDate: string;
  activities: ScheduledActivity[];
};

const destinations: Destination[] = [
  { name: "Kyoto", country: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "12.4k", tag: "Cultural gem" },
  { name: "Amalfi Coast", country: "Italy", image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "9.8k", tag: "Coastal escape" },
  { name: "Machu Picchu", country: "Peru", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "15.1k", tag: "Bucket list" },
  { name: "Cappadocia", country: "Turkey", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "7.6k", tag: "Above the clouds" },
  { name: "Stanley Park", country: "Canada", image: "https://images.unsplash.com/photo-1601681224861-7e844a5e9eb8?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "8.2k", tag: "Coastal escape" },
  { name: "Central Park", country: "USA", image: "https://images.unsplash.com/photo-1566312153187-5f0ae18191f1?auto=format&fit=crop&w=800&q=85", rating: "4.6", reviews: "22.5k", tag: "Cultural gem" },
  { name: "Palacio de Bellas Artes", country: "Mexico", image: "https://images.unsplash.com/photo-1518659526054-190340b32735?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "5.3k", tag: "Cultural gem" },
  { name: "Christ the Redeemer", country: "Brazil", image: "https://images.unsplash.com/photo-1522938867035-e2e7e7e4e3a0?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "18.7k", tag: "Bucket list" },
  { name: "Hallgrímskirkja", country: "Iceland", image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "6.1k", tag: "Above the clouds" },
  { name: "Amalfi Cathedral", country: "Italy", image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=85", rating: "4.6", reviews: "4.9k", tag: "Cultural gem" },
  { name: "Eiffel Tower", country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "31.2k", tag: "Bucket list" },
  { name: "Jemaa el-Fnaa", country: "Morocco", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=85", rating: "4.5", reviews: "7.8k", tag: "Cultural gem" },
  { name: "Göreme Open-Air Museum", country: "Turkey", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "3.4k", tag: "Above the clouds" },
  { name: "Burj Khalifa", country: "UAE", image: "https://images.unsplash.com/photo-1534536282973-8f1c9c7b1f7e?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "14.6k", tag: "Bucket list" },
  { name: "Malé Friday Mosque", country: "Maldives", image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=85", rating: "4.5", reviews: "2.1k", tag: "Above the clouds" },
  { name: "India Gate", country: "India", image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=85", rating: "4.6", reviews: "11.3k", tag: "Cultural gem" },
  { name: "Wat Arun", country: "Thailand", image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "9.5k", tag: "Cultural gem" },
  { name: "Fushimi Inari Taisha", country: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "16.2k", tag: "Cultural gem" },
  { name: "Gyeongbokgung Palace", country: "South Korea", image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "8.9k", tag: "Cultural gem" },
  { name: "Ubud Monkey Forest", country: "Indonesia", image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=85", rating: "4.6", reviews: "7.4k", tag: "Above the clouds" },
  { name: "Sydney Opera House", country: "Australia", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "20.1k", tag: "Bucket list" },
  { name: "Table Mountain", country: "South Africa", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "10.5k", tag: "Coastal escape" },
  { name: "Grand Canyon", country: "USA", image: "https://images.unsplash.com/photo-1506318137071-a8e063d4c0ae?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "24.8k", tag: "Bucket list" },
  { name: "Colosseum", country: "Italy", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "28.1k", tag: "Bucket list" },
  { name: "Great Wall of China", country: "China", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "35.4k", tag: "Bucket list" },
  { name: "Taj Mahal", country: "India", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "19.6k", tag: "Cultural gem" },
  { name: "Sagrada Familia", country: "Spain", image: "https://images.unsplash.com/photo-1582829626176-5b8b222c1c44?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "16.3k", tag: "Cultural gem" },
  { name: "Angkor Wat", country: "Cambodia", image: "https://images.unsplash.com/photo-1437419764061-247bb0f0a66c?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "14.2k", tag: "Cultural gem" },
  { name: "Petra", country: "Jordan", image: "https://images.unsplash.com/photo-1579606032821-4e6160b32f7a?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "11.7k", tag: "Bucket list" },
  { name: "Times Square", country: "USA", image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=85", rating: "4.5", reviews: "38.2k", tag: "Cultural gem" },
  { name: "Shibuya Crossing", country: "Japan", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=85", rating: "4.6", reviews: "21.4k", tag: "Cultural gem" },
  { name: "Tower Bridge", country: "United Kingdom", image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "18.5k", tag: "Bucket list" },
  { name: "Acropolis of Athens", country: "Greece", image: "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "13.9k", tag: "Cultural gem" },
  { name: "Great Barrier Reef", country: "Australia", image: "https://images.unsplash.com/photo-1587139223877-04cb899fa3e2?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "12.6k", tag: "Coastal escape" },
  { name: "Victoria Falls", country: "Zambia", image: "https://images.unsplash.com/photo-1565073094402-50e07c7b155a?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "6.8k", tag: "Bucket list" },
  { name: "Iguazu Falls", country: "Argentina", image: "https://images.unsplash.com/photo-1567879407597-f2b133fc3d29?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "9.1k", tag: "Bucket list" },
  { name: "Niagara Falls", country: "Canada", image: "https://images.unsplash.com/photo-1573406991826-0cd4c03cf5f9?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "22.3k", tag: "Bucket list" },
  { name: "Mount Fuji", country: "Japan", image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "17.8k", tag: "Above the clouds" },
  { name: "Banff National Park", country: "Canada", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "11.2k", tag: "Above the clouds" },
  { name: "Tromsø", country: "Norway", image: "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "5.6k", tag: "Above the clouds" },
  { name: "Neuschwanstein Castle", country: "Germany", image: "https://images.unsplash.com/photo-1545033830-1277a6cde6a2?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "14.5k", tag: "Cultural gem" },
  { name: "Plitvice Lakes", country: "Croatia", image: "https://images.unsplash.com/photo-1562832135-14a35a25ed9f?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "8.7k", tag: "Coastal escape" },
  { name: "Santorini", country: "Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=85", rating: "4.9", reviews: "25.3k", tag: "Coastal escape" },
  { name: "Batu Caves", country: "Malaysia", image: "https://images.unsplash.com/photo-1567190913448-468aeb219e40?auto=format&fit=crop&w=800&q=85", rating: "4.5", reviews: "6.4k", tag: "Cultural gem" },
  { name: "Marina Bay Sands", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "13.8k", tag: "Bucket list" },
  { name: "Bali Rice Terraces", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "9.3k", tag: "Above the clouds" },
  { name: "Chichen Itza", country: "Mexico", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "15.9k", tag: "Bucket list" },
  { name: "Dubai Miracle Garden", country: "UAE", image: "https://images.unsplash.com/photo-1582674731567-6a0d298306e7?auto=format&fit=crop&w=800&q=85", rating: "4.6", reviews: "4.2k", tag: "Above the clouds" },
  { name: "Blue Lagoon", country: "Iceland", image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?auto=format&fit=crop&w=800&q=85", rating: "4.7", reviews: "10.1k", tag: "Coastal escape" },
  { name: "Hagia Sophia", country: "Turkey", image: "https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=800&q=85", rating: "4.8", reviews: "12.3k", tag: "Cultural gem" },
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
  { x: "83%", y: "30%", place: "Kyoto", kind: "city", dx: -8, dy: -6 },
  { x: "52%", y: "24%", place: "Amalfi Coast", kind: "stay", dx: 10, dy: 10 },
  { x: "57%", y: "25%", place: "Cappadocia", kind: "food", dx: -8, dy: -6 },
  { x: "26%", y: "31%", place: "Grand Canyon", kind: "stay", dx: 10, dy: 7 },
  { x: "51%", y: "25%", place: "Colosseum", kind: "city", dx: 10, dy: -8 },
  { x: "77%", y: "30%", place: "Great Wall of China", kind: "stay", dx: 10, dy: 8 },
  { x: "69%", y: "33%", place: "Taj Mahal", kind: "city", dx: 12, dy: -7 },
  { x: "44%", y: "24%", place: "Sagrada Familia", kind: "city", dx: -10, dy: -8 },
  { x: "77%", y: "39%", place: "Angkor Wat", kind: "food", dx: 10, dy: 8 },
  { x: "62%", y: "29%", place: "Petra", kind: "stay", dx: -10, dy: -7 },
  { x: "25%", y: "26%", place: "Times Square", kind: "city", dx: -8, dy: -6 },
  { x: "85%", y: "28%", place: "Shibuya Crossing", kind: "food", dx: 10, dy: 8 },
  { x: "44%", y: "20%", place: "Tower Bridge", kind: "city", dx: -10, dy: -8 },
  { x: "55%", y: "27%", place: "Acropolis of Athens", kind: "stay", dx: -8, dy: -6 },
  { x: "89%", y: "59%", place: "Great Barrier Reef", kind: "stay", dx: 10, dy: 8 },
  { x: "56%", y: "55%", place: "Victoria Falls", kind: "food", dx: -8, dy: -6 },
  { x: "26%", y: "70%", place: "Iguazu Falls", kind: "stay", dx: -8, dy: -6 },
  { x: "21%", y: "23%", place: "Niagara Falls", kind: "city", dx: -8, dy: -6 },
  { x: "85%", y: "29%", place: "Mount Fuji", kind: "food", dx: 10, dy: 8 },
  { x: "17%", y: "18%", place: "Banff National Park", kind: "stay", dx: -8, dy: -6 },
  { x: "52%", y: "12%", place: "Tromsø", kind: "food", dx: -8, dy: -6 },
  { x: "49%", y: "20%", place: "Neuschwanstein Castle", kind: "stay", dx: -10, dy: -8 },
  { x: "50%", y: "23%", place: "Plitvice Lakes", kind: "food", dx: -8, dy: -6 },
  { x: "54%", y: "27%", place: "Santorini", kind: "stay", dx: 10, dy: 8 },
  { x: "78%", y: "43%", place: "Batu Caves", kind: "food", dx: -8, dy: -6 },
  { x: "78%", y: "45%", place: "Marina Bay Sands", kind: "city", dx: 10, dy: 8 },
  { x: "77%", y: "53%", place: "Bali Rice Terraces", kind: "food", dx: -8, dy: -6 },
  { x: "21%", y: "35%", place: "Chichen Itza", kind: "stay", dx: -8, dy: -6 },
  { x: "64%", y: "33%", place: "Dubai Miracle Garden", kind: "food", dx: -8, dy: -6 },
  { x: "48%", y: "10%", place: "Blue Lagoon", kind: "stay", dx: -8, dy: -6 },
  { x: "55%", y: "26%", place: "Hagia Sophia", kind: "city", dx: -8, dy: -6 },
];

const availableActivities: Activity[] = [
  { id: "walking-tour", name: "Walking Tour", icon: "map", duration: "2h" },
  { id: "food-tasting", name: "Food Tasting", icon: "food", duration: "1.5h" },
  { id: "museum-visit", name: "Museum Visit", icon: "layers", duration: "2h" },
  { id: "sunset-viewing", name: "Sunset Viewing", icon: "globe", duration: "1h" },
  { id: "photography", name: "Photography Session", icon: "spark", duration: "1h" },
  { id: "shopping", name: "Shopping", icon: "heart", duration: "2h" },
  { id: "hiking", name: "Hiking / Nature Walk", icon: "compass", duration: "3h" },
  { id: "boat-ride", name: "Boat Ride", icon: "arrow", duration: "2h" },
  { id: "temple-visit", name: "Temple / Church Visit", icon: "pin", duration: "1.5h" },
  { id: "local-market", name: "Local Market", icon: "clock", duration: "1.5h" },
  { id: "cooking-class", name: "Cooking Class", icon: "plus", duration: "3h" },
  { id: "wine-tasting", name: "Wine Tasting", icon: "star", duration: "1.5h" },
];

const activityIconMap: Record<string, React.ReactNode> = {
  map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15M15 6v15"/></>,
  food: <><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3.4 12h17.2M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z"/></>,
  spark: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/>,
  heart: <path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.4a5.5 5.5 0 0 0-.1-7.8Z"/>,
  compass: <><circle cx="12" cy="12" r="9"/><path d="m14.8 9.2-2.2 5.6-5.4 2.1 2.2-5.5 5.4-2.2Z"/></>,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
  pin: <><path d="M19 10c0 5.3-7 11-7 11S5 15.3 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2.3"/></>,
  clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  star: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/>,
};

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
    trash: <><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-.867 12.14A2 2 0 0 1 16.14 20H7.86a2 2 0 0 1-1.993-1.86L5 6"/><path d="M10 11v5M14 11v5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></>,
    food: <><circle cx="12" cy="12" r="9"/><path d="M8 12h8M12 8v8"/></>,
    star: <path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function ActivityIcon({ name, size = 16 }: { name: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{activityIconMap[name]}</svg>;
}

export default function Home() {
  const [activeNav, setActiveNav] = useState("Explore");
  const [activeFilter, setActiveFilter] = useState("All places");
  const [selected, setSelected] = useState("Kyoto");
  const [saved, setSaved] = useState<string[]>([]);
  const [zoom, setZoom] = useState(1);
  const [tripDestinations, setTripDestinations] = useState<string[]>([]);
  const [tripPlans, setTripPlans] = useState<Record<string, TripPlan>>({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dragActivityId, setDragActivityId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const byFilter = activeFilter === "All places" ? destinations : destinations.filter((d) => activeFilter === "Top rated" ? Number(d.rating) >= 4.9 : d.tag === activeFilter);
    if (!searchQuery.trim()) return byFilter;
    const q = searchQuery.trim().toLowerCase();
    return byFilter.filter((d) => d.name.toLowerCase().includes(q) || d.country.toLowerCase().includes(q) || d.tag.toLowerCase().includes(q));
  }, [activeFilter, searchQuery]);
  const toggleSaved = (name: string) => setSaved((items) => items.includes(name) ? items.filter((item) => item !== name) : [...items, name]);

  const addToTrip = (name: string) => {
    setTripDestinations((prev) => prev.includes(name) ? prev : [...prev, name]);
    setTripPlans((prev) => {
      if (prev[name]) return prev;
      return { ...prev, [name]: { startDate: "", endDate: "", activities: [] } };
    });
  };

  const removeFromTrip = (name: string) => {
    setTripDestinations((prev) => prev.filter((d) => d !== name));
    setTripPlans((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const setTripDateRange = (name: string, field: "startDate" | "endDate", value: string) => {
    setTripPlans((prev) => ({
      ...prev,
      [name]: { ...prev[name], [field]: value },
    }));
  };

  const addActivityToDestination = (destName: string, activityId: string) => {
    setTripPlans((prev) => {
      const plan = prev[destName];
      if (!plan) return prev;
      const alreadyAdded = plan.activities.some((a) => a.activityId === activityId);
      if (alreadyAdded) return prev;
      return {
        ...prev,
        [destName]: {
          ...plan,
          activities: [...plan.activities, { activityId, date: "", time: "", notes: "" }],
        },
      };
    });
  };

  const removeActivityFromDestination = (destName: string, idx: number) => {
    setTripPlans((prev) => {
      const plan = prev[destName];
      if (!plan) return prev;
      return {
        ...prev,
        [destName]: {
          ...plan,
          activities: plan.activities.filter((_, i) => i !== idx),
        },
      };
    });
  };

  const updateScheduledActivity = (destName: string, idx: number, field: keyof ScheduledActivity, value: string) => {
    setTripPlans((prev) => {
      const plan = prev[destName];
      if (!plan) return prev;
      const updated = [...plan.activities];
      updated[idx] = { ...updated[idx], [field]: value };
      return {
        ...prev,
        [destName]: { ...plan, activities: updated },
      };
    });
  };

  const handleDragStart = (activityId: string) => {
    setDragActivityId(activityId);
  };

  const handleDrop = (destName: string) => {
    if (dragActivityId) {
      addActivityToDestination(destName, dragActivityId);
      setDragActivityId(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const findDest = (name: string) => destinations.find((d) => d.name === name);

  const tripDestinationsInfo = useMemo(
    () => tripDestinations.map((name) => findDest(name)).filter(Boolean) as Destination[],
    [tripDestinations]
  );

  const savedDestinations = useMemo(
    () => saved.map((name) => findDest(name)).filter(Boolean) as Destination[],
    [saved]
  );

  const getActivityName = (id: string) => availableActivities.find((a) => a.id === id)?.name ?? id;
  const getActivityDuration = (id: string) => availableActivities.find((a) => a.id === id)?.duration ?? "";
  const getActivityIcon = (id: string) => availableActivities.find((a) => a.id === id)?.icon ?? "clock";

  return (
    <main className="app-shell">
      <header className="topbar">
        <button className="brand" onClick={() => setActiveNav("Explore")}><span className="brand-mark"><Icon name="compass" size={21}/></span><span>Wanderly</span></button>
        <nav>{["Explore", "Trips", "Saved"].map((item) => <button key={item} className={activeNav === item ? "nav-active" : ""} onClick={() => setActiveNav(item)}>{item}{item === "Trips" && tripDestinations.length > 0 ? <b>{tripDestinations.length}</b> : null}{item === "Saved" && saved.length > 0 ? <b>{saved.length}</b> : null}</button>)}</nav>
        <div className="header-actions">{searchOpen ? <div className="search-bar"><input type="text" placeholder="Search destinations..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="search-input" autoFocus onBlur={() => { if (!searchQuery) setSearchOpen(false); }} onKeyDown={(e) => e.key === "Escape" && (setSearchOpen(false), setSearchQuery(""))}/><button className="search-close" onClick={() => { setSearchOpen(false); setSearchQuery(""); }} aria-label="Close search"><Icon name="minus" size={16}/></button></div> : <button className="search-button" onClick={() => setSearchOpen(true)} aria-label="Search"><Icon name="search" size={19}/></button>}<button className="avatar" aria-label="Account">EM</button></div>
      </header>

      {activeNav === "Explore" && (
        <>
          <section className="intro"><div><p className="eyebrow">YOUR NEXT ADVENTURE</p><h1>Explore the world,<br/><em>one place at a time.</em></h1><p className="intro-copy">Discover remarkable places, build your dream itinerary, and make every journey feel like a story worth telling.</p></div><button className="plan-button" onClick={() => setActiveNav("Trips")}><Icon name="spark" size={17}/> Start planning</button></section>

          <section className="toolbar"><div className="filter-group">{["All places", "Top rated", "Cultural gem", "Coastal escape", "Bucket list", "Above the clouds"].map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={activeFilter === filter ? "filter-active" : ""}>{filter}</button>)}</div><button className="view-control"><Icon name="map" size={17}/> Map view <Icon name="chevron" size={15}/></button></section>

          <div className="content-split">
            <section className="list-panel">
              <div className="section-heading"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Popular right now</h2></div><button className="text-link">See all destinations <Icon name="arrow" size={17}/></button></div>
              <div className="destination-grid list-scroll">{filtered.map((place) => <article className="destination-card" key={place.name} onClick={() => { setSelected(place.name); }}><div className="destination-photo" style={{ backgroundImage: `url(${place.image})` }}><span className="photo-tag">{place.tag}</span></div><div className="destination-info"><div><h3>{place.name}</h3><p><Icon name="pin" size={14}/>{place.country}</p></div><div className="rating"><span>★</span> {place.rating}<small>({place.reviews})</small></div></div><div className="list-actions"><button className={saved.includes(place.name) ? "saved list-action-btn" : "list-action-btn"} onClick={(event) => { event.stopPropagation(); toggleSaved(place.name); }} aria-label={`Save ${place.name}`}><Icon name="heart" size={14}/> Save</button><button className={tripDestinations.includes(place.name) ? "added-trip list-action-btn" : "list-action-btn"} onClick={(event) => { event.stopPropagation(); addToTrip(place.name); }} aria-label={`Add ${place.name} to trip`}><Icon name={tripDestinations.includes(place.name) ? "calendar" : "plus"} size={14}/> {tripDestinations.includes(place.name) ? "In trip" : "To trip"}</button></div></article>)}</div>
            </section>

            <section className="map-panel" aria-label="Interactive map of world destinations">
              <div className="map-grid" style={{ transform: `scale(${zoom})` }}>
                {markers.map((marker) => (
                  <button
                    className={`map-marker ${marker.place === selected ? "selected-marker" : ""}`}
                    style={{ left: `calc(${marker.x} + ${marker.dx ?? 0}px)`, top: `calc(${marker.y} + ${marker.dy ?? 0}px)` }}
                    key={marker.place}
                    onClick={() => { setSelected(marker.place); addToTrip(marker.place); }}
                    aria-label={`Select ${marker.place}`}
                  >
                    <span><Icon name="pin" size={15}/></span>
                    {marker.place === selected && <strong>{marker.place}</strong>}
                  </button>
                ))}
              </div>
              <div className="map-note"><span className="live-dot"/> 50 places trending now</div>
              <a className="map-credit" href="https://mapswire.com/maps/world-political-maps/" target="_blank" rel="noreferrer">Political map: Mapswire</a>
              <div className="map-controls"><button onClick={() => setZoom(Math.min(1.2, zoom + .1))} aria-label="Zoom in"><Icon name="plus"/></button><button onClick={() => setZoom(Math.max(.85, zoom - .1))} aria-label="Zoom out"><Icon name="minus"/></button><button aria-label="Map layers"><Icon name="layers"/></button></div>
            </section>
          </div>

          <section className="bottom-callout"><div className="callout-icon"><Icon name="calendar" size={21}/></div><div><p className="eyebrow">MAKE IT YOURS</p><h2>Ready to turn inspiration into an itinerary?</h2></div><button className="plan-button" onClick={() => setActiveNav("Trips")}>Create a trip <Icon name="arrow" size={17}/></button></section>
        </>
      )}

      {activeNav === "Trips" && (
        <section className="trips-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">PLAN YOUR JOURNEY</p>
              <h2>Your trip itinerary</h2>
            </div>
            {tripDestinations.length > 0 && (
              <button className="text-link" onClick={() => { setTripDestinations([]); setTripPlans({}); }}>
                Clear all <Icon name="trash" size={15}/>
              </button>
            )}
          </div>

          {tripDestinations.length === 0 ? (
            <div className="trips-empty">
              <div className="trips-empty-icon"><Icon name="map" size={36}/></div>
              <h3>No destinations planned yet</h3>
              <p>Click on any destination in the Explore tab to add it to your trip. Then drag activities from the right panel to build your itinerary.</p>
              <button className="plan-button" onClick={() => setActiveNav("Explore")}><Icon name="compass" size={16}/> Browse destinations</button>
            </div>
          ) : (
            <div className="trip-planner-layout">
              <div className="trip-planner-left">
                <div className="trip-list">
                  {tripDestinations.map((name) => {
                    const dest = findDest(name);
                    const plan = tripPlans[name];
                    if (!dest || !plan) return null;
                    return (
                      <article
                        className="trip-card trip-card-expanded"
                        key={name}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(name)}
                      >
                        <div className="trip-card-image" style={{ backgroundImage: `url(${dest.image})` }} />
                        <div className="trip-card-body">
                          <div className="trip-card-header">
                            <div>
                              <h3>{dest.name}</h3>
                              <p className="trip-card-country"><Icon name="pin" size={13}/> {dest.country}</p>
                            </div>
                            <button className="trip-remove-btn" onClick={() => removeFromTrip(name)} aria-label={`Remove ${name}`}>
                              <Icon name="trash" size={15}/>
                            </button>
                          </div>

                          <div className="trip-dates-row">
                            <div className="trip-date-field">
                              <label><Icon name="calendar" size={13}/> Arrive</label>
                              <input type="date" value={plan.startDate} onChange={(e) => setTripDateRange(name, "startDate", e.target.value)} className="trip-date-input" />
                            </div>
                            <div className="trip-date-field">
                              <label><Icon name="calendar" size={13}/> Depart</label>
                              <input type="date" value={plan.endDate} onChange={(e) => setTripDateRange(name, "endDate", e.target.value)} className="trip-date-input" />
                            </div>
                          </div>

                          {plan.activities.length > 0 && (
                            <div className="trip-activities-list">
                              <p className="trip-activities-label"><Icon name="spark" size={13}/> Activities</p>
                              {plan.activities.map((sa, idx) => (
                                <div className="trip-activity-item" key={idx}>
                                  <div className="trip-activity-header">
                                    <ActivityIcon name={getActivityIcon(sa.activityId)} size={15}/>
                                    <span className="trip-activity-name">{getActivityName(sa.activityId)}</span>
                                    <span className="trip-activity-duration">{getActivityDuration(sa.activityId)}</span>
                                    <button className="trip-activity-remove" onClick={() => removeActivityFromDestination(name, idx)} aria-label="Remove activity">
                                      <Icon name="minus" size={12}/>
                                    </button>
                                  </div>
                                  <div className="trip-activity-details">
                                    <input type="date" value={sa.date} onChange={(e) => updateScheduledActivity(name, idx, "date", e.target.value)} className="trip-activity-input" title="Date" />
                                    <input type="time" value={sa.time} onChange={(e) => updateScheduledActivity(name, idx, "time", e.target.value)} className="trip-activity-input" title="Time" />
                                    <input type="text" placeholder="Notes" value={sa.notes} onChange={(e) => updateScheduledActivity(name, idx, "notes", e.target.value)} className="trip-activity-input trip-activity-notes" />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          <div className="trip-drop-hint" onDragOver={handleDragOver} onDrop={() => handleDrop(name)}>
                            {dragActivityId ? `Drop activity here` : `Drag activities here`}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="trip-planner-right">
                <div className="activity-palette">
                  <div className="activity-palette-header">
                    <Icon name="spark" size={18}/>
                    <h3>Activities</h3>
                  </div>
                  <p className="activity-palette-sub">Drag an activity onto a destination</p>
                  <div className="activity-palette-list">
                    {availableActivities.map((act) => (
                      <div
                        className="activity-palette-item"
                        key={act.id}
                        draggable
                        onDragStart={() => handleDragStart(act.id)}
                      >
                        <ActivityIcon name={act.icon} size={18}/>
                        <div className="activity-palette-info">
                          <span className="activity-palette-name">{act.name}</span>
                          <span className="activity-palette-duration">{act.duration}</span>
                        </div>
                        <button
                          className="activity-quick-add"
                          onClick={() => {
                            if (tripDestinations.length > 0) {
                              addActivityToDestination(tripDestinations[0], act.id);
                            }
                          }}
                          title="Add to first destination"
                        >
                          <Icon name="plus" size={14}/>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      )}

      {activeNav === "Saved" && (
        <section className="saved-panel">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR COLLECTION</p>
              <h2>Saved destinations</h2>
            </div>
            {saved.length > 0 && (
              <button className="text-link" onClick={() => setSaved([])}>
                Clear all <Icon name="trash" size={15}/>
              </button>
            )}
          </div>

          {saved.length === 0 ? (
            <div className="trips-empty">
              <div className="trips-empty-icon"><Icon name="heart" size={36}/></div>
              <h3>No saved destinations yet</h3>
              <p>Click the heart icon on any destination card to save it here for quick access later.</p>
              <button className="plan-button" onClick={() => setActiveNav("Explore")}><Icon name="compass" size={16}/> Explore destinations</button>
            </div>
          ) : (
            <div className="saved-grid">
              {savedDestinations.map((dest) => (
                <article className="saved-card" key={dest.name}>
                  <div className="destination-photo" style={{ backgroundImage: `url(${dest.image})` }}>
                    <span className="photo-tag">{dest.tag}</span>
                    <button
                      className="saved heart-button"
                      onClick={() => toggleSaved(dest.name)}
                      aria-label={`Unsave ${dest.name}`}
                    >
                      <Icon name="heart" size={17}/>
                    </button>
                  </div>
                  <div className="destination-info">
                    <div>
                      <h3>{dest.name}</h3>
                      <p><Icon name="pin" size={14}/>{dest.country}</p>
                    </div>
                    <div className="rating">
                      <span>★</span> {dest.rating}
                      <small>({dest.reviews})</small>
                    </div>
                  </div>
                  <button
                    className="saved-add-btn"
                    onClick={() => { addToTrip(dest.name); setActiveNav("Trips"); }}
                  >
                    <Icon name="plus" size={14}/> Add to trip
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
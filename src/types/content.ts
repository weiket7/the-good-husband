export type Outlet = {
  id: string;
  areaName?: string;
  name: string;
  address: string;
  postal: string;
  hours: string;
  lat: number;
  lng: number;
  machines: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  images: { src: string; caption: string }[];
  placeId: string;
  staffedCounter: {
    weekdayHours: string;
    weekendHours: string;
  };
};

export type Review = {
  id: string;
  author: string;
  initials: string;
  rating: number;
  outlet: string;
  timeAgo: string;
  body: string;
  sourceUrl?: string;
};

export type GoogleSummary = {
  rating: number;
  total: number;
};

export type FranchiseStep = {
  number: number;
  title: string;
  description: string;
  duration: string;
};

export type Faq = {
  question: string;
  answer: string;
};

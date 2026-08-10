export type Outlet = {
  id: string;
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
};

export type Review = {
  id: string;
  author: string;
  initials: string;
  rating: number;
  outlet: string;
  timeAgo: string;
  body: string;
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

import type { Outlet } from '#/types/content';

const HERO = '/84679c05-b298-450e-aebc-972e467cb8b5.jpg';
const OUTLET_A = '/6311ccd9-4194-41b5-9014-2f194819fcd6.jpg';
const OUTLET_B = '/12999a44-1384-4380-a76e-9e76b31c0c5c.jpg';
const OUTLET_C = '/68c0f65f-08fd-48ce-8c0a-5d82077a5d11.jpg';
const VENDING = '/4e0e0712-e477-46fc-98aa-e2f21401a5fb.jpg';

const KOMO_IMAGES = Array.from({ length: 10 }, (_, i) => ({
  src: `/komo-${i + 1}.jpg`,
  caption: 'Komo Shoppes outlet',
}));

export const outlets: Outlet[] = [
  {
    id: 'komo-shoppes',
    areaName: 'Changi North / Loyang',
    name: 'Komo Shoppes',
    address: 'Komo Shoppes Level 2, 963C Upper Changi Road North, #02-15',
    postal: 'Singapore 506790',
    hours: 'Self-service open 24 hours, daily',
    lat: 1.3602554,
    lng: 103.9700103,
    machines: '8 washers · 6 dryers · up to 18kg loads',
    rating: 4.9,
    reviewCount: 214,
    amenities: ['Free Wi-Fi', 'Helmet and Footwear Deep Cleaning',
      'Pet Garments Washer and Dryer', 'Soft Floor Rugs Washer and Dryer',
      'Takeaway Hot Food and Desserts', 'Massage Chairs', 'Claw Machines'
    ],
    images: KOMO_IMAGES,
    placeId: 'ChIJpWku_X892jERrP6uti9n1Hw',
    staffedCounter: { weekdayHours: '10am – 9pm', weekendHours: '10am – 3pm' },
  },
  {
    id: 'seletar-hills',
    name: 'Seletar Hills',
    address: '36 Jalan Selaseh, #01-02',
    postal: 'Singapore 808450',
    hours: 'Self-service open 24 hours, daily',
    lat: 1.38516,
    lng: 103.87258,
    machines: '10 washers · 8 dryers · up to 25kg loads',
    rating: 4.8,
    reviewCount: 176,
    amenities: ['Free Wi-Fi', 'F&B vending', 'Massage chairs', 'Dry cleaning drop-off'],
    images: [
      { src: "seletar-window.jpeg", caption: 'Premium massage chair lounge' },
      { src: "seletar-washers2.jpeg", caption: 'Premium massage chair lounge' },
      { src: "seletar-washers1.jpeg", caption: 'Folding counter and detergent bar' },
      { src: "seletar-dryer1.jpeg", caption: 'Folding counter and detergent bar' },
      { src: "seletar-self-collect.jpeg", caption: 'Folding counter and detergent bar' },
      { src: "seletar-ijooz.jpeg", caption: 'Folding counter and detergent bar' },
    ],
    placeId: 'ChIJLR-q6T4X2jERShwC7qyJHLo',
    staffedCounter: { weekdayHours: '9am – 7pm', weekendHours: '9am – 7pm' },
  },
  {
    id: 'serangoon',
    name: 'Serangoon',
    address: '16 Lim Tua Tow Road',
    postal: 'Singapore 547752',
    hours: 'Self-service open 24 hours, daily',
    lat: 1.354036,
    lng: 103.877217,
    machines: '6 washers · 6 dryers · up to 15kg loads',
    rating: 4.9,
    reviewCount: 132,
    amenities: ['Free Wi-Fi', 'F&B vending', 'CCTV monitored', 'Pram friendly'],
    images: [
      { src: "lim-tua-entrance1.jpeg", caption: 'Premium massage chair lounge' },
      { src: "lim-tua-entrance2.jpeg", caption: 'Premium massage chair lounge' },
      { src: "lim-tua-seating.jpeg", caption: 'Folding counter and detergent bar' },
      { src: "lim-tua-washers1.jpeg", caption: 'Folding counter and detergent bar' },
      { src: "lim-tua-washers2.jpeg", caption: 'Folding counter and detergent bar' },
      { src: "lim-tua-lockers.jpeg", caption: 'Folding counter and detergent bar' },
    ],
    placeId: 'ChIJ3fITgzYX2jERLU60oDge_iY',
    staffedCounter: { weekdayHours: '10am – 9pm', weekendHours: '10am – 5:30pm' },
  },
];

export const heroImages = [
  { src: "komo-1.jpg", alt: 'Modern 24/7 laundromat interior at dusk with city skyline view' },
  { src: "seletar-washers2.jpeg", alt: 'Bright laundromat with large capacity washing machines' },
  { src: "lim-tua-entrance2.jpeg", alt: 'Row of smart cashless vending machines' },
];

export const vendingImage = VENDING;

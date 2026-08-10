import type { Outlet } from '../types/content';

const HERO = "/84679c05-b298-450e-aebc-972e467cb8b5.jpg";
const OUTLET_A = "/6311ccd9-4194-41b5-9014-2f194819fcd6.jpg";
const OUTLET_B = "/12999a44-1384-4380-a76e-9e76b31c0c5c.jpg";
const OUTLET_C = "/68c0f65f-08fd-48ce-8c0a-5d82077a5d11.jpg";
const VENDING = "/4e0e0712-e477-46fc-98aa-e2f21401a5fb.jpg";

export const outlets: Outlet[] = [
{
  id: 'komo-shoppes',
  name: 'Komo Shoppes',
  address: 'Komo Shoppes Level 2, 963C Upper Changi Road North, #02-15',
  postal: 'Singapore 506790',
  hours: 'Open 24 hours, daily',
  lat: 1.3602554,
  lng: 103.9700103,
  machines: '8 washers · 6 dryers · up to 18kg loads',
  rating: 4.9,
  reviewCount: 214,
  amenities: ['Free Wi-Fi', 'F&B vending', 'Massage chairs', 'Wheelchair access'],
  images: [
  { src: OUTLET_A, caption: 'Extra-large 18kg washer bank' },
  { src: HERO, caption: 'Late-night shopfront and lounge' },
  { src: VENDING, caption: 'In-house F&B vending wall' }]

},
{
  id: 'seletar-hills',
  name: 'Seletar Hills',
  address: '36 Jalan Selaseh, #01-02',
  postal: 'Singapore 808450',
  hours: 'Open 24 hours, daily',
  lat: 1.38516,
  lng: 103.87258,
  machines: '10 washers · 8 dryers · up to 25kg loads',
  rating: 4.8,
  reviewCount: 176,
  amenities: ['Free Wi-Fi', 'F&B vending', 'Massage chairs', 'Dry cleaning drop-off'],
  images: [
  { src: OUTLET_B, caption: 'Premium massage chair lounge' },
  { src: OUTLET_A, caption: 'Folding counter and detergent bar' },
  { src: HERO, caption: 'Hygiene-checked machine bay' }]

},
{
  id: 'serangoon',
  name: 'Serangoon',
  address: '16 Lim Tua Tow Road',
  postal: 'Singapore 547752',
  hours: 'Open 24 hours, daily',
  lat: 1.354036,
  lng: 103.877217,
  machines: '6 washers · 6 dryers · up to 15kg loads',
  rating: 4.9,
  reviewCount: 132,
  amenities: ['Free Wi-Fi', 'F&B vending', 'CCTV monitored', 'Pram friendly'],
  images: [
  { src: OUTLET_C, caption: 'Neighbourhood shopfront interior' },
  { src: OUTLET_B, caption: 'Seating and self-care corner' },
  { src: VENDING, caption: 'Cashless snack and drink bay' }]

}];


export const heroImages = [
{ src: HERO, alt: 'Modern 24/7 laundromat interior at dusk with city skyline view' },
{ src: OUTLET_A, alt: 'Bright laundromat with large capacity washing machines' },
{ src: VENDING, alt: 'Row of smart cashless vending machines' }];


export const vendingImage = VENDING;
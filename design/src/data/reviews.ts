import type { Review } from '../types/content';

export const reviews: Review[] = [
{
  id: 'r1',
  author: 'Nadia Rahman',
  initials: 'NR',
  rating: 5,
  outlet: 'Komo Shoppes',
  timeAgo: '2 weeks ago',
  body: 'Came down at 1am with two weeks of laundry and the place was spotless. The 18kg washer cleared everything in one load, and I actually enjoyed the massage chair while waiting.'
},
{
  id: 'r2',
  author: 'Marcus Tan',
  initials: 'MT',
  rating: 5,
  outlet: 'Seletar Hills',
  timeAgo: '1 month ago',
  body: 'PayNow worked instantly, no fumbling for coins. Wi-Fi is fast enough that I cleared emails while my duvet was drying. This is how a laundromat should be run.'
},
{
  id: 'r3',
  author: 'Priya Menon',
  initials: 'PM',
  rating: 5,
  outlet: 'Serangoon',
  timeAgo: '3 weeks ago',
  body: 'Bright, air-conditioned and always clean. The vending machine saved me when I got hungry at 11pm. Staff replied on WhatsApp within minutes when I had a question.'
},
{
  id: 'r4',
  author: 'Jonathan Lee',
  initials: 'JL',
  rating: 4,
  outlet: 'Komo Shoppes',
  timeAgo: '1 week ago',
  body: 'Machines are well maintained and the dryers are genuinely powerful. Gets busy on Sunday evenings, but there is always a free unit within ten minutes.'
},
{
  id: 'r5',
  author: 'Siti Aisyah',
  initials: 'SA',
  rating: 5,
  outlet: 'Seletar Hills',
  timeAgo: '2 months ago',
  body: 'I bring my comforters here every month. Great value, and the dry cleaning drop-off is a lifesaver before work trips.'
},
{
  id: 'r6',
  author: 'Daniel Ong',
  initials: 'DO',
  rating: 5,
  outlet: 'Serangoon',
  timeAgo: '5 days ago',
  body: 'Genuinely the cleanest laundromat in the estate. Everything is contactless and the app-free flow means you just tap and go.'
}];


export const googleSummary = {
  rating: 4.9,
  total: 522,
  distribution: [
  { stars: 5, percent: 88 },
  { stars: 4, percent: 9 },
  { stars: 3, percent: 2 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 }]

};
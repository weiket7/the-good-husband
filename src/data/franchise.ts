import type { Faq, FranchiseStep } from '#/types/content';

export const franchiseSteps: FranchiseStep[] = [
  {
    number: 1,
    title: 'Inquiry Submission',
    description:
      'Complete the online qualification funnel so we understand your capital tier, preferred territory and timeline.',
    duration: '5 minutes',
  },
  {
    number: 2,
    title: 'Discovery Call',
    description:
      'Initial review of financial capability, operational goals and target territories across Singapore.',
    duration: 'Week 1',
  },
  {
    number: 3,
    title: 'Location Evaluation',
    description:
      'Site selection, foot traffic data analysis and technical feasibility studies for power and water supply.',
    duration: 'Weeks 2–5',
  },
  {
    number: 4,
    title: 'Agreement & Signing',
    description: 'Legal franchise contracts finalised and secure territory protection locked to your outlet.',
    duration: 'Week 6',
  },
  {
    number: 5,
    title: 'Fit-out & Installation',
    description:
      'Interior renovation to brand guidelines, equipment integration (washers, dryers, vending) and network configuration.',
    duration: 'Weeks 7–12',
  },
  {
    number: 6,
    title: 'Grand Launch',
    description: 'Automated regional marketing execution, opening promotions and full system activation.',
    duration: 'Week 13',
  },
];

export const franchiseFaqs: Faq[] = [
  {
    question: 'How much capital is required to open a franchise location?',
    answer:
      'Financial requirements vary based on shop layout and machine scale. Detailed tier guidelines are provided immediately following inquiry submission.',
  },
  {
    question: 'Do I need prior experience running a laundromat or automated business?',
    answer:
      'No. The Good Husband provides a full turnkey system including machine servicing, telemetry management software, and full operational training.',
  },
  {
    question: 'How are locations chosen?',
    answer:
      'We utilise advanced geographic metrics and foot traffic patterns to assist you in selecting high-yield retail spaces, balancing density and competition.',
  },
  {
    question: 'How time-intensive is the daily management?',
    answer:
      'The model is highly optimised for passive income. Remote telemetry tools allow real-time monitoring of utilities, equipment cycles, and vending machine stock directly from your mobile device.',
  },
];

export const capitalTiers = ['S$80k – S$150k', 'S$150k – S$250k', 'S$250k – S$400k', 'Above S$400k'];

export const regions = ['North', 'North-East', 'East', 'West', 'Central', 'Flexible / open to advice'];

export const timelines = ['Within 3 months', '3 – 6 months', '6 – 12 months', 'Exploring for now'];

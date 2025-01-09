export interface Appliance {
  id: string;
  type: string;
  location: string;
  quantity: number;
  age: number;
  dailyUsage: number;
  starRating: string;
}

export const APPLIANCE_TYPES = [
  { value: 'refrigerator', label: 'Refrigerator' },
  { value: 'airConditioner', label: 'Air Conditioner' },
  { value: 'waterHeater', label: 'Water Heater' },
  { value: 'lighting', label: 'Lighting' }
] as const;

export const LOCATIONS = [
  { value: 'bedroom', label: 'Bedroom' },
  { value: 'livingRoom', label: 'Living Room' },
  { value: 'kitchen', label: 'Kitchen' },
  { value: 'bathroom', label: 'Bathroom' }
] as const;

export const STAR_RATINGS = [
  { value: '1', label: '1 Star' },
  { value: '2', label: '2 Star' },
  { value: '3', label: '3 Star' },
  { value: '4', label: '4 Star' },
  { value: '5', label: '5 Star' },
  { value: 'efficient', label: 'Efficient' }
] as const;
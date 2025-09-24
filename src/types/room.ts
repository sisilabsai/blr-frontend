export interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  gallery_links: string[];
  created_at: string;
  updated_at: string;
}
export interface Book {
  id: number;
  rate: {sum: number; voters: Array<string>};
  borrowedBy: string;
  name: string;
  author: string;
  cover: string;
  description: string;
}
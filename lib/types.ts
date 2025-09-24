export type DrinkCategory =
  | "lagers"
  | "spirits"
  | "rice"
  | "cocktails"
  | "wines"
  | "non-alcoholic"
  | "traditional"
  | "soup"
  | "grill"
  | "bitters"
  | "smoke";

export interface Drink {
  id: string;
  name: string;
  description: string;
  price: number;
  category: DrinkCategory;
  image: string;
  model?: string; // Path to 3D model if available
  tags?: string[];
  ingredients?: string[];
  popular?: boolean;
}

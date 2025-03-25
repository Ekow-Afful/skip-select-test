declare interface SkipData {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost?: null;
  per_tonne_cost?: null;
  price_before_vat?: number;
  vat?: number;
  postcode?: string;
  area?: null;
  forbidden?: boolean;
  created_at?: string;
  updated_at?: string;
  allowed_on_road?: boolean;
  allows_heavy_waste?: boolean;
}

declare enum SkipScreens {
  SELECT = "SELECT",
  PERMIT = "PERMIT",
}

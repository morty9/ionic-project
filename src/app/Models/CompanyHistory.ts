export interface CompanyHistory {
  title: string;
  event_date_utc: string;
  flight_number?: number;
  details: string;
  links: Links;
}

export interface Links {
  reddit?: string;
  article: string;
  wikipedia?: string;
}
interface CompanyHistory {
    title: string;
    event_date_utc: string;
    flight_number?: number;
    details: string;
    links: Links;
  }
  
  interface Links {
    reddit?: string;
    article: string;
    wikipedia?: string;
  }
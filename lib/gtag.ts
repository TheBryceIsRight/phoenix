export const GA_TRACKING_ID = process.env.GTAG_CODE;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (typeof window !== 'undefined') {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined') { 
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};
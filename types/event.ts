export interface EventRequest {
  id: number | string;
  user_id: number;
  event_id: number;
  host: {
    id: number;
    name: string;
    email: string;
    type: string;
    stage_name: string;
    profession: string;
    slug: string;
    qrcode: string;
    profile_picture: string;
    bio: string;
    gender: string;
    dob: string;
    country: string;
    created_at: string;
    updated_at: string;
  };
  nickname: string;
  audience: {
    id: number;
    name: string;
    email: string;
    type: string;
    stage_name: string;
    profession: string;
    slug: string;
    qrcode: string;
    profile_picture: string;
    bio: string;
    gender: string;
    dob: string;
    country: string;
    created_at: string;
    updated_at: string;
  };
  type: "song" | "hype";
  status:
    | "new"
    | "payment-pending"
    | "now-playing"
    | "declined"
    | "completed"
    | "ignored";
  description: string;
  artist: string | null;
  song_title: string | null;
  price: string | number;
  created_at: string;
}

export interface ActiveEventRequest extends Omit<EventRequest, "status"> {
  status: "new" | "now-playing";
}

export interface InActiveEventRequest extends Omit<EventRequest, "status"> {
  status: "payment-pending" | "declined" | "completed" | "ignored";
}

export interface EventType {
  id: number;
  name: "song" | "hype";
  price: number;
}
export interface LiveEvent {
  id: number;
  title: string;
  address: string;
  country: string;
  state: string;
  status: "live" | "new" | "ended";
  start_date: string;
  end_date: null;
  earnings: number;
  types: EventType[];
  requests: EventRequest[];
}

export interface PriceHistory {
  old_price: string | number;
  new_price: string | number;
  created_at: string;
  type: "hype" | "song";
}

export interface EventSummary {
  event: {
    id: number | string;
    title: string;
    address: string;
    country: string;
    state: string;
    status: "live" | "new" | "ended";
    start_date: string;
    end_date: string | null;
    earnings: number;
    types: {
      hype: {
        count: number;
        total_price: number | string;
      };
      song: {
        count: number;
        total_price: number | string;
      };
    };
  };
  total_earnings: number;
  top_spenders: {
    total: string | number;
    user_id: number | string;
    email: string;
    name: string | null;
  }[];

  price_histories: PriceHistory[];
}

export interface RequestPaymentPayload {
  redirect_url: string;
  type: "wallet" | "gateway" | "split";
  gateway?: "paystack";
}

export interface RequestPaymentResponse {
  status: string;
  message: string;
  redirect_url: string;
}

export interface EventSpender {
  total: string | number;
  user_id: string | number;
  email: string;
  name: string;
}
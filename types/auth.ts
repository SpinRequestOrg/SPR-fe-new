import type { ApiResponse } from ".";
export interface AuthUser {
  id: number;
  email: string;
  profile_picture: string;
  bio: string;
  dob: string;
  gender: string;
  country: string;
  email_verified: boolean;
  role: "host" | "audience";
  slug?: string;
  profession?: string;
  stage_name?: string;
  is_live?: false;
  bank_account?: string | null;
}

export const PROFESSIONAL_TYPES = [
  "DJ",
  "MC",
  "Artist",
  "Hype Man",
  "Radio Host",
  "Business",
  "Other",
] as const;

export type ProfessionTypes = (typeof PROFESSIONAL_TYPES)[number];

export interface CreateUser {
  email: string;
  password: string;
  password_confirmation: string;
}
export interface CreateHost extends CreateUser {
  stage_name: string;
  profession: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: AuthUser;
  token: string;
  role: string;
}

export interface SignUpResponse {
  id: number;
  name: string;
  email: string;
  stagename: string;
}

export interface ResetPasswordForm {
  password: string;
  password_confirmation: string;
  token: string;
}

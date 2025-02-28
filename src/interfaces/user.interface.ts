import { Role } from '../enums/role.enum';

export interface User {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  iat: number;
  email: string;
  phone: string;
  app_metadata: AppMetadata;
  user_metadata: UserMetadata;
  role: Role;
  aal: string;
  amr: Amr[];
  session_id: string;
  is_anonymous: boolean;
}

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface UserMetadata {
  commercialData: CommercialData;
  name: string;
}

export interface CommercialData {
  clientNumber: number;
  agentNumber: number;
  commercialDesc: string;
  locality: string;
  commercialDiscount1: number;
  commercialDiscount2: number;
  commercialDiscount3: number;
  authorizedRisk: number;
  currentRisk: number;
  zone: number;
  purchasePotential: number;
  unsubscribed: boolean;
}

export interface Amr {
  method: string;
  timestamp: number;
}

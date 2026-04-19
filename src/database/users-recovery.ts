import { Entity } from "typeorm";

@Entity({ schema: "public", name: "users_recovery" })
export class UsersRecovery {
  id: string;
  user_id: string;
  token: string | null;
  expires_at: string | null;
  is_used: boolean;
  attempts: number;
  ip_address: string;
  delete: boolean;
  create_at: string
}

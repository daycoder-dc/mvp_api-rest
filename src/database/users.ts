import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersStatus } from "./users-status";

@Entity({ schema: "public", name: "users" })
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  username: string;

  @Column({ type: "text", nullable: false })
  password: string;

  @Column({ type: "boolean", nullable: true, default: false })
  is_admin: boolean;

  @Column({ type: "boolean", default: false })
  two_factor_enabled: boolean;

  @Column({ type: "text", nullable: true })
  two_factor_secret: string | null;

  @Column({ type: "text", nullable: true })
  two_factor_backup_code: string | null;

  login_attempts: number | null;

  login_lock_until: string | null;

  @Column({ type: "text", nullable: true })
  status_id: string | null;

  @Column({ type: "boolean", nullable: true, default: false })
  delete: boolean;

  @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
  create_at: string | null;

  @Column({ type: "timestamptz", nullable: true })
  update_at: string | null;

  @ManyToOne(() => UsersStatus, { onDelete: "SET NULL", onUpdate: "SET NULL" })
  @JoinColumn({ name: "status_id" })
  status: UsersStatus | null;
}

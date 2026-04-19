import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users";

@Entity({ schema: "public", name: "users_login" })
export class UsersLogin {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "text", nullable: true })
  user_id: string | null;

  @Column({ type: "varchar", nullable: true })
  attempted_username: string | null;

  @Column({ type: "boolean", default: false })
  success: boolean;

  @Column({ type: "varchar", nullable: true })
  failure_reason: string | null;

  @Column({ type: "varchar", nullable: true })
  ip_address: string | null;

  @Column({ type: "text", nullable: true })
  user_agent: string | null;

  @Column({ type: "boolean", default: false })
  delete: boolean;

  @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
  create_at: string;

  @ManyToOne(() => Users, { onDelete: "CASCADE", onUpdate: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: Users | null;
}

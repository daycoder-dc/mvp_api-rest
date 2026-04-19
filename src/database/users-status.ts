import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ schema: "public", name: "users_status" })
export class UsersStatus {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", nullable: false })
  name: string;

  @Column({ type: "text", nullable: true })
  description: string | null;

  @Column({ type: "boolean", nullable: true, default: false })
  delete: boolean;

  @Column({ type: "timestamptz", nullable: true, default: () => "CURRENT_TIMESTAMP" })
  create_at: string | null;
}

import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.admin = false;
    }

    const dateTimeNow = new Date();

    this.created_at = dateTimeNow;
    this.updated_at = dateTimeNow;
  }
}

export { User };

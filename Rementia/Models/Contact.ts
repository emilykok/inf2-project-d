import User from '../Models/User';

export default class Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  user: User;
  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

/*model Contact {
  id     Int    @id @default(autoincrement())
  name   String
  email  String
  phone  String
  User   User   @relation(fields: [userId], references: [id])
  userId Int
}*/

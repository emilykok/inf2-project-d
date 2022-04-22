import Contact from '../Models/Contact';

export default class User {
  id: number;
  name: string;
  email: string;
  phone: string;
  contacts: Contact[];

  constructor(id: number, name: string, email: string, phone: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

/*model User {
  id Int @id @default(autoincrement())

  name     String
  email    String
  phone    String
  contacts Contact[]
  Message  Message[] // didnt add message in the model

  // Glucose meter either full or empty ==> optional field
  glucoseMeters GlucoseMeter?

  // Used to indicate if the user is a patient or a caregiver
  clearance Int @default(0)
}*/

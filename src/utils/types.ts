export type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  gender: UserGender;
  email: string;
  phone: string;
  DoB: Date;
  role: UserRole;
  age: number;
  fullName: string;
};

export type UserRole = 'admin' | 'user' | null;
export type UserGender = 'male' | 'female' | null;

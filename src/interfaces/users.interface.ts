export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  profilePicture: string;
  tokenData: TokenData;
}
export interface TokenData {
  token: string;
  expiresIn: number;
}

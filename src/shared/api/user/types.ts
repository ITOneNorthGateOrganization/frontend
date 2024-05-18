export interface User {
  id: number,
  username: string,
  email: string,
  roles: string[]
}

export interface Auth {
  username: string,
  password: string,
  email?: string
}

export interface UserSignIn extends User {
  token: string,
  type: string,
  refreshToken: string
}


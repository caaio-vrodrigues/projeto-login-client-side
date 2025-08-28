export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export type UserDto = Record<string, unknown>;

export type Props = {
  setInitServer: React.Dispatch<React.SetStateAction<boolean>>;
};
// Generated by https://quicktype.io

export interface SingleUsesResponse {
  data:    User;
  support: Support;
}

export interface User {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}
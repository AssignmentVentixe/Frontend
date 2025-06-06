import api from "./authApi";

export function login(email, password) {
  return api.post("/auth/login", { email, password });
}

export function logout() {
  return api.post("/auth/logout");
}

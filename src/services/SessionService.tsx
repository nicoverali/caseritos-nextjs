import apiUrl from "./apiUrl";

const STORAGE_KEY = "caseritos_token";

export interface Credentials {
  email: string;
  password: string;
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

class SessionService {
  async login(credentials: Credentials, signal?: AbortSignal): Promise<string> {
    const res = await fetch(apiUrl("session"), {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      signal,
    });

    if (res.status == 401)
      throw new UnauthorizedError("Client credentials are invalid");
    if (res.status != 200)
      throw new Error(
        `Request failed with status: ${res.status} (${res.statusText})`
      );

    const token = await res.text();
    localStorage.setItem(STORAGE_KEY, token);
    return token;
  }

  isLoggedIn(): string | null {
    const token = localStorage.getItem(STORAGE_KEY);
    return token;
  }

  async logout(signal?: AbortSignal): Promise<void> {
    const token = localStorage.getItem(STORAGE_KEY);
    if (token) {
      localStorage.removeItem(STORAGE_KEY);
      await fetch(apiUrl("session"), {
        method: "DELETE",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
        signal,
      });
    }
  }
}

export default new SessionService();

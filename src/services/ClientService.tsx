import apiUrl from "./apiUrl";

export interface ClientRegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export class UnavailableEmail extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnavailableEmail";
  }
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

class ClientService {
  async register(
    client: ClientRegisterRequest,
    signal?: AbortSignal
  ): Promise<void> {
    const res = await fetch(apiUrl("client"), {
      method: "POST",
      body: JSON.stringify(client),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      signal,
    });

    if (res.status == 409) throw new UnavailableEmail("Email already exists");
    if (res.status != 201)
      throw new Error(
        `Request failed with status: ${res.status} (${res.statusText})`
      );

    return;
  }

  async get(accessToken: string, signal?: AbortSignal): Promise<Client> {
    const res = await fetch(apiUrl("client"), {
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
      signal,
    });

    if (res.status == 401) throw new UnauthorizedError("User is not logged in");
    if (res.status != 200)
      throw new Error(
        `Request failed with status: ${res.status} (${res.statusText})`
      );

    const client = await (res.json() as Promise<Client>);

    return client;
  }
}

export default new ClientService();

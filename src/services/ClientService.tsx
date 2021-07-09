import apiUrl from "./apiUrl";

interface ClientRegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
}

class UnavailableEmail extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnavailableEmail";
  }
}

class ClientService {
  async register(client: ClientRegisterRequest): Promise<void> {
    const res = await fetch(apiUrl("client"), {
      method: "POST",
      body: JSON.stringify(client),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    if (res.status == 409) throw new UnavailableEmail("Email already exists");
    if (res.status != 201)
      throw new Error(
        `Request failed with status: ${res.status} (${res.statusText})`
      );

    return;
  }
}

export default new ClientService();

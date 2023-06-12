import { HttpClient } from "../HttpClient/httpClient";

class CityService extends HttpClient {
  constructor() {
    super("https://localhost:7136/api");
  }

  async getAll() {
    return await this.get("Cities/all", {});
  }
  async getById(id: number) {
    return await this.get(`cities/${id}`);
  }
}

export const cityService = new CityService();

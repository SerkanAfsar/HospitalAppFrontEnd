import { BaseService } from "./Base.Service";
export const GetAllCities = async () => {
  const result = await BaseService({ apiUrl: "Cities", method: "Get" });
};

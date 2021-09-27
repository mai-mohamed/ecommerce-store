import { axiosInstance } from "../../network/base";

export const getAllProducts = async (params) =>
  await axiosInstance.get("product", { params });

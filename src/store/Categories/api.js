import { axiosInstance } from "../../network/base";

export const getAllCategories = async () => await axiosInstance.get("category");

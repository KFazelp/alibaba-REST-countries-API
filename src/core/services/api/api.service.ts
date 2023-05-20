import axios from "axios";
import { HttpRequest, HttpResponse } from "@/core/types/http.types";

type NetworkProps = {
  request: HttpRequest;
};

const apiService = async (
  { request }: NetworkProps
) => {
  try {
    const response = (await axios.request({
      method: request.method || "GET",
      url: request.url,
      headers: {
        "Content-Type": "application/json",
        ...request.headers,
      },
      params: ["GET", "DELETE"].includes(request.method || "GET")
        ? request.data
        : {},
      data: ["PUT", "POST"].includes(request.method || "GET")
        ? request.data
        : {},
    })) as HttpResponse;

    return response;
  } catch (error: any) {
    const {
      response: { status = "", statusText = "", headers = {}, data = null },
    } = error;

    const message = "Something went wrong! please try agina later.";

    throw {
      status,
      statusText,
      headers,
      message: message,
    } as HttpResponse;
  }
};

export default apiService;

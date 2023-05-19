import axios from "axios";
import { apiUrl } from "../services/api/urls/base.url";

axios.defaults.baseURL = apiUrl();

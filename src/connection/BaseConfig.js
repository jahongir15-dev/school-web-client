import {BASE_URL} from "./BaseUrl.js";
import axios from "axios";

export const BASE_CONFIG = {
    doGet: (url) => axios.get(
        `${BASE_URL}${url}`
    ),
    doGetOne: (url, id) => axios.get(
        `${BASE_URL}${url}/${id}`
    )
}

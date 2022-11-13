import http from "../services/http";

export function addNumberToHistory(data = {}) {
    return http('/numbers', "POST", data);
}
  
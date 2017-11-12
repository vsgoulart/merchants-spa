const apiUrl = process.env.API_URL || "http://localhost:3001";
const resource = { merchants: "merchants" };

export const listMerchants = (pagination = "") =>
  fetchList(resource.merchants, pagination).then(response => response.json());

export const getMerchant = id =>
  fetchGet(resource.merchants, id).then(response => response.json());

const fetchList = (resource, page) =>
  fetch(`${apiUrl}/${resource}/${mountQueryString({ page })}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  });
const mountQueryString = params => {
  if (params) {
    const paramsNames = Object.keys(params);

    return "?" + paramsNames.map(name => `${name}=${params[name]}`).join("&");
  } else {
    return "";
  }
};
const fetchGet = (resource, id) =>
  fetch(`${apiUrl}/${resource}/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  });
//eslint-disable-next-line
const fetchCreate = (resource, data) =>
  fetch(`${apiUrl}/${resource}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(data)
  });
//eslint-disable-next-line
const fetchUpdate = (resource, id, data) =>
  fetch(`${apiUrl}/${resource}/${id}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(data)
  });
//eslint-disable-next-line
const fetchDelete = (resource, id) =>
  fetch(`${apiUrl}/${resource}/${id}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });

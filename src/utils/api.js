const apiUrl = process.env.API_URL || "http://localhost:3001";
const resource = { merchants: "merchants" };

export const listMerchants = () =>
  fetchList(resource.merchants).then(response => response.json());

export const getMerchant = id =>
  fetchGet(resource.merchants, id).then(response => response.json());

export const createMerchant = merchant =>
  fetchCreate(resource.merchants, merchant).then(response => response.json());

export const updateMerchant = merchant =>
  fetchUpdate(resource.merchants, merchant.id, merchant).then(response =>
    response.json()
  );

export const deleteMerchant = id =>
  fetchDelete(resource.merchants, id).then(response => response.json());

const fetchList = (resource, page) =>
  fetch(`${apiUrl}/${resource}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  });
const fetchGet = (resource, id) =>
  fetch(`${apiUrl}/${resource}/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "GET"
  });
const fetchCreate = (resource, data) =>
  fetch(`${apiUrl}/${resource}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(data)
  });
const fetchUpdate = (resource, id, data) =>
  fetch(`${apiUrl}/${resource}/${id}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "PUT",
    body: JSON.stringify(data)
  });
const fetchDelete = (resource, id) =>
  fetch(`${apiUrl}/${resource}/${id}/`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
  });

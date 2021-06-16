import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../config.js'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }, 
  }
}

//* Sprint requests

export function addNewSprint(newSprintData) {
  return axios.post(`${baseUrl}/sprints`, newSprintData, headers())
}

export function getAllSprints() {
  return axios.get(`${baseUrl}/sprints`)
}

export function getSingleSprint(sprintId) {
  return axios.get(`${baseUrl}/sprints/${sprintId}`)
}

// export function editSprint(id, formdata) {
//   return axios.put(`${baseUrl}/sprints/${id}`, formdata, headers())
// }

// export function deleteSprint(id) {
//   return axios.delete(`${baseUrl}/sprints/${id}`, headers())
// }


// * AUTH / USER REQUESTS

export function registerUser(formData) {
  return axios.post(`${baseUrl}/register`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseUrl}/login`, formData)
}

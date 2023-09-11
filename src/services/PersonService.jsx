import React from "react";
import axios from "axios";


const baseUrl = '/api/persons'

  const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const nameTakeOut = (id) => {

  const request = axios.delete(`/api/persons/${id}`)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const update = (id, newPerson) => {
  const request = axios.put(`/api/persons/${id}`,  newPerson)
  return request.then(response => response.data)

}
const PersonService = {getAll, nameTakeOut, create , update }

  export default PersonService


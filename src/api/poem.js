import apiUrl from '../apiConfig'
import axios from 'axios'

export const createPoem = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/poems/',
    data: {
      poem: data
    },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const indexPoems = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/poems/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const showPoem = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/poems/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

// WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS WORDS 

export const indexWords = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/poems/' + id + '/words/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const createWord = (data, id, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/poems/' + id + '/words/',
    data: {
      poem: data
    },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
import apiUrl from '../apiConfig'
import axios from 'axios'

// POEMS POEMS POEMS POEMS POEMS POEMS POEMS POEMS POEMS POEMS POEMS POEMS 
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

export const deletePoem = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/poems/' + id,
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const updatePoem = (data, id, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/poems/' + id +'/',
    data: {
      poem: data
    },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
// PUBLIC POEMS PUBLIC POEMS PUBLIC POEMS 
export const indexPublicPoems = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/publicpoems/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const indexPublicWords = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/publicwords/',
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
      word: data
    },
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const deleteWord = ( poemId, wordId, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/poems/' + poemId + '/words/' + wordId + '/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}

export const getWordList = ( user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/wordlist/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
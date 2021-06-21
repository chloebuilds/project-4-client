//* TOKEN FUNCTIONS
export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function removeToken() {
  window.localStorage.removeItem('token')
}

export function getPayload() {
  const token = getToken()
  const parts = token?.split('.')
  if (!token || parts.length < 3) {
    console.log()
    return false
  }
  console.log(JSON.parse(atob(parts[1])))
  return JSON.parse(atob(parts[1]))
}

export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) {
    return false
  }

  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function isOwner(userId) {
  const payload = getPayload()
  if (!payload) {
    return false
  }
  return userId === payload.userId
}

export function getAPIUrl (url) {
  const domain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://43.247.90.152'
  return `${domain}${url}`
}

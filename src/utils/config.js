export function getAPIUrl (url) {
  const domain = process.env.NODE_ENV === 'development' ? 'https://hiq68.com' : 'https://hiq68.com'
  return `${domain}${url}`
}

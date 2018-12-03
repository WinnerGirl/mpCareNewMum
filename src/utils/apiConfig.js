/**
 * 接口配置，组装可供调用的URL
 * @param url url地址
 * @return {string} 域名+动态的接口路径
 */
export function getAPIUrl (url) {
  const domain = process.env.NODE_ENV === 'development' ? 'http://192.168.184.161:3000' : 'http://43.247.90.152'
  return `${domain}${url}`
}

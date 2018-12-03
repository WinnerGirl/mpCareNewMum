import fetch from '../utils/request'

export const login = (data) => fetch.get('/users/3rdsession', data)
export const postUserinfo = (data) => fetch.post('/users/info', data)
export const getRepairinfo = (data) => fetch.get('/users/repairinfo', data)
export const postRepairinfo = (data) => fetch.post('/users/repairinfo', data)
export const getCourse = (data) => fetch.get('/repair/course', data)
export const getTheme = (data) => fetch.get('/repair/theme', data)
export const getAction = (data) => fetch.get('/repair/action', data)
export const postStartClass = (data) => fetch.post('/repair/start', data)
export const postEndClass = (data) => fetch.post('/repair/end', data)
export const postComment = (data) => fetch.post('/repair/comment', data)
export const errorOne = () => fetch.post('/error/1')
export const tokenTimeOut = () => fetch.post('/error/304')

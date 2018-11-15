import fetch from '../utils/request'

export const getGames = () => fetch.get('game/public/index.php/getGames')

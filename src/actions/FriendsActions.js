import 'whatwg-fetch'
import parseLinkHeader from 'parse-link-header'
import { GET_FRIENDS } from '../constants/ActionTypes'

const DATA_API = '/data';

export function getFriends () {
    return dispatch => {
        fetch(`${DATA_API}/friends.json`)
            .then(res => res.json())
            .then(res => dispatch({
                type: GET_FRIENDS,
                friends: res
            }))
    }
}
import { GET_FRIENDS } from '../constants/ActionTypes';

export default function friends(state = [], action) {
    switch (action.type) {
        case GET_FRIENDS:
            return action.friends;
        default:
            return state;
    }
}

import axios from 'axios';

const initialState = {
    firstName: '',
    lastName: '',
    address: '',
    age: null,
    interests: [
        'soccer',
        'cooking',
        'kite flying'
    ],
    picture: '',
    loading: false,
    results: [],
    searching: false,
}

const UPDATE_STATE = 'UPDATE_STATE';
const SUBMIT = 'SUBMIT';
const SEARCH = 'SEARCH';
const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const RESET = 'RESET';

export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, [payload.prop]: payload.val }
        case SUBMIT + _PENDING:
            return { ...state, loading: true }
        case SUBMIT + _FULFILLED:
            return { ...state, loading: false }
        case SEARCH + _PENDING:
            return { ...state, loading: true }
        case SEARCH + _FULFILLED:
            return { ...state, loading: false, results: payload, searching: true }
        case RESET:
            return { ...state, results: [], searching: false }
        default:
            return state
    }
}

export function handleInput(prop, val) {
    return {
        type: UPDATE_STATE,
        payload: { prop, val }
    }
}

export function submitPerson(body) {
    const promise = axios.post('/person', body).then(res => res.data)
    return {
        type: SUBMIT,
        payload: promise
    }
}

export function search(val) {
    const promise = axios.get(`/person?name=${val}`).then(res => res.data);
    return {
        type: SEARCH,
        payload: promise
    }
}

export function reset() {
    return {
        type: RESET
    }
}
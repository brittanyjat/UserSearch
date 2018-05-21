import axios from 'axios';

const initialState = {
    firstName: null,
    lastName: null,
    address: null,
    age: null,
    interest1: '',
    interest2: '',
    interest3: '',
    interest4: '',
    picture: 'https://res.cloudinary.com/dtkadxjhq/image/upload/v1526689504/bzi0yuvxegpzga9teyuc.png',
    loading: false,
    results: [],
    searching: false,
    modalDisplay: 'search',
    photoLoading: false,
    searchTerm: null
}

const UPDATE_STATE = 'UPDATE_STATE';
const SEARCH = 'SEARCH';
const _PENDING = '_PENDING';
const _FULFILLED = '_FULFILLED';
const RESET = 'RESET';
const TOGGLE = 'TOGGLE';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

export default function reducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, [payload.prop]: payload.val }
        case SEARCH + _PENDING:
            return { ...state, loading: true }
        case SEARCH + _FULFILLED:
            return { ...state, loading: false, results: payload, searching: true }
        case RESET:
            return Object.assign({}, state, initialState);
        case TOGGLE:
            return { ...state, modalDisplay: payload }
        case TOGGLE_LOADING:
            return { ...state, photoLoading: !state.photoLoading }
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

export function toggleModal(prop) {
    return {
        type: TOGGLE,
        payload: prop
    }
}

export function forceLoading() {
    return {
        type: TOGGLE_LOADING
    }
}

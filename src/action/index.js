import {SEARCH_PROJECTS_ERROR, 
    SEARCH_PROJECTS_PENDING, 
    SEARCH_PROJECTS_SUCCESS,
    SET_SEARCH_FIELD, 
    FETCH_PROJECTS_FAILED,
    FETCH_PROJECTS_PENDING,
    FETCH_PROJECTS_SUCCESS
} from './constants'

import firebaseDb from '../config/firebase'

export const searchProjects = searchValue => async (dispatch) => {
    dispatch({type: SEARCH_PROJECTS_PENDING})
    firebaseDb.ref('projects_basic')
                .orderByKey()
                .startAt(searchValue)
                .endAt(searchValue+"\uf8ff")
                .once('child_added', snapshot => dispatch({type: SEARCH_PROJECTS_SUCCESS, payload: snapshot.val()}), error => dispatch({type: SEARCH_PROJECTS_ERROR, payload: error}) )
    console.log('Search Project successful!')
}

export const fetchAllProjects = () => async dispatch => {
    dispatch({type: FETCH_PROJECTS_PENDING})
    firebaseDb.ref('projects_basic')
                .once('value', snapshot => dispatch({type: FETCH_PROJECTS_SUCCESS, payload: snapshot.val()}), error => dispatch({type:FETCH_PROJECTS_FAILED, payload: error}))
}

export const setSearchField = text => {
    return {type: SET_SEARCH_FIELD, payload: text}
}
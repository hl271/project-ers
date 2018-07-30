import {SEARCH_PROJECTS_ERROR, 
    SEARCH_PROJECTS_PENDING, 
    SEARCH_PROJECTS_SUCCESS,
    SET_SEARCH_FIELD} from './constants'

import firebaseDb from '../config/firebase'

export const searchProjects = searchValue => async (dispatch) => {
    dispatch({type: SEARCH_PROJECTS_PENDING})
    firebaseDb.ref('projects_basic')
                .orderByKey()
                .equalTo(searchValue)
                .once('child_added', snapshot => dispatch({type: SEARCH_PROJECTS_SUCCESS, payload: snapshot.val()}))
    console.log('Search Project successful!')
}

export const setSearchField = text => {
    return {type: SET_SEARCH_FIELD, payload: text}
}
import {combineReducers} from 'redux'

import {SEARCH_PROJECTS_ERROR, 
    SEARCH_PROJECTS_PENDING, 
    SEARCH_PROJECTS_SUCCESS} from '../action/constants'
import { SET_SEARCH_FIELD } from '../action/constants'

const initStateSearchProject = {
    isPending: false,
    result: "",
    error: ""
}

const searchProjects = (state= initStateSearchProject, action={}) => {
    switch(action.type) {
        case SEARCH_PROJECTS_PENDING:
        return {...state, isPending: true}
        case SEARCH_PROJECTS_ERROR:
        return {...state, isPending: false, error: action.payload}
        case SEARCH_PROJECTS_SUCCESS:
        return {...state, isPending: false, result: action.payload}
        default:
        return state
    }
}

const initSearchField = {
    searchField : ""
}

const setSearchField = (state=initSearchField, action={}) => {
    if (action.type === SET_SEARCH_FIELD) {
        return {...state, searchField: action.payload}
    }
    return state
}

const rootReducer = combineReducers({searchProjects, setSearchField})
export default rootReducer
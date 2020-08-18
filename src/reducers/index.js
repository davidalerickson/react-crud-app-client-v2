import { combineReducers } from 'redux'
//hook up redux-form
import  { reducer as formReducer} from 'redux-form'
import AuthReducer from './AuthReducer'



export default combineReducers({
    auth: AuthReducer,
    form: formReducer
})
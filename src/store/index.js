import { legacy_createStore as createStore } from 'redux'
import updateLoginState from './reducer'

const store = createStore(updateLoginState)

export default store
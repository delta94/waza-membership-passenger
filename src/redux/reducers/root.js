import { combineReducers } from 'redux'
import { authReducer } from './auth'
import { activeComboReducer } from './actice-combo'
import { myComboReducer } from './my-combo'
import { rankReducer } from './rank-reducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    activeCombo: activeComboReducer,
    myCombo: myComboReducer,
    rank: rankReducer
})
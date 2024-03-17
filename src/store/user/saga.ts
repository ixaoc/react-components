//import { call, put, takeLatest } from 'typed-redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { User } from 'services/api'
import { navigate } from 'services/navigator'
import { actions } from './'

const {
  login,
  loginSuccess
} = actions

export function* loginSaga({payload}: {
  type: string
  payload: {
    username: string, 
    password: string
  }
}) {
  try {
    const { data } = yield call(User.login, payload)
    yield put(loginSuccess(data))
    //yield call(navigate, '/lessons')
    navigate('/lessons')
  } catch (error) {
    //yield put(loginFail(data))
  }
}

export function* watchUser () {
    yield takeLatest(login.type, loginSaga)
    
}

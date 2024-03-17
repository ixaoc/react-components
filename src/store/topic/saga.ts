//import { call, put, takeLatest } from 'typed-redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'
import { Topic } from 'services/api'
import { actions } from './'

const {
  list,
  listSuccess
} = actions

export function* listSaga({payload}: {
  type: string
  payload: {page?: number}
}) {
  try {
    const { data } = yield call(Topic.list)
    console.log(data)
    yield put(listSuccess(data.items))
  } catch (error) {
    //yield put(listFail(data))
  }
}

export function* watchTopic () {
    yield takeLatest(list.type, listSaga)
    
}

// When the API triggered and after response have arrived, Redux-Saga dispatch "NEWS_RECEIVED" action.
import { put, takeLatest, all } from 'redux-saga/effects'

// Redux-Saga use ES6 Generators with '*' and 'yield'
// 'fetchNews' function call API asynchronously when 'GET_NEWS' action dispatched
// And dispatch next action which is 'NEWS_RECEIVED'.
function * fetchNews () {
  const json = yield fetch(
    'https://newsapi.org/v2/top-headlines?country=tr&category=science&from=2022-01-20&to=2022-01-20&sortBy=popularity&apiKey=c39a26d9c12f48dba2a5c00e35684ecc'
  ).then((response) => response.json())

  yield put({ type: 'NEWS_RECEIVED', json: json.articles })
}

// Export 'fetchNews' function from this file to 'rootSaga' with 'actionWatcher' function.
// Redux-Saga wait 'GET_NEWS' action to get dispatched.
// When 'GET_NEWS' action is dispatched to call 'fetchNews' function.
function * actionWatcher () {
  yield takeLatest('GET_NEWS', fetchNews)
}

// RootSaga listens actions
export default function * rootSaga () {
  yield all([actionWatcher()])
}

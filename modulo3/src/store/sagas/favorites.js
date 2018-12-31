import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { addFavoriteSuccess, addFavoriteFailure } from '~/store/actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);
    const isDuplicated = favorites.find(favorite => favorite.id === response.data.id);

    if (isDuplicated) {
      yield put(addFavoriteFailure('Repositório duplicado'));
    } else {
      yield put(addFavoriteSuccess(response.data));
    }
  } catch (error) {
    yield put(addFavoriteFailure('Repositório não existe'));
  }
}

import { call, all, put, fork } from 'redux-saga/effects';

import { searchApi, getLatestTag } from "../api/github";
import { updateSearchList } from "../actions/searchList";

export function* startSearch(action = {}){
    const { item } = action;
    const { response, error } = yield call(searchApi, item);
    if (response) {
        const result = yield all(response.items.map(r => call(latestTag, r)));
        yield put(updateSearchList(result));
    } else {
        console.log(error);
    }
}

export function* latestTag(r) {
    const url = r['tags_url'];
    const { version, err } = yield call(getLatestTag, url);
    const obj = {
        id: r.id,
        name: r['full_name'],
        language: r.language,
    };
    if (version && version.length>0) {
        return {
            ...obj,
            tag: version[0].name,
        }
    }
    return obj;
}
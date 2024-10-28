import { createReducer } from '@reduxjs/toolkit';
import {
    fetchNewsError,
    fetchNewsSuccess,
    handleFetchNews,
} from '../actions/actions';

const initialState = {
    data: null || <any>[],
    loading: false,
    message: '',
};

const newsReducer = createReducer(initialState, builder => {
    builder
        .addCase(handleFetchNews, state => {
            state.loading = true;
        })
        .addCase(fetchNewsSuccess, (state, action) => {
            (state.loading = false),
                (state.data = action.payload.data),
                (state.message = action.payload.message);
        })
        .addCase(fetchNewsError, (state, action) => {
            (state.loading = false),
                (state.data = action.payload.data),
                (state.message = action.payload.message);
        });
});

export { newsReducer };
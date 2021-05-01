import { createAction } from '@reduxjs/toolkit';

export const getNewsItems = createAction('getNewsItems');

export const updateLike = createAction('updateLike');

export const deleteLike = createAction('deleteLike');

import {UPDATE_FIELD, RESET_FILTERS} from './constants';


export const updateField = (fieldName, fieldVal) => ({
  type: UPDATE_FIELD,
  payload: {
    fieldName,
    fieldVal,
  },
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});

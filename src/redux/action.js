import { UPDATE_FIELD } from "./constants";
import { SUBMIT_FORM } from "./constants";
export const updateField = (name, value) => {
  return {
    type: UPDATE_FIELD,
    payload: { name, value }
  };
};
export const submitForm = (payload) => {
  return {
    type: SUBMIT_FORM,
    payload
  };
};

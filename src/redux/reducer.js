import { UPDATE_FIELD } from "./constants";
import { SUBMIT_FORM } from "./constants";
const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  dob: "",
  email: "",
  password: "",
  confPass: "",
  city: "",
  mobile: "",
  pincode: ""
};

export const registrationFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case SUBMIT_FORM:
      // handle form submission here
      return state;
    default:
      return state;
  }
};

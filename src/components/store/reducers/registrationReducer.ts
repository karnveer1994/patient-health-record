import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
} from '../actions/types';

interface RegistrationState {
  isLoading: boolean;
  isSuccess: boolean;
  errors: { [key: string]: string };
}

const initialState: RegistrationState = {
  isLoading: false,
  isSuccess: false,
  errors: {},
};

type RegistrationAction =
  | { type: typeof REGISTRATION_REQUEST }
  | { type: typeof REGISTRATION_SUCCESS }
  | { type: typeof REGISTRATION_FAILURE; payload: { [key: string]: string } };

const registrationReducer = (
  state = initialState,
  action: RegistrationAction
): RegistrationState => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        errors: {},
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        errors: {},
      };
    case REGISTRATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default registrationReducer;

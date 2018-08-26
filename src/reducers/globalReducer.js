import { TEST_ACTION, ASYNC_TEST, AWAIT_TEST, RESULTS_TEST} from '../actions/types';

const initialState = {
  ROOT_URL: 'https://qaapi.thevirtualwarehouse.co.uk/api/',
  test: '',
};

export default function(state = initialState, action) {
  switch (action.type) {

    case TEST_ACTION:
    return {
      ...state,
      result1: action.payload
    }
    
    case ASYNC_TEST:
    return {
      ...state,
      users: action.users,
      result1: action.result1, 
      result2: action.result2, 
      result3: action.result3, 
      result4: action.result4, 
      result5: action.result5, 
      result6: action.result6, 
      result7: action.result7, 
      result8: action.result8, 
    }

    case AWAIT_TEST:
    return {
      ...state,
      result3: action.payload,
    }

    case RESULTS_TEST:
    return {
      ...state,
      result4: action.payload,
    }

    default:
    return state;
  }
}
import { TEST_ACTION, ASYNC_TEST, AWAIT_TEST, RESULTS_TEST} from '../actions/types';

const initialState = {
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
      result9: action.result9, 
      result10: action.result10, 
      result11: action.result11, 
      result12: action.result12, 
      result13: action.result13, 
      result14: action.result14, 
      result15: action.result15, 
      result16: action.result16, 
      result17: action.result17, 
      result18: action.result18, 
      result19: action.result19, 
      result20: action.result20, 
      result21: action.result21, 
      result22: action.result22, 
      result23: action.result23, 
      result24: action.result24, 
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
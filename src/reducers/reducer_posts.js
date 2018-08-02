import _ from 'lodash';
import { FETCH_POSTS } from '../actions';           // ??

export default function(state = {}, action) {
  // Switch on Action type
  switch(action.type){
    case FETCH_POSTS:
      console.log(action.payload.data);           // Should be array of post objects
      // Need to transform array into an object that has key of post id and value of the post
      return _.mapKeys(action.payload.data, 'id');// Map keys to object and return new state object 
    default:
      return state;
  }
}

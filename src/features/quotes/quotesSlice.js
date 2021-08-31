// Action Creators
// TODO: Create action creators as defined in tests

// Reducer
const initialState = [];

export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote,
  };
}
export function removeQuote(quoteId) {
  return {
    type: "quotes/remove",
    payload: quoteId,
  };
}
export function upvoteQuote(quoteId) {
  return {
    type: "quotes/upvote",
    payload: quoteId,
  };
}
export function downvoteQuote(quoteId) {
  return {
    type: "quotes/downvote",
    payload: quoteId,
  };
}
export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case `quotes/add`:
      return [...state, action.payload];
    case `quotes/remove`:
      return [...state.filter((item) => item.id !== action.payload)];
    case `quotes/upvote`:
      let upvoted = state.find((item) => item.id === action.payload);
      upvoted.votes += 1;
      return [...state];
    case `quotes/downvote`:
      let downvoted = state.find((item) => item.id === action.payload);
      if(downvoted.votes>0)
      downvoted.votes -= 1;
      else downvoted.votes = 0;

      return [...state];
    default:
      return state;
  }
}

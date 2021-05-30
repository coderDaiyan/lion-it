const initialState = {
  reviews: [],
};

export const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REVIEW": {
      const newReview = {
        ...state,
        reviews: [...state.reviews, action.payload],
      };
      return newReview;
    }
    default:
      return state;
  }
};

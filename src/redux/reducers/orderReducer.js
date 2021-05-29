const initialState = {
  allOrders: [],
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ORDER": {
      const newOrder = {
        ...state,
        allOrders: [...state.allOrders, action.payload],
      };
      return newOrder;
    }
    default: {
      return state;
    }
  }
};

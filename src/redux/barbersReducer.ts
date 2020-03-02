const SET_BARBERS = "SET_BARBERS";

export type BarberType = {
  name: string;
  age: string;
};
export type InitialBarbersStateType = {
  barbers: Array<BarberType>;
};

let initialState: InitialBarbersStateType = {
  barbers: [
    { name: "Jeremy", age: "32" },
    { name: "Dominic", age: "29" },
    { name: "Rafael", age: "37" },
    { name: "Roger", age: "35" },
    { name: "Alex", age: "30" },
    { name: "Carlos", age: "35" }
  ]
};

export const barbersReducer = (
  state = initialState,
  action: any
): InitialBarbersStateType => {
  switch (action.type) {
    case SET_BARBERS: {
      return {
        ...state,
        ...state.barbers
      };
    }
    default:
      return state;
  }
};

type GetBarbersActionType = {
  type: typeof SET_BARBERS;
};
export const getBarbers = (): GetBarbersActionType => ({
  type: SET_BARBERS
});

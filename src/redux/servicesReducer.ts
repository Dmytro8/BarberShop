const SET_SERVICES = "SET_SERVICES";

export type ServiceType = {
  title: string;
  description: string;
  cost: string;
};
export type InitialServicesStateType = {
  services: Array<ServiceType>;
};

let initialState = {
  services: [
    {
      title: "Haircut",
      description:
        "Lorem ipsum dolor sit amet consectetur, \
        adipisicing elit. Reiciendis sint tempora quisquam eos, \
        eaque excepturi.",
      cost: "50"
    },
    {
      title: "Buzz cut",
      description:
        "Lorem ipsum dolor sit, amet \
        consectetur adipisicing elit. Sapiente officia magni \
        perferendis assumenda repellendus? Corporis odio illum \
        adipisci provident consequuntur.",
      cost: "40"
    },
    {
      title: "Shave and a haircut",
      description:
        "Lorem ipsum dolor, \
        sit amet consectetur adipisicing elit. \
        Unde, nesciunt.",
      cost: "80"
    },
    {
      title: "Beard trim & 1/2 shave",
      description:
        "Lorem ipsum dolor, \
        sit amet consectetur adipisicing elit. \
        Unde, nesciunt.",
      cost: "30"
    },
    {
      title: "Straight razor shave",
      description:
        "Lorem ipsum dolor sit, amet \
        consectetur adipisicing elit. Sapiente officia magni \
        perferendis assumenda repellendus? Corporis odio illum \
        adipisci provident consequuntur.",
      cost: "50"
    },
    {
      title: "Simple beard trim",
      description:
        "Lorem ipsum dolor, \
        sit amet consectetur adipisicing elit. \
        Unde, nesciunt.",
      cost: "25"
    },
    {
      title: "Complimentary trim",
      description:
        "Lorem ipsum dolor sit amet \
        consectetur adipisicing elit. Autem \
        veniam provident maiores corrupti.",
      cost: "compliment"
    }
  ]
};

export const servicesReducer = (
  state = initialState,
  action: any
): InitialServicesStateType => {
  switch (action.type) {
    case SET_SERVICES: {
      return {
        ...state,
        ...state.services
      };
    }
    default:
      return state;
  }
};

type GetServicesActionType = {
  type: typeof SET_SERVICES;
};
export const getServices = (): GetServicesActionType => ({
  type: SET_SERVICES
});

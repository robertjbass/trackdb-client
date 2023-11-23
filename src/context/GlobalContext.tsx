import { createContext, useReducer, ReactNode } from 'react';

type State = {
  user: any | null;
};

const initialState: State = {
  user: null,
};

enum ActionType {
  SET_USER = 'SET_USER',
}

export const reducer = (
  state: State,
  action: {
    type: keyof typeof ActionType;
    payload: any;
  },
) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

type GlobalContextType = {
  user: State['user'];
  setUser: (newUser: State['user']) => void;
};

export const GlobalContext = createContext<GlobalContextType>(
  {} as GlobalContextType,
);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue: GlobalContextType = {
    ...state,

    //* mutations
    setUser: (newUser: State['user']) => {
      dispatch({ type: ActionType.SET_USER, payload: newUser });
    },
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

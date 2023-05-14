import { createContext, useContext, useState, ReactNode } from "react";
import { Cart } from "../interfaces/interface";
import { localCart } from "../types/type";

type notificationType = {
  message: string;
  status: string;
};

type stateType = {
  show: boolean;
  cart: localCart | undefined;
};

type GlobalType = {
  notification: notificationType;
  setNotification?: React.Dispatch<React.SetStateAction<notificationType>>;
  handleSetNotification: ({ message, status }: notificationType) => void;
  state: stateType;
  setState: React.Dispatch<React.SetStateAction<stateType>>;
  handleSetCartNotification: (cart: localCart) => void;
};

const stateInitialValue = {
  message: "",
  status: "",
};

const stateInitialValueTwo: stateType = {
  show: false,
  cart: undefined,
};

const initialValue: GlobalType = {
  notification: stateInitialValue,
  setNotification: () => {},
  handleSetNotification: () => {},
  state: stateInitialValueTwo,
  setState: () => {},
  handleSetCartNotification: () => {},
};

const GlobalContext = createContext<GlobalType>(initialValue);

export const GlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [notification, setNotification] =
    useState<notificationType>(stateInitialValue);
  const [state, setState] = useState(stateInitialValueTwo);

  ///App notification
  const handleSetNotification = ({ message, status }: notificationType) => {
    setNotification({ ...notification, message, status });

    if (message) {
      document.querySelector(".notification")?.classList.add("active");
    }

    setTimeout(() => {
      document.querySelector(".notification")?.classList.remove("active");
      setNotification(stateInitialValue);
    }, 3000);
  };

  ///Cart notification
  const handleSetCartNotification = (cart: localCart) => {
    setState({ ...state, cart: cart });

    setTimeout(() => {
      setState({ ...state, cart: undefined });
    }, 5000);
  };

  return (
    <GlobalContext.Provider
      value={{
        notification,
        handleSetNotification,
        state,
        setState,
        handleSetCartNotification,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export default GlobalContext;

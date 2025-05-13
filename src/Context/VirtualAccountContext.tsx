import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface BetContextType {
  view: boolean;
  setView: Dispatch<SetStateAction<boolean>>;
}

const VirtualAccountContext = createContext<BetContextType | null>(null);

export function VirtualAccountContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [view, setView] = useState<boolean>(false);

  return (
    <VirtualAccountContext.Provider
      value={{
        view,
        setView,
      }}
    >
      {children}
    </VirtualAccountContext.Provider>
  );
}

export function useVirtualAccountContext() {
  const context = useContext(VirtualAccountContext);
  if (!context) {
    throw new Error("useBetContext must be used within a BetContextProvider");
  }
  return context;
}

import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

/**
 * This function generates a basic Provider and a hook to consume and mutate the data
 * within that provider. Note: This should not be used within a component.
 * It should be generated and exported in a separate file.
 *
 * Once generated, the provider can be used very similarly to `useState`
 * ```
 */
export default function createProvider<T>(
  initialData: T
): [() => [T, Dispatch<SetStateAction<T>>], React.FC] {
  const Context = createContext<[T, Dispatch<SetStateAction<T>>]>([
    initialData,
    () => null,
  ]);

  const Provider: React.FC = ({ children }) => {
    const [state, setState] = useState<T>(initialData);

    return (
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    );
  };

  const useProvider = () => useContext(Context);

  return [useProvider, Provider];
}

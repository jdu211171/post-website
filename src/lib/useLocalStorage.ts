import * as React from 'react';

// Define a type for the hook that includes a loading state and a value of type T or null
type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

// Create a generic hook for async local storage state
function useAsyncLocalStorageState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return React.useReducer(
    (_state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;
}

// Update the setLocalStorageItemAsync function to handle serialization
export async function setLocalStorageItemAsync<T>(key: string, value: T | null) {
  if (value === null) {
    localStorage.removeItem(key);
  } else {
    // Serialize the value to a string before storing it
    localStorage.setItem(key, JSON.stringify(value));
  }
}

// Update the useLocalStorage hook to handle deserialization and make it generic
export function useLocalStorage<T>(key: string, initialValue: T | null = null): UseStateHook<T> {
  // Public
  const [state, setState] = useAsyncLocalStorageState<T>([true, initialValue]);

  // Get
  React.useEffect(() => {
    try {
      if (typeof localStorage !== 'undefined') {
        // Deserialize the stored string back into its original type
        const item = localStorage.getItem(key);
        setState(item ? JSON.parse(item) : initialValue);
      }
    } catch (e) {
      console.error('Local storage is unavailable:', e);
    }
  }, [key]);

  // Set
  const setValue = React.useCallback(
    (value: T | null) => {
      setState(value);
      setLocalStorageItemAsync(key, value);
    },
    [key]
  );

  return [state, setValue];
}

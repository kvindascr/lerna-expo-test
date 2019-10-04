import { StoreContext } from './StoreContext';
import { useContext } from 'react';
export function useStore() {
    return useContext(StoreContext);
}

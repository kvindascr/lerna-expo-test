import { RootStore } from './Store';
import React from 'react';

let id = 1;
const store = RootStore.create({
    users: {},
    todos: {
        "1": {
            id: id,
            name: "Eat a cake",
            done: true
        }
    }
});

const StoreContext = React.createContext(store);

export {
    StoreContext
}

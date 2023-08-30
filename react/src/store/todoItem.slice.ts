import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoItemsState {
    items: string[];
    viewItem: string;
}

const initialTodoItemsState: TodoItemsState = {
    items: [],
    viewItem: '',
};

const resetItems = (state: TodoItemsState) => {
    state.items = [];
};

const addItem = (state: TodoItemsState, action: PayloadAction<string>) => {
    state.items.push(action.payload);
};

const setViewItem = (state: TodoItemsState, action: PayloadAction<string>) => {
    state.viewItem = action.payload;
};

const todoItemsSlice = createSlice({
    name: 'todoItemSlice',
    initialState: initialTodoItemsState,
    reducers: {
        addItem,
        resetItems,
        setViewItem,
    },
});

const todoItemSliceActions = todoItemsSlice.actions;

export default todoItemsSlice;
export { todoItemSliceActions };

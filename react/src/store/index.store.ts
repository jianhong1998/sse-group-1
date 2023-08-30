import { configureStore } from '@reduxjs/toolkit';
import todoItemsSlice from './todoItem.slice';
import { useDispatch, useSelector } from 'react-redux';

const store = configureStore({
    reducer: {
        todoItemsSlice: todoItemsSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;
const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
export { useAppDispatch, useAppSelector };

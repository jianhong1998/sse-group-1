import TodoListPage from './view/todoList/TodoList.page';
import { Route, Routes } from 'react-router-dom';
import {} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import store from './store/index.store';
import ViewTodoItemPage from './view/viewTodoItem/ViewTodoItem.page';

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/'>
                    <Route element={<TodoListPage />} index />
                    <Route path='/todo-item' element={<ViewTodoItemPage />} />
                </Route>
            </Routes>
        </Provider>
    );
}

export default App;

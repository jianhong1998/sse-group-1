import CalculatorPage from './view/calculator/Calculator.page';
import TodoListPage from './view/todoList/TodoList.page';
import { Route, Routes } from 'react-router-dom';

function App() {
    // return <Calculator />;
    // return <TodoListPage />;
    return (
        <Routes>
            <Route path='/' element={<CalculatorPage />} index />
            <Route path='/todo' element={<TodoListPage />} />
        </Routes>
    );
}

export default App;

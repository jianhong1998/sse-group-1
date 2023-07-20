import TodoList from '../../components/todoList/TodoList';
import styles from './TodoList.module.css';
import { ChangeEventHandler, FC, MouseEventHandler, useState } from 'react';

const TodoListPage: FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');

    const addButonOnClickHandler: MouseEventHandler<HTMLButtonElement> = (
        e,
    ) => {
        e.preventDefault();

        setItems([...items, value]);
        setValue('');
    };

    const inputOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;

        setValue(inputValue);
    };

    return (
        <>
            <div>
                <input
                    type='text'
                    className={styles.todoListInput}
                    value={value}
                    onChange={inputOnChangeHandler}
                />
                <button
                    className={styles.addButton}
                    onClick={addButonOnClickHandler}
                >
                    Add
                </button>
            </div>
            <div className={styles.todoListContainer}>
                <TodoList items={items} />
            </div>
        </>
    );
};

export default TodoListPage;

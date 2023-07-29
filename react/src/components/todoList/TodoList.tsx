import TodoItem from './TodoItem';
import styles from './todoList.module.css';

import { FC } from 'react';

interface TodoListProps {
    items: string[];
}

const TodoList: FC<TodoListProps> = ({ items }) => {
    return (
        <div className={styles.listContainer}>
            {items.map((item, index) => (
                <TodoItem item={item} key={index} />
            ))}
        </div>
    );
};

export default TodoList;

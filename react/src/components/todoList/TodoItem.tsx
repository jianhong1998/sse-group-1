import styles from './todoItem.module.css';

import { FC } from 'react';

interface TodoItemProps {
    item: string;
}

const TodoItem: FC<TodoItemProps> = ({ item }) => {
    return <div className={styles.itemContainer}>{item}</div>;
};

export default TodoItem;

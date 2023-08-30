import TodoItem from './TodoItem';

import { FC } from 'react';

interface TodoListProps {
    items: string[];
}

const TodoList: FC<TodoListProps> = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <TodoItem item={item} key={index} clickable={true} />
            ))}
        </div>
    );
};

export default TodoList;

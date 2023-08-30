import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/index.store';
import { todoItemSliceActions } from '../../store/todoItem.slice';
import classes from './todoItem.module.css';

import { FC, useRef } from 'react';

interface TodoItemProps {
    item: string;
    clickable?: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ item, clickable }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const { setViewItem } = todoItemSliceActions;
    const dispatch = useAppDispatch();

    const onClickHandler = () => {
        dispatch(setViewItem(item));
        linkRef.current?.click();
    };

    return (
        <>
            {clickable && (
                <Link
                    to={'/todo-item'}
                    ref={linkRef}
                    className={classes.link}
                />
            )}
            <div
                className={`${classes.itemContainer} ${
                    clickable === true ? classes.clickable : ''
                }`}
                onClick={onClickHandler}
            >
                {item}
            </div>
        </>
    );
};

export default TodoItem;

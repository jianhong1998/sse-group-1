import classes from './ViewTodoItem.module.css';

import { Link } from 'react-router-dom';
import TodoItem from '../../components/todoList/TodoItem';
import RedButton from '../../components/ui/buttons/colorButton/RedButton';
import Header from '../../components/ui/header/Header';
import { useAppSelector } from '../../store/index.store';

import { FC, useRef } from 'react';

const ViewTodoItemPage: FC = () => {
    const { viewItem } = useAppSelector((state) => state.todoItemsSlice);
    const linkRef = useRef<HTMLAnchorElement>(null);

    const onClickHandler = () => {
        linkRef.current?.click();
    };

    return (
        <>
            <Header title='Todo Item' />
            <div className={classes.container}>
                <TodoItem item={viewItem} />
                <RedButton title='Back' onClickFn={onClickHandler} />
                <Link to={'/'} ref={linkRef} className={classes.link} />
            </div>
        </>
    );
};

export default ViewTodoItemPage;

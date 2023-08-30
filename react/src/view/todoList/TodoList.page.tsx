import TodoList from '../../components/todoList/TodoList';
import BlueButton from '../../components/ui/buttons/colorButton/BlueButton';
import RedButton from '../../components/ui/buttons/colorButton/RedButton';
import Header from '../../components/ui/header/Header';
import { useAppDispatch, useAppSelector } from '../../store/index.store';
import { todoItemSliceActions } from '../../store/todoItem.slice';
import styles from './TodoList.module.css';
import { ChangeEventHandler, FC, MouseEventHandler, useState } from 'react';

const TodoListPage: FC = () => {
    const { items } = useAppSelector((state) => state.todoItemsSlice);
    const { addItem, resetItems } = todoItemSliceActions;

    const dispatch = useAppDispatch();

    const [value, setValue] = useState<string>('');

    const addButonOnClickHandler: MouseEventHandler<HTMLButtonElement> = () => {
        dispatch(addItem(value));
        setValue('');
    };

    const clearAllItemsButtonOnClickHandler: MouseEventHandler<
        HTMLButtonElement
    > = () => {
        dispatch(resetItems());
    };

    const inputOnChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value;

        setValue(inputValue);
    };

    return (
        <>
            <Header title='Todo List' />
            <div className={styles.inputContainer}>
                <input
                    type='text'
                    className={styles.todoListInput}
                    value={value}
                    onChange={inputOnChangeHandler}
                />
                <div className={styles.addButtonContainer}>
                    <BlueButton
                        onClickFn={addButonOnClickHandler}
                        title='Add'
                        size={'lg'}
                    />
                </div>
                <div>
                    <RedButton
                        onClickFn={clearAllItemsButtonOnClickHandler}
                        title='Clear All Items'
                        size={'lg'}
                    />
                </div>
            </div>
            <div className={styles.todoListContainer}>
                <TodoList items={items} />
            </div>
        </>
    );
};

export default TodoListPage;

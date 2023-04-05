import React from 'react';
import { useDispatch } from 'react-redux';
import {  deleteTodo } from '../../redux/todoSlice';

const ToDoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

   

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };
    return (
        <li className={`${completed}`}>
            {title}
            <button  onClick={handleDeleteClick} >X</button>
        </li>
    );
};

export default ToDoItem;
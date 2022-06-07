import React from 'react';
import s from './ToDoItem.module.sass';
import Button from '../UI/button';

export default function ToDoItem({id, title, description, deleteTodo }) {
    return(
        <div div className={s.item} onDoubleClick ={()=>deleteTodo(id)}>
            <p>
                номер: {id}
            </p>
            <p>
                наименование: {title}
            </p>
            <p>
                Описание: {description}
            </p>
            <Button 
                onClick={()=>deleteTodo(id)} 
                styles={{width: '20px', heidth: '20px'}}
                >
                    x
                </Button>
        </div>
    )
}

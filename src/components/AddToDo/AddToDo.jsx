import React from 'react'
import Button from '../UI/button';
import s from './AddToDo.module.sass'

export default function AddToDo({ addToDo }) {

    const submit = (event) => {
        event.preventDefault();
        const { title, description } = event.target;
        addToDo(Date.now(), title.value, description.value);
        title.value = '';
        description.value = '';
    }
    return (
        <form className={s.form} onSubmit={submit}>
            <label className={s.field}>
                <p>Название</p>
                <input name='title' type="text" />
            </label>
            <label className={s.field}>
                <p>Описание</p>
                <textarea name="description"></textarea>
            </label>
            <Button />
        </form>
    )
}

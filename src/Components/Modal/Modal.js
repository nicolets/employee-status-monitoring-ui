import React from 'react';
import { useState } from 'react/cjs/react.development';
import { createUser } from '../../services/user.service';
import './Modal.css';

const statusArr = ['Working', 'On Vacation', 'Lunch Time', 'Business Trip'];

function Modal({ cb }) {

    const [username, setUsername] = useState('');
    const [selectStatus, setSelectStatus] = useState('');

    async function submit(e) {
        e.preventDefault()
        const user = {
            name: username,
            status: selectStatus
        }
        await createUser(user);
        cb();
    }

    return (
        <div className='Modal'>
            <form className='ModalForm' onSubmit={submit}>
                <h1>Create New User</h1>
                <hr />
                <div>User name:</div> <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
                <div className='statusModal'>Status: </div>
                <select name='status' value={selectStatus} onChange={e => setSelectStatus(e.target.value)}> 
                    <option value=''>choose</option>
                    {statusArr.map(status => <option value={status} key ={status}>{status}</option>)}
                </select>
                <div className='modalbtn'>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;
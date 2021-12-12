import React, { useState } from 'react';
import './Card.css';
import { updateUser } from '../../services/user.service';
import deleteIcon from './delete.svg';
import avatar from './avatar.png';

const statusArr = ['Working', 'On Vacation', 'Lunch Time', 'Business Trip'];

function Card({ id, userName, userStatus, deleteUser }) {

    const [selecStatus, setSelectStatus] = useState(userStatus);

    function changeHandler(selecStatus) {
        setSelectStatus(selecStatus);
        updateUser(id, selecStatus);
    }

    return (
        <div className='Card'>
            <div>
                <img className='avatar' src={avatar} alt='avatar' />
            </div>
            <div className='profile'>
                <div className='cardUserName'>{userName}</div>
                    <select name='status' value={selecStatus} onChange={(e) => changeHandler(e.target.value)}> 
                        <option value=''>choose</option>
                        {statusArr.map(status => <option value={status} key ={status}>{status}</option>)}
                    </select>
                    <img className='deleteIcon' src={deleteIcon} onClick={() => deleteUser(id)} />
            </div>
        </div>
    );
}

export default Card;
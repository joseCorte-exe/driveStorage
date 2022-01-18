import React from 'react'

import AddIcon from '@mui/icons-material/Add';

import Calendar from '../../assets/calendaLogo.png'
import Keeps from '../../assets/keepLogo.png'
import Task from '../../assets/tasksLogo.png'

import { SideIconsS } from './style'

export default function SideIcon() {
    return (
        <SideIconsS>
            <div>
                <img src={Calendar} alt="Calendar" />
                <img src={Keeps} alt="Keeps" />
                <img src={Task} alt="Task" />
            </div>

            <hr />

            <div>
                <AddIcon />
            </div>
        </SideIconsS>
    )
}

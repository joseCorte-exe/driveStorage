import React from 'react'
import NewFileButton from './NewFileButton'

import { SideBarS } from './style'

export default function SideBar() {
    return (
        <SideBarS>
            <header>
                <NewFileButton />

                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </header>
            <hr />
            <footer>
            </footer>
        </SideBarS>
    )
}

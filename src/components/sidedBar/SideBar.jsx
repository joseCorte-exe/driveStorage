import React from 'react'
import Item from './Item'

import NewFileButton from './NewFileButton'

import { Icon } from '@chakra-ui/icons'

import { SideBarS, Content } from './style'

export default function SideBar() {
    return (
        <SideBarS>
            <header>
                <NewFileButton />

                <Content>
                    <Item arrow icon={<Icon />} label={'My Drive'} />
                    <Item arrow icon={<Icon />} label={'Computers'} />
                    <Item icon={<Icon />} label={'Shared with me'} />
                    <Item icon={<Icon />} label={'Recent'} />
                    <Item icon={<Icon />} label={'Starred'} />
                    <Item icon={<Icon />} label={'Bin'} />
                </Content>
            </header>
            <hr />
            <footer>
                <Item icon={<Icon />} label={'Storage'} />
            </footer>
        </SideBarS>
    )
}

/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

import { ChevronDownIcon, SearchIcon, HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineUser } from 'react-icons/ai'
import { Avatar } from '@chakra-ui/react'

import Logo from '../../assets/logo.svg'

import { HeaderS } from './style'

export default function Header({userProfile}) {
    return (
        <HeaderS>
            <div>
                <img src={Logo} alt="logo" width={'50px'} />
                <span>Drive</span>
            </div>
            <section id='searchBar'>
                <div>
                    <SearchIcon />
                    <input placeholder='search in drive' />
                </div>
                <ChevronDownIcon id='ChevronDownIcon' />
            </section>
            <section id='userSection' >
                <HamburgerIcon w={50} height={20} />
                {/* <img source={userProfile} /> */}
                <Avatar icon={<AiOutlineUser fontSize='1.5rem' />} />
            </section>
        </HeaderS>
    );
}

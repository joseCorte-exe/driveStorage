import React from 'react'

import { Icon } from '@chakra-ui/icons'
import { BiCaretRight } from 'react-icons/bi';

import { ItemS } from './style'

export default function Item({arrow, icon, label}) {
    return (
        <ItemS>
            <div>
                {arrow && <Icon as={BiCaretRight} />}
            </div>
            <div>
                {icon}
                <p>{label}</p>
            </div>
        </ItemS>
    )
}

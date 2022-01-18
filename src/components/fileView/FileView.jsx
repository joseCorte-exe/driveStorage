import React from 'react'

import { View } from './style'

import { db } from '../../firebase'

import FileCard from './FileCard'
import FileItem from './FileItem'

export default function FileView() {
    const [files, setFiles] = React.useState([])

    React.useEffect(() => {
        db.collection('myFiles').onSnapshot(snps => {
            setFiles(snps.docs.map(doc => ({
                id: doc.id,
                item: doc.data(),
            })))
        })
    }, [])

    return (
        <View>
            <header>
                {
                    files.slice(0, 5).map(({id, item}) => (
                        <FileCard name={item.caption} />
                    ))
                }
            </header>

            <section>
                <article>
                    <p>Name</p>
                </article>
                <article>
                    <p>Last Modified</p>
                    <p>Files size</p>
                </article>
            </section>
            <section>
                {
                    files.map(({id, item}) => (
                        <FileItem key={id} id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                    ))
                }
            </section>
        </View>
    )
}

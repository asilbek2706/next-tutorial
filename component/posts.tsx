'use client'

import { PostType } from '@/interface'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'

const Posts: FC<{ data: PostType[] }> = ({ data }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th className='text'>id</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((c) => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>
                                <Link href={`/posts/${c.id}`}>{c.title}</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Posts

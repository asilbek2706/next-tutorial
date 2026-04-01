'use client'

import { PostType } from '@/interface'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get(
                    'https://jsonplaceholder.typicode.com/posts?_limit=10'
                )
                setPosts(data)
            } catch (error) {
                console.log('Error fetching data:', error)
            } finally {
                setIsLoading(false)
            }
        }

        getData()
    }, [])

    return (
        <>
            {isLoading
                ? 'Loading...'
                : posts.map((post) => (
                      <div key={post.id}>
                          <Link href={`/posts/${post.id}`}>{post.title}</Link>
                      </div>
                  ))}
            <div>Home</div>
        </>
    )
}

import Posts from '@/component/posts'
import { PostType } from '@/interface'
import axios from 'axios'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function getData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

    // await new Promise((resolve) =>
    //     setTimeout(() => {
    //         resolve('')
    //     }, 2000)
    // )

    return data
}

const PostsPage = async () => {
    const data: PostType[] = await getData()

    if (!data.length) {
        notFound()
    }

    return <Posts data={data} />
}

export default PostsPage

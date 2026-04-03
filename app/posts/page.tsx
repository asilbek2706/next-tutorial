import Posts from '@/component/posts'
import { PostType } from '@/interface'
import axios from 'axios'
// import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

// const PostComponent = dynamic(() => import('@/component/posts'), { ssr: false })

async function getData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

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

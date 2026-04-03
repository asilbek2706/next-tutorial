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

    return (
        <>
            {data.map((c) => (
                <div key={c.id}>
                    <table border={1}>
                        <thead>
                            <th>id</th>
                            <th>title</th>
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
                </div>
            ))}
        </>
    )
}

export default PostsPage

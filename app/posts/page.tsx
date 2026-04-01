import { PostType } from '@/interface'
import axios from 'axios'
import Link from 'next/link'

async function getData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')

    return data
}

const PostsPage = async () => {
    const data: PostType[] = await getData()

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

import axios from 'axios'

async function getDetailedData(id: string) {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return data
}

const PostsDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const data = await getDetailedData(id)
    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}

export default PostsDetailPage

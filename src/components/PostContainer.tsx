import React from 'react'
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer = () => {
    const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(100)
    const [createPost, { }] = postAPI.useCreatePostMutation()
    const [deletePost, { }] = postAPI.useDeletePostMutation()
    const [updatePost, { }] = postAPI.useUpdatePostMutation()

    const handleCreate = async () => {
        const title = prompt('New post?', 'title')
        if (title === null) return
        let id = posts?.length ? String(Number(posts[posts.length - 1].id) + 1) : '1'
        await createPost({ id, title, body: title } as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div className="posts_list">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Ошибка!</h1>}
            {posts && posts.map(post => <PostItem
                key={post.id}
                post={post}
                remove={handleRemove}
                update={handleUpdate}
            />)}
            <button onClick={handleCreate} className="add">Add post</button>
        </div>
    )
}

export default PostContainer;
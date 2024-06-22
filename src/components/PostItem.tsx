import React, { FC } from 'react'
import { IPost } from '../models/IPost';

interface PostItemProps {
    post: IPost;
    update: (post: IPost) => void;
    remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({ post, update, remove }) => {
    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation()
        remove(post)
    }

    const handleUpdate = (e: React.MouseEvent) => {
        const title = prompt('New title?', post.title)
        if (title === null) return
        update({ ...post, title })
    }

    return (
        <div className="post">
            {post.id}) {post.title}
            <div>
                <button className="update" onClick={handleUpdate}>Change</button>
                <button className="remove" onClick={handleRemove}>Delete</button>
            </div>
        </div>
    )
}

export default PostItem;
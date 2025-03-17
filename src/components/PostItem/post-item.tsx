import React, { FC } from 'react'
import { IPost } from '../../models/IPost';

import s from './post-item.module.css';

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
        <div className={s.post}>
            {post.id}) {post.title}
            <div>
                <button className={s.update} onClick={handleUpdate}>Change</button>
                <button className={s.remove} onClick={handleRemove}>Delete</button>
            </div>
        </div>
    )
}

export default PostItem;
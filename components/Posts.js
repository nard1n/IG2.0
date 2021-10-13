import React from 'react'
import Post from './Post'

const posts = [
    {
        id: '123',
        username: 'nard1n',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is dope',
    },
    {
        id: '234',
        username: 'nardoon',
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'This is dope',
    },
]

const Posts = () => {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts

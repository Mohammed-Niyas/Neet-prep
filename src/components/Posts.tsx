import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};




const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {

    const fetchPosts = async () => {

      const response = await
        fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data)
      console.log(data);


    }

    fetchPosts()

  }, [])

  return (
    <div>
      <h3 className="text-white">Posts</h3>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <div>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default Posts;
import { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

function Main({ values }) {
  const [posts, setPosts] = useState([]);
  const incomingPosts = values?.posts?.slice(0, 4);

  useEffect(() => {
    setPosts(incomingPosts);
  }, [values]);

  console.log(posts);
  return (
    <>
      <div className="container h-100 ">
        <div className="row">
          <div className="col-md-8 col-sm-12 px-0">
            <div className="d-flex flex-column">
              {posts.length === 0 && <div>Loading</div>}
              <Posts posts={posts} />
            </div>
          </div>
          <div className="col-md-4 col-sm-12 px-0 ">
            <div className="d-flex flex-column">
              <div className="my-3 p-3 border">
                <ul>
                  {posts.map(post => (
                    <li className='my-4 list-unstyled fs-lora fs-5'>{post.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

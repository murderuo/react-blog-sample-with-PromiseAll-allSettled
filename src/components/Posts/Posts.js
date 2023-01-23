function Posts({ posts }) {
  return (
    <>
      {posts &&
        posts.map(post => (
          <div
            className="d-flex flex-column my-3 p-3 post border "
            key={post?.id}
          >
            <div className="">
              <span htmlFor="" className="fs-title fs-2x">
                {post.title}
              </span>
            </div>
            <p className="post-body">{post?.body}</p>
            <div class="d-flex align-items-center publisher-small fs-lora">
              <img
                src="https://preview.colorlib.com/theme/miniblog/images/person_1.jpg.webp"
                class="rounded-circle me-2"
              />
              <span>By Uğur OKUR</span>
              <span>July 19, 2019</span>
            </div>
            <div className="align-self-end m-3 fs-lora">Read More..</div>
          </div>
        ))}
    </>
  );
}

export default Posts;

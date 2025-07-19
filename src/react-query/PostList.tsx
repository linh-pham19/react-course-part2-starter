import React from "react";
import { useState } from "react";
import usePosts from "../routing/hooks/usePosts";

const PostList = () => {
  // PAGINATION
  const pageSize = 10;
  // keep track of the current page
  const [page, setPage] = useState(1);
  // const { data, error, isLoading } = usePosts({ page, pageSize });
  // PAGINATION ENDS HERE

  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ page, pageSize });
  //   usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {/* map each page to the container */}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
        {/* {data?.pages.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))} */}
      </ul>
      {/* <button
        disabled={page === 1}
        className="btn btn-primary"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Next
      </button> */}
      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;

// import { useState } from 'react';
// import usePosts from '../routing/hooks/usePosts';

// const PostList = () => {
// const [userId, setUserId] = useState<number>();
// const [page, setPage] = useState(1);
// const {data: posts, error, isLoading} = usePosts(userId, page);
// if (isLoading) return <p>Loading...</p>
// if (error) return <p>{error.message}</p>;
// console.log("data.length", posts.length)
// console.log("page,page)", page)

// const POSTS_PER_PAGE = 10; // Same as the _limit in the API request
//   return (
//     <>
//     <select
//       onChange={(event) => {
//         setUserId(parseInt(event.target.value));
//         setPage(1); // Reset to the first page when user changes
//       }
//       }
//       value={userId}
//      className='form-select mb-3'>
//       <option value="">Select a post</option>
//       <option value="1">User 1</option>
//       <option value="2">User 2</option>
//       <option value="3">User 3</option>
//     </select>
//       <ul className="list-group">
//       {posts?.map((post) => (
//         <li key={post.id} className="list-group-item">
//           {post.title}
//         </li>
//       ))}
//     </ul>

//     <div className="d-flex justify-content-between mt-3">
//         <button
//           className="btn btn-primary"
//           onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <span>Page {page}</span>
//         <button
//           className="btn btn-primary"
//           onClick={() => setPage((prev) => prev + 1)}
//           disabled={ (posts?.length ?? 0) < POSTS_PER_PAGE} // Disable if no more posts
//         >
//           Next
//         </button>
//       </div>
//     </>

//   );
// };

// export default PostList;

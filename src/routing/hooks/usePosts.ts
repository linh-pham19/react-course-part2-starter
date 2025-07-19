import {
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
  // page: number; in InfiniteQuery we don't need to pass page
}

const usePosts = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: ({pageParam =1}) =>
      axios
        .get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000, //1m
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
    
      // check if there is any more data to fetch
      return lastPage.length > 0
        // this is how we load the next page
        ? allPages.length + 1
        : undefined;
    },
  });

export default usePosts;


// import {
//   useInfiniteQuery,
//   useQuery,
// } from '@tanstack/react-query';
// import axios from 'axios';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// }

// interface PostQuery {
//   pageSize: number;
// }

// const usePosts = (query: PostQuery) =>
//   useInfiniteQuery<Post[], Error>({
//     queryKey: ['posts', query],
//     queryFn: ({ pageParam = 1 }) =>
//       axios
//         .get('https://jsonplaceholder.typicode.com/posts', {
//           params: {
//             _start: (pageParam - 1) * query.pageSize,
//             _limit: query.pageSize,
//           },
//         })
//         .then((res) => res.data),
//     staleTime: 1 * 60 * 1000, //1m
//     keepPreviousData: true,
//     getNextPageParam: (lastPage, allPages) => {
//       return lastPage.length > 0
//         ? allPages.length + 1
//         : undefined;
//     },
//   });

// export default usePosts;


// import { useQuery } from "@tanstack/react-query";
// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// const usePosts = (userId: number | undefined, page: number) => {
//           const fetchPosts = async (): Promise<Post[]> => {
//             const url = new URL('https://jsonplaceholder.typicode.com/posts')

//              // Add query parameters
//             if (userId !== undefined) {
//                 url.searchParams.append('userId', userId.toString());
//             }

//             // pagination
//             url.searchParams.append('_page', page.toString());
//             url.searchParams.append('_limit', '10'); // Limit to 10 posts per page

//             const res = await fetch(url.toString());

//             if (!res.ok) {
//             //   console.log("failed")
//               throw new Error(`Failed to fetch todos: ${res.statusText}`);
//             }
//             const data = await res.json();
//             // console.log(data)
//             return data as Post[];
//           };
    
//           return useQuery<Post[], Error>({
//             // need to take out
//             queryKey:['users',userId,'posts', page],
//             queryFn: fetchPosts,
//             keepPreviousData: true, // Keep previous data while fetching new data
//           })
// }

// export default usePosts;
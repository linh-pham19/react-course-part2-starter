import { useQuery } from "@tanstack/react-query";
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const usePosts = (userId: number | undefined) => {
          const fetchPosts = async (): Promise<Post[]> => {
            const url = new URL('https://jsonplaceholder.typicode.com/posts')

             // Add query parameters
            if (userId !== undefined) {
                url.searchParams.append('userId', userId.toString());
            }

            const res = await fetch(url.toString());

            if (!res.ok) {
              console.log("failed")
              throw new Error(`Failed to fetch todos: ${res.statusText}`);
            }
            const data = await res.json();
            console.log(data)
            return data as Post[];
          };
    
          return useQuery<Post[], Error>({
            queryKey:userId? ['users',userId,'posts'] : ['posts'],
            queryFn: fetchPosts,
          })
}

export default usePosts;
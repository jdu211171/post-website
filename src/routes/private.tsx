import {Mail} from "@/components/mail.tsx";
import {useEffect, useState} from "react";
import {TopicDataType} from "@/lib/TopicType.ts";
import {fetchUserTopic} from "@/lib/post.ts";

function Private() {
  const [post, setPost] = useState<TopicDataType[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUserTopic(page)
      .then((data) => {
        setPost(prevPosts => [...prevPosts, ...data]);
      });
  }, [page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="flex-col md:flex">
      <div className="pb-40">
        {
          post.length > 0 ? (
            <Mail
              mails={post}
            />
          ) : (
            <div className="flex items-center justify-center h-screen">No post is found...</div>
          )
        }
        <div className="flex justify-center">
          <button onClick={() => loadMore()}
                  className="mt-4 self-center px-4 py-2 rounded bg-blue-500 text-white">
            トピックをもっと見る
          </button>
        </div>
      </div>
    </div>
  );
}

export default Private;
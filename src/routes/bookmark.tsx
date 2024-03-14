import {useData} from "@/contexts/DataSession.tsx";
import {Mail} from "@/components/mail.tsx";
import {useEffect, useState} from "react";
import {TopicDataType} from "@/lib/TopicType.ts";

function Bookmark() {
  const {topicData, bookmarks} = useData()
  const [post, setPost] = useState<TopicDataType[]>([]);
  useEffect(() => {
    // @ts-ignore
    const bookmarkedTopics = topicData.filter(topic => bookmarks.includes(topic.id));
    setPost(bookmarkedTopics);
  }, [bookmarks]);
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
      </div>
    </div>
  );
}

export default Bookmark;
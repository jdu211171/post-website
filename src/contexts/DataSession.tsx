// DataSession.tsx
import React from "react";
import {TopicDataType} from "@/lib/TopicType.ts";
import {fetchTopic} from "@/lib/post.ts";
import {useLocalStorage} from "@/lib/useLocalStorage.ts";

type DataType = {
  topicData: TopicDataType[];
  addTopic: (data: TopicDataType) => void;
  likes: [boolean, number[] | null];
  bookmarks: [boolean, number[] | null];
  addLike: (id: number) => void;
  removeLike: (id: number) => void;
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
};
const DataSession = React.createContext<DataType | undefined>(undefined);

export function useData() {
  const context = React.useContext(DataSession);
  if (context === undefined) {
    throw new Error("useTest must be used within a DataProvider");
  }
  return context;
}

export function DataProvider({children}: React.PropsWithChildren<{}>) {
  const [likes, setLikes] = useLocalStorage<number[]>("likes");
  const [bookmarks, setBookmarks] = useLocalStorage<number[]>("bookmarks");
  const [topicData, setTopicData] = React.useState<TopicDataType[]>([]);

  const addTopic = React.useCallback((data: TopicDataType) => {
    setTopicData((prev) => [data, ...prev]);
  }, []);
  const addLike = React.useCallback((id: number) => {
    // @ts-ignore
    setLikes((prev) => [...prev, id]);
  }, []);
  const removeLike = React.useCallback((id: number) => {
    // @ts-ignore
    setLikes((prev) => prev.filter((item) => item !== id));
  }, []);
  const addBookmark = React.useCallback((id: number) => {
    // @ts-ignore
    setBookmarks((prev) => [...prev, id]);
  }, []);
  const removeBookmark = React.useCallback((id: number) => {
    // @ts-ignore
    setBookmarks((prev) => prev.filter((item) => item !== id));
  }, []);
  React.useEffect(() => {
    fetchTopic(1).then((data) => {
      setTopicData(data);
    })
  }, []);
  return (
    <DataSession.Provider value={{
      topicData,
      addTopic,
      likes,
      bookmarks,
      addLike,
      removeLike,
      addBookmark,
      removeBookmark
    }}>
      {children}
    </DataSession.Provider>
  );
}
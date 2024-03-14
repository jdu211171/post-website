import {BookmarkIcon, FolderIcon, HomeIcon, Settings} from "lucide-react";
import {Link} from "react-router-dom";

export default function ErrorPage() {

  const navigations = [
    {
      icon:
        <HomeIcon strokeWidth={1.5}/>
      ,
      title: "ホーム",
      desc: "すべてのポストを見る",
      href: "/"
    },
    {
      icon:
        <FolderIcon strokeWidth={1.5}/>
      ,
      title: "私のポスト",
      desc: "自分が作成したすべてのポスト",
      href: "/private"
    },
    {
      icon:
        <BookmarkIcon strokeWidth={1.5}/>
      ,
      title: "ブックマーク",
      desc: "自分がブックマークしたポスト",
      href: "/bookmark"
    },
    {
      icon:
        <Settings strokeWidth={1.5}/>
      ,
      title: "設定",
      desc: "ニーズに合わせて設定を変更",
      href: "/settings"
    }
  ]

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto text-gray-600">
          <div className="space-y-3 text-center">
            <h3 className="text-indigo-600 dark:text-yellow-600 font-semibold">
              404 エラー
            </h3>
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl dark:text-white">
              見つかりませんでした
            </p>
            <p className="dark:text-slate-400">
              申し訳ありません、お探しのページは見つかりませんでしたか、削除されました。
            </p>
          </div>
          <ul className="divide-y">
            {
              navigations.map((item, idx) => (
                <li key={idx} className="flex gap-x-4 py-6">
                  <div
                    className="flex-none w-14 h-14 dark:bg-blue-950 dark:text-blue-500 bg-indigo-50 rounded-full text-indigo-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-gray-800 dark:text-white font-medium">{item.title}</h4>
                    <p className="dark:text-slate-400">
                      {item.desc}
                    </p>
                    <Link to={item.href}
                          className="dark:text-yellow-600 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1">
                      もっと見る
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                           fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd"
                              d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                              clipRule="evenodd"/>
                      </svg>
                    </Link>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  )
}
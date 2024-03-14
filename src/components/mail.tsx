// mail.tsx
import {MailList} from "@/components/mail-list.tsx"

interface PostProps {
  mails: {
    id: number,
    content: string,
    created_at: string,
    updated_at: string | null,
    user_id: number,
    username: string,
    comment_count: number,
    reaction_count: number,
    liked_status: number,
  }[]
}

export function Mail({mails}: PostProps) {
  return (
    <>
      <MailList items={mails}/>
      <div className="flex justify-center">
        <button onClick={() => console.log('fetch more')}
                className="mt-4 self-center px-4 py-2 rounded bg-blue-500 text-white">
          トピックをもっと見る
        </button>
      </div>
    </>
  )
}

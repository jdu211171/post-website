// mail-list.tsx
import formatDistanceToNow from "date-fns/formatDistanceToNow"

import {cn} from "@/lib/utils"
import {ScrollArea} from "@/components/ui/scroll-area.tsx"
import {Link} from "react-router-dom";

interface MailListProps {
  items: {
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

export function MailList({items}: MailListProps) {
  // const navigate = useNavigate()
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`post/${item.id}`}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
            )}
            // onClick={() => navigate(`post/${item.id}`)}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{item.username}</div>
                </div>
                <div
                  className={cn(
                    "ml-auto text-xs", "text-muted-foreground"
                  )}
                >
                  {formatDistanceToNow(new Date(item.updated_at ? item.updated_at : item.created_at), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
              {item.content.substring(0, 300)}
            </div>
          </Link>
        ))}
      </div>
    </ScrollArea>
  )
}

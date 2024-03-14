// home.tsx
import {Mail} from "@/components/mail.tsx";
import {useData} from "@/contexts/DataSession.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";

function Home() {
  const {topicData,} = useData()

  return (
    <div className="hidden flex-col md:flex">
      <div className="pb-40">
        <Mail
          mails={topicData}
        />
      </div>
      <div className="grid w-full gap-2 p-4 fixed bottom-0"
           style={{width: '79%'}}>
        <Textarea placeholder="投稿はこちらから"/>
        <Button className="self-center px-4 py-2 rounded bg-blue-500 text-white">投稿する</Button>
      </div>
    </div>
  );
}

export default Home;
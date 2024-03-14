import {Textarea} from "@/components/ui/textarea.tsx";

export function InputWithButton() {
  return (
    <div className="flex items-center space-x-2 w-full mx-auto">
      {/*<Input type="text" className="" placeholder="Write new topic here"/>*/}
      {/*<Textarea/>*/}
      {/*<ButtonIcon Icon={SendHorizontal}/>*/}
      <Textarea placeholder="Type your message here."/>
    </div>
    // <div className="grid w-full gap-2">
    //   <Textarea placeholder="Type your message here."/>
    //   <Button>Send message</Button>
    // </div>
  )
}

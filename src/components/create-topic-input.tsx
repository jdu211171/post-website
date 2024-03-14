import {Textarea} from "@/components/ui/textarea.tsx";
import {Label} from "@radix-ui/react-label";
import {Switch} from "@radix-ui/react-switch";
import {Button} from "react-day-picker";

export default function CreateTopicInput() {
  return <div className="p-4">
    <form>
      <div className="grid gap-4">
        <Textarea
          className="p-4"
          placeholder={`Reply e...`}
        />
        <div className="flex items-center">
          <Label
            htmlFor="mute"
            className="flex items-center gap-2 text-xs font-normal"
          >
            <Switch id="mute" aria-label="Mute thread"/> Mute this
            thread
          </Label>
          <Button
            onClick={() => console.log('new topic')}
            // size="sm"
            className="ml-auto"
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  </div>;
}
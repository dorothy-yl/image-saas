import { Button } from "@/components/Button";
import { Textarea } from "@/components/Textarea";
import { Input } from "@/components/input";

export default function Home() {
  return (
   <div>
    <Input name="name" />
    <Textarea name="description" />
    <Button type="submit">Submit</Button>
   </div>
  );
}

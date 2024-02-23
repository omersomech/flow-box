import { create } from "@/app/actions";
import { Button } from "@/components/ui/button";

export function ActionButton() {
  return <Button onClick={create}>Create</Button>;
}

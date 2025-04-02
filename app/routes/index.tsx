import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/")({
  component: Home,
});
import { toast } from "sonner";

function Home() {
  return (
    <div className="container flex flex-col gap-4 items-center justify-center flex-1">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("It works!", {
            description: "Hello World Toast Fired!",
          })
        }
      >
        Click me
      </Button>
    </div>
  );
}

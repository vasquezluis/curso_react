import Link from "next/link";
import { Calendar } from "@/components/ui/calendar";
import { Button, buttonVariants } from "@/components/ui/button";
import {ModeToggle} from '@/components/ButtonToggleDark'

function page() {
  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="destructive">Click</Button>
      <Button variant="ghost">Click</Button>
      <Button variant="outline">Click</Button>
      <Button variant="secondary">Click</Button>
      <Button variant="link">Click</Button>
      <Button className="bg-warning">Warning</Button>

      <Link href="/" className={buttonVariants()}>
        Ir al home page
      </Link>

      <Calendar></Calendar>

      <ModeToggle/>
    </div>
  );
}

export default page;

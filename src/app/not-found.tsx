import { Container } from "@/components/container";
import { FoF } from "@/icons/fof";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <Container>
        <div className="flex flex-col items-center text-center font-mono gap-6">
          <FoF className="h-24" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium">ERROR 404: PAGE NOT FOUND</h1>
            <p className="text-sm text-balance">
              The server tried, but it couldn’t find what you’re looking for.
            </p>
          </div>

          <Link href={"/"}>
            [<span className="text-sm hover:underline">RETURN HOME</span>]
          </Link>
        </div>
      </Container>
    </div>
  );
}

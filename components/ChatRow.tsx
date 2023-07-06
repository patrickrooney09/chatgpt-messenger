import Link from "next/link";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
type Props = {
  id: string;
};
function ChatRow({ id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  return (
    <Link href={`/chat/${id}`} className={`chatRow justify-center`}>
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 hidden md:inline-flex truncate"></p>
      <TrashIcon className="h-5 text-gray-700 hover:text-red-700" />
    </Link>
  );
}

export default ChatRow;

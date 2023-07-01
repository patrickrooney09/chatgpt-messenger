import { PlusIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function NewChat() {
  const router = useRouter();
  //renaming data variable to session
  const { data: session } = useSession();
  const createNewChat = async () => {};
  return (
    <div onClick={createNewChat} className="border-gray-700 border chatRow">
      <PlusIcon className="h-4 w-4" /> <p>New Chat</p>
    </div>
  );
}

export default NewChat;

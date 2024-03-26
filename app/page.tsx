import Image from "next/image";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

export default function Home() {
  return (
    <>
      <button className="fixed bottom-4 right-4 z-50 p-3 bg-orange-500 text-white rounded-md h-[60px] w-[60px] flex items-center justify-center">
        <MdOutlineChatBubbleOutline size={30} />
      </button>
      <div className="fixed bottom-[100px] right-4 z-50 p-3 min-w-[350px] min-h-[600px] bg-gray-400"></div>
    </>
  );
}

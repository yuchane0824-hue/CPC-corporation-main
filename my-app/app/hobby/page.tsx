import Image from "next/image";
import Link from "next/link";
import { TbHome } from "react-icons/tb";
import Menu from "../../component/menu"

export default function Hobby() {

  return (
    <div className="flex min-h-screen">
      <Link href="/" className="block sm:hidden fixed bottom-7 left-7">
          <div className="rounded-full p-3 flex items-center justify-center" style={{backgroundColor: '#737C75'}}>
            <TbHome size={30} color="white"/>
          </div>
      </Link>

      {/* Menu */}
      <div className="sm:block hidden" style={{backgroundColor: '#EFF0EA'}}>
        <Menu />        
      </div>

      {/* 主頁面 */}
      <div className="w-full" style={{backgroundColor: '#EFF0EA'}}>
        <div className="flex flex-col p-[20px] gap-2">
          <p className="text-lg font-bold">
            哈囉是我！我喜歡音樂、拍照、可愛動物和剪片 :3 歡迎來到我的世界
          </p>
          <Image src="/IMG_3654.JPG" alt="mypic" width={1980} height={1020}/>
        </div>
      </div>
    </div>
  );
}

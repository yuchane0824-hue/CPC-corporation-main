import Link from "next/link";
import Image from "next/image";
import { TbHome } from "react-icons/tb";
import MenuPC from "../../component/menuPC"
import MenuPh from "../../component/menuPh"

export default function Branch() {

  return (
    <div className="min-h-screen flex flex-col">
      {/* 選單 */}      
      <div className="w-full">
        <div className="block sm:hidden">
        <MenuPh />
        </div>

        <div className="sm:block hidden">
          <MenuPC />
        </div>
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

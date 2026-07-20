import Link from "next/link";
import { TbHome } from "react-icons/tb";
import Menu from "../../component/menu"

export default function project() {

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
      <div className="w-full p-[20px]">
        {/* 上半部 */}
        <div className="p-[10px] flex flex-col justify-center items-center mt-3">
          <p className="text-lg font-bold">----以下是我的作品們----</p>
          <p className="text-sm">Java專案、友善食品界面、建模等</p>
        </div>

        {/* 下半部 */}
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
          <div className="rounded-md h-[200px] md:h-full flex justify-center items-end
                          bg-[url(/app_02.png)] bg-center bg-cover overflow-hidden">
            <div className="text-white bg-black/20 w-full h-[60px] flex
                            justify-center items-center backdrop-blur-sm font-bold">
              友善食品 UI/UX 介面
            </div>
          </div>
        
          <div className="rounded-md h-100 flex justify-center items-center col-span-2" style={{backgroundColor: '#EFF0EA'}}>
            <iframe
                src="https://www.youtube.com/embed/XAwzFlW32rw"
                width="100%"
                height="400"
                allowFullScreen          
            />
          </div>

          <div className="rounded-md h-100 flex justify-center items-center col-span-2" style={{backgroundColor: '#EFF0EA'}}>
            <iframe
                src="https://www.youtube.com/embed/f4UIfC5fuXo"
                width="100%"
                height="400"
                allowFullScreen          
            />
          </div>

          <div className="rounded-md h-[200px] md:h-full flex justify-center items-end
                          bg-[url(/app_03.png)] bg-center bg-cover overflow-hidden">
            <div className="text-white bg-black/20 w-full h-[60px] flex
                            justify-center items-center backdrop-blur-sm font-bold">
              友善食品 UI/UX 介面
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

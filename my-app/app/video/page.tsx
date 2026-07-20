import Link from "next/link";
import { TbHome } from "react-icons/tb";
import Menu from "../../component/menu"

export default function video() {

  return (
    <div className="flex h-full">
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
            <p className="text-lg font-bold">----以下是我實習拍的片----</p>
          </div>

          {/* 下半部 */}
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
            <div className="rounded-md h-100 flex justify-center items-center" style={{backgroundColor: '#EFF0EA'}}>
                <iframe
                      src="https://www.instagram.com/p/DRPRmKYE2tu/embed"
                      width="100%"
                      height="400"
                      allowFullScreen
                />
            </div>
          
            <div className="rounded-md h-100 flex justify-center items-center col-span-2" style={{backgroundColor: '#EFF0EA'}}>
              <iframe
                  src="https://www.youtube.com/embed/-zGbBV-8CdQ"
                  width="100%"
                  height="400"
                  allowFullScreen          
              />
            </div>

            <div className="rounded-md h-100 flex justify-center items-center col-span-2" style={{backgroundColor: '#EFF0EA'}}>
              <iframe
                  src="https://www.youtube.com/embed/KCeNvmpNs2w"
                  width="100%"
                  height="400"
                  allowFullScreen          
              />
            </div>

            <div className="rounded-md h-100 flex justify-center items-center" style={{backgroundColor: '#EFF0EA'}}>
              <iframe
                    src="https://www.instagram.com/p/DQJyMcfE06R/embed"
                    width="100%"
                    height="400"
                    allowFullScreen
              />
            </div>
          </div>
      </div>
    </div>
  );
}

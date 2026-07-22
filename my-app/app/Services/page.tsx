import Image from "next/image";
import MenuPC from "../../component/menuPC"
import MenuPh from "../../component/menuPh"
import Footer from "../../component/footer"

export default function Services() {

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
      <div className="w-full">
        {/* 上半部 */}
        <div className="flex p-[20px] gap-5">

          <div className="p-[10px] rounded-md md:w-1/2" style={{backgroundColor: '#16425B'}}>
            <p className="text-white text-lg font-bold">學經歷</p>
            <p className="text-white">2022 加入政治大學心理學系</p>      
          </div>

          <div className="p-[10px] rounded-md md:w-1/2" style={{backgroundColor: '#16425B'}}>
            <p className="text-white text-lg font-bold">專長</p>
            <p className="text-white">2022 加入政治大學心理學系</p> 
          </div>

        </div>

        {/* 下半部 */}
        <div className="flex p-[20px]">
          <Image src="/CPC_Kh01.jpg" alt="mypic" width={1980} height={1020}/>
        </div>
      </div>

      <Footer />
    </div>
  );
}
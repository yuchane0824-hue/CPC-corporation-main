import Image from "next/image";
import MenuPC from "../../component/menuPC"
import MenuPh from "../../component/menuPh"
import Footer from "../../component/footer"

export default function Home() {

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
        {/* 公司理念 */}
        <div className="p-10 sm:p-[100px] grid sm:grid-cols-2 grid-cols-1 gap-10
        shadow-md border-b border-gray-200">
          <div className="flex flex-col justify-center transition-transform duration-500 hover:-translate-y-2">
            <h5 className="font-noto italic text-1xl font-bold text-[#16425B] tracking-widest">奕誠文教事業</h5>
            <h1 className="font-noto mt-3 text-5xl font-black text-gray-700">誠信至上、服務第一</h1>
            <div className="w-50 h-[1px] rounded-full mt-5 bg-[#16425B]"></div>

            <p className="mt-5 text-md text-gray-700">
            大誠加油站創立以來，始終秉持「誠信至上、服務第一」的核心理念。
            我們嚴格把關提供最純淨、高品質的燃油，
            致力於打造一個讓每位駕駛人都能安心停靠的補給站。
            大誠加油站不只是一個提供能源的場所，更是您旅途中最堅實的後盾，
            以最真誠的態度，陪伴您安全、順暢地駛向每一個人生目的地。
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md 
          transition-shadow hover:shadow-xl duration-500 group">
            <Image src="/CPC_Kh03.jpg" alt="mypic" 
            width={720} height={540}
            className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 經營方針 */}
        <div className="p-10 sm:p-[100px] grid sm:grid-cols-2 grid-cols-1 gap-10
        shadow-md border-b border-gray-200 bg-[#16425B]/5">
          <div className="rounded-2xl overflow-hidden shadow-md 
          transition-shadow hover:shadow-xl duration-500 group">
            <Image src="/CPC_Kh03.jpg" alt="mypic" 
            width={720} height={540}
            className="w-full h-full object-cover"/>
          </div>

          <div className="flex flex-col justify-center transition-transform duration-500 hover:-translate-y-2">
            <h1 className="font-noto text-5xl font-black text-gray-700">經營方針</h1>
            <p className="mt-5 text-md text-gray-700">
            我們以「專業、熱忱、效率」三大基石為經營方針，嚴格要求每一項服務細節與作業標準。
            </p>
            
            <div className="w-50 h-[1px] rounded-full mt-5 bg-[#16425B]"></div>
            <h1 className="font-noto mt-10 text-5xl font-black text-gray-700">團隊氛圍</h1>
            <p className="mt-5 text-md text-gray-700">
            大誠加油站致力於打破傳統冰冷、充滿油氣味的刻板印象。
            透過明亮整潔的環境規劃、安全流暢的動線，以及全體員工親切真誠的問候，
            我們期望讓每一位短暫停留的顧客，感受到舒適、充滿活力的氛圍。
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}

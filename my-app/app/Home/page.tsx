import Image from "next/image";
import MenuPC from "../../component/menuPC"
import MenuPh from "../../component/menuPh"

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
        <div className="p-[100px] grid sm:grid-cols-2 grid-cols-1 gap-10
        shadow-md border-b border-gray-200">
          <div>
            <h5 className="italic text-1xl font-bold text-[#16425B]">大誠加油站</h5>
            <h1 className="mt-3 text-5xl font-black text-gray-700">誠信至上、服務第一</h1>
            <p className="mt-5 font-sm text-gray-700">
            大誠加油站自創立以來，始終秉持著「誠信至上、服務第一」的核心理念。
            我們深知，每一次的啟程都承載著顧客對行車安全的期盼，
            因此我們不僅嚴格把關提供最純淨、高品質的燃油，
            更致力於打造一個讓每一位駕駛人都能安心停靠的補給站。
            在追求卓越營運的同時，我們也積極肩負起企業社會責任，
            落實環保節能措施，引入綠色環保洗車設備與高效率油氣回收系統，
            期盼在帶動經濟發展與便利生活的同時，能為地球永續環境盡一份心力。
            大誠加油站不只是一個提供能源的場所，更是您旅途中最堅實的後盾，
            以最真誠的態度，陪伴您安全、順暢地駛向每一個人生目的地。
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg 
          transition-shadow hover:shadow-2xl duration-300">
            <Image src="/CPC_Kh01.jpg" alt="mypic" width={720} height={540}/>
          </div>
        </div>

        {/* 經營方針 */}
        <div className="p-[100px] grid sm:grid-cols-2 grid-cols-1 gap-10
        shadow-md border-b border-gray-200 bg-[#16425B]/5">
          <div className="rounded-2xl overflow-hidden shadow-lg 
          transition-shadow hover:shadow-2xl duration-300">
            <Image src="/CPC_Kh02.jpg" alt="mypic" width={720} height={540}/>
          </div>

          <div>
            <h1 className="italic text-4xl font-black text-gray-700">經營方針</h1>
            <p className="mt-3 font-sm text-gray-700">
            我們的經營方針以「專業、熱忱、效率」為三大基石，嚴格要求每一項服務細節與作業標準。
            </p>
            <h1 className="italic mt-10 text-4xl font-black text-gray-700">團隊氛圍</h1>
            <p className="mt-3 font-sm text-gray-700">
            大誠致力於打破傳統加油站冰冷、充滿油氣味的刻板印象。
            透過明亮整潔的環境規劃、安全流暢的車道動線，以及全體員工親切真誠的問候，
            我們期望讓每一位短暫停留的顧客，都能在稍作休整的片刻，
            感受到輕鬆、舒適且充滿活力的溫暖氛圍，
            讓來到大誠不再只是例行公事，而是一次愉快的服務體驗。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

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
        {/* 上半部 */}
        <div className="flex p-[20px] gap-5">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-700">誠信至上、服務第一</h1>
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

          <div className="md:w-1/2">
            <Image src="/CPC_Kh01.jpg" alt="mypic" width={720} height={540}/>
          </div>
        </div>

        {/* 下半部 */}
        <div className="flex p-[20px] gap-5" style={{backgroundColor: '#E3ECF3'}}>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold text-gray-700">誠信至上、服務第一</h1>
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

          <div className="md:w-1/2">
            <Image src="/CPC_Kh01.jpg" alt="mypic" width={720} height={540}/>
          </div>
        </div>

      </div>
    </div>
  );
}

"use client"
import Image from 'next/image'

{/* 職員資料 */} 
const staffData = [
  { id: 1, name: "施志鴻", location: "高雄總站", title: "管理人員", image: "/staff.jpg" },
  { id: 2, name: "施志鴻", location: "高雄總站", title: "管理人員", image: "/staff.jpg" }, // 之後可以換成不同人的資料
  { id: 3, name: "施志鴻", location: "高雄總站", title: "管理人員", image: "/staff.jpg" },
  { id: 4, name: "施志鴻", location: "高雄總站", title: "管理人員", image: "/staff.jpg" },
  { id: 5, name: "施志鴻", location: "高雄總站", title: "管理人員", image: "/staff.jpg" },
  { id: 6, name: "施志鴻", location: "高雄總站", title: "管理人員", image: "/staff.jpg" }, // 之後可以換成不同人的資料
  { id: 7, name: "施志鴻", location: "高雄總站", title: "管理人員", image: "/staff.jpg" },
];

{/* 職缺資料 */} 
const jobsData = [
  {
    id: 1,
    title: "早班服務人員",
    salary: "月薪 32,000 - 36,000 元",
    location: "高雄總站",
    time: "07:00 - 15:00",
    description: "負責車輛加油、洗車服務、場站清潔維護及顧客交辦事項。具備服務熱忱，無經驗可，公司提供完整教育訓練與晉升管道。"
  },
  {
    id: 2,
    title: "中班服務人員",
    salary: "月薪 34,000 - 38,000 元",
    location: "高雄總站",
    time: "15:00 - 23:00",
    description: "執行加油站日常營運作業，協助帳務結算與設備基礎維護。適合喜歡晚起或夜間活動者，享有夜間津貼補助。"
  },
  {
    id: 3,
    title: "儲備站長 / 幹部",
    salary: "月薪 40,000 - 55,000 元",
    location: "依公司分發 (高雄區)",
    time: "排班制 (依站點營運彈性調整)",
    description: "負責加油站整體營運管理、人員調度與教育訓練、客訴處理及業績目標達成。需具備兩年以上相關管理經驗，具備危險物品運送人員證照者佳。"
  }
];

export default function Joinus() {

  return (
    <div className="min-h-screen flex flex-col">
      
      {/* 漸顯特效 */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>

      {/* 主頁面 */}
      <div className="w-full">
        {/* 職缺介紹 */}
        <div className="p-10 sm:p-[100px] shadow-md border-b border-white">
          <h1 className="font-noto text-5xl font-black text-center text-[#16425B] tracking-widest">目前職缺</h1>
          <div className="w-25 h-px mt-5 mx-auto rounded-full bg-[#16425B]/60"></div>

            <div className="animate-fade-up mt-15 gap-10 grid sm:grid-cols-2 grid-cols-1">        
              {jobsData.map((job) => (
                <div 
                  key={job.id} 
                  className="bg-[#16425B]/5 border border-gray-200 border-t-3 border-t-[#16425B] p-7 
                  shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* 職稱*/}
                  <h2 className="font-noto text-3xl font-bold text-gray-900">
                    {job.title}
                  </h2>
                  <div className="w-10 h-[1px] bg-[#16425B] mt-3"></div>

                  {/* 職缺資訊*/}
                  <div className="flex flex-col mt-5 space-y-3 text-[17px]"> 
                    <div className="flex items-start">
                      <span className="text-[#16425B] font-bold min-w-[90px]">薪資待遇</span>
                      <span className="text-gray-700">{job.salary}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-[#16425B] font-bold min-w-[90px]">工作地點</span>
                      <span className="text-gray-700">{job.location}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-[#16425B] font-bold min-w-[90px]">工作時間</span>
                      <span className="text-gray-700">{job.time}</span>
                    </div>

                    <div className="flex items-start mt-2 pt-4 border-t border-gray-200">
                      <span className="text-[#16425B] font-bold min-w-[90px]">工作內容</span>
                      <span className="text-gray-700 leading-relaxed text-justify">
                        {job.description}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
        </div>

        {/* 團隊組成 */}
        <div className="px-20 py-10 sm:p-[100px] shadow-md border-b border-white bg-[#16425B]/3"> 
          <h1 className="font-noto text-5xl font-black text-center text-[#16425B] tracking-widest">團隊組成</h1>
          <div className="w-30 h-px mt-5 mx-auto rounded-full bg-[#16425B]/60"></div>

          {/* 職員介紹 */}
          <div className="animate-fade-up mt-15 grid sm:grid-cols-4 grid-cols-1 gap-15">
            {staffData.map((staff) => (
              <div key={staff.id}
                className="flex flex-col justify-center items-center
                border border-t-4 border-gray-200 border-t-[#16425B] bg-[#16425B]/5
                transition-shadow shadow-sm hover:shadow-md group">
                
                {/* 頭貼 */}
                <div className="w-full aspect-square overflow-hidden shadow-md 
                transition-shadow hover:shadow-xl duration-500 group">
                  <Image 
                    src={staff.image} 
                    alt={staff.name}
                    width={80} height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 職稱 */}
                <div className="p-3 flex flex-col justify-center items-center">
                  <h3 className="font-noto text-[36px] font-semibold text-center text-gray-900 tracking-widest">
                    {staff.name}
                  </h3>
                  <div className="w-30 mt-2 h-[1px] mx-auto rounded-full bg-[#16425B]"></div>

                  <p className="mt-3 text-[18px] font-light text-center text-gray-700">
                    {staff.location}
                  </p>
                  <h5 className="text-[22px] font-md text-center text-gray-700">
                    {staff.title}
                  </h5>
                </div>  
              </div>
            ))}  
          </div>
        </div>        
     
      </div>
    </div>
  );
}

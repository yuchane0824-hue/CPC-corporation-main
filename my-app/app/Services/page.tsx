"use client"
import React, { useState } from 'react';
import Image from 'next/image'

const servicesData = [
  {
    id: 'gift',
    tabName: '贈品機制',
    title: '積點回饋 實用好禮',
    description: '大誠加油站提供完善的會員積點機制，單筆加油滿額即可自動累積點數。點數可隨時兌換高品質面紙、礦泉水、清潔用品或汽車保養周邊。',
    features: ['- 單筆滿 500 元即贈 1 點', '- 每月 10 號會員日點數雙倍', '- 點數終身有效不歸零'],
    image: '/CPC_Kh03.jpg'
  },
  {
    id: 'wash',
    tabName: '專業洗車',
    title: '頂級泡沫 呵護愛車',
    description: '引進最新型隧道式洗車機與高壓水柱設備，搭配中性環保洗劑與純手工擦拭。',
    features: ['- 高壓底盤沖洗', '- 中性環保純淨洗劑', '- 專業手工擦乾與細節清理'],
    image: '/CPC_Kh03.jpg'
  },
  {
    id: 'promo',
    tabName: '優惠活動',
    title: '多元支付 專屬折扣',
    description: '我們與各大銀行及車隊合作，提供最多元的支付優惠。無論信用卡、行動支付還是企業車隊卡，都能享有專屬的降價折扣。',
    features: ['- 指定信用卡天天降 1.5 元', '- 企業車隊專屬月結優惠', '- 支援 Apple Pay / LINE Pay 等多元支付'],
    image: '/CPC_Kh03.jpg'
  }
];

export default function Services() {
  // 頁籤點擊狀態
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const currentContent = servicesData.find(data => data.id === activeTab) || servicesData[0];

  return (
    <div className="w-full p-10 sm:p-[100px] bg-white min-h-screen">
      
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

      {/* 頁面標題 */}
      <h1 className="font-noto text-5xl font-black text-center text-[#16425B] tracking-widest">產品與服務</h1>
      <div className="w-40 h-px mt-5 mx-auto rounded-full bg-[#16425B]/60"></div>

      {/* 主頁面 */}
      <div className="mt-20 flex flex-col sm:flex-row gap-10 max-w-7xl mx-auto">      
        {/* 頁籤選單區 */}
        <div className="flex flex-row sm:flex-col sm:w-1/5 gap-3 overflow-x-auto scrollbar-hide">
          {servicesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                min-w-[120px] sm:min-w-0 text-center px-6 py-4 font-bold text-[18px] transition-all duration-300
                 
                ${activeTab === tab.id 
                  ? 'bg-[#16425B] text-white border-[#16425B]' // 作用中：
                  : 'bg-[#16425B]/5 text-gray-700 border-transparent hover:bg-[#16425B]/10' // 未作用
                }
              `}
            >
              {tab.tabName}
            </button>
          ))}
        </div>

        {/* 優惠內容 */}
        <div className="flex-1 bg-[#16425B]/5 border border-gray-200 border-t-4 border-t-[#16425B] p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div key={activeTab} className="animate-fade-up grid grid-cols-1 sm:grid-cols-2 gap-10 h-full">
            
            {/* 文字介紹 */}
            <div className="flex flex-col justify-center">
              <h2 className="font-noto text-[36px] sm:text-[38px] font-bold text-gray-700 tracking-wider">
                {currentContent.title}
              </h2>
              <div className="w-12 h-px rounded-full bg-[#16425B]/60 mt-5 mb-5"></div>
              
              <p className="text-gray-700 text-[17px] leading-relaxed text-justify mb-7">
                {currentContent.description}
              </p>

              <div className="flex flex-col space-y-1">
                {currentContent.features.map((feature, index) => (
                  <div key={index} className="font-noto flex items-start text-gray-900 text-[13px] font-light tracking-wider">
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full aspect-square sm:aspect-auto sm:h-full shadow-lg">
              <Image 
                src={currentContent.image}
                alt={currentContent.title}
                fill
                className="object-cover"
              />
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
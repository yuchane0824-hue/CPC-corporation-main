"use client"

import Link from "next/link";
import Image from 'next/image';

import { TbBrandYoutubeKids, TbHome } from "react-icons/tb";
import { TbBowlChopsticks } from "react-icons/tb";
import { TbInfoSquareRounded } from "react-icons/tb";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";

export default function MenuPC() {

  return (
    <div className="bg-white w-full flex items-stretch h-auto md:h-[60px] shadow-sm">
      
      {/* <div className="flex justify-center gap-3 text-lg mt-3">
            <Link href="https://www.instagram.com/yuz824__/">
            <TbBrandInstagram />
            </Link>
            
            <Link href="https://www.facebook.com/jenny72530">
            <TbBrandFacebookFilled />
            </Link>                

            <Link href="https://youtube.com/channel/UCnwxz2_dVOgiTs5BWq98srA?si=mZNPO6Ye-Xwl1lCb">
            <TbBrandYoutubeFilled />
            </Link>       
        </div> */}
      
        {/* 頭貼 */}
        {/* <div className="flex justify-center items-center w-full">
        <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/LOGO.jpg" alt="mypic" width={80} height={80}/>
        </div>
        </div>

        <div className="text-center text-lg font-extrabold mt-3">梁育禎</div>
        <div className="text-center text-sm font-medium mt-3">
        嗨，我是政大心理系雙主修數位內容學程的學生。性格隨和樂觀、善於分享。
        喜歡具美感的事物，熱愛拍攝剪片，期許自己能創作兼具深度與美感的內容！
        </div> */}

        <Link href="/Home" className="flex-1 flex outline-none border-none">
        <div className="text-black px-4 py-2 gap-3 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:text-gray-700">
            <Image src="/LOGO.jpg" alt="LOGO" width={160} height={80}/>
            <span>首頁</span>
            </div>
        </Link>

        <Link href="/Branch" className="flex-1 flex">
        <div className="text-black px-4 py-2 gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            <TbBowlChopsticks />服務據點
        </div>
        </Link>

        <Link href="/Services" className="flex-1 flex">
        <div className="text-black px-4 py-2 gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            <TbBrandYoutubeKids/>產品與服務
        </div>
        </Link>

        <Link href="/Joinus" className="flex-1 flex">
        <div className="text-black px-4 py-2 gap-1 w-full h-full flex items-center justify-center
        whitespace-nowrap cursor-pointer transition-colors duration-300 hover:opacity-80 hover:bg-[#16425B] hover:text-white">
            <TbBrandYoutubeKids/>加入我們
        </div>
        </Link>
    </div>
  );
}

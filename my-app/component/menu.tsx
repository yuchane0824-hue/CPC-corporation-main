"use client"

import Image from "next/image";
import Link from "next/link";

import { TbBrandYoutubeKids, TbHome } from "react-icons/tb";
import { TbBowlChopsticks } from "react-icons/tb";
import { TbInfoSquareRounded } from "react-icons/tb";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { TbBrandInstagram } from "react-icons/tb";

export default function Menu() {

  return (
    <div className="bg-white w-full md:w-[280px] min-h-screen p-5" style={{backgroundColor: '#EFF0EA'}}>

        <Link href="/">
          <div className="absolute top-7 left-7 flex items-center gap-1">
            <TbHome size={30} />
          </div>
        </Link>
        
        {/* 頭貼 */}
        <div className="flex justify-center items-center w-full">
        <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/mypic.jpg" alt="mypic" width={80} height={80}/>
        </div>
        </div>

        <div className="text-center text-lg font-extrabold mt-3">梁育禎</div>
        <div className="text-center text-sm font-medium mt-3">
        嗨，我是政大心理系雙主修數位內容學程的學生。性格隨和樂觀、善於分享。
        喜歡具美感的事物，熱愛拍攝剪片，期許自己能創作兼具深度與美感的內容！
        </div>

        <div className="flex justify-center gap-3 text-lg mt-3">
            <Link href="https://www.instagram.com/yuz824__/">
            <TbBrandInstagram />
            </Link>
            
            <Link href="https://www.facebook.com/jenny72530">
            <TbBrandFacebookFilled />
            </Link>                

            <Link href="https://youtube.com/channel/UCnwxz2_dVOgiTs5BWq98srA?si=mZNPO6Ye-Xwl1lCb">
            <TbBrandYoutubeFilled />
            </Link>       
        </div>

        <Link href="/about">
        <div className="text-white p-[10px] mt-3 rounded-md flex items-center gap-1" style={{backgroundColor: '#737C75'}}>
            <TbInfoSquareRounded />關於我
        </div>
        </Link>

        <Link href="/hobby">
        <div className="text-white p-[10px] mt-3 rounded-md flex items-center gap-1" style={{backgroundColor: '#737C75'}}>
            <TbBowlChopsticks />我的興趣
        </div>
        </Link>

        <Link href="/video">
        <div className="text-white p-[10px] mt-3 rounded-md flex items-center gap-1" style={{backgroundColor: '#737C75'}}>
            <TbBrandYoutubeKids/>影片作品
        </div>
        </Link>

        <Link href="/project">
        <div className="text-white p-[10px] mt-3 rounded-md flex items-center gap-1" style={{backgroundColor: '#737C75'}}>
            <TbBrandYoutubeKids/>學程專案
        </div>
        </Link>
    </div>
  );
}

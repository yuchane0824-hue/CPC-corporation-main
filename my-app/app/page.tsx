"use client"
import Menu from "../component/menu"

export default function Home() {

  return (
    <div className="flex min-h-screen justify-center">
      <Menu />

      <div className="w-full sm:block hidden" style={{backgroundColor: '#EFF0EA'}}>
        <p className="flex flex-col justify-center items-center text-lg font-bold ">
          梁育禎的個人履歷首頁
        </p>
      </div>
    </div>
  );
}

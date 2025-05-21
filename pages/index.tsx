import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen bg-[#F3F2EF] text-black max-w-md mx-auto">
      {/* 상단 검정 이미지 */}
      <div className="w-full">
        <Image
          src="/top-black.png"
          alt="상단 이미지"
          width={448}
          height={400}
          className="absolute top-0 w-full object-cover"
        />
      </div>

      {/* 상단 이미지 */}
      <div className="w-full mb-25">
        <Image
          src="/top.png"
          alt="상단 이미지"
          width={448}
          height={400}
          className="w-full min-h-[306px] object-cover"
        />
      </div>

      {/*텍스트1*/}
      <div className="z-10 absolute top-[27.5%] left-1/25 px-10 pt-5 bg-[url('/speechbubble1.png')] object-contain w-[215px] h-[139px] flex items-center text-center justify-center">
        이제 본격적으로 OO님의 사주팔자를 분석해볼 차례네요.
      </div>

      {/* 상단 경계 이미지 */}
      <div className="w-full">
        <Image
          src="/top-yellow.png"
          alt="상단 이미지"
          width={375}
          height={195}
          className="absolute top-26/100 w-full object-cover"
        />
      </div>

      {/* 가운데 이미지 */}
      <div className="w-full mb-12.5">
        <Image
          src="/middle.png"
          alt="가운데 이미지"
          width={351}
          height={200}
          className="w-full max-w-[351px] object-cover"
        />
      </div>

      {/*텍스트2*/}
      <div className="absolute top-1/2 left-1/25 px-8.5 pb-3 bg-[url('/speechbubble2.png')] object-contain w-[239px] h-[138.78px] flex items-center text-center justify-center">
        제가 OO님의 사주를 보기 쉽게 표로 정리했어요
      </div>

      {/* 하단 경계 이미지 */}
      <div className="w-full">
        <Image
          src="/bottom-yellow.png"
          alt="상단 이미지"
          width={375}
          height={195}
          className="absolute top-[66%] w-full object-cover z-5"
        />
      </div>

      {/* 하단 이미지 */}
      <div className="w-full mb-150 ">
        <Image
          src="/bottom.png"
          alt="하단 이미지"
          width={448}
          height={306}
          className="w-full min-h-[306px] h-[auto] object-cover"
        />
      </div>

      {/* 사주  */}
      <div className="absolute z-10 bg-[#F3F2EC]  top-7/10 left-[12x] border-3 w-[full] max-w-[351px] flex items-center text-center justify-center m-auto">
        <div className="relative w-full h-full  text-align  ">
          <Image
            src="/sajuline.png"
            alt="좌우 라인"
            width={351}
            height={621}
            className="absolute left-1.25 w-97/100 h-full"
          />
          <Image
            src="/sajuline-top.png"
            alt="위 라인"
            width={351}
            height={621}
            className="absolute top-1.25 full"
          />
          <Image
            src="/sajuline-bootm.png"
            alt="아래 라인"
            width={351}
            height={621}
            className="absolute bottom-1.25 w-full"
          />
          <Image
            src="/_레이어_left.png"
            alt="왼쪽 레이어"
            width={351}
            height={621}
            className="absolute w-14 h-9.5 top-11.25 left-1.25 object-contain"
          />
          <Image
            src="/_레이어_right.png"
            alt="오른쪽 레이어"
            width={351}
            height={621}
            className="absolute w-14 h-9.5 top-11.25 right-1.25 object-contain"
          />
          <div className="flex flex-col gap-3 mt-10 mb-5">
            <p className="font-normal h-4">김로켓님의 사주</p>
            <p className="font-bold text-xl h-5">1980년 8월27일 08:10</p>
          </div>
          <div className="w-full flex justify-center items-center px-1">
            <div className="max-w-[310px] w-auto text-[12px] text-center">
              {/* 헤더 */}
              <div className="grid grid-cols-5 font-bold">
                <div className="border border-black py-1"></div>
                <div className="border border-black py-1">時</div>
                <div className="border border-black py-1">日</div>
                <div className="border border-black py-1">月</div>
                <div className="border border-black py-1">年</div>
              </div>

              {/* 십신 */}
              <div className="grid grid-cols-5">
                <div className="border border-black py-1 font-bold">
                  十星
                  <br />
                  (십성)
                </div>
                <div className="border border-black py-1">
                  傷官
                  <br />
                  (상관)
                </div>
                <div className="border border-black py-1">
                  比肩
                  <br />
                  (비견)
                </div>
                <div className="border border-black py-1">
                  傷官
                  <br />
                  (상관)
                </div>
                <div className="border border-black py-1">
                  傷官
                  <br />
                  (상관)
                </div>
              </div>

              {/* 천간 */}
              <div className="grid grid-cols-5">
                <div className="border border-black py-1 font-bold">
                  天干
                  <br />
                  (천간)
                </div>
                <div className="border border-black p-0.5">
                  <div className="bg-gray-800 text-white rounded-sm">
                    임
                    <br />壬
                  </div>
                </div>
                <div className="border border-black p-0.5">
                  <div className="bg-red-700 text-white rounded-sm">
                    정
                    <br />丁
                  </div>
                </div>
                <div className="border border-black p-0.5">
                  <div className="bg-gray-800 text-white rounded-sm">
                    계
                    <br />癸
                  </div>
                </div>
                <div className="border border-black p-0.5">
                  <div className="bg-gray-800 text-white rounded-sm">
                    계
                    <br />癸
                  </div>
                </div>
              </div>

              {/* 지지 */}
              <div className="grid grid-cols-5">
                <div className="border border-black py-1 font-bold">
                  地支
                  <br />
                  (지지)
                </div>
                <div className="border border-black p-0.5">
                  <div className="bg-teal-700 text-white rounded-sm">
                    인
                    <br />寅
                  </div>
                </div>
                <div className="border border-black p-0.5 ">
                  <div className="bg-red-700 text-white rounded-sm">
                    사
                    <br />巳
                  </div>
                </div>
                <div className="border border-black p-0.5">
                  <div className="bg-gray-800 text-white rounded-sm">
                    해
                    <br />亥
                  </div>
                </div>
                <div className="border border-black p-0.5">
                  <div className="border border-black bg-white text-black rounded-sm">
                    유
                    <br />酉
                  </div>
                </div>
              </div>

              {/* 십성 */}
              <div className="grid grid-cols-5">
                <div className="border border-black py-1 font-bold">
                  十星
                  <br />
                  (십성)
                </div>
                <div className="border border-black py-1">
                  比肩
                  <br />
                  (비견)
                </div>
                <div className="border border-black py-1">
                  劫財
                  <br />
                  (겁재)
                </div>
                <div className="border border-black py-1">
                  食神
                  <br />
                  (식신)
                </div>
                <div className="border border-black py-1">
                  偏財
                  <br />
                  (편재)
                </div>
              </div>

              {/* 12운성 */}
              <div className="grid grid-cols-5">
                <div className="border border-black py-1 font-bold">
                  十二運星
                  <br />
                  (12운성)
                </div>
                <div className="border border-black py-1">
                  死<br />
                  (사)
                </div>
                <div className="border border-black py-1">
                  帝旺
                  <br />
                  (제왕)
                </div>
                <div className="border border-black py-1">
                  胎<br />
                  (태)
                </div>
                <div className="border border-black py-1">
                  長生
                  <br />
                  (장생)
                </div>
              </div>

              {/* 12신살 */}
              <div className="grid grid-cols-5">
                <div className="border border-black py-1 font-bold">
                  十二神煞
                  <br />
                  (12신살)
                </div>
                <div className="border border-black py-1">
                  劫殺
                  <br />
                  (겁살)
                </div>
                <div className="border border-black py-1">
                  地殺
                  <br />
                  (지살)
                </div>
                <div className="border border-black py-1">
                  驛馬殺
                  <br />
                  (역마살)
                </div>
                <div className="border border-black py-1">
                  將星殺
                  <br />
                  (장성살)
                </div>
              </div>

              {/* 귀인 */}
              <div className="grid grid-cols-5 mb-5">
                <div className="border border-black py-1 font-bold flex justify-center items-center ">
                  贵人
                  <br />
                  (귀인)
                </div>
                <div className="border border-black py-1 flex justify-center items-center">
                  (없음)
                </div>
                <div className="border border-black py-1 flex justify-center items-center">
                  (없음)
                </div>
                <div className="border border-black py-1 flex justify-center items-center">
                  天乙
                  <br />
                  (천을귀인)
                </div>
                <div className="border border-black py-1 justify-center items-center">
                  天乙
                  <br />
                  (천을귀인)
                  <br />
                  太極
                  <br />
                  (태극귀인)
                  <br />
                  文昌
                  <br />
                  (문창귀인)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

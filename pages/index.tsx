import Image from "next/image";
import { useState } from "react";
import  pca from '../pca.js';
import { Checkbox, Label } from "flowbite-react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { NextSeo } from "next-seo";

export default function Home() {
  const [provinces, setProvinces] = useState<any>({})
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const [screenPic, setScreenPic] = useState(false)

  const [toggleBtn, setToggleBtn] = useState(false)

  const [openTabCode, setOpenTabCode] = useState('')
  const getSelectProvinceLen = () => {
    return Object.keys(provinces).length
  }

  const getSelectProvinceNames = (onlyProvince: boolean = false) => {
    console.log(onlyProvince)
    if (onlyProvince) {
      return Object.keys(provinces).map(v => pca['86'][v]).join(',')
    } else {
      return Object.values(provinces).map(v => Object.values(v as any)).flat().join(',')
    }
  }

  return (
    <div className="relative bg-[#2ba667] w-full min-h-screen">
      <NextSeo
        title="行程卡纪念版"
        description="中国疫情期间的行程卡 App, 用来确保人民可以健康出行，目前官方 App 已成为历史，该页面是行程卡的纪念版，用来纪念那失去的青春"
      />
      <div className=" text-center py-[8%] px-[10%]">

        <h1 className="text-4xl md:text-7xl 2xl:text-9xl font-bold text-white">行程卡纪念版</h1>
        <h2 className="text-white text-xl my-4  md:text-3xl 2xl:text-6xl 2xl:my-20 md:my-10">疫情防控，人人有责</h2>

        <div className="bg-white mx-auto rounded-[20px] min-h-[200px] relative ">
          <p className="text-[#2ea468] font-bold rounded-t-[20px] h-[45px] leading-[45px] bg-top bg-no-repeat bg-[length:100%_100%] bg-[url('/images/header.png')]">请收下绿色行程卡</p>
          <p className="font-bold my-2.5 text-[#414141]">2020 - 2022 的动态行程卡</p>
          <p className="text-[#949494] text-base font-bold">停止于: 2022.12.13 00:00:00</p>
          <Image className="mx-auto w-[40%] my-4 mx-1/3" src="/images/03.gif" width={180} height={180} alt="行程卡" />

          {
            getSelectProvinceLen() < 1 ? (
              <>
                <button type="button" onClick={() => toggleDrawer()} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2" data-drawer-target="drawer-top-list" data-drawer-show="drawer-top-list" data-drawer-placement="top" aria-controls="drawer-top-list">选择地点</button>

              </>
            ) : (
              <div className="text-left border-t text-[#e2e2e2] my-2.5 px-5 pb-5 pt-2 text-xs">
                <span className="text-[#909090] font-bold">您于 2020 - 2022 年到达或旅经: </span>
                <span className="text-black font-bold break-words">{getSelectProvinceNames(toggleBtn)}</span>
              </div>
            )
          }

        </div>

        <div className="text-white text-xs my-5">
          <p>12月13日0时起, 正式下线“通信行程卡”服务，“通信行程卡” 短信、网页、微信小程序、支付宝小程序、APP等所有渠道同步下线!</p>
          <div className="inline-flex justify-center items-center w-full">
            <hr className="my-8 w-64 h-px bg-gray-200 border-0" />
            <span className="absolute text-white left-1/2 px-3 font-medium bg-[#2ba667] -translate-x-1/2">三年了，再也不见</span>
          </div>
          <div onClick={() => setToggleBtn(!toggleBtn)} className={`inline-flex items-center justify-center ${screenPic ? 'hidden' : ''}`}>
            <div className={`${toggleBtn ? ' bg-blue-600' : ''} w-2.5 h-2.5 rounded-full border border-white mr-1.5`}>
              {toggleBtn && <svg viewBox="0 0 40 40"><path d="M31.5541766,15 L28.0892433,15 L28.0892434,15 C27.971052,15 27.8576674,15.044522 27.7740471,15.1239792 L18.2724722,24.1625319 L13.2248725,19.3630279 L13.2248725,19.3630279 C13.1417074,19.2834412 13.0287551,19.2384807 12.9107898,19.2380079 L9.44474455,19.2380079 L9.44474454,19.2380079 C9.19869815,19.2384085 8.99957935,19.4284738 9,19.66253 C9,19.7747587 9.04719253,19.8823283 9.13066188,19.9616418 L17.0907466,27.5338228 C17.4170809,27.8442545 17.8447695,28 18.2713393,28 L18.2980697,28 C18.7168464,27.993643 19.133396,27.8378975 19.4530492,27.5338228 L31.8693384,15.7236361 L31.8693384,15.7236361 C32.0434167,15.5582251 32.0435739,15.2898919 31.8696892,15.1242941 C31.7860402,15.0446329 31.6725052,15 31.5541421,15 L31.5541766,15 Z" fill="currentColor"></path></svg>}
            </div>
            <div className="text-[10px] pb-0.5">隐藏地级市</div>
          </div>
        </div>

        {
          getSelectProvinceLen() > 0 && (
            <div className="flex items-center justify-between">
              <button type="button" onClick={() => toggleDrawer()} className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  ${screenPic ? 'hidden' : ''}`}>更改</button>
              <button type="button" onClick={() => setScreenPic(true)} className={`text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2  ${screenPic ? 'hidden' : ''}`}>截图</button>
            </div>)
        }

      </div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='top'
        size='80%'
        className="overflow-y-auto relative"
      >
        {
          Object.entries(pca['86']).map(([pa, pv]) => {
            return (
              <div key={pa} >
                <button color="gray" onClick={() => setOpenTabCode(pa)} className={`border-b space-x-1 flex h-14 items-center justify-between px-4 rounded-none w-full text-left hover:bg-gray-100 ${pa === openTabCode ? "bg-gray-200" : ""}`}>
                  <div>{pv as string} {provinces[pa] && Object.keys(provinces[pa]).length > 0 ? `(${(Object.keys(provinces[pa]).length)})` : ''}</div>
                  {
                    pa === openTabCode ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                      </svg>
                    )
                  }
                </button>
                {pa === openTabCode &&
                  <div className="flex flex-wrap px-5 py-3">
                    {
                      Object.entries(pca[pa]).map(([aa, av]) => {
                        return (
                          <div key={aa} className="mr-5 mb-4">
                            <Checkbox
                              checked={provinces[pa] && provinces[pa][aa] ? true : false}
                              id={av as string}
                              onChange={() => {
                                let pros = { ...provinces }

                                // 已经勾选，现在移出
                                if (pros[pa] && pros[pa][aa]) {
                                  delete pros[pa][aa]
                                  if (pros[pa].length < 1) {
                                    delete pros[pa]
                                  }
                                } else {
                                  if (!pros[pa]) {
                                    pros[pa] = {}
                                  }
                                  pros[pa][aa] = av
                                }

                                setProvinces(pros)
                              }}
                            />
                            <Label className="ml-2" htmlFor={av as string}>
                              {av as string}
                            </Label>
                          </div>
                        )
                      })
                    }
                  </div>
                }
              </div>
            )
          })
        }
      </Drawer>
    </div>

  )
}
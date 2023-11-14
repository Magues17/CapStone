"use client"


import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import React from "react";
import DropDown from "../../components/DropDown";
import Link from "next/link";
import NavigationCard from "../../components/NavigationCard";
import ProfilePage from "../page";
import PostFormCard from "../../components/PostFormCard";
import Format from "../../components/Format";




import AboutMe from "../about/page"
import FriendsOfMine from "../friends/page";
import PhotosMe from "../photos/page"
import { usePathname } from "next/navigation";
import { Router } from "react-router";


export default function PostsOfMine() {
  const router = usePathname();
  const { asPath:pathname } = router;
  console.log(router)
  const isPosts = router.includes('posts') || pathname === '/posts';
  const isAbout = router.includes('about') || pathname === '/about';
  const isFriends = router.includes('friends');
  const isPhotos = router.includes('photos');

  const tabClasses = 'flex gap-1 items-center px-3 py-1  border-b-4 border-b-white';
  const activeTabClasses = 'flex gap-1 items-center px-3 py-1 border-socialBlue  border-b-4 text-socialBlue font-bold';
  return (
    <Format>
    <Card noPadding={true}>
    <div className="relative overflow-hidden rounded-md">

      <div className="h-36 overflow-hidden flex justify-center items-center">
        <img src="https://wow.zamimg.com/uploads/screenshots/normal/149791-explore-nagrand.jpg" alt="" />
      </div>
      <div className="absolute top-24 left-4">

        <Avatar size={'lg'} />
      </div>
      <div className="p-4">
        <div className="ml-40">
          <h1 className="text-3xl font-bold">
            War Chief Thrall
          </h1>
          <div className="text-gray-500 leading-4"> Nagrand, Outlands
          </div>

        </div>
        <div className="mt-10 flex gap-0 ">
          <Link href={{ pathname: '/profile/posts' }} className={isPosts ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>

            Posts
          </Link>
          <Link href={{ pathname: '/profile/about' }} className={isAbout ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>

            About
          </Link>
          <Link href={{ pathname: '/profile/friends' }} className={isFriends ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>

            Friends
          </Link>
          <Link href={{ pathname: '/profile/photos' }} className={isPhotos ? activeTabClasses : tabClasses}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            Photos
          </Link>
        </div>
      </div>
    </div>


  
   



  
  
    <div className="flex gap-3 items-center">
        <div>
          <Link href='/profile/posts'>
          <span className="cursor-pointer">
          <Avatar />
          </span>
          </Link>
        </div>
        <div className="grow">
          <p>
            <Link href='/profile/posts'>
            <span className="mr-1 font-semibold cursor-pointer hover:underline">
            War Chief Thrall
            </span> 
            </Link>
            shared a{" "}
            <a className="text-socialBlue">album</a>
          </p>
          <p className="text-gray-500 text-sm">2 hours ago</p>
        </div>
        
        <DropDown />
        
      </div>

      <div>
        <p className="my-3 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum{" "}
        </p>

        <div className="rounded-md overflow-hidden">
          <img
            src="https://www.warcrafttavern.com/wp-content/uploads/2023/03/Orgrimmar-Travel-Guide-Gates.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex mt-5 gap-8">
        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          63
        </button>

        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
          12
        </button>

        <button className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
          3
        </button>
      </div>

      <div className="flex mt-4 gap-3">
        <div>
          <Avatar />
        </div>
        <div className="border grow rounded-full relative">
          <textarea
            className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full bg-white"
            placeholder="Leave a comment"
          />

          <button className="absolute top-3 right-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      
      </Card>
      </Format>
  );
  
}
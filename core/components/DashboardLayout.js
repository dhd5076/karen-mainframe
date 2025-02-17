import { useState } from 'react';
import Link from 'next/link';
import {
  HomeIcon,
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  FilmIcon,
  GlobeAltIcon,
  UserIcon,
  ChatBubbleOvalLeftIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const DashboardLayout = ({ children }) => {

  return (
    <div className="min-h-screen flex-col flex">
      <div className="bg-zinc-700 z-0 shadow shadow-black">
        <div className="flex items-center justify-between font-bold text-white h-16">
          <div className="flex items-center">
            <div className="h-16 w-16">
            </div>
          </div>
          <span className="text-xl text-zinc-400"> Karen</span>
          <div className="rounded-full pr-4">
            <div className="w-8 h-8 p-2 text-zinc-400 bg-zinc-500 rounded-full">
              <UserIcon/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex text-zinc-200">
        <div className="bg-zinc-900 p-3 pt-4 w-12 border-r border-zinc-700 flex-col justify-between flex">
          <div className="flex-col flex space-y-8 z-0">
            <span>
              <HomeIcon/>
            </span>
            <span>
              <MapPinIcon/>
            </span>
            <span>
              <FilmIcon/>
            </span>
            <span>
              <GlobeAltIcon/>
            </span>
            <span>
              <UserIcon/>
            </span>
            <span>
              <ChatBubbleOvalLeftIcon/>
            </span>
            <span>
              <Link href="/klowledge">
                <LightBulbIcon/>
              </Link>
            </span>
          </div>
          <div>
            <span>
              <AdjustmentsHorizontalIcon/>
            </span>
          </div>
        </div>
        <div className="bg-zinc-900 items-start flex-1 flex p-4 space-x-4 ">
            {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
// pages/index.js
import Image from 'next/image';  // If you're using images for logo
import { useState } from 'react';
import {
  HomeIcon,
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  FilmIcon,
  GlobeAltIcon,
  UserIcon
} from '@heroicons/react/24/outline'

const Dashboard = () => {
  return (

    <div className="min-h-screen flex-col flex">
      <div className="bg-zinc-700">
        <div className="flex items-center justify-between font-bold text-white h-16">
          <div className="flex items-center">
            <div className="h-12 w-12">
              <Image src="/profile.png" className="border border-zinc-900 ml-2 rounded-full" objectFit="contain" layout="intrinsic" width={128} height={128}/>
            </div>
          </div>
          <span className="text-xl text-zinc-400"> Karen</span>
          <div className="rounded-full pr-4">
            <div className="w-8 h-8 bg-zinc-500 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex text-zinc-200">
          <div className="bg-zinc-900 p-4 w-16 border-r border-zinc-700 flex-col justify-between flex">
            <div className="flex-col flex space-y-8">
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
            </div>
            <div>
              <span>
                <AdjustmentsHorizontalIcon/>
              </span>
            </div>
          </div>
          <div className="bg-zinc-900 flex-1 p-4">
            <div className="rounded border p-4 w-1/2 border-zinc-700">
              Hello This is a dashboard
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;

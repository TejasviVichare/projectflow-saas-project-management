import React from 'react'

 type StatsCardProps = {
    title : string;
    value: number;
    icon:  React.ReactNode
 }


export default function StatsCard({ 
    title,
    value,
    icon
}: StatsCardProps){
    return(
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div className="w-12 h-12 rounded-lg dark:text-white  bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
        {icon}
      </div>
    </div>
    )
}
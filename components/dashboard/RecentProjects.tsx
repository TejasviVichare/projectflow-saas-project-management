import React from 'react'

 const projects = [
    {
        id:1,
        name: 'E-Commerce Website'
    },
      {
    id: 2,
    name: "Social Media App",
  },
  {
    id: 3,
    name: "ProjectFlow SaaS",
  },
 ]


const RecentProjects = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h2 className="font-semibold text-lg mb-4">
        Recent Projects
      </h2>

    <div  className="space-y-3">
        {projects.map((item) =>(
            <div key={item.id}  className="border rounded-lg p-3">
                {item.name}
            </div>
       ))

        }


    </div>


    </div>
  )
}

export default RecentProjects
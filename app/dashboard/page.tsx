"use client"
import RecentProjects from '@/components/dashboard/RecentProjects';
import StatsCard from '@/components/dashboard/StatsCard'
import WelcomeCard from '@/components/dashboard/WelcomeCard';
import RecentTasks from '@/components/dashboard/RecentTasks';

import DashboardLayout from '@/components/layout/DashboardLayout'
import React from 'react'
import {
  FiFolder,
  FiCheckSquare,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import {
  useProjectStore,
} from "@/store/projectStore";

import {
  useTaskStore,
} from "@/store/taskStore";


const Page = () => {
const { projects } = useProjectStore();

const { tasks } = useTaskStore();


const completedTask = tasks.filter((task)=> task.status == "done").length
const pendingTask = tasks.filter((task) => task.status !== "done").length

  return (
    <DashboardLayout>
      <WelcomeCard />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Projects"
          value={projects.length}
          icon={<FiFolder />}
        />

        <StatsCard
          title="Tasks"
          value={tasks.length}
          icon={<FiCheckSquare />}
        />

        <StatsCard
          title="Completed"
          value={completedTask}
          icon={<FiCheckCircle />}
        />

        <StatsCard
          title="Pending"
          value={pendingTask}
          icon={<FiClock />}
        />
      </div>
       <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
        <RecentProjects />
        <RecentTasks />
      </div>
    </DashboardLayout>
  )
}

export default Page
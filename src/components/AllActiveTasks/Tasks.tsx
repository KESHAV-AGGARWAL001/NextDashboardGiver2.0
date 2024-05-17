"use client"
import React, { useEffect, useState } from 'react'
import Task from '../TaskComponent/Task';
import Link from 'next/link';
interface taskData {
  id: number;
  title: string;
  description: string;
  deadline: Date;
}

const tasks: taskData[] = [
  {
    id: 1,
    title: 'Complete Assignment',
    description: 'Finish the project assignment by next week',
    deadline: new Date('2024-04-30T23:59:59Z'),
  },
  {
    id: 2,
    title: 'Attend Meeting',
    description: 'Join the team meeting on Friday and come office',
    deadline: new Date('2024-04-22T10:00:00Z'),
  },
  {
    id: 3,
    title: 'Submit Report',
    description: 'Submit the monthly report to the manager',
    deadline: new Date('2024-05-05T17:00:00Z'),
  },
];

console.log(tasks);



const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("url")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <div className='flex flex-col space-y-3'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl text-black font-semibold dark:text-white '>Active Works</h1>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          <Link href={"https://nextjs.org/docs/app/api-reference/functions/redirect"}>Add Work</Link>
        </button>
      </div>
      <div className='w-[100%] grid grid-cols-3 '>
        {
          tasks.map((task) => (
            <div key={task.id} className='w-full '>
              <Task task={task} />
            </div>
          ))
        }
      </div>
    </div >
  )
}
export default Tasks

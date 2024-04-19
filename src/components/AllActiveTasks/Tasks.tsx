import React from 'react'
import Task from '../TaskComponent/Task';

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
    description: 'Join the team meeting on Friday',
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


const page = () => {
  return (
    <div className='w-100vw flex space-y-2 flex-col'>
      {
        tasks.map((task) => (
          <div key={task.id} className='w-full '>
            <Task task={task} />
          </div>
        ))
      }
    </div>
  )
}

export default page

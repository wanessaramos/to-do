'use client';
import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Link from 'next/link';
import Icon from '@mui/icons-material/Add';
import { TaskProps } from '@/lib/storage';
import api from '@/services/api';

const Home = () => {
  const [tasks, setTasks] = useState<TaskProps[] | []>([]);

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await api.get(`/task/`);
        const data = response.data;
        setTasks(data);
      } catch (error) {
        console.error('Erro ao obter tasks:', error);
      }
    }
    getTasks();
  }, [tasks]);

  const toDoTasks = tasks.filter((task) => task.check);
  const completedTasks = tasks.filter((task) => !task.check);

  return (
    <div className="bg-lightgray flex flex-col items-center w-full min-h-screen p-4 md:p-8 relative">
      <Link
        title="Create task"
        className="bg-green text-lx leading-[1.396rem] font-rubik font-medium text-white py-4 flex z-50 items-center justify-center fixed bottom-[1.25rem] right-[1.25rem] p-2 rounded-full w-[50px] h-[50px]"
        href="/tasks"
      >
        <Icon />
      </Link>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8">
        <div>
          <p className="text-base leading-[1.185rem] font-rubik font-medium text-gray px-0 py-4 uppercase">
            TO DO:
          </p>
          <div>
            {toDoTasks.map((task) => (
              <Card key={task.id} task={task} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-base leading-[1.185rem] font-rubik font-medium text-gray px-0 py-4 uppercase">
            Tarefas Concluídas:
          </p>
          <div>
            {completedTasks.map((task) => (
              <Card key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

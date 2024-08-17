'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Icon from '@mui/icons-material/ArrowBack';
import api from '@/services/api';
import { TaskProps } from '@/lib/storage';

interface EditProps {
  params: { id: string };
}

const EditTask = ({ params }: EditProps) => {
  const router = useRouter();
  const [task, setTask] = useState<TaskProps | undefined>();
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function getTask() {
      const { id } = params;
      try {
        const response = await api.get(`/task/${id}`);
        const data: TaskProps = response.data;
        setTask(data);
        setUsername(data.username);
        setDescription(data.description);
      } catch (error) {
        console.log(error);
      }
    }
    getTask();
  }, [params]);

  async function createTask(event: React.FormEvent) {
    event.preventDefault();
    const rawFormData = {
      username,
      description,
      check: task?.check
    };
    try {
      await api.put(`/task/${params.id}`, rawFormData);
      router.back();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-lightgray flex items-center justify-center w-full min-h-screen p-4 md:p-8">
      <div>
        <div className="flex items-center justify-start">
          <Link
            className="text-lx leading-[22.33px] font-rubik font-medium text-oil py-4"
            href="/"
          >
            <Icon className="text-oil text-base" /> Home
          </Link>
        </div>
        <div
          className="bg-white flex flex-col items-center justify-center w-full h-auto md:w-[62.5rem] md:h-[35rem]
       rounded-lg shadow p-[1.25rem] mb-4"
        >
          <div className="md:w-[900px] w-full h-auto">
            <div className="w-full py-4">
              <p className="text-lg leading-[28.44px] font-rubik font-medium text-oil py-4">
                Nova tarefa
              </p>
            </div>

            <form onSubmit={createTask}>
              <div className="w-full py-4">
                <label
                  className="
         text-gray font-rubik font-normal p-0.5 text-base leading-[18.96px]"
                >
                  Usuário
                </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white border border-solid border-lightgray rounded w-full h-[46px]"
                />
              </div>

              <div className="w-full py-4">
                <label
                  className="
         text-gray font-rubik font-normal p-0.5 text-base leading-[18.96px]"
                >
                  Descrição
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-white border border-solid border-lightgray rounded w-full h-[8.75rem]"
                />
              </div>
              <div className="w-full py-4">
                <button
                  className="bg-green w-[100%] h-[48px]
         text-white font-rubik font-medium py-4 px-4 rounded-lg text-base leading-[18.96px]"
                >
                  Editar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;

import { ModeEdit, Delete } from '@mui/icons-material/';
import api from '@/services/api';
import Link from 'next/link';

interface MenuProps {
  id: string;
  check: boolean;
}

const Menu = ({ id, check }: MenuProps) => {
  const deleteTask = async () => {
    try {
      await api.delete(`/task/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-auto h-auto rounded absolute top-0.5 right-0">
      <div className="grid grid-rows-2 gap-2 p-4">
        {check && (
          <Link
            href={`/tasks/${id}`}
            className="bg-oil text-lx text-white flex items-center justify-center p-2 rounded-full w-[30px] h-[30px]"
            title="Edit task"
          >
            <ModeEdit />
          </Link>
        )}
        <button
          className="bg-oil text-lx text-white flex items-center justify-center p-2 rounded-full w-[30px] h-[30px]"
          title="Delete task"
          onClick={() => deleteTask()}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
};
export default Menu;

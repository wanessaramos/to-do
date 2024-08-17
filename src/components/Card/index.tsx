import Button from '../Button';
import { TaskProps } from '@/lib/storage';
import Menu from '../Menu';

export interface CardProps {
  task: TaskProps;
}

const Card = ({ task }: CardProps) => {
  return (
    <div className="w-full md:w-[30.625rem] h-auto md:h-[20.6875rem] rounded-lg bg-white shadow p-5 mb-4 relative">
      <Menu id={task.id} check={task.check} />
      <div className="flex flex-col items-start justify-between h-full">
        <div className="w-full gap-2">
          <div>
            <p className="text-xs leading-[0.88875rem] font-rubik font-medium text-gray uppercase">
              Usuário
            </p>
            <p className="text-base leading-[1.185rem] font-rubik font-normal text-black">
              {task.username}
            </p>
          </div>
        </div>
        <div className="w-full gap-2">
          <div>
            <p className="text-xs leading-[0.88875rem] font-rubik font-medium text-gray uppercase">
              Descrição
            </p>
            <p className="text-base leading-[1.185rem] font-rubik font-normal text-oil">
              {task.description}
            </p>
          </div>
        </div>
        <div className="w-full mt-4">
          <Button check={task.check} id={task.id} />
        </div>
      </div>
    </div>
  );
};

export default Card;

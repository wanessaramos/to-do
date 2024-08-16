import Icon from '@mui/icons-material/Check';
import api from '@/services/api';

interface ButtonProps {
  check: boolean;
  id: string;
}
const Button = ({ check, id }: ButtonProps) => {
  async function upDateTask() {
    const checkin = { check: false };

    console.log(checkin, check, id);
    try {
      const response = await api.patch(`/task/${id}`, checkin);
      console.log('data', response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {check && (
        <button
          className="bg-green w-[100%] h-[48px]
         text-white font-rubik font-medium py-0.5 px-1 rounded-lg text-base leading-[18.96px]"
          onClick={upDateTask}
        >
          Concluir tarefa
        </button>
      )}
      {!check && (
        <div className="bg-white items-center justify-center py-0.2 px-1 w-[100%] h-[48px]">
          <Icon className="text-green text-base" />
          <span
            className="
         text-green font-rubik font-medium p-0.5 text-sm leading-[16.59px] uppercase"
          >
            Tarefa Concluída
          </span>
        </div>
      )}
    </>
  );
};
export default Button;

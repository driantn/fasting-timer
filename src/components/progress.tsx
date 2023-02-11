export const Progress = () => {
  return (
    <div className="flex flex-row absolute top-0 w-full justify-center">
      <span className="w-[100px] max-w-[100px] text-center font-bold bg-orange-500">
        {'< 5h'}
      </span>
      <span className="w-[100px] max-w-[100px] text-center font-bold bg-yellow-500">
        {'<= 10h'}
      </span>
      <span className="w-[100px] max-w-[100px] text-center font-bold bg-blue-500">
        {'<= 15h'}
      </span>
      <span className="w-[100px] max-w-[100px] text-center font-bold bg-green-500">
        {'> 15h'}
      </span>
    </div>
  );
};

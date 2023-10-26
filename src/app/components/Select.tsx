import Image from 'next/image';

interface IOption {
  value: string;
  label: string;
}

const Select = ({ options }: { options: IOption[] }) => {
  return (
    <span className='relative flex items-center rounded-xl bg-gray-100 lg:inline-flex'>
      <select className='mr-6 flex-1 appearance-none bg-transparent py-2 pl-3 pr-9 text-sm font-semibold'>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <Image
        className='pointer-events-none absolute right-4'
        src='/assets/icons/chevron-down.svg'
        alt='Select Arrow'
        width={15}
        height={15}
      />
    </span>
  );
};

export default Select;

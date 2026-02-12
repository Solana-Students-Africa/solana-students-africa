// University Tag Component - for Community page

interface UniversityTagProps {
  name: string;
}

const UniversityTag = ({ name }: UniversityTagProps) => (
  <div className="flex items-center justify-center rounded-[10px] bg-white px-[15px] py-[12px] md:rounded-[20px] md:p-[30px]">
    <p className="font-gellix text-center text-[14px] font-medium text-[#070707] md:text-[30px]">
      {name}
    </p>
  </div>
);

export default UniversityTag;
export type { UniversityTagProps };

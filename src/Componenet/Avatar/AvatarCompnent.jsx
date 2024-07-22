// eslint-disable-next-line react/prop-types
const Avatar = ({ uri, alt = 'User Avatar' }) => {
  const sizeClass = 'w-[50px] h-[50px] text-md';
  const borderStyle = 'border-2 border-dashed border-gray-400';

  return (
    <div className={`relative flex items-center rounded-full overflow-hidden ${sizeClass} ${borderStyle} ml-[-25px]`}>
      {uri ? (
        <img src={uri} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <div className="flex items-center justify-center bg-gray-300 text-gray-600 font-semibold w-full h-full">
          {alt.charAt(0)}
        </div>
      )}
    </div>
  );
};

export default Avatar;

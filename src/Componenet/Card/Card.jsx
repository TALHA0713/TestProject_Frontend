import first from '../../assets/1st.png';

// eslint-disable-next-line react/prop-types
function Card({ title, description }) {
  return (
    <div className="bg-white p-5 rounded-sm shadow-lg">
      <img src={first} alt="Icon 1" className="mb-4 h-[40%] w-[20%]" />
      <h3 className="text-custom-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-custom-md text-gray-400 mb-2">{description}</p>
      <p className="text-sm font-medium text-gray-500">Task Done: 2/56</p>
    </div>
  );
}

export default Card;

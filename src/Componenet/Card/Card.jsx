import first from '../../assets/1st.png'
function Card() {
  return (
    <div className="bg-white p-6 rounded-sm shadow-lg">
          <img src={first} alt="Icon 1" className="mb-4 h-[4  0%] w-[20%]" />
          <h3 className="text-custom-lg font-bold text-gray-900 mb-2">Android UI System</h3>
          <p className="text-custom-md text-gray-400 mb-2">Redesign all the web pages with animation.</p>
          <p className="text-sm font-medium text-gray-500">Task Done: 02/56</p>
        </div>
  )
}

export default Card

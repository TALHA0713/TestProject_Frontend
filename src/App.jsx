import Routing from "./Componenet/Routing/Routing";

function App() {
  return (
    <Routing/>
  );
}

export default App;


// import { useState } from "react";
// const MyComponent = () => {
//   // Initial data
//   const [data, setData] = useState([
//     { id: 1, description: 'Item One' },
//     { id: 2, description: 'Item Two' },
//     { id: 3, description: 'Another Item' },
//     // Add more items if needed
//   ]);

//   // State for search term and filtered data
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredData, setFilteredData] = useState(data);

//   // Function to handle search input change
//   const handleSearchChange = (e) => {
//     const searchTerm = e.target.value;
//     setSearchTerm(searchTerm);
    
//     // Apply filter based on searchTerm
//     const newFilteredData = data.filter(item =>
//       item.description &&
//       typeof item.description === 'string' &&
//       item.description.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    
//     // Update filtered data
//     setFilteredData(newFilteredData);
//   };

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={searchTerm} 
//         onChange={handleSearchChange} 
//         placeholder="Search..."
//       />
//       <ul>
//         {filteredData.map(item => (
//           <li key={item.id}>{item.description}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MyComponent;

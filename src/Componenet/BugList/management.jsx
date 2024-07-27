import { useState } from "react";
import Middle from "./Middle";
import Table from "./Table";

function TaskManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container mx-auto py-4">
      <Middle searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <Table searchTerm={searchTerm} />
    </div>
  );
}

export default TaskManagement;

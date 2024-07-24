import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function PaginationComponent() {

  const [currentPage, setCurrentPage] = useState(1)
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    
  };

  return (
    <div className="flex justify-between items-center p-4 container mx-auto">
      <span className="text-gray-700">Showing {(currentPage - 1) * 10 + 1} to {Math.min(currentPage * 10, 100)} of 100 entries</span>
      <Stack spacing={2}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}

export default PaginationComponent;

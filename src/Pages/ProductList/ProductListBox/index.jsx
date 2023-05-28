import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

const columns = [
  { field: 'id', headerName: 'NO', width: 90 },
  {
    field: 'tittle',
    headerName: 'Tittle',
    width: 150,
    editable: true,
  },
  {
    field: 'image',
    headerName: 'Image',
    width: 150,
    editable: true,
  },
  {
    field: 'sticker',
    headerName: 'Sticker',
    type: 'id',
    width: 110,
    editable: true,
  },
  {
    field: 'image1',
    headerName: 'Image',
    width: 160,
  },
];

const rows = [
  { id: 1, tittle: 'Hello', image: 'JPEG', sticker: 35, image1: 'PEPE' },
  { id: 2, tittle: 'Jackson', image: 'JPEG', sticker: 42, image1: 'PEPE' },
  { id: 3, tittle: 'Car', image: 'JPEG', sticker: 45, image1: 'PEPE' },
  { id: 4, tittle: 'Zedflow', image: 'JPEG', sticker: 16, image1: 'PEPE' },
  { id: 5, tittle: 'Shopify', image: 'JPEG', sticker: null, image1: 'PEPE' },
  { id: 6, tittle: 'Amazon', image: 'JPEG', sticker: 150, image1: 'PEPE' },
  { id: 7, tittle: 'Ebay', image: 'JPEG', sticker: 44, image1: 'PEPE' },
  { id: 8, tittle: 'Aus', image: 'JPEG', sticker: 36 , image1: 'PEPE'},
  { id: 9, tittle: 'E-commerce', image: 'JPEG', sticker: 65 , image1: 'PEPE'},
];


export default function DataGridDemo() {

  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchClicked, setSearchClicked] = useState(false);
  const [filteredRows, setFilteredRows] = useState([]);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleButtonClick = () => {
    if (!searchClicked) {
      setSearchClicked(true);
    }
  };

  React.useEffect(() => {
    if (searchClicked) {
      const newFilteredRows = rows.filter((row) =>
        Object.values(row).some(
          (value) =>
            typeof value === 'string' &&
            value.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredRows(newFilteredRows);
    }
  }, [searchQuery, searchClicked]);
  

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <div className='search-box'>
        <input
        className="input1"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
        <button className="button1" 
                onClick={handleButtonClick}> <SearchIcon fontSize="small"/> </button>
      </div>
      
      <DataGrid 
        columns={columns} rows={searchClicked ? filteredRows : rows}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
        componentsProps={{
          toolbar: {
            showQuickFilter: false,
          },
        }}
      />
    </Box>
  );
}
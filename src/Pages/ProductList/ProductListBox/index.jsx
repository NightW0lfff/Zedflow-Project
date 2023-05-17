import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


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
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={rows}
        columns={columns}
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
      />
    </Box>
  );
}
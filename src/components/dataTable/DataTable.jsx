import { Button, imageListClasses } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct } from '../../store/featrue/productSlice';
import { useState } from 'react';
import { Cancel, PanoramaSharp } from '@mui/icons-material';

export default function DataGridTable() {
  const dispatch = useDispatch();
  const [viewProduct, setViewProduct] = useState(null);
  const [isModalShow, setIsModalShow] = useState(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: false,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: false,
    },
    {
      field: 'regularPrice',
      headerName: 'Regular Price',
      type: 'number',
      width: 110,
      editable: false,
    },
    {
      field: 'extraPrice',
      headerName: 'Extra Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'taxAmount',
      headerName: 'Tax Amount',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },

    {
      field: 'weight',
      headerName: 'Weight',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'length',
      headerName: 'Length',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'height',
      headerName: 'Height',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'width',
      headerName: 'Width',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'totalStock',
      headerName: 'Total Stock',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'image',
      headerName: 'Image',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <img
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
            src={params.row.image}
            alt="img"
          />
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      editable: false,
      renderCell: (params) => (
        <>
          <Button
            onClick={() => {
              setViewProduct(params.row);
              setIsModalShow(true);
            }}
          >
            <VisibilityIcon />
          </Button>

          <Button
            onClick={() => dispatch(deleteProduct(params.id))}
            color="error"
          >
            <DeleteIcon />;
          </Button>
        </>
      ),
    },
  ];
  const state = useSelector((state) => state.product);

  return (
    <>
      <Box className="" sx={{ height: 400, width: '90%', margin: '10px auto' }}>
        <DataGrid
          rows={state.products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>

      {isModalShow && (
        <div className="backdrop" onClick={() => setIsModalShow(false)}>
          <div className="cancel-icon">
            <Cancel fontSize="20" />
          </div>
          <div className="modal">
            <ul>
              {viewProduct &&
                Object?.keys(viewProduct)
                  .filter((key) => key !== 'image')
                  .map((key) => (
                    <li key={key}>
                      <span>{key}:</span> {viewProduct[key]}
                    </li>
                  ))}
            </ul>
            <img
              src={viewProduct.image}
              style={{ width: '100%', height: '100px', objectFit: 'cover' }}
              alt=""
            />
          </div>
        </div>
      )}
    </>
  );
}

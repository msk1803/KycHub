
import { DataContext } from '../App';
import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Compare() {
    let {compareData,setCompareData}=useContext(DataContext)

 
  return (
    <>
<TableContainer className='table' component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        {compareData.length?<TableHead>
            <TableRow>
            <TableCell align="center"><h1>Name</h1></TableCell>
            <TableCell align="center"><h1>Price</h1></TableCell>
            <TableCell align="center"><h1>Rating</h1></TableCell>
            <TableCell align="center"><h1>Brand</h1></TableCell>
            <TableCell align="center"><h1>Category</h1></TableCell>

            <TableCell align="center"><h1> </h1></TableCell>
          </TableRow>
        </TableHead>:null
}
        <TableBody>

          {compareData.length?compareData.map((row) => (
            
          
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
        
              <TableCell align="center"><h3>{row.title}</h3></TableCell>
              <TableCell align="center"><h3>{row.price}</h3></TableCell>
              <TableCell align="center"><h3>{row.rating}</h3></TableCell>
              <TableCell align="center"><h3>{row.brand}</h3></TableCell>
              <TableCell align="center"><h3>{row.category}</h3></TableCell>

              <TableCell align="center"> <Button onClick={()=>{
            setCompareData(compareData.filter((x)=>x.id!==row.id))
              }}
        variant="contained">Delete</Button></TableCell>
            </TableRow>   
          ))
     : null}
        </TableBody>
      </Table>
    </TableContainer>
            
<Link to='/home' className={compareData.length===4?'disabled-link':null}> 
<Button style={{margin:500,marginBottom:500,marginTop:100,marginLeft:700}} variant="contained" disabled={compareData.length===4}>Add more
</Button></Link>
</>
  )
}

export default Compare

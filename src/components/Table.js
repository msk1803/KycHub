import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import {  Table } from 'antd';
import { DataContext } from '../App';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function TableData() {
   
let {data,setData,compareData,setCompareData}=useContext(DataContext)

      
  useEffect(()=>{
   axios.get("https://dummyjson.com/products").then((res)=>{
    console.log(res.data.products)
    setData(res.data.products)
   })
   
  },)

 const modifiedData=data.map((item)=>({
...item,
key:item.id
 }));

function compare(value){
    const filterdata=compareData.length?compareData.find((item)=>item.id===value.id):setCompareData([...compareData,value])
    console.log("this data"+filterdata)
    filterdata?setCompareData([...compareData]):compareData.length<4?setCompareData([...compareData,value]):setCompareData([...compareData])
  
console.log(compareData)

}


  const columns = [
    {
      title: 'Name',
      dataIndex: 'title',
      key: 'id',
      width:150,
      height:20
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'id',
        width: 400,
     
      },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'id',
      sorter: {
        compare: (a, b) => a.price - b.price,
        
      },
      width:100,
      
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'id',
      sorter: {
        compare: (a, b) => a.rating - b.rating,
    
      },
      width:100,
    
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      key: 'id',
     width:200,
     
    },
    {
        title: 'Categories',
        dataIndex: 'category',
        key: 'id',
        width:100,
        
      },
      {
        title: 'Compare',
        dataIndex: '',
        key: 'id',
        render: (_,record) => <Link to={'/compare'}><Button >Compare </Button ></Link>,
      },
  
  ];

  
  
  return (
    <div className='tables'>
      <div
        style={{
          marginBottom: 16,
        
        }}
      >
      
      </div>
      <Table 
       onRow={(record, rowIndex) => {
        return {
          onClick: () => {compare(record)}, // click row
        };}
    }
      bordered={true} rowSelection={ true}
 columns={columns} dataSource={modifiedData} />
    </div>
  )
}

export default TableData;

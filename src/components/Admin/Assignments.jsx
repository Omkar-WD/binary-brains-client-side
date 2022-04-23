import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import axios from "axios";
import { useState } from "react";
export const AdminAssignments = () => {
  const [data,setData]=useState({
    assignment_name:"",
    batch_name:"",
    type:"",
    creater:"",
    created_date:"",
    dead_line:""
  })
  const handleChange=(e)=>{
  const {id,value}=e.target;
  setData({...data,[id]:value});
  }
  const handleSubmit=(e)=>{
    axios.post("https://binary-brains.herokuapp.com/assignment",data).then((res)=>{
      console.log(res);
    })
  }
  return <><h1>Create Assignment</h1> 
   <Input placeholder="assignment name" width={550} id="assignment_name" onChange={(e)=>{handleChange(e)}} 
   />
   <br />
   <br />
   <Input placeholder="batch name" width={550} id="batch_name" onChange={(e)=>{handleChange(e)}}/>
   <br />
   <br />
   <Input placeholder="type" width={550} id="type" onChange={(e)=>{handleChange(e)}}/>
   <br />
   <br />
   <Input placeholder="Creator" width={550} id="creater" onChange={(e)=>{handleChange(e)}}/>
   <br />
   <br />
   <Input placeholder="created Date" type="date" width={550} id="created_date"  onChange={(e)=>{handleChange(e)}}/>
   <br />
   <br />
   <Input placeholder="Dead line" type="date" width={550} id="dead_line" onChange={(e)=>{handleChange(e)}}/>
   <br />
   <br />
   <Button colorScheme='teal' size='sm' onClick={handleSubmit}>
   Create
  </Button>
  </>;
};

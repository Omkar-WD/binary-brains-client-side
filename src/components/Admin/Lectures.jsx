import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export const Lectures = () => {
  const [data, setData] = useState({
    lecture_name: "",
    batch_name: "",
    type: "",
    creater: "",
    created_date: "",
    created_time: "",
    zoom_link: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleSubmit = (e) => {
    axios
      .post("https://binary-brains.herokuapp.com/lecture", data)
      .then((res) => {
        console.log(res);
        setData({
          lecture_name: "",
          batch_name: "",
          type: "",
          creater: "",
          created_date: "",
          created_time: "",
          zoom_link: "",
        });
      });
  };
  return (
    <>
      <h1>Create Assignment</h1>
      <Input
        placeholder="assignment name"
        width={550}
        id="lecture_name"
        onChange={(e) => {
          handleChange(e);
        }}
        value={data.lecture_name}
      />
      <br />
      <br />
      <Input
        placeholder="batch name"
        width={550}
        id="batch_name"
        onChange={(e) => {
          handleChange(e);
        }}
        value={data.batch_name}
      />
      <br />
      <br />
      <Input
        placeholder="type"
        width={550}
        id="type"
        onChange={(e) => {
          handleChange(e);
        }}
        value={data.type}
      />
      <br />
      <br />
      <Input
        placeholder="Creator"
        width={550}
        id="creater"
        onChange={(e) => {
          handleChange(e);
        }}
        value={data.creater}
      />
      <br />
      <br />
      <Input
        placeholder="created Date"
        type="date"
        width={550}
        id="created_date"
        onChange={(e) => {
          handleChange(e);
        }}
        value={data.created_date}
      />
      <br />
      <br />
      <Input
        placeholder="Dead line"
        type="date"
        width={550}
        id="created_time"
        onChange={(e) => {
          handleChange(e);
        }}
        value={data.created_time}
      />

      <br />
      <br />

      <Input
        placeholder="Dead line"
        type="date"
        width={550}
        id="zoom_link"
        onChange={(e) => {
          handleChange(e);
        }}
        value={data.zoom_link}
      />
      <Button colorScheme="teal" size="sm" onClick={handleSubmit}>
        Create
      </Button>
    </>
  );
};

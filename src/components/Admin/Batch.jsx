import { Button, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
export const Batch = () => {
  const [batch, setBatch] = useState({
    batch_name: "",
  });

  const handleChange = (e) => {
    let { id, value } = e.target;
    setBatch({ ...batch, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://binary-brains.herokuapp.com/batch", batch)
      .then((res) => {
        setBatch({
          batch_name: "",
        });
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <br />
          <Input
            placeholder="batch Name"
            id="batch_name"
            width={550}
            onChange={handleChange}
            value={batch.batch_name}
          />{" "}
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

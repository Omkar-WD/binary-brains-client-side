import { Heading, Flex, Container } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";

function Apply() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    axios
      .get(`https://recruitment-backend-app.herokuapp.com/job`)
      .then((res) => {
        setArr(res.data.AllJob);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container maxW="container.xl" align="center" mt={"10"}>
      <Flex direction="row" flexWrap="wrap" justify="center" gap={5} m="auto">
        {arr.length > 0
          ? arr.map((e) => <JobCard key={e._id} data={e} />)
          : null}
      </Flex>
    </Container>
  );
}

export default Apply;

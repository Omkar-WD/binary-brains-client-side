import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Attendence from "../components/Statistics/Attendence/Attendence";
import Assignments from "../components/Statistics/Assignments/Assignments";
import Coding from "../components/Curriculum/Coding/Coding";
import DSA from "../components/Curriculum/DSA/DSA";
import Contest from "../components/Curriculum/Contest/Contest";
import NotFound from "./NotFound";
import Apply from "./Placements/Apply/Apply";
import TotalPlacements from "./Placements/TotalPlacements/TotalPlacements";
import HiringPartners from "./Placements/HiringPartners/HiringPartners";
import ApplyJob from "./Placements/Apply/ApplyJob";
import { Batch } from "./Admin/Batch";
import { Lectures } from "./Admin/Lectures";
import { AdminAssignments } from "./Admin/Assignments";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path="/adminassignment" element={<AdminAssignments/>} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/attendence"} element={<Attendence />} />
      <Route path={"/assignments"} element={<Assignments />} />
      <Route path={"/coding"} element={<Coding />} />
      <Route path={"/dsa"} element={<DSA />} />
      <Route path={"/contest"} element={<Contest />} />
      <Route path={"/apply"} element={<Apply />} />
      <Route path={"/total-placements"} element={<TotalPlacements />} />
      <Route path={"/hiring-partners"} element={<HiringPartners />} />
      <Route path={"/apply-job/:id"} element={<ApplyJob />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}

export default AllRoutes;

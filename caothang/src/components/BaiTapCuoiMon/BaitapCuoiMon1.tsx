import React from "react";
import Navigation1 from './Navigation1';
import HomeWork07 from "../HomeWork07/HomeWork07";
import ComponentList from './ComponentList1';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import DetailUser from "./DetailUser";
import UpdateUser from "./UpdateUser";


function BaitapCuoiMon1() {
  return (
    <>
      <BrowserRouter>
      <Navigation1 />
        {/* <ul className={Style.navigation}>
          <li className={Style.link}>
            <Link to="/">ComponentList</Link>
          </li>
          <li className={Style.link}>
            <Link to="/Form">Form</Link>
          </li>
          <li className={Style.link}>
            <Link to="/Detail">Detail</Link>
          </li>
        </ul> */}

        <Routes>
          <Route path="/" element={<ComponentList />} />
          <Route path="/Form" element={<HomeWork07 />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/DetailUser " element={<DetailUser />} />
          <Route path="/DetailUser/:id" element={<DetailUser />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Not found this page</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default BaitapCuoiMon1;

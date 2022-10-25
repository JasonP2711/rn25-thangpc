import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Style from "./Style.module.css";
type Props = {};

function HomeWork07() {
  const formik = useFormik({
    initialValues: {
      name: "",
      password:"",
      address:"",
      address_2:"",
    },
    validationSchema: Yup.object({
      email: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);

      const url = "https://63528f27a9f3f34c37415579.mockapi.io/exp_1";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đây
          console.log(json);
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });

  const handlechange = (event: any) =>{
    // console.log(event.target.values);
  }

  return (
    <>
      <form className={Style.container} onSubmit={formik.handleSubmit}>
        <div className={Style.header_part}>
          <div className={Style.name}>
            <span>Name User</span>
            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange}/>
          </div>

          <div className={Style.password}>
            <span>Password </span>
            <input type="password" />
          </div>
        </div>

        <div className={Style.Add1}>
          <span>Address </span>
          <input type="text" />
        </div>

        <div className={Style.Add2}>
          <span>Address 2</span>
          <input type="text" />
        </div>

        <div>
          <div className={Style.City}>
            <span>City</span>
            <select>
            <option value="DN">DaNang</option>
          <option value="TP.HCM">TP.Ho Chi Minh</option>
          <option value="HN">Ha noi</option>
            </select>
          </div>

          <div className={Style.District}>
            <span>District</span>
            <select>
            <option value="DN">DaNang</option>
          <option value="TP.HCM">TP.Ho Chi Minh</option>
          <option value="HN">Ha noi</option>
            </select>
          </div>

          <div className={Style.Commune}>
            <span>Commune</span>
            <select>
            <option value="DN">DaNang</option>
          <option value="TP.HCM">TP.Ho Chi Minh</option>
          <option value="HN">Ha noi</option>
            </select>
          </div>

          <input className={Style.check} type="checkbox" />
        </div>
        <button className={Style.submit} type="submit">Submit</button>
      </form>
    </>
  );
}

export default HomeWork07;

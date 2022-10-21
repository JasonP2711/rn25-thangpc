import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function ListUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: Yup.object({
      name: Yup.string(),
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
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default ListUser;

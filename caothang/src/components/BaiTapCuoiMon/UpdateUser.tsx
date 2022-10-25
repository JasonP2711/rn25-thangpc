import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
type Props = {};
const SignupSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must be unique and between 3 - 128 characters")
    .max(128, "The name must be unique and between 3 - 128 characters")
    .required("The name is not blank"),
  id: Yup.string().required("The ID is not blank"),
});

const Form = (props: Props) => {
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => { 
        
      const url =
        "https://63528f27a9f3f34c37415579.mockapi.io/exp_1/" + values.id;

      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((json) => {
          // Xử lý kết quả JSON ở đâ
        })
        .catch((error) => {
          // Nếu có lỗi
          console.error(error);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ marginLeft: "10px" }}>
        <input
          name="id"
          value={formik.values.id}
          onChange={formik.handleChange}
          placeholder={"nhập id cần sửa"}
        />
        <input
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder={"nhập tên cần sửa"}
        />
        <p>{formik.errors.name ?? null}</p>
      </div>
      <input style={{ marginLeft: "10px" }} type="submit" /> 
      {/* cái nút này khi bấm vào nó sẽ thực hiện chức năng lấy dữ liệu ở form và gọi hàm submit form */}
    </form>
  );
};

export default Form;


import React, {useState,useEffect} from 'react'
import { Route, useNavigate } from 'react-router-dom'
import DetailUser from './DetailUser'
interface user{
    name: string;
    id: string;
}

function ComponentList1() {
    const navigate = useNavigate();
  const [stateListUser, setStateListUser] = useState<Array<user>>([]);

  useEffect(() => {
    getListUserApi();
  }, []);

  const gotoDetail = (id: string) => {
    console.log(id);
    navigate("DetailUser/" + id);
        
  
  };

  const getListUserApi = () => {
    const url = "https://63528f27a9f3f34c37415579.mockapi.io/exp_1";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        // console.log(json);
        setStateListUser(json);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const DeleteDetail = (id:string) =>{
    console.log('delete',id);
    const url = "https://63528f27a9f3f34c37415579.mockapi.io/exp_1/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        // Xử lý kết quả JSON ở đây
        console.log('delete success',json);
        // let arr = stateListUser.filter((user)=>user.id !== json.id)
        // setStateListUser(arr)
        // console.log(arr)
        getListUserApi();
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <table className="table table-dark table-striped-columns">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      {stateListUser?.map((user: user) => (
        <tr key={`item-user-${user.id}`}>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => gotoDetail(user.id)}

            >
              Detail
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => DeleteDetail(user.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default ComponentList1
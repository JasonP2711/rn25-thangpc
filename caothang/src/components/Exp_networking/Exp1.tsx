import React from 'react';

function Login() {

  const onSubmitPromise = () => {
    const data = {
      username: 'tungnt@softech.vn',
      password: '123456789',
    };

    const url = 'https://63528f27a9f3f34c37415579.mockapi.io';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
  };

  const onSubmitAsync = async () => {
    try {
      const data = {
        username: 'tungnt@softech.vn',
        password: '123456789',
      };

      const url = 'https://server.aptech.io/training/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Xử lý kết quả JSON ở đây
      const json = await response.json();
      console.log(json);
    } catch (error) {
      // Nếu có lỗi
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={onSubmitPromise}>Login</button>
      <button onClick={onSubmitAsync}>Login Async</button>
    </div>
  );
}

export default Login;
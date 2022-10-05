import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email };
    // console.log(currentUser)
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
        //   console.log(data);
          const token = data.token;
          localStorage.setItem("JWT_TOKEN", token);
          setToken(token);
        });
    }
    // console.log("User Info from Token", email);
  }, [user]);
  return token;
};

export default useToken;

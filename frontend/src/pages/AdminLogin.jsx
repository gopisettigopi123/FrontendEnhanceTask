// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AdminLogin = () => {
//   const [admin, setAdmin] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setAdmin({ ...admin, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/auth/login", admin);
//       localStorage.setItem("token", res.data.token);
//       alert("Login successful!");
//       navigate("/dashboard");
//     } catch (err) {
//       alert("Login failed. Check your credentials.");
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;
// ==============================
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", admin);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (err) {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30">
          Admin Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/admin-register")}
            className="text-blue-500 hover:text-blue-700 focus:outline-none bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30"
  >
            Not Registered? Register
          </button>
          <br />
          <button
            onClick={() => navigate("/user-login")}
            className="text-blue-500 hover:text-blue-700 focus:outline-none  p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-30"
          >
            Login As a User
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

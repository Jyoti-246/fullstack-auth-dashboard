import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await axios.put(
      "http://localhost:5000/api/profile",
      { name, email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    alert("Profile updated");
  };

  return (
    <div className="bg-[#F5F7FB] min-h-screen items-center justify-center flex">
      <div className="max-w-md mx-auto pt-10 p-6 border rounded bg-white">
        <h2 className="text-xl font-bold mb-4">Profile</h2>

        <form onSubmit={handleUpdate}>
          <label>Name</label>
          <input
            className="w-full border p-2 mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            className="w-full border p-2 mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="bg-[#3C89DD] text-white px-4 py-2 rounded w-full">
            Update Profile
          </button>
        </form>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 text-blue-600 underline w-full cursor-pointer"
        >
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

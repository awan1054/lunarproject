import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setblog] = useState({
    title: '',
    subtitle: '',
    description: '',
  });

  const EditBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3000/blog/${id}`, blog);
      console.log("API response:", response.data);

      if (response.status === 200) {
        navigate(`/single/${id}`); // Navigate to single blog page
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
      alert("Something went wrong");
    }
  };

  const fetchBlog = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/blog/${id}`);
      if (response.status === 200) {
        setblog(response.data.data); // Adjust to match your API structure
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Edit blog</div>
        <div className="mt-3 text-center text-4xl font-bold">You can Edit blog here</div>
        <div className="p-8">
          <form onSubmit={EditBlog}>
            <div className="flex gap-4">
              <input
                type="text"
                name="title"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Enter title *"
                value={blog.title}
                onChange={(e) => setblog({ ...blog, title: e.target.value })}
              />
            </div>
            <div className="flex gap-4">
              <input
                type="text"
                name="subtitle"
                value={blog.subtitle}
                onChange={(e) => setblog({ ...blog, subtitle: e.target.value })}
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Enter subtitle *"
              />
            </div>
            <div className="">
              <textarea
                name="description"
                id="text"
                cols="30"
                rows="10"
                className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
                value={blog.description}
                onChange={(e) => setblog({ ...blog, description: e.target.value })}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
              >
                Edit Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Edit;

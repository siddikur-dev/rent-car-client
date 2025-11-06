import React, { use } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthContext/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, } = use(AuthContext);
  // const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, confirm_password, ...restUser } =
      Object.fromEntries(formData);

    if (password !== confirm_password) {
      Swal.fire({
        icon: "error",
        title: "Password mismatch",
        text: "Please confirm your password correctly.",
      });
      return;
    }

    // Firebase Registration
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User has Created",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        let errorMsg = error.message;
        if (error.code === "auth/email-already-in-use") {
          errorMsg =
            "This email is already registered. Please use a different email or sign in.";
        }
        toast.error(errorMsg);
      });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 px-4 md:px-12">
      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_KaqfaPPABMxgNCmUC1ghzDu-hfNcleNx5ukXhi-ThhKxdBnmvM-UUpefb3hDzPmGB9kL&s"
        alt="Register Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl text-white rounded-2xl shadow-lg p-8 md:p-10 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Create an <span className="text-primary">Account</span>
        </h2>

        <form
          onSubmit={handleRegister}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirm_password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Profile Photo */}
          <div className="md:col-span-2">
            <label className="block font-medium mb-2">Profile Photo URL</label>
            <input
              type="url"
              name="photo"
              placeholder="https://i.ibb.co/example.jpg"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Terms */}
          <div className="flex items-center gap-3 md:col-span-2">
            <input
              type="checkbox"
              name="terms"
              className="w-5 h-5 accent-primary"
              required
            />
            <label className="font-medium">
              I agree to the{" "}
              <span className="text-primary underline cursor-pointer">
                Terms & Conditions
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-8 py-3 bg-primary cursor-pointer text-white font-semibold rounded-full shadow-lg hover:bg-primary/80 transition w-full"
            >
              Register
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;

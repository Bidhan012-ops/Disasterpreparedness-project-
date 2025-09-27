// Signup
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { formaction } from "./Store/Index";
import { useDispatch } from "react-redux";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { getFirestore,collection,addDoc,doc,getDoc} from "firebase/firestore";
// import {uselink} from "react-router-dom"
const auth = getAuth(app);
const firestore = getFirestore(app);  
export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",               
    password: "",
    confirmPassword: "",
  });
  const writeData = async()=>{
    const result = await addDoc(collection(firestore,"users"),formData);
    console.log("Result",result);
  };
  
// const getDocument = async()=>{
// const ref = doc(firestore,"users");
// const snap = await getDoc(ref);
// console.log("Snap",snap.data());
// };
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((value) => {
          alert("Account Created 🎉");
          dispatch(
            formaction.setform({ fullName: formData.fullName, email: formData.email })
          );
          navigate("/dashboared");
        })
        .catch((error) => {
          setErrors({ email: error.message });
        });
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-400 to-emerald-400 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="w-full max-w-md p-8 bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-emerald-400/50">
        <h1 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-md">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            {errors.fullName && (
              <p className="text-red-300 text-sm">{errors.fullName}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            {errors.email && <p className="text-red-300 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            {errors.password && (
              <p className="text-red-300 text-sm">{errors.password}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            />
            {errors.confirmPassword && (
              <p className="text-red-300 text-sm">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
          
          onClick={writeData}>
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-sm text-white/80 text-center">
          <Link to="/login" className="hover:text-emerald-300">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
}
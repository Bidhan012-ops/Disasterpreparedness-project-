// Login page
import {React,  useState } from "react";
import { getAuth ,signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
const firestore = getFirestore(app);
const auth = getAuth(app);
import { useNavigate,Link } from "react-router-dom";
import { formaction } from "./Store/Index";
import { useDispatch } from "react-redux";

export default function AuthPage(){
   const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
             
  const validate = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
 // Fetch a user document by ID
  const getDocument = async (userId) => {
    if (!userId) {
      console.error("No userId provided to getDocument");
      return;
    }
    const ref = doc(firestore, "users", userId);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      console.log("Snap", snap.data());
    } else {
      console.log("No such document!");
}};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validate()) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("Sign-In Success:", userCredential.user);
         await getDocument(userCredential.user.uid);
      alert("Login Successful 🎉");
      dispatch(formaction.setform({ email: formData.email }));
      navigate("/dashboared"); // ✅ redirect only after Firebase success
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Invalid email or password ❌");
    }
  }
};

const signInUser = () => {
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((value)=>console.log("Sign-In Success")).catch((error)=>console.log(error));
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-400 to-emerald-400 dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
      <div className="w-full max-w-md p-8 bg-white/20 dark:bg-black/30 backdrop-blur-lg rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 hover:shadow-emerald-400/50">
        <h1 className="text-3xl font-bold text-center mb-6 text-white drop-shadow-md">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
          onClick={()=>{
            signInUser();
          }}>
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-white/80">
          <button className="hover:text-emerald-300">Forgot Password?</button>
          <Link to="/signup" className="hover:text-emerald-300">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

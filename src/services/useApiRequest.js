import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { fetchFail, fetchStart, loginSuccess, registerSuccess,logoutSuccess } from "../features/authSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"

//?Custom hook
const useApiRequest = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signIn = async (email, password) => {
    dispatch(fetchStart())
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential; 

      dispatch(loginSuccess(user))
      navigate(`/Home`);
      toastSuccessNotify("Login successfully");
      // console.log(userCredential);
    } catch (error) {
      toastErrorNotify(error.message);

    }
  };

  const register = async (email,password,displayName) => {
    dispatch(fetchStart())
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential; 

      dispatch(registerSuccess(user))
      // //! kullanıcı profilini güncellemek için kullanılan firebase metodu
        await updateProfile(auth.currentUser, {
          displayName,
        })
      navigate("/")
      toastSuccessNotify("Registered successfully");
    } catch (err) {
      dispatch(fetchFail())
      toastErrorNotify(err.message);

    }
  }
  const logout = async () => {
    dispatch(fetchStart())
    try {
      await signOut(auth);
      console.log(auth.currentUser)
      dispatch(logoutSuccess())
      toastSuccessNotify("Logged out successfully");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  }

  return { signIn, register, logout }
}

export default useApiRequest

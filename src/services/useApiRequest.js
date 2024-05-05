import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

//?Custom hook
const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = async (email, password) => {
    dispatch(fetchStart());
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      dispatch(loginSuccess(user));
      navigate(-1);
      toastSuccessNotify("Login successfully");
      // console.log(userCredential);
    } catch (error) {
      const errormessage = getErrorMessage(error.code);
      toastErrorNotify(errormessage);
      // console.log(error.message)
    }
  };

  const register = async (email, password, displayName) => {
    dispatch(fetchStart());
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;

      dispatch(registerSuccess(user));
      // //! kullanıcı profilini güncellemek için kullanılan firebase metodu
      await updateProfile(auth.currentUser, {
        displayName,
      });
      navigate("/");
      toastSuccessNotify("Registered successfully");
    } catch (error) {
      dispatch(fetchFail());
      const errormessage = getErrorMessage(error.code);
      toastErrorNotify(errormessage);
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await signOut(auth);
      console.log(auth.currentUser);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logged out successfully");
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error.message);
    }
  };

  const forgotPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      
      toastWarnNotify("Please check your mail box!");
    } catch (error) {
      
      toastErrorNotify(error.message);

    }
  }

  //! mesajı özelleştirme
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-credential":
        return "Invalid email or password. Please check your credentials and try again.";
      case "auth/email-already-in-use":
        return "Email already in use. Please try a different email or login if this is your account.";
      default:
        return "An error occurred. Please try again later.";
    }
  };
  return { signIn, register, logout,forgotPassword };
};

export default useApiRequest;

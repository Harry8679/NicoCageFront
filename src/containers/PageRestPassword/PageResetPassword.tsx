import React, { FC, useState, useEffect } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdOutlineLockReset } from "react-icons/md";

export interface PageSignUpProps {
  className?: string;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password1: '',
  password2: '',
};

const PageResetPassword: FC<PageSignUpProps> = ({ className = "" }) => {
  const [showPassword1, setShowPassword1] = useState<Boolean>(false);
  const [showPassword2, setShowPassword2] = useState<Boolean>(false);

  const [formData, setFormData] = useState(initialState);
  const { password1, password2 } = formData;

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const checkIcon = <FaCheck color="green" />;
  const timesIcon = <ImCross color="red" />;

  const switchIcon = (condition: Boolean) => {
    if (condition) {
      return checkIcon;
    }
    return timesIcon;
  }

  const handleChange = (e: { target: HTMLInputElement; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Check Lowercase and Uppercase
    if (password1.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        setUCase(true);
    } else {
        setUCase(false);
    }

    // Check for numbers
    if (password1.match(/([0-9])/)) {
        setNum(true)
    } else {
        setNum(false)
    }

    // Check for the special characters
    if (password1.match(/([!,@,#,$,%,^,&,*,_,~])/)) {
        setSChar(true);
    } else {
        setSChar(false);
    }

    // Check for PASSWORD LENGTH
    if (password1.length > 5) {
        setPassLength(true);
    } else {
        setPassLength(false);
    }
  }, [password1]);

  const togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const resetPassword = () => {}
  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Réinitialiser votre mot de passe</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          <MdOutlineLockReset /> &nbsp; Réinitialisation mot de passe
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={resetPassword}>
            <label className="block input-container">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Mot de passe</span>
              <Input type={showPassword1 ? 'text':'password'} placeholder="Votre mot de passe" name="password1" value={password1} onChange={handleChange} className="mt-1" />
              <div className="icon" onClick={togglePassword1}>
                {showPassword1 ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </div>
            </label>
            <label className="block input-container">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Confirmation du mot de passe</span>
              <Input type={showPassword2 ? 'text':'password'} placeholder="Confirmez votre mot de passe" name="password2" value={password2} onChange={handleChange} className="mt-1" />
              <div className="icon" onClick={togglePassword2}>
                {showPassword2 ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </div>
            </label>
            <div className="block max-w-lg p-2 text-xs bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex">
                {switchIcon(uCase)} &nbsp; <span>Doit contenir au moins une Majuscule et une Minuscule</span>
              </div>
              <div className="flex">
                {switchIcon(num)} &nbsp; <span>Doit contenir au moins un chiffre compris entre 0 et 9 (0-9)</span>
              </div>
              <div className="flex">
                {switchIcon(sChar)} &nbsp; <span>Doit contenir au moins un caractère spécial (!@#$%^&*)</span>
              </div>
              <div className="flex">
                {switchIcon(passLength)} &nbsp; <span>Doit contenir au moins 6 caractères</span>
              </div>
            </div>
            <ButtonPrimary type="submit">Valider</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Avez-vous déjà un compte? {` `}<Link to="/connexion">Connectez-vous</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageResetPassword;

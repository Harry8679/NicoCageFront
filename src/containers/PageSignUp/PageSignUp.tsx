import React, { FC, useState } from "react";
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

export interface PageSignUpProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Connexion avec Facebook",
    href: "#",
    icon: facebookSvg,
  },
  {
    name: "Connexion avec X",
    href: "#",
    icon: twitterSvg,
  },
  {
    name: "Connexion avec Google",
    href: "#",
    icon: googleSvg,
  },
];

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password1: '',
  password2: '',
};

const PageSignUp: FC<PageSignUpProps> = ({ className = "" }) => {
  const [showPassword1, setShowPassword1] = useState<Boolean>(false);
  const [showPassword2, setShowPassword2] = useState<Boolean>(false);

  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email, password1, password2 } = formData;

  const handleChange = () => {};

  const togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const registerUser = () => {}
  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Inscription</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          <FaUserPlus /> &nbsp; Inscription
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OU
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={registerUser}>
          <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">Votre Nom</span>
              <Input type="text" placeholder="Veuillez renseigner votre nom" value={lastName} onChange={handleChange} className="mt-1" />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">Votre Prénom</span>
              <Input type="text" placeholder="Veuillez renseigner votre prénom" value={firstName} onChange={handleChange} className="mt-1" />
            </label>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">Votre Email</span>
              <Input type="email" placeholder="example@example.com" value={email} onChange={handleChange} className="mt-1" />
            </label>
            <label className="block input-container">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Mot de passe</span>
              <Input type={showPassword1 ? 'text':'password'} placeholder="Votre mot de passe" value={password1} onChange={handleChange} className="mt-1" />
              <div className="icon" onClick={togglePassword1}>
                {showPassword1 ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </div>
            </label>
            <label className="block input-container">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Confirmation du mot de passe</span>
              <Input type={showPassword2 ? 'text':'password'} placeholder="Confirmez votre mot de passe" value={password2} onChange={handleChange} className="mt-1" />
              <div className="icon" onClick={togglePassword2}>
                {showPassword2 ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </div>
            </label>
            <ButtonPrimary type="submit">Inscription</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Avez-vous déjà un compte? {` `}<Link to="/login">Connectez-vous</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;

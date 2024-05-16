import React, { FC, useState } from "react";
import facebookSvg from "images/Facebook.svg";
import twitterSvg from "images/Twitter.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";

export interface PageLoginProps {
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

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<Boolean>(false);

  const handleInputChange = () => {};
  const loginUser = () => {};
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Connexion</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          <FaRegCircleUser /> &nbsp; Connexion
        </h2>
        <div className="max-w-md mx-auto space-y-6">
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
          <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={loginUser}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">Email</span>
              <Input type="email" placeholder="example@example.com" value={email} onChange={handleInputChange} className="mt-1" />
            </label>
            <label className="block input-container">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                Mot de passe
                <Link to="/mot-de-passe-oublie" className="text-sm">
                  Mot de passe oublié ?
                </Link>
              </span>
              <Input type={showPassword ? 'text':'password'} placeholder="Votre mot de passe" value={password} onChange={handleInputChange} className="mt-1" />
              <div className="icon" onClick={togglePassword}>
                {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </div>
            </label>
            <ButtonPrimary type="submit">Connexion</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Pas encore de compte? {` `}<Link to="/signup">Créez-en un</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;

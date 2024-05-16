import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";

import { MdOutlineMailLock } from "react-icons/md";

export interface PageLoginProps {
  className?: string;
}

const PageForgotPassword: FC<PageLoginProps> = ({ className = "" }) => {
  const [email, setEmail] = useState<string>('');

  const handleInputChange = () => {};
  const forgotEmailUser = () => {};
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Mot de passe oublié</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          <MdOutlineMailLock /> &nbsp; Mot de Passe oublié
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={forgotEmailUser}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">Email</span>
              <Input type="email" placeholder="example@example.com" value={email} onChange={handleInputChange} className="mt-1" />
            </label>
            <ButtonPrimary type="submit">Envoyer</ButtonPrimary>
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

export default PageForgotPassword;

import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { BsFillUnlockFill } from "react-icons/bs";


export interface PageEnterAccessCodeProps {
  className?: string;
}

const PageEnterAccessCode: FC<PageEnterAccessCodeProps> = ({ className = "" }) => {

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Verification de Compte</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          <BsFillUnlockFill /> &nbsp; Verification de Compte
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            <p className="mb-5">Pour vérifier votre compte cliquez sur le bouton ci dessous.</p>
          <ButtonPrimary type="submit">Vérifier</ButtonPrimary>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageEnterAccessCode;
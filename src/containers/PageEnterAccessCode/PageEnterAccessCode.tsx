import React, { FC, useState } from "react";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { LiaUnlockAltSolid } from "react-icons/lia";

export interface PageEnterAccessCodeProps {
  className?: string;
}

const PageEnterAccessCode: FC<PageEnterAccessCodeProps> = ({ className = "" }) => {
  const [accessCode, setAccessCode] = useState<string>('');

  const handleInputChange = () => {};
  const accessCodeUser = (e: any) => {
    setAccessCode(e.target.value);
  };

  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      <Helmet>
        <title>Code d'Accès</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          <LiaUnlockAltSolid /> &nbsp; Entrez Votre Code d'Accès
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post" onSubmit={accessCodeUser}>
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">Code d'Accès</span>
              <Input type="text" placeholder="123456" value={accessCode} onChange={handleInputChange} className="mt-1" />
            </label>
            <ButtonPrimary type="submit">Connexion avec le Code</ButtonPrimary>
          </form>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Vous n'avez pas reçu votre code ? {` `}<Link className="font-extrabold" to="/connexion-avec-code/:emarh@test.fr">Renvoyer le code</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageEnterAccessCode;
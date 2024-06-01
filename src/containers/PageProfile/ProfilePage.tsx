import { Tab } from "@headlessui/react";
import CarCard from "components/CarCard/CarCard";
import CommentListing from "components/CommentListing/CommentListing";
import ExperiencesCard from "components/ExperiencesCard/ExperiencesCard";
import StartRating from "components/StartRating/StartRating";
// import StayCard from "components/StayCard/StayCard";
import {
  DEMO_CAR_LISTINGS,
  DEMO_EXPERIENCES_LISTINGS,
  // DEMO_STAY_LISTINGS,
} from "data/listings";
import React, { FC, Fragment, useState, useEffect } from "react";
import Avatar from "shared/Avatar/Avatar";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import SocialsList from "shared/SocialsList/SocialsList";
import { Helmet } from "react-helmet";

import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

export interface AuthorPageProps {
  className?: string;
}

const AuthorPage: FC<AuthorPageProps> = ({ className = "" }) => {
  let [categories] = useState(["Profil", "Mot de Passe", "Mes infos", "Mes trajets"]);

  const renderSidebar = () => {
    return (
      <div className=" w-full flex flex-col items-center text-center sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-6 sm:space-y-7 px-0 sm:p-6 xl:p-8">
        <Avatar
          hasChecked
          hasCheckedClass="w-6 h-6 -top-0.5 right-2"
          sizeClass="w-28 h-28"
        />

        {/* ---- */}
        <div className="space-y-3 text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold">Harry MacCode</h2>
          <StartRating className="!text-base" />
        </div>

        {/* ---- */}
        <p className="text-neutral-500 dark:text-neutral-400">
          Parmi les enfants des hommes, il en est un seul Seigneur, qui sur la terre où nous sommes t'a servi de tout son coeur.
        </p>

        {/* ---- */}
        <SocialsList
          className="!space-x-3"
          itemClass="flex items-center justify-center w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800 text-xl"
        />

        {/* ---- */}
        <div className="border-b border-neutral-200 dark:border-neutral-700 w-14"></div>

        {/* ---- */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Ha Noi, Viet Nam
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Speaking English
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-neutral-6000 dark:text-neutral-300">
              Joined in March 2016
            </span>
          </div>
        </div>
      </div>
    );
  };

  interface ProfileProps {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    role: string;
    isVerified: boolean;
  }

  const initialState = {
    firstName: 'Harry',
    lastName: 'MacCode',
    email: 'harry.maccode@lhlp.fr',
    phone: '+1 234 234 234 234',
    bio: 'Parmi les enfants des hommes, il en est un seul Seigneur. Qui sur la terre où nous sommes t\'a servi de tout son coeur.',
    role: 'user',
    isVerified: false
  }

  const initialState2 = {
    password0: '',
    password1: '',
    password2: '',
  };

  interface updatePasswordProps {
    password0: string;
    password1: string;
    password2: string;
}

  const RenderSection1 = () => {
    const [profile, setProfile] = useState<ProfileProps>(initialState);
    const { firstName, lastName, email, phone, bio } = profile;
    const inputHandleChange = () => {};

    const [showPassword0, setShowPassword0] = useState<Boolean>(false);
    const [showPassword1, setShowPassword1] = useState<Boolean>(false);
  const [showPassword2, setShowPassword2] = useState<Boolean>(false);

  const [formData, setFormData] = useState<updatePasswordProps>(initialState2);
  const { password0 ,password1, password2 } = formData;

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

  const handleChangeUpdatePassword = (e: { target: HTMLInputElement; }) => {
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

  const togglePassword0 = () => {
    setShowPassword0(!showPassword0);
  };
  
  const togglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
    return (
      <div className="listingSection__wrap">
        <div>
          <h2 className="text-2xl font-semibold">Profile de Harry MacCode</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            Bienvenue sur votre espace où vous pouvez voir et modifier votre profil, modifier votre mot de passe et voir vos trajets.
          </span>
        </div>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        <div>
          <Tab.Group>
            <Tab.List className="flex space-x-1 overflow-x-auto">
              {categories.map((item) => (
                <Tab key={item} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`flex-shrink-0 block !leading-none font-medium px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize rounded-full focus:outline-none ${
                        selected
                          ? "bg-secondary-900 text-secondary-50 "
                          : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      } `}
                    >
                      {item}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="">
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Nom</Label>
                  <Input placeholder="MacCode" type="text" className="mt-1 input-disabled" disabled value={lastName} />
                </label>

                <label className="block">
                  <Label>Prénom</Label>
                  <Input placeholder="Harry" type="text" className="mt-1 input-disabled" disabled value={firstName} />
                </label>

                <label className="block">
                  <Label>Email</Label>
                  <Input type="email" placeholder="example@example.com" className="mt-1 input-disabled" disabled value={email} />
                </label>

                <label className="block">
                  <Label>Phone</Label>
                  <Input type="email" placeholder="example@example.com" className="mt-1" value={phone} onChange={inputHandleChange} />
                </label>

                <label className="block">
                  <Label>Biographie</Label>
                  <Textarea className="mt-1" rows={6} value={bio} onChange={inputHandleChange} />
                </label>
                <div>
                  <ButtonPrimary type="submit">Modifier votre Profil</ButtonPrimary>
                </div>
              </form>
              </Tab.Panel>
              <Tab.Panel className="">
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
              <label className="block input-container">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Mot de passe actuel</span>
              <Input type={showPassword0 ? 'text':'password'} placeholder="Votre mot de passe" name="password0" value={password0} onChange={handleChangeUpdatePassword} className="mt-1" />
              <div className="icon" onClick={togglePassword0}>
                {showPassword0 ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </div>
              </label>

              <label className="block input-container">
              <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Mot de passe</span>
              <Input type={showPassword1 ? 'text':'password'} placeholder="Votre mot de passe" name="password1" value={password1} onChange={handleChangeUpdatePassword} className="mt-1" />
              <div className="icon" onClick={togglePassword1}>
                {showPassword1 ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
              </div>
              </label>

              <label className="block input-container">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Confirmation du mot de passe</span>
                <Input type={showPassword2 ? 'text':'password'} placeholder="Confirmez votre mot de passe" name="password2" value={password2} onChange={handleChangeUpdatePassword} className="mt-1" />
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
                <div>
                  <ButtonPrimary type="submit">Modifier votre Mot de Passe</ButtonPrimary>
                </div>
              </form>
              </Tab.Panel>
              <Tab.Panel className="">
                <div className="mt-8 grid grid-cols-1 gap-6 md:gap-7 sm:grid-cols-2">
                  {DEMO_CAR_LISTINGS.filter((_, i) => i < 4).map((stay) => (
                    <CarCard key={stay.id} data={stay} />
                  ))}
                </div>
                <div className="flex mt-11 justify-center items-center">
                  <ButtonSecondary>Show me more</ButtonSecondary>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    );
  };

  const renderSection2 = () => {
    return (
      <div className="listingSection__wrap">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
        <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>

        {/* comment */}
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
          <CommentListing hasListingTitle className="pb-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <CommentListing hasListingTitle className="py-8" />
          <div className="pt-8">
            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-AuthorPage ${className}`} data-nc-id="AuthorPage">
      <Helmet>
        <title>Login || Booking React Template</title>
      </Helmet>
      <main className="container mt-12 mb-24 lg:mb-32 flex flex-col lg:flex-row">
        <div className="block flex-grow mb-24 lg:mb-0">
          <div className="lg:sticky lg:top-24">{renderSidebar()}</div>
        </div>
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pl-10 flex-shrink-0">
          {RenderSection1()}
          {renderSection2()}
        </div>
      </main>
    </div>
  );
};

export default AuthorPage;

import React from "react";
import hero from '../assets/Mushfiqur Rahman.png';
import {FaTwitter, FaGithub, FaYoutube, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
      <div id="main" class="bg flex flex-col justify-center relative lg:min-h-[100vh] bg-gray-100 pt-8 px-8 lg:overflow-hidden bg-hero-pattern bg-repeat-x bg-cover scales bg-blend-multiply dark:bg-blend-color-burn">
        <div class="container relative lg:min-h-[100vh] flex flex-col lg:flex-row lg:items-center mx-auto max-w-screen-xl z-10 -mb-16">
          <div class="w-full lg:w-1/2 flex justify-center self-end">
            <img
              src={hero}
              width="832"
              height="832"
              alt="Photo of Mushfiqur Rahman"
            />
          </div>
          <div class="w-full lg:w-1/2">
            <h1 class="text-brand border-t text-indigo-600 hover:text-indigo-800 border-gray-400 dark:border-gray-500 pt-6 lg:border-t-0 lg:pt-0 text-4xl lg:text-5xl xl:text-6xl leading-none">
              Mushfiqur <br /> Rahman
            </h1>
            <p class="text-gray-900 font-bold dark:text-gray-600 my-10 text-lg xl:text-xl leading-tight">
              Django . NextJS . TailwindCSS . SEO
            </p>
            <p class="text-gray-700 text-base md:text-md dark:text-gray-600 mb-4 leading-relaxed max-w-prose">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. 
            </p>

            <div className="flex justify-between py-6 max-w-[200px] w-full">
              <FaLinkedinIn className='cursor-pointer' size={20}/>
              <FaGithub className='cursor-pointer' size={20}/>
              <FaYoutube className='cursor-pointer' size={20}/>
              <FaTwitter className='cursor-pointer' size={20}/>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Main;

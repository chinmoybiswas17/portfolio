import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import img from "../public/images/Chinmoy.jpg";
const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <Image
        src={img}
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128"
        width="128"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-2xl font-medium tracking-wider font-kaushan">
        <span className="text-green ">Chinmoy</span> Biswas
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      {/* Resume */}
      <Link
        href="/assets/Sumit Dey Resume.pdf"
        download="Sumit Dey Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </Link>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <Link href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/chinmoy-biswas-7127961aa/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://github.com/chinmoybiswas17">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </Link>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Chattogram,Bangladesh </span>
        </div>
        <p className="my-2 "> chinmoybiswas337@gmail.com </p>
        <p className="my-2"> 01816829736 / 01971971573 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:chinmoybiswas337@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;

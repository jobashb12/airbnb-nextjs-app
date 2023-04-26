import Image from 'next/image';
import Logo from '../public/images/image13.jpg';
import Globe from '../public/images/vector.svg';
import User from '../public/images/vector2.svg';
import Menu from '../public/images/vector3.svg';
import Search from '../public/images/vector4.svg';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-screen grid grid-cols-3
    bg-white shadow-md p-5 md:px-10 z-10">

      <div className="relative flex items-center 
      cursor-pointer my-auto h-10">
        <Image src={Logo} layout="fill" objectFit='contain' 
        objectPosition='left' alt='logo' />
      </div>

      <div className="flex items-center mx-2 p-2 md:border-2
      rounded-full md:shadow-sm">
        <input type="text" placeholder="Start your search"
        className="flex-grow outline-none text-sm text-gray-500 
        ml-3 placeholder:text-gray-400 placeholder:font-medium" />
        <span className="items-center justify-center sm:hidden 
        w-8 h-8 bg-red-400 rounded-full ml-2 md:flex">
          <Image src={Search} width={17} height={17} alt="Search" />
        </span>
      </div>

      <div className="flex items-center ml-auto space-x-4">
        <p className="text-gray-500 cursor-pointer 
        hidden md:inline-block ">Become a host</p>
        <Image src={Globe} width={25} height={25} 
        className="cursor-pointer" alt="Search"/>
        <div className="border-2 rounded-full flex items-center
        p-2 space-x-2">
          <Image src={Menu} width={25} height={25} alt="menu"/>
          <Image src={User} width={25} height={25} alt="user"/>
        </div>
      </div>
    </header>
  )
}

export default Header;
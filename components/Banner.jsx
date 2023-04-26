

const Banner = () => {
  return (
    <div className="mt-[80px] bg-[url('../public/images/image10.jpg')]
    sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] h-[300px] 
    bg-no-repeat bg-cover bg-center flex flex-col items-center
    space-y-3">
        <p className="sm:text-lg xl:mt-[300px] lg:mt-[250px] md:mt-[200px]
        sm:mt-[200px] mt-[150px] text-sm">
        Not sure where to go? Perfect.</p>
        <button className="bg-white shadow-md px-10 py-4 rounded-full
        font-bold text-purple-500 hover:shadow-xl active:scale-90
        transition transform duration-150 ease-out">
        I'm flexible
        </button>
    </div>
  )
}

export default Banner;
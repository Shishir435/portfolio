const Circle = () => {
  return (
    <>
      <div
        className="hidden md:block w-[100px] h-[100px] rounded-full bg-[#f9f8ff] fixed -z-10 top-[-45px] left-[300px]"
        aria-hidden="true"
      ></div>
      <div
        className="hidden md:block w-[250px] h-[250px] rounded-full bg-[#f9f8ff] fixed top-[-125px] -z-10   right-[-125px]"
        aria-hidden="true"
      ></div>
    </>
  )
}

export default Circle

import img1 from "../images/left.jpg";

function UserType() {
  return (
    //  left side
    <div className="w-screen h-screen border-2 border-red-500 flex">
      <div className="flex border-2 border-green-500 w-[40%]">
        <img src={img1} alt="image left side" className="h-auto w-full" />
      </div>

     {/* Right Side */}
      <div className="flex border-2 border-yellow-500 w-[60%] items-center justify-center">
        
        <div className="w-3/5 md:w-2/5 h-auto bg-white border-2 border-gray-500 p-4 rounded-lg">
          <p className="font-poppins text-custom-lg font-bold leading-custom-lg text-custom-text-lg mb-4">
            Join Us!
          </p>

          <p className="font-poppins text-custom-sm font-normal leading-custom-sm text-left text-custom-text-sm mb-4">
            To begin this journey, tell us what type of account you’d be
            opening.
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 border-2 border-blue-500 p-4 flex-1 rounded-lg min-h-[30px] md:min-h-[70px] lg:min-h-[100px]">
              <img
                src="../images/Polygon 1.svg"
                alt="background"
                className="w-10 h-10 mt-4"
              />
              <div>
                <h1 className="font-poppins text-custom-text-lg text-lg font-bold">
                  Manager
                </h1>
                <p className="font-poppins text-sm text-custom-text-sm">
                  Signup as a manager to manage the tasks and bugs
                </p>
              </div>

              <img
                src="../images/arrow-right.svg"
                alt="arrow"
                className="w-6 h-6 mt-4"
              />
            </div>

            <div className="flex items-center gap-4 border-2 border-blue-500 p-4 flex-1 rounded-lg min-h-[30px] md:min-h-[70px] lg:min-h-[100px]">
              <img
                src="../images/Polygon 1.svg"
                alt="background"
                className="w-10 h-10 mt-4"
              />
              <div>
                <h1 className="font-poppins text-custom-text-lg text-lg font-bold">
                Developer
                </h1>
                <p className="font-poppins text-sm text-custom-text-sm">
                Signup as a manager to manage the tasks and bugs
                </p>
              </div>

              <img
                src="../images/arrow-right.svg"
                alt="arrow"
                className="w-6 h-6 mt-4"
              />
            </div>

            <div className="flex items-center gap-4 border-2 border-blue-500 p-4 flex-1 rounded-lg min-h-[30px] md:min-h-[70px] lg:min-h-[100px]">
              <img
                src="../images/Polygon 1.svg"
                alt="background"
                className="w-10 h-10 mt-4"
              />
              <div>
                <h1 className="font-poppins text-custom-text-lg text-lg font-bold">
                QA
                </h1>
                <p className="font-poppins text-sm text-custom-text-sm">
                Signup as a manager to manage the tasks and bugs
                </p>
              </div>

              <img
                src="../images/arrow-right.svg"
                alt="arrow"
                className="w-6 h-6 mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserType;

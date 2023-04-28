const checkout = () => {
  return (
    <div className="bg-yellowColor p-[150px]">
      <div>
        <div className="pb-16">
          <h4 className="p48 text-center font-spaceMonoRegular border-b-[1px] mb-8">
            checkout
          </h4>
        </div>
        <div className="grid pb-16 md:grid-cols-2 md:gap-6">
          <div>
            <div className="flex justify-between border-b-[1px] mb-8">
              <h4 className="font-interstateRegular">LOGIN</h4>
              <p className="p14 font-interstateRegular">
                I need to create an account
              </p>
            </div>
            <form>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="block font-interstateRegular py-2.5 px-0 w-full  p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="fullname"
                  className="peer-focus:font-medium font-interstateRegular absolute p14  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  FULL NAME
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block font-interstateRegular py-2.5 px-0 w-full p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium font-interstateRegular absolute p14 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  EMAIL
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="login_password"
                  className="block font-interstateRegular py-2.5 px-0 w-full  p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="login_password"
                  className="peer-focus:font-medium font-interstateRegular absolute p14  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  PASSWORD
                </label>
              </div>
              <button>LOGIN</button>
            </form>
          </div>
          <div>
            <div className="flex justify-between border-b-[1px] mb-8">
              <h4 className="font-interstateRegular">SIGN UP</h4>
              <p className="p14 font-interstateRegular">
                I already have an account
              </p>
            </div>
            <form>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block font-interstateRegular py-2.5 px-0 w-full p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium font-interstateRegular absolute p14 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  EMAIL
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="login_password"
                  className="block font-interstateRegular py-2.5 px-0 w-full  p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="login_password"
                  className="peer-focus:font-medium font-interstateRegular absolute p14  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  PASSWORD
                </label>
              </div>
              <button>SIGN UP</button>
            </form>
          </div>
        </div>

        <div className="pb-16">
          <h4 className="font-interstateRegular border-b-[1px] mb-8">
            ORDER INFORMATION
          </h4>
          <form>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="block font-interstateRegular py-2.5 px-0 w-full  p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="fullname"
                  className="peer-focus:font-medium font-interstateRegular absolute p14  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  FULL NAME
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block font-interstateRegular py-2.5 px-0 w-full p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  className="peer-focus:font-medium font-interstateRegular absolute p14 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  EMAIL
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="block font-interstateRegular py-2.5 px-0 w-full p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="address"
                  className="peer-focus:font-medium font-interstateRegular absolute p14 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  ADDRESS
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  className="block font-interstateRegular py-2.5 px-0 w-full p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="zipcode"
                  className="peer-focus:font-medium font-interstateRegular absolute p14 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  ZIPCODE
                </label>
              </div>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="block font-interstateRegular py-2.5 px-0 w-full p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="city"
                  className="peer-focus:font-medium font-interstateRegular absolute p14 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  CITY
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="block font-interstateRegular py-2.5 px-0 w-full p14 text-blackColor bg-transparent border-0 border-b-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="country"
                  className="peer-focus:font-medium font-interstateRegular absolute p14 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  COUNTRY
                </label>
              </div>
            </div>
            <input type="checkbox" name="newsletter" placeholder="Zip Code" />
            <label for="newsletter" className="font-interstateRegular p14 pl-4">
              SUBSCRIBE TO OUR NEWSLETTER
            </label>
          </form>
        </div>

        <div className="pb-16">
          <h4 className="font-interstateRegular border-b-[1px] mb-8">
            REVIEW ORDER AND PAY
          </h4>

          <div className="flex justify-between pb-16 relative font-interstateRegular">
            <p className="p14">
              Building + Maintaining Rapport
              <span className="absolute left-0 top-6 text-sm text-gray-200">
                1 General CEU
              </span>
            </p>
            <p className="p14">$ 5.00</p>
          </div>

          <div className="text-right  font-interstateRegular">
            <p className="p14">
              TOTAL <span className="pl-10">$ 5.00</span>
            </p>
          </div>
        </div>
        <button>Proceed to payment</button>
      </div>
    </div>
  );
};

export default checkout;

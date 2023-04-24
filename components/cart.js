import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Cart = ({ open, setOpen }) => {
  return (
    <div>
      {open && (
        <div className="flex px-[33px] w-1/2 p-5 flex-col absolute bg-yellowColor top-0 right-0 h-screen">
          <button onClick={() => setOpen(false)}>
            <div className="flex justify-end">
              <XMarkIcon className="h-10 w-10 stroke-[4]" />
            </div>
          </button>
          <p className="font-spaceMonoRegular text-center  pt-5 p24">
            Your Cart
          </p>
          <div className="flex justify-between pt-12 pb-6 relative">
            <p className="font-interstateRegular ">
              Building + Maintaining Rapport
              <span className="font-interstateLight absolute top-[74px] left-0 ">
                1 General CEU
              </span>
            </p>
            <p className="font-interstateRegular">$ 5.00</p>
          </div>

          <div className="border-y-[1px] py-1 flex justify-between font-spaceMonoRegular text-[20px] mt-20 mb-10">
            <p>Price in USD</p>
            <p>$ 5.00</p>
          </div>

          <div className="flex justify-between">
            <button>EMPTY CART</button>
            <Link href="/checkoutAba">
              <button>CHECK OUT</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

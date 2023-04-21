import Link from 'next/link';

const Cart = ({ open, setOpen }) => {
  return (
    <div>
      {open && (
        <div className="flex justify-center p-5 flex-col absolute bg-yellowColorDark top-0 right-0 h-screen">
          <button onClick={() => setOpen(false)}>
            <p>close</p>
          </button>
          <p>Your Cart</p>
          <div>
            <p>
              Building + Maintaining Rapport <span>1 General CEU</span>
            </p>
            <p>$ 5.00</p>
          </div>
          <hr />
          <div>
            <p>Price in USD</p>
            <p>$ 5.00</p>
          </div>

          <hr />
          <div>
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

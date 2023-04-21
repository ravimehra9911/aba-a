import Link from 'next/link';

const Cart = ({ open, setOpen }) => {
  return (
    <div>
      {open && (
        <div className="flex justify-center p-5 flex-col absolute bg-yellow-200 top-0 right-0 h-screen">
          <button onClick={() => setOpen(false)}>
            <h1>close</h1>
          </button>
          <h1>Your Cart</h1>
          <div>
            <h2>
              Building + Maintaining Rapport <span>1 General CEU</span>
            </h2>
            <h2>$ 5.00</h2>
          </div>
          <hr />
          <div>
            <h2>Price in USD</h2>
            <h2>$ 5.00</h2>
          </div>

          <hr />
          <div>
            <button>EMPTY CART</button>
            <Link href="/checkout">
              <button>CHECK OUT</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

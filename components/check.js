const Check = () => {
  return (
    <div>
      <div>
        <h1>Check Out</h1>
        <hr />
        <h2>login</h2>
        <p>I need to create an account</p>
        <label for="fullName">Full Name</label>
        <input type="text" name="fullName" placeholder="Full Name" />
        <label for="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email" />
        <label for="loginpassword">Password</label>
        <input type="password" name="loginpassword" placeholder="Password" />

        <h2>signup</h2>
        <p>I already have an account</p>
        <label for="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email" />
        <label for="loginpassword">Password</label>
        <input type="password" name="loginpassword" placeholder="Password" />
      </div>

      <div>
        <h2>order information</h2>
        <hr />
        <label for="fullName">Full Name</label>
        <input type="text" name="fullName" placeholder="Full Name" />
        <label for="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email" />
        <label for="address">Address</label>
        <input type="text" name="address" placeholder="Address" />
        <label for="zipCode">Zip Code</label>
        <input type="text" name="zipCode" placeholder="Zip Code" />
        <label for="newsletter">subscribe to our newsletter</label>
        <input type="checkbox" name="newsletter" placeholder="Zip Code" />
      </div>
      <div>
        <h1>Order review</h1>
        <div>
          <h2>
            Building + Maintaining Rapport <span>1 General CEU</span>
          </h2>
          <h2>$ 5.00</h2>
          <hr />
          <div>
            <h2>Price in USD</h2>
            <h2>$ 5.00</h2>
          </div>
        </div>
      </div>
      <button>Proceed to payment</button>
    </div>
  );
};

export default Check;

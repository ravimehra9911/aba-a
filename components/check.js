const Check = () => {
  return (
    <div>
      <div>
        <h1>Check Out</h1>
        <hr />
        <p>login</p>
        <p>I need to create an account</p>
        <label for="fullName">Full Name</label>
        <input type="text" name="fullName" placeholder="Full Name" />
        <label for="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email" />
        <label for="loginpassword">Password</label>
        <input type="password" name="loginpassword" placeholder="Password" />

        <p>signup</p>
        <p>I already have an account</p>
        <label for="loginEmail">Email</label>
        <input type="email" name="loginEmail" placeholder="Email" />
        <label for="loginpassword">Password</label>
        <input type="password" name="loginpassword" placeholder="Password" />
      </div>

      <div>
        <p>order information</p>
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
          <p>
            Building + Maintaining Rapport <span>1 General CEU</span>
          </p>
          <p>$ 5.00</p>
          <hr />
          <div>
            <p>Price in USD</p>
            <p>$ 5.00</p>
          </div>
        </div>
      </div>
      <button>Proceed to payment</button>
    </div>
  );
};

export default Check;

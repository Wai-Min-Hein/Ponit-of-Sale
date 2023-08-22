import { BsArrowLeft } from "react-icons/bs";
import CheckoutComponent from "../Components/CheckoutComponent";
import { Link } from "react-router-dom";

const Checkout = () => {
  const products = JSON.parse(localStorage.getItem("products"));

  const allTotal = products?.reduce((pv, cv) => cv.sale_price * cv.quantity + pv, 0);
  const tax =( allTotal * 0.01).toFixed(2);

  return (
    <div className="w-screen min-h-screen bg-bg overflow-auto">
      <div className=" p-4 border-2 border-border">
        <Link to={'/cashier'}>
        
        <button className="flex items-center justify-start gap-2">
          {" "}
          <BsArrowLeft /> <span>Back</span>{" "}
        </button>
        </Link>
      </div>

      <div className="w-1/4 h-4/5 bg-bg-dark mt-8 mx-auto flex flex-col justify-between p-6">
        <div className="flex-1">
          <h1>Receive</h1>
          {products?.map((product) => (
            <CheckoutComponent
              key={product?.id}
              product={product}
              allTotal={allTotal}
              tax={tax}
            />
          ))}
        </div>

        <div className="">
          <div className="text-right mb-12">
            <h1>Total : {allTotal} ks</h1>
            <p>Tax : {tax} ks</p>
          </div>

          <button className="w-full py-2 bg-primary">Print</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

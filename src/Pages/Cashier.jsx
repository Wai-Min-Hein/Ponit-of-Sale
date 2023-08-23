import { TextInput } from "@mantine/core";
import { useContext, useState , useEffect} from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { TbBackspace } from "react-icons/tb";

import CashierProduct from "../Components/CashierProduct";
import { useSelector } from "react-redux";
import ReceivedProduct from "../Components/ReceivedProduct";
import { Context } from "../Services/Context/context";
import { Link } from "react-router-dom";

import { useGetAllProductsMutation } from "../Services/Api/productApi";

import "../styles/cashier.css";
const Cashier = () => {
  const [search, setSearch] = useState("");
  const receivedProduct = useSelector((cashier) => cashier.cashier.products);

  const allTotal = receivedProduct?.reduce(
    (pv, cv) => cv.sale_price * cv.quantity + pv,
    0
  ).toFixed(2);
  const tax =( allTotal * 0.01).toFixed(2);

  const { setNum, setOnErase, numClick, setNumClick, setSelectedDiv } =
    useContext(Context);
  const handleClickNum = (e) => {
    setNum(e.target.innerHTML);
    setNumClick((prev) => !prev);
  };

  const token = localStorage.getItem("token");


  const [allProducts, setAllProducts] = useState([]);

  const [getAllProducts] = useGetAllProductsMutation();

  const getPds = async () => {
    const { data } = await getAllProducts(token);

    setAllProducts(data?.data);
  };

  

  useEffect(() => {
    getPds()
  }, [])
  



  return (
    <div className="w-screen h-[93vh] bg-bg flex items-center overflow-hidden">
      <div className="basis-2/3 h-full ">
        <div className="flex items-center justify-between border-y border-gray-50 px-4 py-4">
          <div className="flex-1 flex items-center justify-start gap-6">
            <div className="">
              <span>Sale / </span>
              <span>Cashier /</span>
            </div>
            <div className="flex items-center justify-start gap-2 ">
              <button>All</button>
              <button>Drink</button>
              <button>Cake</button>
              <button>Desert</button>
              <button>Set</button>
            </div>
          </div>

          <div className="">
            <TextInput
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              icon={<AiOutlineSearch size="1.25rem" />}
            />
          </div>
        </div>

        <div className="flex items-center justify-start gap-4 flex-wrap px-4 py-4 mt-6">
          {allProducts?.map((product, index) => (
            <CashierProduct key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="basis-1/3 bg-bg-dark h-full mt-4 relative flex flex-col j justify-between">
        <div className="flex-1 overflow-auto receive-product">
          <h1 className="mb-2">Receive</h1>
          {receivedProduct?.map((product, index) => (
            <ReceivedProduct key={index} product={product} />
          ))}
        </div>

        <div className="py-4 ">
          <div className="text-right mt-10 mb-2">
            <h6>Total : ${allTotal} ks</h6>
            <h6>Tax : ${tax} ks</h6>
          </div>
          <div className="flex items-center justify-between bg-bg ">
            <button className="border-[3px] border-border border-r-0 basis-1/3 py-2">
              + Note
            </button>
            <button className="border-[3px] border-border border-r-0 basis-1/3 py-2">
              Note
            </button>
            <button className="border-[3px] border-border basis-1/3 py-2">
              Note
            </button>
          </div>
          <div className="flex items-center justify-between bg-bg ">
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-2"
            >
              1
            </button>
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-2"
            >
              2
            </button>
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border basis-1/4 border-r-0 border-t-0 py-2"
            >
              3
            </button>
            <button className="border-[3px] border-border basis-1/4  border-t-0 py-2">
              QTY
            </button>
          </div>
          <div className="flex items-center justify-between bg-bg ">
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-4"
            >
              4
            </button>
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-4"
            >
              5
            </button>
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border basis-1/4 border-r-0 border-t-0 py-4"
            >
              6
            </button>
            <button className="border-[3px] border-border basis-1/4  border-t-0 py-4">
              % Dis
            </button>
          </div>
          <div className="flex items-center justify-between bg-bg ">
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-4"
            >
              7
            </button>
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-4"
            >
              8
            </button>
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border basis-1/4 border-r-0 border-t-0 py-4"
            >
              9
            </button>
            <button className="border-[3px] border-border basis-1/4  border-t-0 py-4">
              Price
            </button>
          </div>
          <div className="flex items-center justify-between bg-bg ">
            <button className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-4">
              +/-
            </button>
            <button
              onClick={(e) => handleClickNum(e)}
              className="border-[3px] border-border border-r-0 border-t-0 basis-1/4 py-4"
            >
              0
            </button>
            <button className="border-[3px] border-border basis-1/4 border-r-0 border-t-0 py-4">
              .
            </button>
            <button
              onClick={() => setOnErase((prev) => !prev)}
              className="border-[3px] border-border basis-1/4  border-t-0 py-4"
            >
              <TbBackspace className="mx-auto text-2xl" />
            </button>
          </div>
          <div className="text-center">
            <Link to={"/checkout"}>
              <button
                onClick={() => setSelectedDiv("")}
                className="w-full  py-2"
              >
                Payment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashier;

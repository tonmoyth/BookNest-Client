import { useLoaderData } from "react-router";
import RoomCard from "./RoomCard";
import { useEffect, useState } from "react";
import NavBerButton from "../../Components/SliderButton/NavBerButton";
import { Helmet } from "react-helmet-async";
import Loading from "../../Components/Loader/Loading";
import AxiosInterceptor from "../../Hooks/AxiosInterceptor/AxiosInterceptor";
import Swal from "sweetalert2";

const Rooms = () => {
  const { data } = useLoaderData();
  const [rooms, setRooms] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxprice] = useState(10000);
  const [loader, setLoader] = useState(false);
  const [initialLoader, setInitialLoader] = useState(true);
  const [order, setOrder] = useState("Ascending");
  const secureAxios = AxiosInterceptor();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const { data } = await secureAxios.post(`/order`, { orderData: order });
        setRooms(data);
        console.log(data)
      } catch (err) {
        console.log(err)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      }
    };
    if (order) {
      getOrder();
    }
  }, [order, secureAxios]);

  useEffect(() => {
    setRooms(data);
    setInitialLoader(false);
  }, [data]);

  // handleRangeForm
  const handlePriceRangeForm = (e) => {
    e.preventDefault();
    setLoader(true);
    setTimeout(() => {
      const priceRangeRooms = data.filter(
        (room) =>
          room.pricePerNight >= minPrice && room.pricePerNight <= maxPrice
      );
      setRooms(priceRangeRooms);
      setLoader(false);
    }, 2000);
  };

  if (initialLoader) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-accent pt-20 pb-6">
      <Helmet>
        <title>Rooms</title>
        <meta name="keyword" content="booking, rooms, room"></meta>
      </Helmet>
      {/* range form */}

      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-accent-content">
        <h1 className="text-3xl font-semibold text-center text-primary">
         Select your Price range
        </h1>
        <form onSubmit={handlePriceRangeForm} className="space-y-6">
          <div className="space-y-1 text-sm">
            <input
              type="number"
              name="min"
              onChange={(e) => setMinPrice(e.target.value)}
              id="min"
              placeholder="Min Price"
              className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              type="number"
              name="max"
              onChange={(e) => setMaxprice(e.target.value)}
              id="max"
              placeholder="Max Price"
              className="w-full border px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="w-full flex justify-center">
            <NavBerButton
              level={
                loader ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Apply Now"
                )
              }
            ></NavBerButton>
          </div>
        </form>
      </div>

      <div className="flex  pt-6 justify-end w-10/12  mx-auto">
        <select
          onChange={(e) => setOrder(e.target.value)}
          defaultValue="Pick a font"
          className="select bg-secondary select-ghost w-30"
        >
          <option disabled={true}>select order</option>
          <option>Ascending</option>
          <option>Descending</option>
        </select>
      </div>
      <div className="w-10/12 mx-auto space-y-10 my-6">
        {rooms.length > 0 ? (
          rooms.map((room) => <RoomCard key={room._id} room={room}></RoomCard>)
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-red-500 mb-2">
              😔 No rooms found
            </h2>
            <p className="text-primary-content">
              Sorry! No rooms available in this price range. Try changing the
              filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;

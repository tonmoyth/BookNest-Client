import React from "react";

const Gallery = () => {
  return (
    <div className="bg-accent">
      {/* rooms gallery section */}
      <section className="py-6 ">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/ch76DJ6s/empire-state-building-seen-from-apartment-3.jpg"
            alt=""
            className="w-full h-full object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/V0HMzdP1/one-king-size-bed-hotel-room.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/W4P8yn1Y/modern-studio-apartment-design-with-bedroom-living-space.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/xS2SvQRC/room-interior-hotel-bedroom.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/Lh08FbT6/indoor-design-luxury-resort-2.jpg"
          />
        </div>
      </section>
      {/* hotel service section */}
      <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full  aspect-square"
              src="https://i.ibb.co/5gJ6BymT/concierge-assists-with-checkin-hotel.jpg"
            />
            <img
              className="object-cover w-full  aspect-square"
              src="https://i.ibb.co/9H4sdyNM/side-view-woman-with-car.jpg"
            />
            <img
              className="object-cover w-full  aspect-square"
              src="https://i.ibb.co/JRC7y4Q0/receptionists-elegant-suits-work-hours.jpg"
            />
            <img
              className="object-cover w-full  aspect-square"
              src="https://i.ibb.co/k22Sbn7C/we-serve-finest-desserts.jpg"
            />
          </div>
        </div>
      </section>
      {/* resturent and swiming and jim */}
      <section className="py-6 ">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/F4VHLbpx/waiters-holding-plate-grilled-salmon-mashed-potato-topped-with-red-caviar-asparagus.jpg"
            alt=""
            className="w-full h-full object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/1Sq9FFh/group-friends-eating-restaurant.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/2359kjVM/dinner-table-with-foods-soft-drinks-restaurant.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/tT7mbDSX/breakfast-set-table.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/wNJVygrz/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling.jpg"
          />
          <img
            alt=""
            className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/Z16RzH97/rest-by-swimming-pool.jpg"
          />
          <img
            alt=""
            className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/Q75H3xfx/ocean-travel-modern-nobody-infinity.jpg"
          />
          <img
            alt=""
            className="w-full object-cover h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/KxHTcRyz/man-woman-checking-smartphone-after-yoga-session.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/7Lp65Mm/young-bodybuilder-running-cardio-workout-looking-gym-window.jpg"
          />
          <img
            src="https://i.ibb.co/Kp0nhXJt/health-club-without-people-with-exercise-equipment.jpgom/302x302/"
            alt=""
            className="w-full h-full col-span-2 object-cover row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;

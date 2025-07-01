import React from "react";

const Gallery = () => {
  return (
    <div className="bg-accent pt-20">
      {/* rooms gallery section */}
      <section>
        <div className="container grid grid-cols-2 gap-4  mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/hx47BtGG/empire-state-building-seen-from-apartment-3-1.jpg"
            loading="lazy"
            alt=""
            className="w-full h-full object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/ny83v97/one-king-size-bed-hotel-room-1-1.jpg"
            loading="lazy"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            loading="lazy"
            src="https://i.ibb.co/ynLsBhsw/modern-studio-apartment-design-with-bedroom-living-space-1-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            loading="lazy"
            src="https://i.ibb.co/wFd9k24Z/room-interior-hotel-bedroom-1-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            loading="lazy"
            src="https://i.ibb.co/3mw47XXs/indoor-design-luxury-resort-2-1.jpg"
          />
        </div>
      </section>
      {/* hotel service section */}
      <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <img
              className="object-cover w-full  aspect-square"
              loading="lazy"
              src="https://i.ibb.co/fzLzZbxK/side-view-woman-with-car-1-1.jpg"
            />
            <img
              className="object-cover w-full  aspect-square"
              loading="lazy"
              src="https://i.ibb.co/N21R9s6h/concierge-assists-with-checkin-hotel-1-1.jpg"
            />
            <img
              className="object-cover w-full  aspect-square"
              loading="lazy"
              src="https://i.ibb.co/Z1kPXb6B/receptionists-elegant-suits-work-hours-1-1.jpg"
            />
            <img
              className="object-cover w-full  aspect-square"
              loading="lazy"
              src="https://i.ibb.co/YB2HwHbk/we-serve-finest-desserts-1-1.jpg"
            />
          </div>
        </div>
      </section>
      {/* resturent and swiming and jim */}
      <section className="py-6 ">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co/9HJTtpn5/waiters-holding-plate-grilled-salmon-mashed-potato-topped-with-red-caviar-asparagus-1.jpg"
            alt=""
            className="w-full h-full object-cover col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/Y7ycRmQH/group-friends-eating-restaurant-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/LXhX19gj/dinner-table-with-foods-soft-drinks-restaurant-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/prhLNzLM/breakfast-set-table-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/hJ00hvHR/chicken-skewers-with-slices-sweet-peppers-dill-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/JwLxMb5z/man-woman-checking-smartphone-after-yoga-session-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full object-cover rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/TqmbRVSK/health-club-without-people-with-exercise-equipment-1.jpg"
          />
          <img
            alt=""
            className="w-full object-cover h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/q3zJNbZB/rest-by-swimming-pool-1.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded object-cover shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co/QFHDh9Z5/ocean-travel-modern-nobody-infinity-1.jpg"
          />
          <img
            src="https://i.ibb.co/GNTc86D/young-bodybuilder-running-cardio-workout-looking-gym-window-1.jpg"
            alt=""
            className="w-full h-full col-span-2 object-cover row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;

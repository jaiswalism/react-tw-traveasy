import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] px-4 py-6 mx-auto grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            ad soluta repellendus nam, illo eos repudiandae quisquam pariatur
            eveniet commodi exercitationem facere nostrum alias, doloremque
            totam quam, optio ratione quibusdam ea? Aperiam, quidem eligendi
            maxime minus fugiat laudantium. Cumque ab at quo vero necessitatibus
            dolore voluptatum molestiae vitae maxime atque repellendus ipsa,
            perferendis nemo deserunt sapiente nobis inventore? Assumenda velit
            vitae rerum id veritatis autem repellat placeat? Maiores obcaecati
            molestias iste dicta expedita voluptas porro illo dolorum ea, esse,
            quibusdam hic beatae mollitia. Tenetur maiores debitis eos
            voluptate? Beatae sit debitis ea velit repellat ab fugiat inventore
            voluptatibus, veniam vero.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className="py-2">LEADING SERVICES</h3>
                <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className="py-2">LEADING SERVICES</h3>
                <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border text-center">
            <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
            <div className="flex flex-col my-2">
                <label>Destination</label>
                <select className="border rounded-md p-2">
                    <option value="">Grande Antiqua</option>
                    <option value="">Key West</option>
                    <option value="">Maldives</option>
                    <option value="">Cozumel</option>
                </select>    
            </div>
            <div className="flex flex-col my-4">
                <label>Check-In</label>
                <input className="border rounded-md p-2" type="date" />
            </div>
            <div className="flex flex-col my-2">
                <label>Check-Out</label>
                <input className="border rounded-md p-2" type="date" />
            </div>
            <button className="w-full ny-4">Rates & Availabilties</button>
        </form>
      </div>
    </div>
  );
};

export default Search;

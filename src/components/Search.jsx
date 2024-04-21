import React from "react";
import { RiCustomerService2Fill, RiFindReplaceLine } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";

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
                <p className="py-1 px-2 text-sm">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className="py-2">LEADING SERVICES</h3>
                <p className="py-1 px-2 text-sm">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border-2 text-center">
            <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-gray-800 text-gray-200 py-2 w-full">BOOK NOW AND SAVE <BiSolidOffer size={20} className="inline-block" /></p>
        </div>
        <form className="w-full sm:w-2/3 lg:w-full flex flex-col mx-auto mt-8 bg-slate-100 px-8 py-4 rounded-lg border">
            <div className="flex flex-col my-2">
                <label className="font-semibold">Destination</label>
                <select className="border-2 rounded-md p-2 hover:border-[var(--primary-light)]">
                    <option value="">Grande Antiqua</option>
                    <option value="">Key West</option>
                    <option value="">Maldives</option>
                    <option value="">Cozumel</option>
                </select>    
            </div>
            <div className="flex flex-col my-4">
                <label className="font-semibold">Check-In</label>
                <input className="w-full border-2 rounded-md p-2 hover:border-[var(--primary-light)]" type="date" />
            </div>
            <div className="flex flex-col my-2">
                <label className="font-semibold">Check-Out</label>
                <input className="w-full border-2 rounded-md p-2 hover:border-[var(--primary-light)]" type="date" />
            </div>
            <button className="w-full md:w-3/5 lg:w-full my-4 mx-auto rounded-full lg:rounded-md">Rates & Availabilties <RiFindReplaceLine className="inline-block" size={20}/></button>
        </form>
      </div>
    </div>
  );
};

export default Search;

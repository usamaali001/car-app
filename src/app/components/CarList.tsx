import Image from "next/image";
import Mercedes from "../../public/images/images-removebg-preview.png";
import BMW from "../../public/images/bmw-sport-car-front-view-11550191451aub53zlesi-removebg-preview.png";
import Prado from "../../public/images/Parado-848-x-473-removebg-preview.png";

const CarLists = [
  {
    name: "Mercedes Benz",
    price: 1000 + "-/day ",
    image: Mercedes,
    aosDelay: "0",
  },
  {
    name: "BMW",
    price: 800 + "-/day ",
    image: BMW,
    aosDelay: "500",
  },
  {
    name: "Land Cruiser",
    price: 500 + "-/day ",
    image: Prado,
    aosDelay: "1000",
  },
];

export default function CarList() {
  return (
    <div className="pb-24 bg-white dark:bg-dark dark:text-white pt-12">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-Josefin mb-3"
        >
          Our Cars Collection
        </h1>
        <p data-aos="fade-up" className="pb-10 font-Afacad ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          pariatur!
        </p>
        {/* Car Listing cars  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
            {CarLists.map((data) => {
              return (
                <div
                  key={data.name}
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <Image
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                      src={data.image}
                      alt="CarPic"
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary text-lg font-bold font-sans">
                      {data.name}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p className="">${data.price}</p>
                  </div>
                  <div>
                    <a href="#">Details</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid place-content-center mt-8">
          <button data-aos="fade-up" className="btn-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

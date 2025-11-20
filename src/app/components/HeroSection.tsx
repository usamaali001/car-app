import Image from "next/image";
import Pic1 from "../../public/images/wallpaperflare.com_wallpaper.jpg";
import Pic2 from "../../public/images/car-png-39061.png";

type HeroSectionProps = {
  theme: "light" | "dark";
};

export default function HeroSection({ theme }: HeroSectionProps) {
  return (
    <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
      <div className="container min-h-[620px] flex">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order-2"
          >
            <Image
              src={theme === "dark" ? Pic1 : Pic2}
              alt="Car"
              className="relative -z-10 max-h-[600px] sm:scale-110 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
            <p
              data-aos="fade-up"
              className="text-primary text-2xl font-semibold font-Josefin"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-Josefin"
            >
              Car Rental
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="font-Josefin"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, sit amet consectetur adipisicing elit. Accusantium.
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-primary text-black py-2 px-6 rounded-md hover:bg-primary/80 duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

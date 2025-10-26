import heroImg from "../../assets/image.png";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-normal"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative  text-white z-10 px-4 mx-30">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bid on Unique Items from <br /> Around the World
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover rare collectibles, luxury goods, and vintage <br /> treasures
          in our curated auctions
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition">
          Start Shopping
        </button>
      </div>
    </section>
  );
}

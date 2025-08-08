import React, { useEffect, useState } from "react";
import {
  FaBug,
  FaCut,
  FaRecycle,
  FaSeedling,
  FaSun,
  FaTint,
} from "react-icons/fa";
import { FcLike } from "react-icons/fc";

function TopTrendingTips() {
  const [TrendTips, setTrendTips] = useState([]);

  useEffect(() => {
    const fetchTrendingTips = async () => {
      const response = await fetch(
        "https://garden-server-ten.vercel.app/trending"
      );
      const data = await response.json();
      setTrendTips(data);
    };
    fetchTrendingTips();
  }, []);

  const handleLike = async (id) => {
    try {
      const response = await fetch(
        `https://garden-server-ten.vercel.app/garden-tips/like/${id}`,
        {
          method: "PATCH",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update like");
      }

      const updatedTip = await response.json();

      // Update the specific tip in the list
      setTrendTips((prevTips) =>
        prevTips.map((tip) => (tip._id === updatedTip._id ? updatedTip : tip))
      );
    } catch (error) {
      console.error("Like error:", error);
    }
  };
  //   console.log(TrendTips);

  return (
    <div className="trending-tips text-center mt-4 p-4">
      <h2 className="text-4xl font-bold mb-4">🌱 Top Trending Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 	bg-green-100 p-8">
        {TrendTips.map((tip) => (
          <div key={tip._id} className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-semibold">{tip.title}</h3>
            <p className="my-2">{tip.content}</p>
            <div>
              <div className="p-4">
                <div className="card bg-base-100 w-full max-w-[376px] h-[410px] shadow-md mx-auto flex flex-col">
                  <figure className="px-4 pt-4 h-[180px] overflow-hidden">
                    <img
                      src={tip.photoUrl}
                      alt="Shoes"
                      className="rounded-xl w-full h-full object-cover"
                    />
                  </figure>

                  <div className="card-body items-center text-center p-4 flex-grow overflow-hidden ">
                    <h2 className="card-title font-bold text-2xl ">
                      {tip.category}
                    </h2>
                    <p className="text-sm text-gray-600 ">{tip.description}</p>
                  </div>

                  <p className="font-bold  text-center flex justify-center items-center gap-1 text-xl">
                    <span className="">Plantype:</span> {tip.planttype}
                  </p>

                  <div className="flex justify-around items-center py-3">
                    <p className="flex items-center gap-2 text-md">
                      <span>Likes</span>
                      <FcLike size={20} /> {tip.likes}
                    </p>
                    <p className="font-bold  flex items-center gap-1 text-md">
                      <span>Level:</span> {tip.level}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#98e674]">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold text-center mb-10">
            🛠️ Essential Gardening Tools
          </h2>
          <p className="text-center max-w-2xl mx-auto text-lg mb-10">
            Having the right tools makes gardening easier and more enjoyable.
            Below are a few essential tools every gardener should have.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tool 1 */}
            <div className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaSeedling size={36} className="text-green-600" />
                <h3 className="text-2xl font-semibold">Trowel</h3>
              </div>
              <p className="text-base text-gray-700">
                A hand trowel is perfect for digging small holes, removing
                weeds, and transplanting seedlings. Its compact size makes it
                essential for precision work.
              </p>
            </div>

            {/* Tool 2 */}
            <div className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaCut size={36} className="text-red-500" />
                <h3 className="text-2xl font-semibold">Pruning Shears</h3>
              </div>
              <p className="text-base text-gray-700">
                Pruning shears are used for trimming and shaping plants,
                removing dead or overgrown branches, and promoting healthy
                growth.
              </p>
            </div>

            {/* Tool 3 */}
            <div className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaTint size={36} className="text-blue-500" />
                <h3 className="text-2xl font-semibold">Watering Can</h3>
              </div>
              <p className="text-base text-gray-700">
                A watering can provides a gentle and controlled way to hydrate
                your plants, ensuring they get the water they need without
                damaging delicate leaves or soil structure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#97ec70]">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-4xl font-bold text-center mb-10">
            🌱 Gardening Tips
          </h2>
          <p className="text-center max-w-2xl mx-auto text-lg mb-10">
            Improve your gardening skills with these simple yet powerful tips.
            Perfect for beginners and seasoned plant lovers alike.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tip 1 */}
            <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaSun size={36} className="text-yellow-500" />
                <h3 className="text-2xl font-semibold">Know Your Sunlight</h3>
              </div>
              <p className="text-base text-gray-700">
                Observe your garden area. Some plants need full sun while others
                prefer shade. Match your plant choices with the available light.
              </p>
            </div>

            {/* Tip 2 */}
            <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaBug size={36} className="text-green-600" />
                <h3 className="text-2xl font-semibold">
                  Use Natural Pest Control
                </h3>
              </div>
              <p className="text-base text-gray-700">
                Avoid chemicals. Introduce ladybugs, neem oil spray, or homemade
                garlic spray to manage pests safely and effectively.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="bg-base-200 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center gap-4 mb-4">
                <FaRecycle size={36} className="text-teal-500" />
                <h3 className="text-2xl font-semibold">Compost Smart</h3>
              </div>
              <p className="text-base text-gray-700">
                Composting reduces waste and enriches your soil naturally. Add
                vegetable scraps, leaves, and grass clippings to boost soil
                health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTrendingTips;

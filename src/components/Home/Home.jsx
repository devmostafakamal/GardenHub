import React, { use, useEffect } from "react";
import GardenSlider from "../GardenSlider/GardenSlider";
import FeatureGardenrs from "../FeatureGardenrs/FeatureGardenrs";
import { AuthContext } from "../../contexts/AuthContext";
import TopTrendingTips from "../TopTrending/TopTrendingTips";
// import AdminImportPage from "../AdminImportPage/AdminImportPage";

function Home() {
  const { activeData, setActiveData, loading, setLoading } = use(AuthContext);
  const gardenersData = [
    {
      id: 1,
      name: "Ava Green",
      age: 34,
      gender: "Female",
      location: "California",
      specialty: "Herb Gardening",
      status: "active",
      experience: "5 years in indoor and balcony herb gardens",
      profileImage: "https://i.ibb.co/whyRzKtC/femal6.jpg",
      totalSharedTips: 12,
      bio: "Passionate about growing organic herbs in small spaces.",
    },
    {
      id: 2,
      name: "Liam Bloom",
      age: 42,
      gender: "Male",
      location: "Texas",
      specialty: "Succulents",
      status: "active",
      experience: "8 years with desert plants and indoor succulents",
      profileImage: "https://i.ibb.co/5xsvRY9D/male1.jpg",
      totalSharedTips: 19,
      bio: "Succulent care specialist and DIY potting mix creator.",
    },
    {
      id: 3,
      name: "Sophia Root",
      age: 29,
      gender: "Female",
      location: "Florida",
      specialty: "Vertical Gardening",
      status: "active",
      experience: "3 years in vertical systems for apartments",
      profileImage: "https://i.ibb.co/SDDXvqg0/femal5.jpg",
      totalSharedTips: 7,
      bio: "Loves to help city folks grow food on walls and balconies.",
    },
    {
      id: 4,
      name: "Noah Leaf",
      age: 36,
      gender: "Male",
      location: "Washington",
      specialty: "Urban Gardening",
      status: "inactive",
      experience: "6 years in rooftop and container gardening",
      profileImage: "https://i.ibb.co/60F6W0HY/male2.jpg",
      totalSharedTips: 10,
      bio: "Urban farming advocate with a focus on community gardens.",
    },
    {
      id: 5,
      name: "Emma Seed",
      age: 31,
      gender: "Female",
      location: "New York",
      specialty: "Organic Vegetables",
      status: "active",
      experience: "4 years growing vegetables in raised beds",
      profileImage: "https://i.ibb.co/hx4H8cVL/femal4.jpg",
      totalSharedTips: 15,
      bio: "He is a strong and dedicated advocate of pesticide-free farming.",
    },
    {
      id: 6,
      name: "Oliver Tree",
      age: 45,
      gender: "Male",
      location: "Oregon",
      specialty: "Native Plants",
      status: "inactive",
      experience: "10 years in native flora conservation",
      profileImage: "https://i.ibb.co/9kHwDM8F/male4.jpg",
      totalSharedTips: 9,
      bio: "Focuses on sustainable landscapes using native species.",
    },
    {
      id: 7,
      name: "Mia Soil",
      age: 27,
      gender: "Female",
      location: "Colorado",
      specialty: "Composting",
      status: "active",
      experience: "2 years in household and community composting",
      profileImage: "https://i.ibb.co/9mX41mZv/femal2.jpg",
      totalSharedTips: 6,
      bio: "Teaches composting workshops and zero waste gardening.",
    },
    {
      id: 8,
      name: "Ethan Sprout",
      age: 33,
      gender: "Male",
      location: "Nevada",
      specialty: "Aquaponics",
      status: "inactive",
      experience: "5 years in hydroponic-aquaponic systems",
      profileImage: "https://i.ibb.co/Qv76CP2F/male3.jpg",
      totalSharedTips: 11,
      bio: "Combines fish farming with plant growth in water systems.",
    },
    {
      id: 9,
      name: "Isabella Potts",
      age: 30,
      gender: "Female",
      location: "Arizona",
      specialty: "Indoor Plants",
      status: "active",
      experience: "6 years in plant care for low-light environments",
      profileImage: "https://i.ibb.co/chn5ndfR/femal3.jpg",
      totalSharedTips: 13,
      bio: "Helps beginners build beautiful indoor plant setups.",
    },
    {
      id: 10,
      name: "James Planter",
      age: 39,
      gender: "Male",
      location: "Georgia",
      specialty: "Fruit Trees",
      status: "inactive",
      experience: "9 years managing backyard orchards",
      profileImage: "https://i.ibb.co/v6C92Knr/male5.jpg",
      totalSharedTips: 14,
      bio: "Expert in small fruit tree pruning and soil enrichment.",
    },
  ];

  useEffect(() => {
    fetch("https://garden-server-ten.vercel.app/featured-gardeners")
      .then((res) => res.json())
      .then((data) => {
        setActiveData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-8 text-center ">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="mt-20">
        <h2 className="text-center text-4xl font-bold text-green-300 mb-4">
          Garden slider
        </h2>
        <GardenSlider></GardenSlider>
      </div>
      <div className="bg-green-400 p-8 mt-5">
        <h2 className="text-center text-4xl font-bold text-white mb-4">
          Feature Gardeners
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {activeData.map((active, index) => (
            <div key={index}>
              <FeatureGardenrs active={active}></FeatureGardenrs>{" "}
            </div>
          ))}
        </div>
      </div>

      <TopTrendingTips></TopTrendingTips>
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import { json, useMatch, useParams } from "react-router-dom";
import Map from "../../components/Map";
import { usePropetiesContext } from "../../hooks/usePropertyContext";
// import video from '../pexels_videos_2646392 (1080p).mp4'

function ProductDetail() {
  const { property, dispatch } = usePropetiesContext();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(id);
        const response = await fetch(`http://localhost:3001/${id}`);
        const json = await response.json();

        if (response.ok) {
          //   dispatch({ type: 'SET_PROPERTY', payload: json });
          console.log(json);
          setDetails(json);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    console.log("Details :", json);
    fetchData();
  }, []);
  // console.log(details.img.img1);
  // const { img: { img1, img2, img3, img4, img5 } } = details;
  const items = [];
  let i = details.star;
  while (i > 0) {
    items.push(
      <svg
        className="w-5 h-5 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    );
    i--;
  }

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <section
        className="overflow-hidden h-full py-11 font-poppins dark:bg-gray-800"
        style={{ backgroundSize: "cover" }}
      >
        <div
          className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6 w-fitbg-white border border-gray-200 bg-gradient-to-r from-blue-100 to-blue-400 rounded-lg shadow dark:bg-gray-800"
          style={{ marginTop: "40px" }}
        >
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 md:w-1/2 ">
              <div class="sticky top-0 z-50 overflow-hidden ">
                {details.img.img1 && (
                  <div className="relative mb-6 rounded-md lg:mb-10 lg:h-2/4 overflow-hidden group h-[287]">
                    <img
                      src={details.img.img1}
                      alt=""
                      className="object-cover rounded-md h-[287] w-full lg:h-full transition-transform transform scale-100 group-hover:scale-105"
                    />
                  </div>
                )}
                <div class="flex-wrap hidden md:flex ">
                  <div class="w-1/2 p-2  sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img2}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img3}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img4}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                  <div class="w-1/2 p-2 sm:w-1/4 rounded-md">
                    <a href="#" class="block">
                      <img
                        src={details.img.img5}
                        alt=""
                        class="object-cover w-full lg:h-20 rounded-md"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2  ">
              <div>
                <div
                  class="mb-8 border border-gray-200 rounded-lg shadow dark:border-gray-700 h-[301]"
                  style={{ backgroundColor: "#f7f2d3", padding: "20px" }}
                >
                  {/* <span class="text-lg font-medium text-rose-500 dark:text-rose-200">
                    New
                  </span> */}
                  <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {}
                  </h2>

                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                    {items}
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {Math.floor(details.star)}
                      <span>.0</span>
                    </span>
                  </div>

                  <p className="max-w-md mb-2 text-gray-700 dark:text-gray-400 font-bold text-2xl">
                    {details.name}
                  </p>

                  <p class="font-thin">{details.area}SqFt.</p>
                  <p class="font-thin">{details.bhks}SqFt.</p>
                  {/* <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{details.tag[0]}</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{details.tag[1]}</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">{details.tag[2]}</span> */}
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400 text-xl">
                    {details.location}
                  </p>

                  <div className="max-w-md mb-8 mt-2">
                    <p className="text-4xl font-bold text-gray-700 dark:text-gray-400 transition-transform transform hover:scale-105">
                      <span>₹{details.price}</span>
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400"></span>
                    </p>
                  </div>

                  {/* <p class="text-green-600 dark:text-green-300 ">7 in stock</p> */}
                </div>
                {/* <div class="flex items-center mb-8">
                            <h2 class="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                                Colors:</h2>
                            <div class="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                    <div class="w-6 h-6 bg-cyan-300"></div>
                                </button>
                                <button
                                    class="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div class="w-6 h-6 bg-green-300 "></div>
                                </button>
                                <button
                                    class="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div class="w-6 h-6 bg-red-200 "></div>
                                </button>
                            </div>
                        </div> */}
                {/* <div class="flex items-center mb-8">
                            <h2 class="w-16 text-xl font-bold dark:text-gray-400">
                                Size:</h2>
                            <div class="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">XL
                                </button>
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">S
                                </button>
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">M
                                </button>
                                <button
                                    class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">XS
                                </button>
                            </div>
                        </div> */}
                {/* <div class="w-32 mb-8 ">
                            <label for=""
                                class="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div class="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button
                                    class="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span class="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number"
                                    class="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    placeholder="1"/>
                                <button
                                    class="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span class="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div> */}
                <div class="flex flex-wrap items-center -mx-4 ">
                  {/* <div class="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button
                                    class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    
                                </button>
                            </div> */}
                  {/* <div class="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                <button
                                    class="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to wishlist
                                </button>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
          <div class="flex h-[121] w-full" style={{ marginTop: "20px" }}>
            <div style={{ width: "100%", margin: "10px" }}>
              <h1 class="font-bold text-2xl p-2 ">Description:</h1>
              <p class="mb-2 text-black-500 dark:text-gray-400 p-2 font-extrabold">
                {details.description}
              </p>
            </div>
            {/* <div style={{ width: "50%" }}>
             <Map/>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
// Keshav me soone jaa rha hu

//Tu continue kar no issue

export default ProductDetail;

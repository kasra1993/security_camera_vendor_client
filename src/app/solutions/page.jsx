import React from "react";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    title: "Title1",
    id: "1",
    image: "/cccamera1.png",
    link: "/solutions/1",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title2",
    id: "2",
    image: "/cccamera2.png",
    link: "/solutions/2",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title3",
    id: "3",
    image: "/cccamera3.png",
    link: "/solutions/3",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title4",
    id: "4",
    image: "/cccamera1.png",
    link: "/solutions/4",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title1",
    id: "1",
    image: "/cccamera1.png",
    link: "/solutions/1",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title2",
    id: "2",
    image: "/cccamera2.png",
    link: "/solutions/2",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title3",
    id: "3",
    image: "/cccamera3.png",
    link: "/solutions/3",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
  {
    title: "Title4",
    id: "4",
    image: "/cccamera1.png",
    link: "/solutions/4",
    description:
      "Ut pretium ultricies dignissim. Sed sit amet mi eget urnaplacerat vulputate. Ut vulputate est non quam dignissimelementum. Donec a ullamcorper diam",
  },
];

const Solutions = () => {
  return (
    <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold leading-9 text-gray-800">
          Solutions
        </h1>
        <p className="text-base leading-6 text-center text-gray-600 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">
          If you&apos;re looking for random paragraphs, you&apos;ve come to the
          right place. When a random word or a random sentence isn&apos;t quite
          enough
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 lg:gap-10 md:gap-6 gap-4 lg:my-20 md:mt-9 mt-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center"
          >
            <Image
              src={solution.image}
              alt={solution.title}
              width={200}
              height={300}
              className="h-full w-full object-cover object-center brightness-50 rounded-2xl	"
            />
            <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10 ">
              <div className="flex items-center justify-center flex-col h-full">
                <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-white">
                  {solution.title}
                </h2>
                <p className="xl:px-20 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                  {solution.description}
                </p>
              </div>
              <div className="px-4 md:w-auto w-full">
                <Link href={solution.link}>
                  <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none rounded-md">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="relative flex items-center justify-center">
          <img src="https://i.ibb.co/w04zsMJ/img-2.png" alt="chair" />
          <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div className="flex items-center justify-center flex-col h-full">
              <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-white">
                Minimimalism and modern day architecture
              </h2>
              <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="px-4 md:w-auto w-full">
              <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <img src="https://i.ibb.co/3ctkDMB/img-3.png" alt="chair" />
          <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
            <div className="flex items-center justify-center flex-col h-full">
              <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-white">
                Layout setting and mood
              </h2>
              <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry
              </p>
            </div>
            <div className="px-4 md:w-auto w-full">
              <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">
                Read more
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Solutions;

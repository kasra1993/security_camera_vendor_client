"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const westAffiliateArray = [
  {
    id: 1,
    name: "John",
    address: "Some where around here",
    logo: "/camera1.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 2,
    name: "Thomas",
    address: "Some where around here",
    logo: "/camera3.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 3,
    name: "Tim",
    address: "Some where around here",
    logo: "/camera2.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 4,
    name: "Brad",
    address: "Some where around here",
    logo: "/camera4.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 5,
    name: "Sheldon",
    address: "Some where around here",
    logo: "/camera2.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
];
const eastAffiliateArray = [
  {
    id: 1,
    name: "Jack",
    address: "Some where around here",
    logo: "/camera5.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 2,
    name: "James",
    address: "Some where around here",
    logo: "/camera2.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 3,
    name: "Bryan",
    address: "Some where around here",
    logo: "/camera1.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 4,
    name: "Sara",
    address: "Some where around here",
    logo: "/camera3.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 5,
    name: "Peter",
    address: "Some where around here",
    logo: "/camera2.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
];
const centralAffiliateArray = [
  {
    id: 1,
    name: "James",
    address: "Some where around here",
    logo: "/camera1.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 2,
    name: "Navid",
    address: "Some where around here",
    logo: "/camera1.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 3,
    name: "Penelope",
    address: "Some where around here",
    logo: "/camera5.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 4,
    name: "Sam",
    address: "Some where around here",
    logo: "/camera2.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
  {
    id: 5,
    name: "Cam",
    address: "Some where around here",
    logo: "/camera1.png",
    description:
      "some description about this person and the kind of work he does at his company",
    links: {
      twitter: "/",
      instagram: "/",
      facebook: "/",
    },
  },
];

const Affiliates = () => {
  const [location, setLocation] = useState("center");
  var content;
  if (location === "West") {
    content = westAffiliateArray.map((item) => (
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
        key={item.name}
      >
        <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <Image
                width={300}
                height={300}
                src={item.logo}
                alt={item.name}
                role="img"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
              {item.name}
            </h1>
            <p className="text-gray-800 dark:text-white text-sm text-center">
              {item.address}
            </p>
            <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
              {item.description}
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <Link href="/" className="mx-5">
                <div aria-label="Github" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                    alt="github"
                  />
                </div>
              </Link>
              <Link href="/" className="mx-5">
                {" "}
                <div aria-label="Twitter" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                    alt="twitter"
                  />
                </div>
              </Link>
              <Link href="/" className="mx-5">
                <div aria-label="Instagram" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                    alt="instagram"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  } else if (location === "East") {
    content = eastAffiliateArray.map((item) => (
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
        key={item.name}
      >
        <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <Image
                width={300}
                height={300}
                src={item.logo}
                alt={item.name}
                role="img"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
              {item.name}
            </h1>
            <p className="text-gray-800 dark:text-white text-sm text-center">
              {item.address}
            </p>
            <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
              {item.description}
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <Link href="/" className="mx-5">
                {" "}
                <div aria-label="Github" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                    alt="github"
                  />
                </div>
              </Link>
              <Link href="/" className="mx-5">
                {" "}
                <div aria-label="Twitter" role="img">
                  <Image
                    width={25}
                    height={5}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                    alt="twitter"
                  />
                </div>
              </Link>
              <Link href="/" className="mx-5">
                {" "}
                <div aria-label="Instagram" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                    alt="instagram"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  } else if (location === "Central") {
    content = centralAffiliateArray.map((item) => (
      <div
        role="listitem"
        className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
        key={item.name}
      >
        <div className="rounded overflow-hidden shadow-md bg-white dark:bg-gray-900">
          <div className="absolute -mt-20 w-full flex justify-center">
            <div className="h-32 w-32">
              <Image
                width={300}
                height={300}
                src={item.logo}
                alt={item.name}
                role="img"
                className="rounded-full object-cover h-full w-full shadow-md"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <h1 className="font-bold dark:text-white text-3xl text-center mb-1">
              {item.name}
            </h1>
            <p className="text-gray-800 dark:text-white text-sm text-center">
              {item.address}
            </p>
            <p className="text-center text-gray-600 dark:text-gray-200 text-base pt-3 font-normal">
              {item.description}
            </p>
            <div className="w-full flex justify-center pt-5 pb-5">
              <Link href="/" className="mx-5">
                {" "}
                <div aria-label="Github" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg"
                    alt="github"
                  />
                </div>
              </Link>
              <Link href="/" className="mx-5">
                {" "}
                <div aria-label="Twitter" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg"
                    alt="twitter"
                  />
                </div>
              </Link>
              <Link href="/" className="mx-5">
                {" "}
                <div aria-label="Instagram" role="img">
                  <Image
                    width={25}
                    height={25}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg"
                    alt="instagram"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="min-h-screen">
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <p className="text-gray-500 dark:text-gray-200 text-lg text-center font-normal pb-3">
            Our Vendors
          </p>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            Our Aquintences in different parts of USA
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center p-1 border border-blue-600 dark:border-blue-400 rounded-xl">
          <button
            className="px-4 py-2 text-sm font-medium text-blue-600 capitalize hover:bg-blue-600 hover:text-white md:py-3 rounded-xl md:px-12 focus:bg-blue-600 focus:text-white active:bg-blue-600"
            onClick={() => setLocation("West")}
          >
            West
          </button>
          <button
            onClick={() => setLocation("Central")}
            className="px-4 py-2 mx-4 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none  rounded-xl md:mx-8 md:px-12 hover:bg-blue-600 hover:text-white  focus:bg-blue-600 focus:text-white active:bg-blue-600"
          >
            Centeral
          </button>
          <button
            onClick={() => setLocation("East")}
            className="px-4 py-2 text-sm font-medium text-blue-600 capitalize transition-colors duration-300 md:py-3 dark:text-blue-400 dark:hover:text-white focus:outline-none hover:bg-blue-600 hover:text-white rounded-xl md:px-12 focus:bg-blue-600 focus:text-white active:bg-blue-600"
          >
            East
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
        <div className="container mx-auto">
          <div
            role="list"
            aria-label="Behind the scenes People "
            className="lg:flex md:flex sm:flex items-center  flex-wrap gap-10  "
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliates;

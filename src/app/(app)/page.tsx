import { Button } from "@/components/ui/button";
import React from "react";
import { LuCupSoda } from "react-icons/lu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Home = () => {
  return (
    <>
      <main className="   flex flex-col items-center justify-between py-40 px-10 md:px-40 lg:px-40 bg-gradient-to-l from-[#1e0b19]  to-[#000000]    z-0 w-full">
        <div className="flex flex-col items-center ">
          <LuCupSoda className="text-white mb-10 text-8xl  hover:animate-bounce cursor-pointer shadow-md " />
          <h1 className="text-white text-lg md:text-4xl lg:text-4xl">
            Unlock the Secrets of Web Development
          </h1>
          <h6 className="text-gray-400 mt-1 text-xs">
            Explore our collection of CSS, JavaScript, and HTML tutorials and
            resources.
          </h6>
          <Button className="mt-12">Start Explore</Button>
        </div>
       
      </main>
       {/* introduction section  */}
       <section className="flex items-center justify-around">
          <div></div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </section>
    </>
  );
};

export default Home;

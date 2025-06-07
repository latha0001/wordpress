import { AlignJustifyIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const BlogMobile = (): JSX.Element => {
  // Recent posts data
  const recentPosts = [
    {
      title: "Lorem ipsum dolor sit amet",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpp79t4L8jFP/img/rectangle-392.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpp79t4L8jFP/img/rectangle-392.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpp79t4L8jFP/img/rectangle-392.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpp79t4L8jFP/img/rectangle-392.png",
    },
  ];

  // Categories data
  const categories = [
    {
      title: "Lorem ipsum dolor sit",
      icon: "https://c.animaapp.com/mblpp79t4L8jFP/img/successful-booking.svg",
    },
    {
      title: "Lorem ipsum dolor sit",
      icon: "https://c.animaapp.com/mblpp79t4L8jFP/img/discount.svg",
    },
    {
      title: "Lorem ipsum dolor sit",
      icon: "https://c.animaapp.com/mblpp79t4L8jFP/img/successful-booking.svg",
    },
    {
      title: "Lorem ipsum dolor sit",
      icon: "https://c.animaapp.com/mblpp79t4L8jFP/img/time-is-money.svg",
    },
    {
      title: "Lorem ipsum dolor sit",
      icon: "https://c.animaapp.com/mblpp79t4L8jFP/img/successful-booking.svg",
    },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:2224"
    >
      <div className="bg-white overflow-hidden w-[414px] relative">
        {/* Header Section */}
        <div className="relative w-full p-4">
          <div className="relative">
            <div className="absolute w-[217px] h-[184px] top-[30px] left-[5px] bg-[#e4faff] rounded-[10px]" />

            <div className="relative w-[114px] h-[18px]">
              <div className="relative w-[109px] h-[17px] top-px left-px">
                <div className="relative h-[17px]">
                  <img
                    className="absolute w-[17px] h-[17px] top-0 left-0"
                    alt="CausalFunnel logo"
                    src="https://c.animaapp.com/mblpp79t4L8jFP/img/group-1.png"
                  />

                  <img
                    className="absolute w-[88px] h-2.5 top-[3px] left-[21px]"
                    alt="Causal funnel"
                    src="https://c.animaapp.com/mblpp79t4L8jFP/img/causalfunnel-1.svg"
                  />
                </div>
              </div>
            </div>

            <div className="absolute w-[191px] top-3 left-[18px] font-medium text-[#00255e] text-sm tracking-[0] leading-[23px] font-['Poppins',Helvetica]">
              {" "}
              <br /> <br />
              causalfunnel&#39;s Knowledge Base
            </div>

            <div className="absolute w-[186px] top-[111px] left-[18px] font-normal text-neutral-700 text-xs tracking-[0] leading-[17px] font-['Roboto',Helvetica]">
              Insights From Our Team To Help You Drive Your Sales And Marketing
              Strategies With Cutting Edge Ai And Ml.
            </div>
          </div>

          <AlignJustifyIcon className="absolute w-6 h-6 top-0 right-4" />

          <img
            className="absolute w-[146px] h-[92px] top-[75px] right-4"
            alt="Blogging illustration"
            src="https://c.animaapp.com/mblpp79t4L8jFP/img/undraw-blogging-re-kl0d-1.svg"
          />
        </div>

        {/* Blog Posts Section */}
        <div className="mt-[220px] px-6">
          <div className="flex flex-col space-y-6">
            {/* First Blog Post */}
            <Card className="relative w-full border-none">
              <CardContent className="p-0">
                <img
                  className="w-full h-[135px] object-cover rounded-t-md"
                  alt="Blog post image"
                  src="https://c.animaapp.com/mblpp79t4L8jFP/img/rectangle-369.png"
                />
                <div className="p-2 bg-[#e4faff] rounded-b-md">
                  <h3 className="font-medium text-[#212529] text-sm font-['Poppins',Helvetica]">
                    Title
                  </h3>

                  <div className="flex items-center mt-2">
                    <Avatar className="w-[26px] h-[26px]">
                      <AvatarImage
                        src="https://c.animaapp.com/mblpp79t4L8jFP/img/ellipse-9.png"
                        alt="Author"
                      />
                      <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <span className="ml-2 text-[11px] font-normal font-['Roboto',Helvetica]">
                      <span className="text-[#979797]">by</span>
                      <span className="text-[#1c1f22]"> Lorem Ipsum |</span>
                      <span className="text-[#858585]"> 12 March,2022</span>
                    </span>
                  </div>

                  <div className="flex mt-2 space-x-2">
                    <Badge className="bg-[#ff3594] hover:bg-[#ff3594] text-white text-[11px] font-medium rounded-sm px-2 py-0 h-[19px]">
                      Lorem
                    </Badge>
                    <Badge className="bg-[#b620e0] hover:bg-[#b620e0] text-white text-[11px] font-medium rounded-sm px-2 py-0 h-[19px]">
                      Lorem
                    </Badge>
                  </div>

                  <p className="mt-2 font-light text-[#1c1f22] text-xs tracking-[-0.36px] leading-[15px] font-['Roboto',Helvetica]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna
                  </p>

                  <div className="mt-4 font-normal text-xs font-['Roboto',Helvetica]">
                    <span className="text-[#1c1f22]">5676 </span>
                    <span className="text-[#858585]">Comments</span>
                    <img
                      className="inline-block w-3 h-3 ml-16"
                      alt="Share icon"
                      src="https://c.animaapp.com/mblpp79t4L8jFP/img/group-17.png"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts Section */}
            <div className="mt-4">
              <h3 className="font-medium text-[#212529] text-[17px] font-['Poppins',Helvetica]">
                Recent Posts
              </h3>
              <div className="mt-2 space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img
                      className="w-[63px] h-14 object-cover"
                      alt="Post thumbnail"
                      src={post.image}
                    />
                    <div>
                      <p className="font-normal text-[#1d1f22] text-[11px] tracking-[-0.33px] leading-[13px] font-['Roboto',Helvetica]">
                        {post.title}
                      </p>
                      <p className="font-normal text-[#858585] text-xs tracking-[-0.36px] leading-5 font-['Roboto',Helvetica] mt-1">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Blog Post */}
            <Card className="relative w-full border-none mt-4">
              <CardContent className="p-0">
                <img
                  className="w-full h-[135px] object-cover rounded-t-md"
                  alt="Blog post image"
                  src="https://c.animaapp.com/mblpp79t4L8jFP/img/rectangle-386.png"
                />
                <div className="p-2 bg-[#e4faff] rounded-b-md">
                  <h3 className="font-medium text-[#212529] text-sm font-['Poppins',Helvetica]">
                    Title
                  </h3>

                  <div className="flex items-center mt-2">
                    <Avatar className="w-[26px] h-[26px]">
                      <AvatarImage
                        src="https://c.animaapp.com/mblpp79t4L8jFP/img/ellipse-9.png"
                        alt="Author"
                      />
                      <AvatarFallback>AU</AvatarFallback>
                    </Avatar>
                    <span className="ml-2 text-[11px] font-normal font-['Roboto',Helvetica]">
                      <span className="text-[#979797]">by</span>
                      <span className="text-[#1c1f22]"> Lorem Ipsum |</span>
                      <span className="text-[#858585]"> 12 March,2022</span>
                    </span>
                  </div>

                  <div className="flex mt-2 space-x-2">
                    <Badge className="bg-[#ff3594] hover:bg-[#ff3594] text-white text-[11px] font-medium rounded-sm px-2 py-0 h-[19px]">
                      Lorem
                    </Badge>
                    <Badge className="bg-[#32c5ff] hover:bg-[#32c5ff] text-white text-[11px] font-medium rounded-sm px-2 py-0 h-[19px]">
                      Lorem
                    </Badge>
                  </div>

                  <p className="mt-2 font-light text-[#1c1f22] text-xs tracking-[-0.36px] leading-[15px] font-['Roboto',Helvetica]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna
                  </p>

                  <div className="mt-4 font-normal text-xs font-['Roboto',Helvetica]">
                    <span className="text-[#1c1f22]">5676 </span>
                    <span className="text-[#858585]">Comments</span>
                    <img
                      className="inline-block w-3 h-3 ml-16"
                      alt="Share icon"
                      src="https://c.animaapp.com/mblpp79t4L8jFP/img/group-18.png"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories Section */}
            <div className="mt-4">
              <h3 className="font-medium text-[#212529] text-[17px] font-['Poppins',Helvetica]">
                Categories
              </h3>
              <div className="mt-2 space-y-4">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-[27px] h-6 bg-[url(https://c.animaapp.com/mblpp79t4L8jFP/img/rectangle-403.svg)] bg-cover bg-center flex items-center justify-center">
                      <img
                        className="w-5 h-5"
                        alt="Category icon"
                        src={category.icon}
                      />
                    </div>
                    <p className="font-normal text-[#1d1f22] text-[11px] tracking-[-0.33px] leading-[13px] font-['Roboto',Helvetica]">
                      {category.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter and Footer */}
        <div className="mt-8 w-full">
          {/* Newsletter Subscription */}
          <div className="relative mx-auto w-[328px] h-[49px] bg-white rounded-lg shadow-[0px_2px_7px_#00000040] flex items-center px-4">
            <p className="font-medium text-[#00255e] text-xs leading-[14px] font-['Poppins',Helvetica] w-[195px]">
              Get Funnel Optimization Insights Delivered To Your Inbox!
            </p>
            <Button className="ml-auto h-[41px] bg-[#e4faff] hover:bg-[#d0f5ff] rounded-lg">
              <span className="font-medium text-[#00255e] text-xs tracking-[0.48px] font-['Poppins',Helvetica]">
                SUBSCRIBE
              </span>
            </Button>
          </div>

          {/* Footer */}
          <footer className="mt-6 w-full bg-[#e4faff] pt-12 pb-4">
            <div className="flex flex-col items-center">
              <div className="relative w-[162px] h-6">
                <img
                  className="absolute w-[26px] h-6 top-0 left-0"
                  alt="CausalFunnel logo"
                  src="https://c.animaapp.com/mblpp79t4L8jFP/img/group-2.png"
                />
                <img
                  className="absolute w-[131px] h-[15px] top-[5px] left-8"
                  alt="Causal funnel"
                  src="https://c.animaapp.com/mblpp79t4L8jFP/img/causalfunnel.svg"
                />
              </div>

              <div className="flex justify-center space-x-8 mt-6">
                <span className="font-normal text-[#00255e] text-[13px] font-['Roboto',Helvetica]">
                  Platform
                </span>
                <span className="font-normal text-[#00255e] text-[13px] font-['Roboto',Helvetica]">
                  Company
                </span>
                <span className="font-normal text-[#00255e] text-[13px] font-['Roboto',Helvetica]">
                  Blog
                </span>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                {/* Facebook */}
                <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                  <img
                    className="w-[9px] h-4"
                    alt="Facebook"
                    src="https://c.animaapp.com/mblpp79t4L8jFP/img/vector-3.svg"
                  />
                </div>

                {/* Twitter */}
                <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                  <img
                    className="w-[17px] h-3.5"
                    alt="Twitter"
                    src="https://c.animaapp.com/mblpp79t4L8jFP/img/group.png"
                  />
                </div>

                {/* LinkedIn */}
                <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                  <img
                    className="w-4 h-4"
                    alt="LinkedIn"
                    src="https://c.animaapp.com/mblpp79t4L8jFP/img/vector-2.svg"
                  />
                </div>

                {/* Skype */}
                <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Skype"
                    src="https://c.animaapp.com/mblpp79t4L8jFP/img/vector-4.svg"
                  />
                </div>
              </div>
            </div>

            <Separator className="mt-6 bg-gray-300" />

            <div className="text-center mt-2">
              <span className="font-normal text-[#00255e] text-[10px] font-['Verdana-Regular',Helvetica]">
                2022 copyrights.All Rights Reserved
              </span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

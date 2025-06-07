import {
  AlignJustifyIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { Separator } from "../../components/ui/separator";

export const CausalfunnelMobile = (): JSX.Element => {
  // Customer testimonials data
  const testimonials = [
    {
      logo: "californiafurniturestore--1--4",
      stat: "200%",
      text: "Increase in conversion",
      icon: "group-9.png",
    },
    {
      logo: "group-23.png",
      stat: "302%",
      text: "Increase in conversion",
      icon: "group-10.png",
    },
    {
      logo: "simplyshoes-logo--1--4",
      stat: "8X",
      text: "Increase in orders",
      icon: "group-11.png",
    },
    {
      logo: "simplyshoes-logo--1--4",
      stat: "3.8X",
      text: "Increase in orders",
      icon: "group-12.png",
    },
  ];

  // How it works features
  const features = [
    {
      icon: "successful-booking.svg",
      text: "High Accuracy Intent Prediction",
      bgColor: "#ff080833",
    },
    {
      icon: "discount.svg",
      text: "Automated Personalized Nudges (offers)",
      bgColor: "#b620e033",
    },
    {
      icon: "time-is-money.svg",
      text: "Boosts Conversion By 40% On Average",
      bgColor: "#fdd4024c",
    },
    {
      icon: "30-minutes-delivery.svg",
      text: "Works In Real-time To Convert Visitors",
      bgColor: "#6c63ff4c",
    },
    {
      icon: "youtuber.svg",
      text: "Tested With 200 Million+ Visitors",
      bgColor: "#00df7233",
    },
  ];

  // Customer stories data
  const customerStories = [
    {
      title: "Awesome Services",
      content:
        "CausalFunnel helps us analyze millions of visitors and provides insights into our user behavior across sessions and journeys. Their DeepID product",
      name: "Rajat Agarwal",
      position: "VP, Engineering",
      avatar: "rectangle-346.png",
    },
    {
      title: "We have a great tool!",
      content:
        "We serve two types of persona and didn't know how many of our visitors classify in each of them.",
      name: "Dr. Erson Religioso",
      position: "VP, Engineering",
      avatar: "rectangle-366.png",
    },
    {
      title: "We have a great tool!",
      content:
        "We serve two types of persona and didn't know how many of our visitors classify in each of them.",
      name: "Umair Tazeem",
      position: "CEO & Co-founder",
      avatar: "rectangle-364.png",
    },
  ];

  // News updates data
  const newsUpdates = [
    {
      title: "VDOSH Makes Investment in CausalFunnel",
      logo: "vdosh-logo-2.png",
    },
    {
      title:
        "CausalFunnel named Top 50 AI CEOs of 2021 by Technology Innovators Magazine.",
      logo: "technlogy-innovators-logo-2.png",
    },
    {
      title:
        "CausalFunnel invited to the Fast Company Executive Board for our industry expertise.",
      logo: "svg-1-1.png",
    },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:1020"
    >
      <div className="bg-white overflow-hidden w-[414px] h-[3049px] relative">
        {/* Header */}
        <div className="absolute w-[114px] h-[18px] top-[11px] left-[17px]">
          <div className="relative w-[109px] h-[17px] top-px left-px">
            <div className="relative h-[17px]">
              <img
                className="absolute w-[17px] h-[17px] top-0 left-0"
                alt="Group"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-1.png"
              />
              <img
                className="absolute w-[88px] h-2.5 top-[3px] left-[21px]"
                alt="Causal funnel"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/causalfunnel.svg"
              />
            </div>
          </div>
        </div>

        <AlignJustifyIcon className="absolute w-6 h-6 top-[11px] right-[22px] text-[#00255e]" />

        {/* Hero Section */}
        <Card className="absolute w-[217px] h-[202px] top-[41px] left-[22px] bg-[#e4faff] rounded-[10px] border-none">
          <CardContent className="p-2.5">
            <h2 className="font-medium text-[#00255e] text-sm leading-[23px] mt-[3px]">
              {" "}
              <br />
              predicting Buying Intent In The Post Cookie World
            </h2>
            <p className="font-normal text-neutral-700 text-xs leading-[17px] mt-[5px]">
              Uncover The Hidden Value Of Your Anonymous Visitors With Our{" "}
              <br />
              disruptive Cookie-less Ai Technology.
            </p>
            <Button className="w-[84px] h-[22px] mt-[40px] bg-[#00255e] rounded shadow-[0px_4px_4px_#0000001a] p-0">
              <span className="text-[11px] font-normal">Start Free Trial</span>
            </Button>
          </CardContent>
        </Card>

        {/* Illustration */}
        <div className="absolute w-[140px] h-[110px] top-[84px] left-[259px]">
          <div className="relative h-[110px]">
            {/* Complex SVG illustration - keeping as is */}
            <div className="absolute w-[140px] h-[110px] top-0 left-0">
              <div className="absolute w-[41px] h-[110px] top-0 left-[92px]">
                <div className="relative h-[110px]">
                  <img
                    className="absolute w-[9px] h-3.5 top-24 left-[22px]"
                    alt="Group"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-6.png"
                  />
                  <img
                    className="absolute w-[9px] h-3.5 top-24 left-[9px]"
                    alt="Group"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-7.png"
                  />
                  <img
                    className="absolute w-[23px] h-14 top-[45px] left-3"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-33.svg"
                  />
                  <img
                    className="absolute w-6 h-[38px] top-3 left-3.5"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-22.svg"
                  />
                  <img
                    className="absolute w-[7px] h-[23px] top-[34px] left-[34px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-46.svg"
                  />
                  <img
                    className="absolute w-4 h-5 top-7 left-0"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-34.svg"
                  />
                  <img
                    className="absolute w-2.5 h-[29px] top-[21px] left-[30px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-54.svg"
                  />
                  <img
                    className="absolute w-[23px] h-[27px] top-4 left-1"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-103.svg"
                  />
                  <img
                    className="absolute w-2.5 h-2.5 top-0.5 left-[21px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-108.svg"
                  />
                  <img
                    className="absolute w-3 h-[11px] top-0 left-[19px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-97.svg"
                  />
                </div>
              </div>
              <img
                className="absolute w-[63px] h-[60px] top-[38px] left-4"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-52.svg"
              />
              <img
                className="absolute w-px h-[17px] top-[39px] left-[89px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-4.svg"
              />
              <img
                className="absolute w-[140px] h-[25px] top-[85px] left-0"
                alt="Group"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-2.png"
              />
              <img
                className="absolute w-5 h-[15px] top-[51px] left-[18px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-39.svg"
              />
              <img
                className="absolute w-[39px] h-px top-[91px] left-[29px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-1.svg"
              />
              <div className="absolute w-[25px] h-6 top-[38px] left-[70px] bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/vector-23.svg)] bg-[100%_100%]">
                <div className="relative w-6 h-[23px] top-px left-px bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/vector-16.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[21px] h-[9px] top-[5px] left-px"
                    alt="Group"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-8.png"
                  />
                  <img
                    className="absolute w-2 h-px top-[17px] left-3.5"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-43.svg"
                  />
                </div>
              </div>
              <div className="absolute w-5 h-[19px] top-[84px] left-[31px] bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/vector-63.svg)] bg-[100%_100%]">
                <div className="relative w-[19px] h-[18px] bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/vector-36.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-[17px] h-[7px] top-1 left-px"
                    alt="Group"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-13.png"
                  />
                  <img
                    className="absolute w-1.5 h-px top-[13px] left-[11px]"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-43.svg"
                  />
                </div>
              </div>
              <div className="absolute w-[15px] h-3.5 top-[37px] left-6 bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/vector-23.svg)] bg-[100%_100%]">
                <div className="relative w-3.5 h-3.5 bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/vector-14.svg)] bg-[100%_100%]">
                  <img
                    className="absolute w-3 h-[5px] top-[3px] left-px"
                    alt="Group"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-14.png"
                  />
                  <img
                    className="absolute w-[5px] h-px top-2.5 left-2"
                    alt="Vector"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-65.svg"
                  />
                </div>
              </div>
              <img
                className="absolute w-[5px] h-[5px] top-[61px] left-[71px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector.svg"
              />
              <img
                className="absolute w-[5px] h-[5px] top-[49px] left-9"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector.svg"
              />
              <img
                className="absolute w-[5px] h-[5px] top-[82px] left-12"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector.svg"
              />
              <img
                className="absolute w-[42px] h-1.5 top-[13px] left-[52px]"
                alt="Group"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-3.png"
              />
              <img
                className="absolute w-[27px] h-1 top-[97px] left-[69px]"
                alt="Group"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-5.png"
              />
              <img
                className="absolute w-px h-[23px] top-[38px] left-[46px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-2.svg"
              />
              <img
                className="absolute w-[3px] h-[3px] top-[60px] left-[45px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector.svg"
              />
              <img
                className="absolute w-[3px] h-[3px] top-[77px] left-[68px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector.svg"
              />
              <img
                className="absolute w-[3px] h-[3px] top-[57px] left-[27px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector.svg"
              />
              <img
                className="absolute w-2 h-px top-[58px] left-5"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-5.svg"
              />
              <img
                className="absolute w-3 h-1.5 top-[78px] left-[69px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-12.svg"
              />
              <img
                className="absolute w-[3px] h-[3px] top-[73px] left-[27px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector.svg"
              />
              <img
                className="absolute w-3 h-1.5 top-[74px] left-7"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-12.svg"
              />
              <img
                className="absolute w-[59px] h-px top-[69px] left-[19px]"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-1.svg"
              />
            </div>
            <img
              className="absolute w-px h-[5px] top-[27px] left-1.5"
              alt="Vector"
              src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-17.svg"
            />
            <img
              className="absolute w-px h-[9px] top-[39px] left-1.5"
              alt="Vector"
              src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-17.svg"
            />
            <img
              className="absolute w-px h-[9px] top-[50px] left-1.5"
              alt="Vector"
              src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-17.svg"
            />
            <img
              className="absolute w-px h-[9px] top-3 left-[50px]"
              alt="Vector"
              src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-17.svg"
            />
            <img
              className="absolute w-[27px] h-1 top-7 left-[9px]"
              alt="Group"
              src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-4.png"
            />
          </div>
        </div>

        {/* How It Works Section */}
        <div className="absolute w-[381px] h-[129px] top-[257px] left-[21px]">
          <div className="absolute w-[375px] h-[66px] top-0.5 left-0 bg-[#fbfbfb]" />
          <h2 className="absolute w-[120px] top-[29px] left-[126px] font-medium text-[#0f3267] text-[17px] leading-[50px]">
            {" "}
            <br />
            how It Works?
          </h2>
          <ScrollArea className="absolute w-[376px] h-[68px] top-0 left-[5px]">
            <div className="relative w-[901px] h-[37px] top-4 left-3.5 flex space-x-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-9 h-9 rounded-[18px] flex items-center justify-center"
                    style={{ backgroundColor: feature.bgColor }}
                  >
                    <img
                      className="w-6 h-6"
                      alt={feature.text}
                      src={`https://c.animaapp.com/mblm89z7pAjeOY/img/${feature.icon}`}
                    />
                  </div>
                  <p className="ml-2 font-normal text-[#1d1f22] text-[11px] leading-3 w-[87px]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Process Steps */}
        {/* Step 1: Identify Visitor */}
        <div className="absolute w-[316px] h-[149px] top-[409px] left-[21px]">
          <img
            className="absolute w-[228px] h-[149px] top-0 left-[41px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-348.svg"
          />
          <div className="absolute top-[57px] left-36 font-normal text-[#0094fd] text-[17px] leading-6 whitespace-nowrap">
            1
          </div>
          <h3 className="absolute w-[196px] top-[23px] left-0 font-medium text-[#212529] text-sm leading-6">
            Identify Visitor
          </h3>
          <p className="absolute w-[132px] top-[45px] left-0 font-light text-[#1c1f22] text-xs leading-[15px]">
            Our ground-breaking DeepID tech is the industry&#39;s first
            cookie-less anonymous visitor identification.
          </p>
          <div className="absolute w-[22px] h-[22px] top-[59px] left-36 bg-white rounded-[11px] shadow-[0px_4px_9px_#00000040] flex items-center justify-center">
            <span className="text-[#6c63ff] text-sm">1</span>
          </div>
          <div className="absolute w-[107px] h-[119px] top-[17px] left-[209px] overflow-hidden">
            {/* Complex SVG illustration - keeping as is */}
            <div className="relative h-[120px]">
              <div className="absolute w-2 h-[17px] top-[101px] left-[95px]">
                <img
                  className="absolute w-2 h-[11px] top-0 left-0"
                  alt="Path"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/path-461.svg"
                />
                <img
                  className="absolute w-[3px] h-[11px] top-[7px] left-1"
                  alt="Path"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/path-462.svg"
                />
              </div>
              <div className="absolute w-[107px] h-[120px] top-0 left-0">
                <img
                  className="absolute w-[92px] h-[92px] top-0 left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-3.svg"
                />
                <img
                  className="absolute w-[92px] h-[92px] top-0 left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-85.svg"
                />
                {/* Many more SVG elements - keeping as is */}
                <img
                  className="absolute w-[69px] h-px top-[119px] left-[38px]"
                  alt="Vector"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-50.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Predict Intent */}
        <div className="absolute w-[415px] h-40 top-[582px] left-[49px]">
          <img
            className="absolute w-[228px] h-40 top-0 left-[75px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-348.svg"
          />
          <div className="top-16 left-[178px] font-normal text-[#0094fd] text-[17px] leading-6 whitespace-nowrap absolute">
            1
          </div>
          <h3 className="absolute w-[196px] top-[19px] left-[219px] font-medium text-[#212529] text-sm leading-6">
            Predict Intent
          </h3>
          <p className="absolute w-[131px] top-[42px] left-[219px] font-light text-[#1c1f22] text-xs leading-[15px]">
            Our proprietary AI models predict every visitor&#39;s intent to buy
            with great accuracy, only possible with our cookie-less DeepID.
          </p>
          <div className="absolute w-[22px] h-[22px] top-[66px] left-[178px] bg-white rounded-[11px] shadow-[0px_4px_9px_#00000040] flex items-center justify-center">
            <span className="text-[#ff3594] text-sm">2</span>
          </div>
          <img
            className="absolute w-[148px] h-[97px] top-[31px] left-0"
            alt="Undraw grades re"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/undraw-grades-re-j7d6-2.svg"
          />
        </div>

        {/* Step 3: Discover Persona */}
        <div className="absolute w-[328px] h-[149px] top-[765px] left-[21px]">
          <img
            className="absolute w-[228px] h-[149px] top-0 left-[41px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-348.svg"
          />
          <div className="absolute top-[57px] left-36 font-normal text-[#0094fd] text-[17px] leading-6 whitespace-nowrap">
            1
          </div>
          <h3 className="absolute w-[196px] top-3.5 left-0 font-medium text-[#212529] text-sm leading-6">
            Discover Persona
          </h3>
          <p className="absolute w-[132px] top-9 left-0 font-light text-[#1c1f22] text-xs leading-[15px]">
            Our behavior models help you discover the visitor persona, like
            discount buyers, convenience shoppers, impulse buyers, etc.
          </p>
          <div className="absolute w-[22px] h-[22px] top-[59px] left-36 bg-white rounded-[11px] shadow-[0px_4px_9px_#00000040] flex items-center justify-center">
            <span className="text-[#fdd402] text-sm">3</span>
          </div>
          <img
            className="absolute w-[122px] h-[108px] top-[19px] left-[206px]"
            alt="Undraw real time"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/undraw-real-time-analytics-re-yliv-2.svg"
          />
        </div>

        {/* Step 4: Targeted Offers */}
        <div className="absolute w-[411px] h-44 top-[938px] left-[54px]">
          <img
            className="absolute w-[228px] h-44 top-0 left-[70px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-348.svg"
          />
          <div className="top-16 left-[173px] font-normal text-[#0094fd] text-[17px] leading-6 whitespace-nowrap absolute">
            1
          </div>
          <h3 className="absolute w-[196px] top-4 left-[215px] font-medium text-[#212529] text-sm leading-6">
            Targeted Offers
          </h3>
          <p className="absolute w-[132px] top-[39px] left-[215px] font-light text-[#1c1f22] text-xs leading-4">
            Powered with buying intent and persona we show targeted offers to
            the visitors in real-time when they are about to abandon your site
            and lead them to convert.
          </p>
          <div className="absolute w-[22px] h-[22px] top-[66px] left-[173px] bg-white rounded-[11px] shadow-[0px_4px_9px_#00000040] flex items-center justify-center">
            <span className="text-[#b620e0] text-sm">4</span>
          </div>
          <div className="absolute w-[155px] h-[92px] top-[27px] left-0 overflow-hidden">
            {/* Complex SVG illustration - keeping as is */}
            <div className="relative h-[92px]">
              <img
                className="absolute w-[29px] h-[91px] top-0 left-[100px]"
                alt="Group"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-16.png"
              />
              <img
                className="absolute w-[17px] h-[55px] top-[31px] left-[21px]"
                alt="Group"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-17.png"
              />
              <img
                className="absolute w-[23px] h-[74px] top-[15px] left-[59px]"
                alt="Group"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-18.png"
              />
              {/* Many more SVG elements - keeping as is */}
              <img
                className="absolute w-[7px] h-1 top-[81px] left-9"
                alt="Vector"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-154.svg"
              />
            </div>
          </div>
        </div>

        {/* How We Improve Your Conversion Section */}
        <div className="absolute w-[414px] h-[817px] top-[1169px] left-2.5 bg-[#fbfbfb]">
          <div className="absolute w-[361px] h-[193px] top-[17px] left-[17px]">
            <h2 className="absolute w-[294px] top-0 left-[33px] font-medium text-[#00255e] text-[17px] leading-[50px]">
              How We Improve Your Conversion
            </h2>
            <p className="absolute w-[361px] top-[47px] left-0 font-light text-[#00255e] text-[13px] text-center leading-[19px]">
              CausalFunnel technology actively drives your visitors along the
              conversion funnel with persona and intent prediction nudges. Our
              technology works even if the visitor comes back after their
              cookies have been wiped (Apple clears cookies in 1 to 7 days) and
              continuously boosts your conversions.
            </p>
            <Button className="absolute w-[105px] h-9 top-[157px] left-32 bg-[#e4faff] rounded-lg shadow-[0px_2px_2px_#00000040] text-[#00255e] hover:bg-[#d0f5ff]">
              <span className="rotate-[-0.70deg] font-medium text-[13px]">
                Start Free Trial
              </span>
            </Button>
          </div>

          {/* Graph/Chart Visualization */}
          <div className="absolute w-[367px] h-[169px] top-[241px] left-[13px] rounded-md">
            <div className="absolute w-[359px] h-[159px] top-[5px] left-1 bg-[#f9f9f9] rounded-md shadow-[1px_3px_6px_#00000040]" />
            <div className="absolute w-[367px] h-[169px] top-0 left-0 bg-[#32c5ff] rounded-md shadow-[1px_3px_6px_#00000040]" />
            <div className="absolute w-[359px] h-[161px] top-1 left-1 bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/vector-143.svg)] bg-[100%_100%]">
              <div className="relative w-[362px] h-[163px] -top-px -left-0.5">
                <img
                  className="absolute w-[359px] h-[134px] top-0.5 left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-110.svg"
                />
                <img
                  className="absolute w-[362px] h-32 top-0 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-144.svg"
                />
                <img
                  className="absolute w-[359px] h-[161px] top-0.5 left-0.5"
                  alt="Vector"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-155.svg"
                />
                <img
                  className="absolute w-[362px] h-[137px] top-0 left-0"
                  alt="Vector"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/vector-119.svg"
                />
                <img
                  className="absolute w-[82px] h-[30px] top-[9px] left-[270px]"
                  alt="Group"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-19.png"
                />
                <img
                  className="absolute w-[218px] h-[77px] top-[60px] left-[72px]"
                  alt="Group"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-20.png"
                />
                <img
                  className="absolute w-[297px] h-[9px] top-[138px] left-8"
                  alt="Group"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-21.png"
                />
                <img
                  className="absolute w-[328px] h-[5px] top-[150px] left-3.5"
                  alt="Group"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-22.png"
                />
              </div>
            </div>
          </div>

          {/* Testimonial Cards */}
          {testimonials.map((testimonial, index) => {
            const positions = [
              { top: "453px", left: "11px", width: "295px", height: "83px" },
              { top: "548px", left: "61px", width: "280px", height: "68px" },
              { top: "627px", left: "61px", width: "280px", height: "68px" },
              { top: "705px", left: "61px", width: "283px", height: "83px" },
            ];

            return (
              <Card
                key={index}
                className="absolute border-none shadow-none"
                style={{
                  width: positions[index].width,
                  height: positions[index].height,
                  top: positions[index].top,
                  left: positions[index].left,
                }}
              >
                <CardContent className="p-0 relative h-full">
                  {index === 0 && (
                    <img
                      className="absolute w-[73px] h-[72px] top-0 left-0"
                      alt="Titik titik"
                      src="https://c.animaapp.com/mblm89z7pAjeOY/img/titik-titik.png"
                    />
                  )}
                  {index === 3 && (
                    <img
                      className="absolute w-[73px] h-[72px] top-[11px] left-[210px]"
                      alt="Titik titik"
                      src="https://c.animaapp.com/mblm89z7pAjeOY/img/titik-titik-1.png"
                    />
                  )}
                  <img
                    className="absolute w-[268px] h-[68px] top-0 left-0"
                    alt="Rectangle"
                    src="https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-359.svg"
                  />
                  <div className="absolute w-[129px] top-[33px] left-[105px] font-light text-[#212529] text-xs tracking-[-0.36px] leading-[13px]">
                    {testimonial.text}
                  </div>
                  <div className="absolute w-[175px] top-3 left-[105px] font-medium text-[#212529] text-[15px] tracking-[-0.45px] leading-[normal] whitespace-nowrap">
                    {testimonial.stat}
                  </div>
                  <div className="absolute w-[90px] h-[57px] top-[5px] left-[5px] bg-white rounded-[14px] flex items-center justify-center">
                    <img
                      className="w-[82px] h-[42px] object-cover"
                      alt="Logo"
                      src={`https://c.animaapp.com/mblm89z7pAjeOY/img/${testimonial.logo}.png`}
                    />
                  </div>
                  <img
                    className="absolute w-4 h-4 top-[25px] left-[238px]"
                    alt="Group"
                    src={`https://c.animaapp.com/mblm89z7pAjeOY/img/${testimonial.icon}`}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Customer Stories Section */}
        <div className="absolute w-[423px] h-[378px] top-[2017px] left-[22px]">
          <h2 className="absolute w-[114px] top-[18px] left-[47px] font-medium text-[#00255e] text-[17px] leading-5">
            Customer Stories
          </h2>
          <div className="absolute w-[423px] h-[378px] top-0 left-0">
            <img
              className="absolute w-[233px] h-52 top-[67px] left-[69px]"
              alt="Rectangle"
              src="https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-345-2.svg"
            />

            {/* Customer Story Cards */}
            {customerStories.map((story, index) => {
              const positions = [
                { top: "0", left: "191px", width: "184px", height: "182px" },
                {
                  top: "196px",
                  left: "191px",
                  width: "172px",
                  height: "182px",
                },
                { top: "151px", left: "0", width: "171px", height: "171px" },
              ];

              return (
                <Card
                  key={index}
                  className="absolute bg-white rounded-[13px] shadow-[0px_2px_4px_#00000040] border-none"
                  style={{
                    width: positions[index].width,
                    height: positions[index].height,
                    top: positions[index].top,
                    left: positions[index].left,
                  }}
                >
                  <CardContent className="p-3">
                    <h3 className="font-medium text-[#212529] text-sm tracking-[-0.28px]">
                      {story.title}
                    </h3>
                    <p className="mt-2 font-light text-[#00255e] text-xs leading-[15px]">
                      {story.content}
                    </p>
                    <img
                      className="absolute w-4 h-4 bottom-[50px] right-[25px]"
                      alt="Down"
                      src="https://c.animaapp.com/mblm89z7pAjeOY/img/down-1.svg"
                    />
                    <div className="absolute bottom-4 left-3 flex items-center">
                      <img
                        className="w-9 h-[34px] object-cover"
                        alt="Avatar"
                        src={`https://c.animaapp.com/mblm89z7pAjeOY/img/${story.avatar}`}
                      />
                      <div className="ml-3">
                        <p className="font-medium text-[#212529] text-xs">
                          {story.name}
                        </p>
                        <p className="font-light text-[#00255e] text-[11px] leading-[22px]">
                          {story.position}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Customer Logo Section */}
        <div className="absolute w-[376px] h-[83px] top-[2423px] left-[19px] bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-345.png)] bg-[100%_100%]">
          <img
            className="absolute w-[18px] h-[18px] top-8 left-[9px]"
            alt="Down"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/down.svg"
          />
          <img
            className="absolute w-[18px] h-[18px] top-[31px] left-[346px]"
            alt="Down"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/down-3.svg"
          />
          <img
            className="absolute w-[82px] h-[41px] top-[19px] left-[35px] object-cover"
            alt="Img"
            src="https://c.animaapp.com/mblm89z7pAjeOY/img/californiafurniturestore--1--4-1.png"
          />
          <div className="absolute w-[105px] h-4 top-[30px] left-[130px] overflow-hidden">
            <div className="absolute w-[105px] h-4 top-0 left-0 bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/svg-1.png)] bg-[100%_100%]" />
          </div>
          <div className="absolute w-[90px] h-[23px] top-[27px] left-[246px]">
            <div className="relative h-[23px]">
              <div className="absolute w-[33px] h-6 -top-px left-0">
                <img
                  className="absolute w-[23px] h-[23px] top-0 left-0"
                  alt="Svg"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/svg-20.svg"
                />
                <img
                  className="absolute w-3.5 h-6 top-0 left-[19px]"
                  alt="Svg"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/svg-21.png"
                />
              </div>
              <img
                className="absolute w-14 h-[13px] top-1 left-[35px]"
                alt="Svg"
                src="https://c.animaapp.com/mblm89z7pAjeOY/img/svg-23.png"
              />
            </div>
          </div>
        </div>

        {/* News Latest Updates Section */}
        <div className="absolute w-[413px] h-[175px] top-[2518px] left-[-5px]">
          <h2 className="absolute w-[181px] top-[9px] left-[122px] font-medium text-[#00255e] text-[17px] leading-8">
            News latest Updates
          </h2>
          <ScrollArea className="absolute w-[413px] h-[175px] top-0 left-0">
            <div className="flex space-x-6 px-6 pt-[55px]">
              {newsUpdates.map((news, index) => (
                <Card
                  key={index}
                  className="w-[184px] h-[113px] border-none shadow-none bg-[url(https://c.animaapp.com/mblm89z7pAjeOY/img/rectangle-345-3.svg)] bg-[100%_100%]"
                >
                  <CardContent className="p-3">
                    <h3 className="font-light text-[#212529] text-[11px] tracking-[-0.33px] leading-[15px]">
                      {news.title}
                    </h3>
                    <div className="absolute bottom-3 left-0 w-full flex justify-center">
                      <img
                        className="h-[30px] object-cover"
                        alt="Logo"
                        src={`https://c.animaapp.com/mblm89z7pAjeOY/img/${news.logo}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* CTA Button */}
        <Button className="absolute w-[105px] h-9 top-[2708px] left-[158px] bg-[#00255e] rounded-lg shadow-[0px_2px_2px_#00000040]">
          <span className="rotate-[-0.70deg] font-medium text-[13px] text-white">
            Start Free Trial
          </span>
        </Button>

        {/* Footer */}
        <footer className="absolute w-[414px] h-[263px] top-[2786px] left-0">
          <div className="absolute w-[414px] h-[234px] top-[29px] left-0 bg-[#e4faff]" />
          <Separator className="absolute w-[414px] top-[229px] left-0" />
          <p className="absolute top-[237px] left-[116px] font-normal text-[#00255e] text-[10px] text-center leading-[normal] whitespace-nowrap">
            2022 copyrights.All Rights Reserved
          </p>

          <div className="absolute w-[62px] top-[137px] left-[121px] font-normal text-[#00255e] text-[13px] leading-[normal]">
            Platform
          </div>
          <div className="absolute w-[55px] top-[137px] left-[196px] font-normal text-[#00255e] text-[13px] leading-[normal]">
            Company
          </div>
          <div className="absolute w-[62px] top-[137px] left-[270px] font-normal text-[#00255e] text-[13px] leading-[normal]">
            Blog
          </div>

          {/* Social Media Icons */}
          <div className="absolute flex space-x-2 top-[174px] left-[139px]">
            <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
              <FacebookIcon className="w-4 h-4 text-[#00255e]" />
            </div>
            <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
              <TwitterIcon className="w-4 h-4 text-[#00255e]" />
            </div>
            <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
              <LinkedinIcon className="w-4 h-4 text-[#00255e]" />
            </div>
            <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
              <InstagramIcon className="w-4 h-4 text-[#00255e]" />
            </div>
          </div>

          {/* Logo */}
          <div className="absolute w-[170px] h-[26px] top-[81px] left-[122px]">
            <div className="relative w-[162px] h-6 top-px left-px">
              <div className="relative h-6">
                <img
                  className="absolute w-[26px] h-6 top-0 left-0"
                  alt="Group"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/group-24.png"
                />
                <img
                  className="absolute w-[131px] h-[15px] top-[5px] left-8"
                  alt="Causal funnel"
                  src="https://c.animaapp.com/mblm89z7pAjeOY/img/causalfunnel-1.svg"
                />
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <Card className="absolute w-[328px] h-[49px] top-0 left-11 bg-white rounded-lg shadow-[0px_2px_7px_#00000040] border-none">
            <CardContent className="p-0 flex items-center">
              <p className="w-[195px] ml-[46px] mt-2 font-medium text-[#00255e] text-xs leading-[14px]">
                Get Funnel Optimization Insights Delivered To Your Inbox!
              </p>
              <Button className="absolute w-[91px] h-[41px] top-1 right-1 bg-[#e4faff] rounded-lg hover:bg-[#d0f5ff] text-[#00255e]">
                <span className="font-medium text-xs tracking-[0.48px]">
                  SUBSCRIBE
                </span>
              </Button>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  );
};

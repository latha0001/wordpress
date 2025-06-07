import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Causalfunnel = (): JSX.Element => {
  const features = [
    {
      icon: "/successful-booking.svg",
      background: "bg-[#ff080833]",
      text: "High Accuracy Intent Prediction",
    },
    {
      icon: "/discount.svg",
      background: "bg-[#b620e033]",
      text: "Automated Personalized Nudges (offers)",
    },
    {
      icon: "/time-is-money.svg",
      background: "bg-[#fdd4024c]",
      text: "Boosts Conversion By 40% On Average",
    },
    {
      icon: "/30-minutes-delivery.svg",
      background: "bg-[#6c63ff4c]",
      text: "Works In Real-time To Convert Visitors",
    },
    {
      icon: "/youtuber.svg",
      background: "bg-[#00df7233]",
      text: "Tested With 200 Million+ Visitors",
    },
  ];

  // How it works steps data
  const steps = [
    {
      id: 1,
      title: "Identify Visitor",
      color: "#6c63ff",
      description:
        "Our ground-breaking DeepID tech is the industry's first cookie-less anonymous visitor identification.",
      image: {
        container: "/rectangle-317.svg",
        illustration: "/path-461.svg",
      },
    },
    {
      id: 2,
      title: "Predict Intent",
      color: "#ff0909",
      description:
        "Our proprietary AI models predict every visitor's intent to buy with great accuracy, only possible with our cookie-less DeepID.",
      image: {
        container: "/rectangle-317.svg",
        illustration: "/undraw-grades-re-j7d6-1.svg",
      },
    },
    {
      id: 3,
      title: "Discover Persona",
      color: "#fdd402",
      description:
        "Our behavior models help you discover the visitor persona, like discount buyers, convenience shoppers, impulse buyers, etc.",
      image: {
        container: "/rectangle-317.svg",
        illustration: "/undraw-real-time-analytics-re-yliv-1.svg",
      },
    },
    {
      id: 4,
      title: "Targeted Offers",
      color: "#b620e0",
      description:
        "Powered with buying intent and persona we show targeted offers to the visitors in real-time when they are about to abandon your site and lead them to convert.",
      image: {
        container: "/rectangle-317.svg",
        illustration: "/group-16.png",
      },
    },
  ];

  // Case studies data
  const caseStudies = [
    {
      logo: "/californiafurniturestore--1--2.png",
      stat: "200%",
      description: "Increase in conversion",
    },
    {
      logo: "/group-23.png",
      stat: "302%",
      description: "Increase in conversion",
    },
    {
      logo: "/simplyshoes-logo--1--1.png",
      stat: "8X",
      description: "Increase in orders",
    },
    {
      logo: "/ems-logo-1.png",
      stat: "3.8X",
      description: "Increase in orders",
    },
  ];

  // Customer stories data
  const customerStories = [
    {
      title: "Awesome Services",
      logo: "/rectangle-332.png",
      name: "Rajat Agarwal",
      position: "VP, Engineering",
      testimonial:
        "CausalFunnel helps us analyze millions of visitors and provides insights into our user behavior across sessions and journeys. Their DeepID product is a game-changer to enhance the user experience for repeat visitors/users and even stitching sessions when cookies are wiped-out. Their team genuinely cares about optimizing user experience and conversions for organizations and goes above and beyond to make sure this happens.",
    },
    {
      title: "We have a great tool!",
      logo: "/rectangle-334.png",
      name: "Umair Tazeem",
      position: "CEO & Co-founder",
      testimonial:
        "We serve two types of persona and didn't know how many of our visitors classify in each of them. CF's AI used the visitor behavior and gave us details about how many of each persona type were we getting.",
    },
    {
      title: "We have a great tool!",
      logo: "/rectangle-336.png",
      name: "Dr. Erson Religioso",
      position: "Founder",
      testimonial:
        "We serve two types of persona and didn't know how many of our visitors classify in each of them. CF's AI used the visitor behavior and gave us details about how many of each persona type were we getting.",
    },
  ];

  // News updates data
  const newsUpdates = [
    {
      title: "VDOSH Makes Investment in CausalFunnel",
      logo: "/vdosh-logo-1.png",
      background: "/rectangle-337.svg",
    },
    {
      title:
        "CausalFunnel named Top 50 AI CEOs of 2021 by Technology Innovators Magazine.",
      logo: "/technlogy-innovators-logo-1.png",
      background: "/rectangle-339.svg",
    },
    {
      title:
        "CausalFunnel invited to the Fast Company Executive Board for our industry expertise.",
      logo: "/svg-1-1.png",
      background: "/rectangle-340.svg",
    },
  ];

  // Partner logos
  const partnerLogos = [
    "/californiafurniturestore--1--3.png",
    "/svg-20.svg",
    "/ems-logo-3.png",
    "/cherishx-logo-website-1.png",
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1349px] relative">
        {/* Header/Navigation */}
        <header className="flex items-center justify-between px-[86px] py-7">
          <div className="w-[190px] h-[30px]">
            <div className="relative w-[182px] h-7">
              <div className="relative h-7 flex items-center">
                <img
                  className="w-[29px] h-7"
                  alt="CausalFunnel logo"
                  src="/group-1.png"
                />
                <img
                  className="w-[146px] h-[17px] ml-1.5"
                  alt="Causal funnel"
                  src="/causalfunnel.svg"
                />
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <span className="text-black text-[15px] font-normal">Platform</span>
            <span className="text-black text-[15px] font-normal">Company</span>
            <span className="text-black text-[15px] font-normal">Blog</span>
            <Button className="bg-[#0f3267] text-white text-sm font-medium rounded-lg h-[34px] px-4">
              FREE TRIAL
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-row px-[86px] mt-[20px]">
          <div className="relative w-[565px] h-[500px]">
            <div className="absolute w-[547px] h-[500px] top-0 left-0 bg-[#e4faff] rounded-[20px]" />
            <div className="absolute w-[531px] top-[72px] left-[34px] font-['Poppins',Helvetica] font-medium text-[#00255e] text-[37px] leading-[45px]">
              <br />
              predicting Buying Intent In The Post Cookie World
            </div>
            <div className="absolute w-[490px] top-[228px] left-[34px] font-['Roboto',Helvetica] font-normal text-neutral-700 text-lg leading-7">
              Uncover The Hidden Value Of Your Anonymous
              <br />
              visitors With Our Disruptive Cookie-less Ai Technology.
            </div>
            <Button className="absolute w-[151px] h-[45px] top-[322px] left-[34px] bg-[#00255e] rounded-lg shadow-[0px_4px_4px_#00000040] text-white text-[17px] font-medium">
              Start Free Trial
            </Button>
          </div>

          <div className="relative w-[399px] h-[318px] mt-[86px] ml-[152px]">
            {/* Complex SVG/image composition for the hero illustration */}
            <div className="relative h-[318px]">
              <div className="absolute w-[399px] h-[318px] top-0 left-0">
                <div className="absolute w-[116px] h-[317px] top-0 left-[262px]">
                  <div className="relative h-[317px]">
                    <img
                      className="absolute w-[26px] h-[41px] top-[277px] left-[63px]"
                      alt="Group"
                      src="/group-10.png"
                    />
                    <img
                      className="absolute w-[26px] h-[41px] top-[277px] left-[27px]"
                      alt="Group"
                      src="/group-11.png"
                    />
                    <img
                      className="absolute w-[66px] h-[162px] top-[130px] left-[34px]"
                      alt="Vector"
                      src="/vector-16.svg"
                    />
                    <img
                      className="absolute w-[70px] h-[109px] top-[34px] left-[41px]"
                      alt="Vector"
                      src="/vector-25.svg"
                    />
                    <img
                      className="absolute w-[19px] h-[66px] top-[97px] left-[97px]"
                      alt="Vector"
                      src="/vector-33.svg"
                    />
                    <img
                      className="absolute w-11 h-[59px] top-[81px] left-0"
                      alt="Vector"
                      src="/vector-17.svg"
                    />
                    <img
                      className="absolute w-[30px] h-[84px] top-[61px] left-[86px]"
                      alt="Vector"
                      src="/vector-64.svg"
                    />
                    <img
                      className="absolute w-[65px] h-[78px] top-[47px] left-[11px]"
                      alt="Vector"
                      src="/vector-27.svg"
                    />
                    <img
                      className="absolute w-[29px] h-[29px] top-[7px] left-[58px]"
                      alt="Vector"
                      src="/vector-37.svg"
                    />
                    <img
                      className="absolute w-[35px] h-8 top-0 left-[55px]"
                      alt="Vector"
                      src="/vector-20.svg"
                    />
                  </div>
                </div>
                <img
                  className="absolute w-[180px] h-[174px] top-[109px] left-[45px]"
                  alt="Vector"
                  src="/vector-30.svg"
                />
                <img
                  className="absolute w-[3px] h-12 top-[113px] left-[253px]"
                  alt="Vector"
                  src="/vector-14.svg"
                />
                <img
                  className="absolute w-[399px] h-[71px] top-[247px] left-0"
                  alt="Group"
                  src="/group-2.png"
                />
                <img
                  className="absolute w-[58px] h-[42px] top-[148px] left-[52px]"
                  alt="Vector"
                  src="/vector-28.svg"
                />
                <img
                  className="absolute w-[111px] h-px top-[262px] left-[83px]"
                  alt="Vector"
                  src="/vector.svg"
                />

                <div className="absolute w-[71px] h-[70px] top-[110px] left-[199px] bg-[url(/vector-35.svg)] bg-[100%_100%]">
                  <div className="relative w-[68px] h-[67px] top-0.5 left-0.5 bg-[url(/vector-39.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[60px] h-[26px] top-[15px] left-1"
                      alt="Group"
                      src="/group-12.png"
                    />
                    <img
                      className="absolute w-[23px] h-0.5 top-12 left-[41px]"
                      alt="Vector"
                      src="/vector-49.svg"
                    />
                  </div>
                </div>

                <div className="absolute w-14 h-14 top-[242px] left-[88px] bg-[url(/vector-13.svg)] bg-[100%_100%]">
                  <div className="relative w-[54px] h-[53px] top-px left-px bg-[url(/vector-38.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-12 h-5 top-3 left-[3px]"
                      alt="Group"
                      src="/group-13.png"
                    />
                    <img
                      className="absolute w-[18px] h-0.5 top-[38px] left-[33px]"
                      alt="Vector"
                      src="/vector-49.svg"
                    />
                  </div>
                </div>

                <div className="absolute w-[42px] h-[41px] top-[106px] left-[68px] bg-[url(/vector-35.svg)] bg-[100%_100%]">
                  <div className="relative w-10 h-[39px] top-px left-px bg-[url(/vector-23.svg)] bg-[100%_100%]">
                    <img
                      className="absolute w-[35px] h-[15px] top-[9px] left-0.5"
                      alt="Group"
                      src="/group-14.png"
                    />
                    <img
                      className="absolute w-3.5 h-px top-7 left-6"
                      alt="Vector"
                      src="/vector-49.svg"
                    />
                  </div>
                </div>

                <img
                  className="absolute w-3.5 h-3.5 top-[177px] left-[201px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-3.5 h-3.5 top-[141px] left-[102px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-3.5 h-3.5 top-[238px] left-[136px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-[119px] h-[17px] top-[38px] left-[149px]"
                  alt="Group"
                  src="/group-3.png"
                />
                <img
                  className="absolute w-[77px] h-[11px] top-[279px] left-[196px]"
                  alt="Group"
                  src="/group-9.png"
                />
                <img
                  className="absolute w-px h-[67px] top-[110px] left-[132px]"
                  alt="Vector"
                  src="/vector-2.svg"
                />
                <img
                  className="absolute w-2 h-2 top-[173px] left-32"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-2 h-2 top-[222px] left-48"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-2 h-2 top-[164px] left-[78px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-[23px] h-0.5 top-[168px] left-[57px]"
                  alt="Vector"
                  src="/vector-32.svg"
                />
                <img
                  className="absolute w-[35px] h-4 top-[226px] left-[196px]"
                  alt="Vector"
                  src="/vector-21.svg"
                />
                <img
                  className="absolute w-2 h-2 top-[210px] left-[76px]"
                  alt="Vector"
                  src="/vector-1.svg"
                />
                <img
                  className="absolute w-[35px] h-4 top-[214px] left-[79px]"
                  alt="Vector"
                  src="/vector-21.svg"
                />
                <img
                  className="absolute w-[169px] h-px top-[198px] left-[53px]"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>

              <img
                className="absolute w-[3px] h-3.5 top-[79px] left-4"
                alt="Vector"
                src="/vector-34.svg"
              />
              <img
                className="absolute w-[3px] h-[25px] top-[113px] left-4"
                alt="Vector"
                src="/vector-14.svg"
              />
              <img
                className="absolute w-[3px] h-[25px] top-36 left-4"
                alt="Vector"
                src="/vector-14.svg"
              />
              <img
                className="absolute w-[3px] h-[25px] top-[35px] left-[143px]"
                alt="Vector"
                src="/vector-14.svg"
              />
              <img
                className="absolute w-[77px] h-[11px] top-[81px] left-[25px]"
                alt="Group"
                src="/group-4.png"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-[36px] px-[86px]">
          <div className="relative w-full h-[199px]">
            <div className="absolute w-full h-[123px] top-0 left-0 bg-[#fbfbfb]">
              <div className="flex items-center justify-center gap-16 h-full">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-[52px] h-[52px] rounded-[26px] flex items-center justify-center ${feature.background}`}
                    >
                      <img
                        className="w-[34px] h-[34px]"
                        alt={feature.text}
                        src={feature.icon}
                      />
                    </div>
                    <span className="ml-3 font-['Roboto',Helvetica] font-normal text-[#353535] text-sm leading-4 max-w-[157px]">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute w-full flex justify-center top-[99px]">
              <h2 className="font-['Poppins',Helvetica] font-medium text-[#0f3267] text-[28px] leading-[50px]">
                <br />
                how It Works?
              </h2>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-[86px] mt-[42px]">
          <div className="flex flex-col gap-[22px]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 1 ? "flex-row-reverse" : "flex-row"} items-center gap-8`}
              >
                <div className="w-[300px]">
                  <h3 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-xl leading-6 mb-4">
                    {step.title}
                  </h3>
                  <p className="font-['Roboto',Helvetica] font-light text-[#1c1f22] text-[13px] leading-[18px]">
                    {step.description}
                  </p>
                  <div className="relative mt-4">
                    <div className="w-6 h-6 bg-white rounded-xl shadow-[0px_4px_9px_#00000040] flex items-center justify-center">
                      <span
                        className="font-['Roboto',Helvetica] font-normal"
                        style={{ color: step.color }}
                      >
                        {step.id}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    className="w-[470px] h-auto object-cover"
                    alt={`Step ${step.id}`}
                    src={step.image.container}
                  />
                  {step.id === 1 && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[137px] h-[153px] overflow-hidden">
                      {/* Complex SVG composition for step 1 */}
                      <div className="relative h-[154px]">
                        {/* Many SVG elements omitted for brevity but would be included in actual implementation */}
                        <div className="absolute w-2.5 h-[22px] top-[130px] left-[121px]">
                          <img
                            className="absolute w-2.5 h-3.5 top-0 left-0"
                            alt="Path"
                            src="/path-461.svg"
                          />
                          <img
                            className="absolute w-1 h-3.5 top-[9px] left-[5px]"
                            alt="Path"
                            src="/path-462.svg"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {step.id === 2 && (
                    <img
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[194px] h-[123px]"
                      alt="Predict Intent"
                      src={step.image.illustration}
                    />
                  )}
                  {step.id === 3 && (
                    <img
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[174px] h-[152px]"
                      alt="Discover Persona"
                      src={step.image.illustration}
                    />
                  )}
                  {step.id === 4 && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[207px] h-[122px] overflow-hidden">
                      {/* Complex SVG composition for step 4 */}
                      <div className="relative h-[122px]">
                        {/* Many SVG elements omitted for brevity but would be included in actual implementation */}
                        <img
                          className="absolute w-[38px] h-[120px] top-0 left-[133px]"
                          alt="Group"
                          src="/group-16.png"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Improve Your Conversion Section */}
        <section className="px-[86px] mt-[42px]">
          <div className="relative w-full h-[766px] bg-[#fbfbfb]">
            <div className="absolute w-[487px] top-[76px] left-[27px] font-['Poppins',Helvetica] font-medium text-[#00255e] text-[28px] leading-[50px]">
              How We Improve Your Conversion
            </div>

            <div className="absolute w-[469px] top-[135px] left-[27px] font-['Roboto',Helvetica] font-light text-[#00255e] text-base leading-[26px]">
              CausalFunnel technology actively drives your visitors along the
              conversion funnel with persona and intent prediction nudges. Our
              technology works even if the visitor comes back after their
              cookies have been wiped (Apple clears cookies in 1 to 7 days) and
              continuously boosts your conversions.
            </div>

            <Button className="absolute w-[151px] h-[46px] top-[290px] left-[27px] bg-[#e4faff] text-[#00255e] rounded-lg shadow-[0px_4px_4px_#00000040] font-medium text-[17px] rotate-[-0.70deg]">
              Start Free Trial
            </Button>

            {/* Dashboard visualization */}
            <div className="absolute w-[678px] h-[305px] top-[49px] left-[612px] bg-[#32c5ff] rounded-md shadow-[1px_3px_6px_#00000040]">
              <div className="absolute w-[646px] h-[291px] top-[14px] left-[7px] bg-[url(/vector-125.svg)] bg-[100%_100%]">
                <div className="relative h-[290px] top-px">
                  <img
                    className="absolute w-[646px] h-[242px] top-0 left-0"
                    alt="Vector"
                    src="/vector-113.svg"
                  />
                  <img
                    className="absolute w-[646px] h-[226px] top-0 left-0"
                    alt="Vector"
                    src="/vector-128.svg"
                  />
                  <img
                    className="absolute w-[646px] h-[290px] top-0 left-0"
                    alt="Vector"
                    src="/vector-139.svg"
                  />
                  <img
                    className="absolute w-[646px] h-[242px] top-0 left-0"
                    alt="Vector"
                    src="/vector-147.svg"
                  />
                  <img
                    className="absolute w-36 h-[46px] top-3.5 left-[483px]"
                    alt="Group"
                    src="/group-19.png"
                  />
                  <img
                    className="absolute w-[390px] h-[138px] top-[106px] left-32"
                    alt="Group"
                    src="/group-20.png"
                  />
                  <img
                    className="absolute w-[535px] h-4 top-[246px] left-14"
                    alt="Group"
                    src="/group-21.png"
                  />
                  <img
                    className="absolute w-[590px] h-2.5 top-[268px] left-[22px]"
                    alt="Group"
                    src="/group-22.png"
                  />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <img
              className="absolute w-[85px] h-[84px] top-[483px] left-[162px]"
              alt="Titik titik"
              src="/titik-titik.png"
            />
            <img
              className="absolute w-[85px] h-[84px] top-[637px] left-[922px]"
              alt="Titik titik"
              src="/titik-titik-1.png"
            />

            {/* Case studies grid */}
            <div className="absolute top-[509px] left-[188px] grid grid-cols-2 gap-x-5 gap-y-7">
              {caseStudies.map((study, index) => (
                <Card
                  key={index}
                  className="w-[394px] h-[90px] bg-transparent border-none shadow-none"
                >
                  <CardContent className="p-0 flex items-center">
                    <div className="w-[90px] h-20 bg-white rounded-[15px] flex items-center justify-center">
                      <img
                        className="max-w-[87px] max-h-[46px] object-cover"
                        alt="Company logo"
                        src={study.logo}
                      />
                    </div>
                    <div className="ml-8">
                      <h4 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-xl tracking-[-0.60px]">
                        {study.stat}
                      </h4>
                      <p className="font-['Poppins',Helvetica] font-light text-[#212529] text-base tracking-[-0.48px]">
                        {study.description}
                      </p>
                    </div>
                    <Badge className="ml-auto w-[18px] h-[18px] bg-transparent p-0">
                      <img
                        className="w-[18px] h-[18px]"
                        alt="Growth indicator"
                        src={`/group-${5 + index}.png`}
                      />
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories Section */}
        <section className="px-[86px] mt-[80px]">
          <div className="relative w-full h-[567px]">
            <h2 className="absolute w-[179px] top-5 left-[104px] font-['Poppins',Helvetica] font-medium text-[#00255e] text-[28px] leading-8">
              Customer Stories
            </h2>

            <img
              className="absolute w-[593px] h-[332px] top-[95px] left-[152px]"
              alt="Background shape"
              src="/rectangle-330.svg"
            />

            {/* Testimonial cards */}
            <Card className="absolute w-[526px] h-[282px] top-0 left-[412px] bg-white rounded-[20px] shadow-[0px_4px_9px_#00000040]">
              <CardContent className="p-5">
                <h3 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-[17px] tracking-[-0.51px]">
                  Awesome Services
                </h3>
                <p className="mt-2 font-['Roboto',Helvetica] font-light text-[#00255e] text-[13px] leading-5">
                  CausalFunnel helps us analyze millions of visitors and
                  provides insights into our user behavior across sessions and
                  journeys. Their DeepID product is a game-changer to enhance
                  the user experience for repeat visitors/users and even
                  stitching sessions when cookies are wiped-out. Their team
                  genuinely cares about optimizing user experience and
                  conversions for organizations and goes above and beyond to
                  make sure this happens.
                </p>
                <div className="flex items-center mt-16">
                  <img
                    className="w-[54px] h-14 object-cover"
                    alt="Profile"
                    src="/rectangle-332.png"
                  />
                  <div className="ml-3">
                    <h4 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-[17px]">
                      Rajat Agarwal
                    </h4>
                    <p className="font-['Roboto',Helvetica font-light text-[#00255e] text-sm leading-[22px]">
                      VP, Engineering
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute w-[366px] h-[248px] top-[211px] left-0 bg-white rounded-[20px] shadow-[0px_4px_9px_#00000040]">
              <CardContent className="p-5">
                <h3 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-[17px] tracking-[-0.51px]">
                  We have a great tool!
                </h3>
                <p className="mt-2 font-['Roboto',Helvetica] font-light text-[#00255e] text-[13px] leading-5">
                  We serve two types of persona and didn't know how many of our
                  visitors classify in each of them. CF's AI used the visitor
                  behavior and gave us details about how many of each persona
                  type were we getting.
                </p>
                <div className="flex items-center mt-16">
                  <img
                    className="w-[54px] h-14 object-cover"
                    alt="Profile"
                    src="/rectangle-334.png"
                  />
                  <div className="ml-3">
                    <h4 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-[17px]">
                      Umair Tazeem
                    </h4>
                    <p className="font-['Roboto',Helvetica] font-light text-[#00255e] text-sm leading-[22px]">
                      CEO &amp; Co-founder
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="absolute w-[435px] h-[248px] top-[319px] left-[412px] bg-white rounded-[20px] shadow-[0px_4px_9px_#00000040]">
              <CardContent className="p-5">
                <h3 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-[17px] tracking-[-0.51px]">
                  We have a great tool!
                </h3>
                <p className="mt-2 font-['Roboto',Helvetica] font-light text-[#00255e] text-[13px] leading-5">
                  We serve two types of persona and didn't know how many of our
                  visitors classify in each of them. CF's AI used the visitor
                  behavior and gave us details about how many of each persona
                  type were we getting.
                </p>
                <div className="flex items-center mt-16">
                  <img
                    className="w-[54px] h-14 object-cover"
                    alt="Profile"
                    src="/rectangle-336.png"
                  />
                  <div className="ml-3">
                    <h4 className="font-['Poppins',Helvetica] font-medium text-[#212529] text-[17px]">
                      Dr. Erson Religioso
                    </h4>
                    <p className="font-['Roboto',Helvetica] font-light text-[#00255e] text-sm leading-[22px]">
                      Founder
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="px-[86px] mt-[71px]">
          <div className="w-full h-[181px] bg-[#fbfbfb] flex items-center justify-center">
            <div className="flex items-center justify-between w-full px-[60px]">
              <img
                className="w-[30px] h-[30px]"
                alt="Previous"
                src="/down.svg"
              />

              <div className="flex items-center justify-between gap-16">
                {partnerLogos.map((logo, index) => (
                  <img
                    key={index}
                    className="h-[60px] object-contain"
                    alt={`Partner logo ${index + 1}`}
                    src={logo}
                  />
                ))}
              </div>

              <img className="w-[30px] h-[30px]" alt="Next" src="/down-1.svg" />
            </div>
          </div>
        </section>

        {/* News Updates Section */}
        <section className="px-[86px] mt-[50px]">
          <h2 className="text-center font-['Poppins',Helvetica] font-medium text-[#00255e] text-[28px] leading-8 mb-10">
            News latest Updates
          </h2>

          <div className="flex justify-center gap-7">
            {newsUpdates.map((news, index) => (
              <Card
                key={index}
                className="w-[308px] h-[179px] border-none shadow-none"
                style={{
                  backgroundImage: `url(${news.background})`,
                  backgroundSize: "100% 100%",
                }}
              >
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <h3 className="font-['Poppins',Helvetica] font-light text-[#212529] text-base tracking-[-0.48px]">
                    {news.title}
                  </h3>
                  <div className="flex justify-center">
                    <img
                      className="max-h-[46px] object-contain"
                      alt="News logo"
                      src={news.logo}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-[30px]">
            <Button className="w-[151px] h-[46px] bg-[#00255e] rounded-lg shadow-[0px_4px_4px_#00000040] text-white text-[17px] font-medium rotate-[-0.70deg]">
              Start Free Trial
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full mt-[53px]">
          <div className="relative w-full h-[291px]">
            {/* Newsletter subscription */}
            <div className="absolute w-[992px] h-[83px] top-0 left-[141px] bg-white rounded-lg shadow-[0px_4px_10px_#00000040] flex items-center px-[30px]">
              <h3 className="font-['Poppins',Helvetica] font-medium text-[#00255e] text-[15px] leading-5 w-[347px]">
                Get Funnel Optimization Insights Delivered To Your Inbox!
              </h3>

              <div className="flex-1 ml-[129px]">
                <div className="relative">
                  <Input
                    className="h-[46px] rounded-lg border border-solid border-black shadow-[0px_4px_4px_#00000040] pl-5 pr-[150px]"
                    placeholder="Enter email..."
                  />
                  <Button className="absolute right-0 top-0 h-[42px] w-[141px] bg-[#e4faff] text-[#00255e] text-sm tracking-[0.56px] rounded-[0px_6px_6px_0px]">
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>

            {/* Footer background */}
            <div className="absolute w-full h-[244px] top-[47px] left-0 bg-[#e4faff]">
              <div className="pt-[88px] flex flex-col items-center">
                {/* Logo */}
                <div className="w-48 h-[30px] mb-5">
                  <div className="relative w-[183px] h-7">
                    <div className="relative h-7 flex items-center">
                      <img
                        className="w-[29px] h-7"
                        alt="CausalFunnel logo"
                        src="/group-24.png"
                      />
                      <img
                        className="w-[148px] h-[17px] ml-1.5"
                        alt="Causal funnel"
                        src="/causalfunnel-1.svg"
                      />
                    </div>
                  </div>
                </div>

                {/* Footer navigation */}
                <div className="flex gap-5 mb-5">
                  <span className="text-[#00255e] text-sm">Platform</span>
                  <span className="text-[#00255e] text-sm">Company</span>
                  <span className="text-[#00255e] text-sm">Blog</span>
                </div>

                {/* Social media icons */}
                <div className="flex gap-2 mb-5">
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] p-0"
                  >
                    <img
                      className="w-[9px] h-4"
                      alt="Facebook"
                      src="/vector-115.svg"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] p-0"
                  >
                    <img
                      className="w-[17px] h-3.5"
                      alt="Twitter"
                      src="/group.png"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] p-0"
                  >
                    <img
                      className="w-4 h-4"
                      alt="Instagram"
                      src="/vector-10.svg"
                    />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] p-0"
                  >
                    <img
                      className="w-[18px] h-[18px]"
                      alt="LinkedIn"
                      src="/vector-22.svg"
                    />
                  </Button>
                </div>

                <Separator className="w-full mt-5" />

                <div className="text-center mt-2 font-['Verdana-Regular',Helvetica] font-normal text-[#00255e] text-xs">
                  2022 copyrights.All Rights Reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

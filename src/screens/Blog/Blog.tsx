import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";

export const Blog = (): JSX.Element => {
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Title",
      author: "Lorem Ipsum",
      date: "12 March,2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo",
      comments: "5676",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-369.png",
      tags: [
        { name: "Lorem", color: "#ff3594" },
        { name: "Lorem", color: "#b620e0" },
      ],
    },
    {
      id: 2,
      title: "Title",
      author: "Lorem Ipsum",
      date: "12 March,2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo",
      comments: "5676",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-386.png",
      tags: [
        { name: "Lorem", color: "#ff3594" },
        { name: "Lorem", color: "#32c5ff" },
      ],
    },
    {
      id: 3,
      title: "Title",
      author: "Lorem Ipsum",
      date: "12 March,2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo",
      comments: "5676",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-395.png",
      tags: [
        { name: "Lorem", color: "#32c5ff" },
        { name: "Lorem", color: "#b620e0" },
      ],
    },
    {
      id: 4,
      title: "Title",
      author: "Lorem Ipsum",
      date: "12 March,2022",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo",
      comments: "5676",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-399.png",
      tags: [
        { name: "Lorem", color: "#ff3594" },
        { name: "Lorem", color: "#b620e0" },
      ],
    },
  ];

  // Recent posts data
  const recentPosts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-389.png",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-390.png",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-391.png",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-392.png",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.",
      date: "12 March,2022",
      image: "https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-393.png",
    },
  ];

  // Categories data
  const categories = [
    {
      id: 1,
      name: "Lorem ipsum dolor sit amet",
      icon: "https://c.animaapp.com/mblpmc27y2Jybo/img/successful-booking.svg",
    },
    {
      id: 2,
      name: "Lorem ipsum dolor sit amet",
      icon: "https://c.animaapp.com/mblpmc27y2Jybo/img/discount.svg",
    },
    {
      id: 3,
      name: "Lorem ipsum dolor sit amet",
      icon: "https://c.animaapp.com/mblpmc27y2Jybo/img/successful-booking.svg",
    },
    {
      id: 4,
      name: "Lorem ipsum dolor sit amet",
      icon: "https://c.animaapp.com/mblpmc27y2Jybo/img/time-is-money.svg",
    },
    {
      id: 5,
      name: "Lorem ipsum dolor sit amet",
      icon: "https://c.animaapp.com/mblpmc27y2Jybo/img/successful-booking.svg",
    },
    {
      id: 6,
      name: "Lorem ipsum dolor sit amet",
      icon: "https://c.animaapp.com/mblpmc27y2Jybo/img/vector-2.svg",
    },
  ];

  return (
    <div
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="1:1940"
    >
      <div className="bg-white w-full max-w-[1349px] relative">
        {/* Header */}
        <header className="flex items-center justify-between px-20 py-6">
          <div className="flex items-center">
            <img
              className="w-[29px] h-7"
              alt="Logo"
              src="https://c.animaapp.com/mblpmc27y2Jybo/img/group-1.png"
            />
            <img
              className="ml-2 w-[146px] h-[17px]"
              alt="Causal funnel"
              src="https://c.animaapp.com/mblpmc27y2Jybo/img/causalfunnel.svg"
            />
          </div>

          <nav className="flex items-center gap-6">
            <div className="text-black text-[15px] font-normal">platform</div>
            <div className="text-black text-[15px] font-normal">Company</div>
            <div className="text-black text-[15px] font-normal">Blog</div>
            <Button className="bg-[#0f3267] text-white text-sm font-medium rounded-lg h-[34px] px-4">
              FREE TRIAL
            </Button>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex justify-between px-20 mt-8">
          <div className="bg-[#e4faff] rounded-[20px] p-8 w-[547px] h-[360px] flex flex-col justify-center">
            <h1 className="font-medium text-[#00255e] text-[37px] leading-[45px] font-['Poppins',Helvetica] mb-16">
              Causalfunnel's Knowledge Base
            </h1>
            <p className="font-normal text-neutral-700 text-lg leading-7 font-['Roboto',Helvetica]">
              Insights From Our Team To Help You Drive Your Sales And Marketing
              Strategies With Cutting Edge Ai And Ml.
            </p>
          </div>

          <div className="flex items-center">
            <img
              className="w-[447px] h-[229px]"
              alt="Blogging illustration"
              src="https://c.animaapp.com/mblpmc27y2Jybo/img/undraw-blogging-re-kl0d-1.svg"
            />
          </div>
        </section>

        {/* Main Content */}
        <main className="flex px-20 mt-16 gap-16">
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="w-[363px] overflow-hidden rounded-lg shadow-md"
                style={{
                  backgroundImage:
                    "url(https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-394.svg)",
                }}
              >
                <div className="p-2">
                  <img
                    className="w-full h-[237px] object-cover rounded"
                    alt="Blog post"
                    src={post.image}
                  />
                </div>

                <CardContent className="p-0">
                  <h2 className="font-medium text-[#212529] text-xl leading-6 font-['Poppins',Helvetica] mt-6 ml-[18px]">
                    {post.title}
                  </h2>

                  <div className="flex items-center mt-6 ml-[18px]">
                    <Avatar className="w-11 h-11">
                      <AvatarImage
                        src="https://c.animaapp.com/mblpmc27y2Jybo/img/ellipse-11.png"
                        alt="Author"
                      />
                      <AvatarFallback>UI</AvatarFallback>
                    </Avatar>

                    <div className="ml-5 text-sm leading-5 font-normal">
                      <span className="text-[#979797]">by</span>
                      <span className="text-[#1c1f22]">
                        &nbsp;&nbsp;{post.author}&nbsp;&nbsp; |&nbsp;&nbsp;
                      </span>
                      <span className="text-[#858585]">{post.date}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4 ml-[18px]">
                    {post.tags.map((tag, tagIndex) => (
                      <div key={tagIndex} className="relative h-[25px]">
                        <img
                          className="w-[68px] h-[23px]"
                          alt="Tag background"
                          src="https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-397.svg"
                        />
                        <span
                          className="absolute top-0 left-4 font-medium text-[13px] leading-6"
                          style={{ color: tag.color }}
                        >
                          {tag.name}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p className="font-light text-[#1c1f22] text-[13px] leading-5 mt-8 mx-[18px]">
                    {post.excerpt}
                  </p>
                </CardContent>

                <CardFooter className="flex justify-between items-center p-0 mt-4 mx-[18px] mb-4">
                  <div className="text-sm">
                    <span className="text-[#1c1f22]">{post.comments} </span>
                    <span className="text-[#858585]">Comments</span>
                  </div>

                  <img
                    className="w-4 h-4"
                    alt="Read more"
                    src={`https://c.animaapp.com/mblpmc27y2Jybo/img/group-${17 + index}.png`}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="w-[336px]">
            {/* Recent Posts */}
            <div>
              <h2 className="font-medium text-[#212529] text-xl leading-6 mb-6">
                Recent Posts
              </h2>

              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-4">
                    <img
                      className="w-[108px] h-[81px] object-cover"
                      alt="Recent post"
                      src={post.image}
                    />
                    <div>
                      <p className="font-normal text-[#1d1f22] text-[13px] leading-4 mb-2">
                        {post.title}
                      </p>
                      <p className="font-normal text-[#858585] text-sm leading-5">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="mt-12">
              <h2 className="font-medium text-[#212529] text-xl leading-6 mb-6">
                Categories
              </h2>

              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center gap-3">
                    <div
                      className="w-[39px] h-[34px] flex items-center justify-center rounded"
                      style={{
                        backgroundImage:
                          "url(https://c.animaapp.com/mblpmc27y2Jybo/img/rectangle-404.svg)",
                      }}
                    >
                      <img
                        className="w-7 h-7"
                        alt="Category icon"
                        src={category.icon}
                      />
                    </div>
                    <p className="font-normal text-[#1d1f22] text-[15px] leading-4">
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </main>

        {/* Newsletter Section */}
        <section className="mt-32 relative">
          <div className="w-full h-[244px] bg-[#e4faff] absolute bottom-0"></div>

          <div className="relative mx-auto w-[992px] bg-white rounded-lg shadow-[0px_4px_10px_#00000040] p-5 flex justify-between items-center">
            <h3 className="font-medium text-[#00255e] text-[15px] leading-5 font-['Poppins',Helvetica] w-[347px]">
              Get Funnel Optimization Insights Delivered To Your Inbox!
            </h3>

            <div className="flex">
              <Input
                className="w-[465px] h-[46px] rounded-lg border border-solid border-black shadow-[0px_4px_4px_#00000040] rounded-r-none"
                placeholder="Enter email..."
              />
              <Button className="h-[46px] bg-[#e4faff] text-[#00255e] rounded-l-none font-normal tracking-[0.56px]">
                SUBSCRIBE
              </Button>
            </div>
          </div>

          <div className="relative flex flex-col items-center pt-16 pb-4">
            <div className="flex items-center mb-4">
              <img
                className="w-[29px] h-7"
                alt="Logo"
                src="https://c.animaapp.com/mblpmc27y2Jybo/img/group-2.png"
              />
              <img
                className="ml-2 w-[148px] h-[17px]"
                alt="Causal funnel"
                src="https://c.animaapp.com/mblpmc27y2Jybo/img/causalfunnel-1.svg"
              />
            </div>

            <div className="flex gap-6 mt-4 text-[#00255e] text-sm">
              <span>Platform</span>
              <span>Company</span>
              <span>Blog</span>
            </div>

            <div className="flex gap-4 mt-8">
              <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                <img
                  className="w-[9px] h-4"
                  alt="Facebook"
                  src="https://c.animaapp.com/mblpmc27y2Jybo/img/vector-4.svg"
                />
              </div>
              <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                <img
                  className="w-[17px] h-3.5"
                  alt="Twitter"
                  src="https://c.animaapp.com/mblpmc27y2Jybo/img/group.png"
                />
              </div>
              <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                <img
                  className="w-4 h-4"
                  alt="LinkedIn"
                  src="https://c.animaapp.com/mblpmc27y2Jybo/img/vector-3.svg"
                />
              </div>
              <div className="w-7 h-7 bg-white rounded shadow-[0px_4px_4px_#00000040] flex items-center justify-center">
                <img
                  className="w-[18px] h-[18px]"
                  alt="Instagram"
                  src="https://c.animaapp.com/mblpmc27y2Jybo/img/vector-1.svg"
                />
              </div>
            </div>

            <Separator className="w-full mt-8" />

            <p className="text-[#00255e] text-xs text-center mt-2 font-['Verdana-Regular',Helvetica]">
              2022 copyrights.All Rights Reserved
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

import React from "react";

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full h-screen">
        <div className="bg-neutral-900 w-1/5 flex flex-col items-center justify-center border-black border-2">
          <p className="text-7xl font-bold rotate-90 text-pink-500">About us</p>
        </div>

        <div className="flex-1 bg-[url('/ingvild.png')] bg-cover bg-center" />
      </div>

      <div className="p-40 bg-neutral-900 text-white">
        <h1 className="text-2xl font-bold mb-4">Our vision</h1>
        <p className="text-gray-400 mb-4">
          Our center was founded with a clear vision: to make exercise
          accessible to everyone, regardless of background, physical condition,
          or previous experience with training. Our founder, Ingvild Petterson,
          is an experienced personal trainer who has always had a strong passion
          for helping people achieve their health goals.
        </p>
        <p className="text-gray-400 mb-4">
          Ingvild's philosophy is simple: exercise is for everyone. Whether
          you're a complete beginner or an experienced athlete, we want to offer
          an inclusive environment where everyone feels welcome. We have a wide
          range of training programs tailored to different needs and levels.
          From group classes to personal training – there's something for
          everyone.
        </p>
        <p className="text-gray-400">
          The center was created because Ingvild saw a need for a place where
          people could exercise without feeling judged or excluded. We believe
          in community, support, and that exercise should be both fun and
          rewarding. Therefore, our mission is to provide a safe, motivating
          environment where everyone can reach their goals – whether it's
          getting in better shape, maintaining good health, or simply feeling
          better in everyday life.
        </p>
      </div>
    </div>
  );
};

export default About;

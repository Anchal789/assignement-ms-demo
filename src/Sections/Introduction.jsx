import React from "react";

const Introduction = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-[#024950] text-white ">
      <div className="container mx-auto px-4 md:px-6 text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Assignment Management System
        </h1>
        <p className="max-w-[80%] mx-auto text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Our Assignment Management System provides a comprehensive solution for
          managing assignments across three portals: Admin, Faculty, and
          Student.
        </p>
      </div>
    </section>
  );
};

export default Introduction;

import React from "react";

const TechnologiesUsedSection = () => {
  return (
    <section id="technologies" className="py-12 md:py-24 lg:py-32 bg-slate-200 ">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technologies Used
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
            The Assignment Management System is built using the following
            technologies:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Redux (with Redux Persist for state persistence)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Database</h3>
            <ul className="space-y-2">
              <li>Firebase Realtime Database</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Authentication</h3>
            <ul className="space-y-2">
              <li>Firebase Authentication</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesUsedSection;

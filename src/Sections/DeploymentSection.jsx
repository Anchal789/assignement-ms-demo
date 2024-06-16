import React from "react";

const DeploymentSection = () => {
  return (
    <section id="deployment" className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Deployment
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            The Assignment Management System is deployed on the following
            platform:
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-slate-200 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4">Hosting Platform</h3>
            <ul className="space-y-2">
              <li>Netlify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;

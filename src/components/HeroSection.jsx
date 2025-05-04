import React from "react";
import {
  FaToilet,
  FaTint,
  FaChartBar,
  FaFilePdf,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaToilet size={24} className="text-blue-600" />,
    title: "Bowel Chart Logging",
    desc: "Easily log and track bowel movements with time, consistency, and notes.",
  },
  {
    icon: <FaTint size={24} className="text-blue-600" />,
    title: "Liquid Intake Chart",
    desc: "Monitor hydration levels to ensure proper client care.",
  },
  {
    icon: <FaChartBar size={24} className="text-blue-600" />,
    title: "Real-Time Dashboard",
    desc: "Instantly visualize key client stats from one place.",
  },
  {
    icon: <FaFilePdf size={24} className="text-blue-600" />,
    title: "PDF Report Exports",
    desc: "Download detailed reports for NDIS compliance and audits.",
  },
  {
    icon: <FaShieldAlt size={24} className="text-blue-600" />,
    title: "Data Privacy & Security",
    desc: "Built with HIPAA-grade security and NDIS standards in mind.",
  },
];
const HeroSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 tracking-wide">
            Smarter Support Logging for NDIS Workers
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Track and update client bowel charts, fluid intake, mood, and more —
            securely, in real time.
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-200">
              Get Started
            </button>
            <button className="px-6 py-3 border rounded-md border-gray-400 hover:bg-gray-100 transition-colors duration-200">
              Request Demo
            </button>
          </div>
        </div>
        <div className="md:flex justify-center hidden">
          <img
            src="https://shiftcare.com/img/asset/YXNzZXRzL3Jldmlld3MvQXNpYW4tcGVyc29uLWFnZWQtY2FyZS1zb2Z0d2FyZS5qcGVn/Asian-person-aged-care-software.jpeg?q=80&fm=webp&fit=crop-31-27-2.4&w=145&h=145&s=77fab4796be6e272fc264482560e14f3" // update with your real image
            alt="Dashboard Preview"
            className="rounded-xl shadow-lg w-full max-w-sm"
          />
        </div>
      </div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Key Features
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

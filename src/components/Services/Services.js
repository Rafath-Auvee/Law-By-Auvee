import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  // const [services, setServices] = useState([]);

  const services = [
    // id, name, img, description, price
    {
      id: 1,
      name: "Be your lawyer",
      img: "https://images.unsplash.com/photo-1589307904488-7d60ff29c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      description:
        "Wildlife photography is a genre of photography that records the life of animals in their natural settings, like in a forest or underwater. So, wildlife photography often constitutes the images of animals in movement or action such as eating, fighting, or in flight.",
      price: "$150",
    },
    {
      id: 3,
      name: "Draft civil suits as a certified lawyer",
      img: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description:
        "I have drafted different types of lawsuits, Legal Notices, complaints, petitions, motions, appeals, and other legal documents for the USA, UK, Australia, and Canadian clients.",
      price: "$200",
    },
    {
      id: 2,
      name: "Appear on your behalf in any court as your lawyer",
      img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description:
        "I am heading an International Law firm namely 'Easy Justice Associates' providing services to my clients in all sectors like insurance, banking, regulatory, custom, labor, family matters, civil, criminal, constitutional matters, ADR, and arbitration, etc.",
      price: "$150",
    },
  ];

  return (
    <div id="services" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5"> My Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

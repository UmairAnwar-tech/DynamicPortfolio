import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfoliodata } = useSelector((state) => state.root);
  const contact = Array.isArray(portfoliodata.contact) ? portfoliodata.contact[0] : portfoliodata.contact;
  return (
    <div className>
      <SectionTitle title={"Say Hello"} />
      <div className="flex items-center  justify-between sm:flex-col opacity-80 ">
        <div className="flex flex-col gap-2 sm:pl-40">
          <h1 className="text-tertiary text-xl">
            {"{"}
            <br />
          </h1 >
          {Object.entries(contact).map(([key, value]) => (
            key !== "_id" && (  // Exclude _id from rendering
              <h1 className="ml-text-xl" key={key}>
                <span className="text-tertiary text-xl">{key}:</span>
                <span className="text-tertiary text-xl">
                  {typeof value === "object" ? JSON.stringify(value) : value}
                </span>
              </h1>
            )
          ))}
          <h1 className="text-tertiary text-xl">{"}"}</h1>
        </div>

        <div className="h-[300px] ">
          <lottie-player
            src="https://lottie.host/72eb6cf3-acb3-47ed-81b1-ef32cce023b5/i7pkodzWaP.json"
            background="transparent"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;

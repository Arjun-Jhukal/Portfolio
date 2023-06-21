import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import jsonData from "../data.json";
const Privacy = () => {
  jsonData.map((item) => {
    console.log(item.EffectiveDate);
  });
  return (
    <main className="main">
      <Navbar />

      <div className="privacy section_gap">
        <div className="container">
          <h1 className="lg_heading mb-5">Privacy Policy</h1>

          {jsonData.map((item, index) => {
            const totalItem = item.title.length;
            console.log(totalItem);
            return (
              <div className="privacy__text" key={index}>
                <p>Effective Date: {item.EffectiveDate} </p>
                <p>{item.brief}</p>

                {item.title.map((policy, index) => {
                  return (
                    <>
                      <h1 className="md_heading">{item.title[index]}</h1>
                      <p>{item.titleInfo}</p>
                    </>
                  );
                })}

                <p>{item.ending}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Privacy;

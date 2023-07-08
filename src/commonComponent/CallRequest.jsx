import { useRef, useEffect, useState } from "react";
import "../assets/scss/_form.scss";
import InputField from "./InputField";
import Button from "./Button";

import { AiOutlineClose } from "react-icons/ai";
const CallRequest = ({ active, close, validateForm, errorValue, subjectValue, phoneValue, subjectChange, phoneChange }) => {
  const [country, setCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Nepal");

  //fetching Country Names
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed To Fetch Data");
        }
        const jsonData = await response.json();
        const sortedCountries = jsonData.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountry(sortedCountries);
      } catch (err) {
        console.log("An Error Occured:", err.message);
      }
    };
    fetchData();
  }, []);

  // Working Form Focus initially while Loading
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={active ? "request active" : "request"}>
      <form className="request__call" onSubmit={validateForm} method="POST" data-netlify="true">
        {errorValue.formStatus ? (
          <div className="successful__message">
            <p>You Request has been successfully sent ! You will get a call back in next 24 hours</p>
          </div>
        ) : (
          <>
            <InputField
              placeholder={"Subject"}
              reference={inputRef}
              className={errorValue.subjectError ? "error" : ""}
              value={subjectValue}
              onChange={subjectChange}
              name={"subject"}
            />

            <div className="phone_number">
              <select
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                }}
                name="country"
              >
                {country &&
                  country.map((countryItem) => {
                    return (
                      <option value={countryItem.name.common} key={countryItem.name.common}>
                        {countryItem.name.common}
                      </option>
                    );
                  })}
              </select>
              <InputField
                placeholder={"Phone Number"}
                name={"phone"}
                className={errorValue.phoneError ? "error" : ""}
                value={phoneValue}
                onChange={phoneChange}
              />
            </div>
            <Button type={"submit"} value={"Request Now"} className={"btn btn__hire"} />
          </>
        )}
        <Button value={<AiOutlineClose size={20} />} className={"btn__close"} onClick={close} />
      </form>
    </div>
  );
};

export default CallRequest;

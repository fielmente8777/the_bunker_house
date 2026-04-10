import axios from "axios";
import React, { useState } from "react";
// import { countries } from "@/db/countryCode";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  // const [countryCode, setCountryCode] = useState("+91"); // Default country code
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      return;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          // Domain: "abhijeet", // Replace with your actual domain value
          Domain: "thebunkerhouse", // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: `${userPhone}`, // Combine country code and phone number
          Description: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.Status) {
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        // setCountryCode("+91"); // Reset country code
        setFormRes(false);
        alert("Form submitted successfully!");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formData = [
    {
      tag: "input",
      icon: <FillUser />,
      type: "text",
      name: "name",
      placeholder: "Your Name*",
      required: true,
      value: userName,
      onChange: (e) => {
        setUserName(e.target.value);
      },
    },
    {
      tag: "div", // Use div to wrap select and input for phone number
      icon: <FillPhone />,
      name: "phone",
      placeholder: "Your Phone*",
      required: true,
      content: (
        <div className="flex gap-2 text-base w-full">
          {/* <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-auto bg-transparent rounded-lg text-[#333333] focus:outline-none"
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-black bg-gray-100"
              >
                {`${country.code}`}
              </option>
            ))}
          </select> */}
          <input
            type="number"
            id="phone"
            name="phone"
            max={"9999999999"}
            placeholder="Your Phone*"
            value={userPhone}
            onChange={handlePhoneChange}
            className=" bg-transparent rounded-md text-black no-spinner w-full focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input",
      icon: <FillMail />,
      type: "email",
      name: "email",
      placeholder: "Your Email*",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },
    {
      tag: "textarea",
      icon: <FillMessage />,
      type: "text",
      name: "",
      placeholder: "Your Message*",
      required: true,
      value: userMessage,
      onChange: (e) => {
        setUserMessage(e.target.value);
      },
    },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-md:px-4 p-6 text-base rounded-lg w-full bg-white/70 border border-[#37A08C]"
      id="contact"
    >
      <h2 className="text-xl lg:text-3xl font-normal text-[#37A08C]">
        Contact Us!
      </h2>

      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex gap-2 text-gray-primary p-3 border bg-white border-[#37A08C] rounded-md ">
            <label
              htmlFor={data.name}
              className={`${data.tag === "textarea" && "mt-1"}`}
            >
              {data.icon}
            </label>
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                id: data.name,
                type: data.type,
                name: data.name,
                value: data.value,
                onChange: data.onChange,
                placeholder: data.placeholder,
                required: data.required,
                autoComplete: "off",
                spellCheck: "false",
                rows: "3",
                className:
                  "w-full bg-transparent no-spinner resize-none focus:outline-none rounded-md valid:outline-blue-primary invalid:outline-Saffron-primary",
              })}
          </div>
          {data.name === "phone" && errorMessage && (
            <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
          )}
          {data.name === "email" && emailErrorMessage && (
            <p className="text-sm text-red-500 mt-2">{emailErrorMessage}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full text-center bg-blue-primary text-white justify-center self-center text-md px-8 py-2 font-semibold rounded-md bg-[#37A08C] hover:bg-[#37A08C]/70 hover:text-blue-primary duration-300 active:scale-75 hover:scale-105 border border-blue-primary"
      >
        {formRes ? "Loading...." : "Submit"}
      </button>
    </form>
  );
};

export default Form;

const FillMessage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M19.5013 3.25C20.6506 3.25 21.7528 3.70655 22.5654 4.5192C23.3781 5.33186 23.8346 6.43406 23.8346 7.58333V16.25C23.8346 17.3993 23.3781 18.5015 22.5654 19.3141C21.7528 20.1268 20.6506 20.5833 19.5013 20.5833H14.3836L9.2248 23.6784C9.06944 23.7717 8.89318 23.8244 8.71214 23.8319C8.5311 23.8394 8.35108 23.8014 8.18855 23.7213C8.02602 23.6412 7.88616 23.5216 7.78179 23.3735C7.67743 23.2254 7.61187 23.0535 7.59114 22.8735L7.58464 22.75V20.5833H6.5013C5.38954 20.5833 4.3203 20.156 3.51476 19.3898C2.70921 18.6236 2.22897 17.577 2.17339 16.4667L2.16797 16.25V7.58333C2.16797 6.43406 2.62452 5.33186 3.43717 4.5192C4.24983 3.70655 5.35203 3.25 6.5013 3.25H19.5013ZM15.168 13H8.66797C8.38065 13 8.1051 13.1141 7.90194 13.3173C7.69877 13.5205 7.58464 13.796 7.58464 14.0833C7.58464 14.3707 7.69877 14.6462 7.90194 14.8494C8.1051 15.0525 8.38065 15.1667 8.66797 15.1667H15.168C15.4553 15.1667 15.7308 15.0525 15.934 14.8494C16.1372 14.6462 16.2513 14.3707 16.2513 14.0833C16.2513 13.796 16.1372 13.5205 15.934 13.3173C15.7308 13.1141 15.4553 13 15.168 13ZM17.3346 8.66667H8.66797C8.38065 8.66667 8.1051 8.7808 7.90194 8.98397C7.69877 9.18713 7.58464 9.46268 7.58464 9.75C7.58464 10.0373 7.69877 10.3129 7.90194 10.516C8.1051 10.7192 8.38065 10.8333 8.66797 10.8333H17.3346C17.622 10.8333 17.8975 10.7192 18.1007 10.516C18.3038 10.3129 18.418 10.0373 18.418 9.75C18.418 9.46268 18.3038 9.18713 18.1007 8.98397C17.8975 8.7808 17.622 8.66667 17.3346 8.66667Z"
      fill="#88C9B1"
    />
  </svg>
);
const FillPhone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M19.8563 24.375C18.8651 24.375 17.4727 24.0165 15.3876 22.8516C12.8521 21.4297 10.8909 20.117 8.36911 17.6018C5.93771 15.1719 4.75451 13.5987 3.09853 10.5854C1.22775 7.18302 1.54665 5.39959 1.90314 4.63736C2.32767 3.72635 2.95431 3.18146 3.76427 2.64064C4.22432 2.33922 4.71117 2.08084 5.21865 1.86877C5.26943 1.84693 5.31665 1.82611 5.3588 1.80732C5.61017 1.69408 5.99103 1.52295 6.47345 1.70576C6.7954 1.82662 7.08283 2.07392 7.53275 2.51826C8.45544 3.42826 9.71634 5.45494 10.1815 6.45025C10.4938 7.12107 10.7005 7.56388 10.701 8.06052C10.701 8.64197 10.4085 9.09037 10.0535 9.57431C9.987 9.66521 9.92099 9.75205 9.857 9.83634C9.47056 10.3442 9.38575 10.4909 9.44161 10.7529C9.55486 11.2795 10.3993 12.8472 11.7872 14.232C13.1751 15.6168 14.6975 16.4079 15.2261 16.5207C15.4993 16.5791 15.6491 16.4907 16.1732 16.0906C16.2483 16.0332 16.3255 15.9738 16.4063 15.9144C16.9476 15.5117 17.3752 15.2268 17.9429 15.2268H17.9459C18.4401 15.2268 18.8631 15.4411 19.5638 15.7945C20.4779 16.2556 22.5655 17.5003 23.4811 18.424C23.9265 18.8729 24.1748 19.1593 24.2961 19.4807C24.479 19.9647 24.3068 20.344 24.1946 20.5979C24.1758 20.6401 24.155 20.6863 24.1331 20.7376C23.9194 21.2441 23.6595 21.7299 23.3567 22.1889C22.8169 22.9963 22.27 23.6214 21.3569 24.0465C20.8881 24.2682 20.375 24.3806 19.8563 24.375Z"
      fill="#88C9B1"
    />
  </svg>
);
const FillUser = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M13.0007 4.3335C14.1499 4.3335 15.2521 4.79004 16.0648 5.6027C16.8774 6.41536 17.334 7.51756 17.334 8.66683C17.334 9.8161 16.8774 10.9183 16.0648 11.731C15.2521 12.5436 14.1499 13.0002 13.0007 13.0002C11.8514 13.0002 10.7492 12.5436 9.93652 11.731C9.12386 10.9183 8.66732 9.8161 8.66732 8.66683C8.66732 7.51756 9.12386 6.41536 9.93652 5.6027C10.7492 4.79004 11.8514 4.3335 13.0007 4.3335ZM13.0007 15.1668C17.789 15.1668 21.6673 17.106 21.6673 19.5002V21.6668H4.33398V19.5002C4.33398 17.106 8.21232 15.1668 13.0007 15.1668Z"
      fill="#88C9B1"
    />
  </svg>
);

const FillMail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
  >
    <path
      d="M21.666 4.3335H4.33268C3.14102 4.3335 2.17685 5.3085 2.17685 6.50016L2.16602 19.5002C2.16602 20.6918 3.14102 21.6668 4.33268 21.6668H21.666C22.8577 21.6668 23.8327 20.6918 23.8327 19.5002V6.50016C23.8327 5.3085 22.8577 4.3335 21.666 4.3335ZM21.666 8.66683L12.9993 14.0835L4.33268 8.66683V6.50016L12.9993 11.9168L21.666 6.50016V8.66683Z"
      fill="#88C9B1"
    />
  </svg>
);

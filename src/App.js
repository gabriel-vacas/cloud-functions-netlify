import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const reCaptchaValidation = async () => {
    setIsLoading(true);
    // eslint-disable-next-line no-undef
    grecaptcha.ready(() => {
      try {
        // eslint-disable-next-line no-undef
        grecaptcha
          .execute("6LcinvElAAAAAIg_rcWFnXxAkbvLWl4GspnQerfe", {
            action: "submit",
          })
          .then((token) => {
            validateReCaptchaToken(token);
          });
      } catch (error) {
        console.error(error);
      }
    });
  };

  const validateReCaptchaToken = async (token) => {
    const reCaptchaData = {
      secret: "6LcinvElAAAAAKWwUEBWNjAAsNm2xQeRT5b2qOkm",
      response: token,
    };
    const response = await window
      .fetch("/.netlify/functions/testCaptcha", {
        method: `POST`,
        body: JSON.stringify(reCaptchaData),
      })
      .then((res) => res.json());
    setData(response.success);
    setIsLoading(false);
  };

  useEffect(() => {
    if (data) {
      setTimeout(() => {
        setData(null);
      }, 3000);
    }
  }, [data]);

  return (
    <div className="wrapper">
      <div className="container">
        <button onClick={() => reCaptchaValidation()}>Validate</button>
        <p className="success">{data && "Success!"}</p>
        <p>{isLoading && "Loading..."}</p>
      </div>
    </div>
  );
}

export default App;

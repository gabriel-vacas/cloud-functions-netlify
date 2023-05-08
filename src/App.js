import React, { useState } from "react";

function App() {
  const [data, setData] = useState();
  const reCaptchaValidation = async () => {
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
  };

  return (
    <div>
      <button onClick={() => reCaptchaValidation()}>Try recaptcha</button>
      <p>{data && "Success"}</p>
    </div>
  );
}

export default App;

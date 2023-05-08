function App() {
  const testAzureFunction = async () => {
    const reCaptchaData = {
      secret: 'token',
      response: 'token',
    };
    const response = await window
      .fetch("/.netlify/functions/test", {
        method: `POST`,
        body: JSON.stringify(reCaptchaData),
      })
      .then((res) => res.json());
    console.log("RES", response);
  };

  return <button onClick={() => testAzureFunction()}>Test</button>;
}

export default App;

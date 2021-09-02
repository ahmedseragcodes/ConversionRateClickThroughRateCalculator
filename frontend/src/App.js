import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [adImpressions, setAdImpressions] = useState(0);
  const [adClicks, setAdClicks] = useState(0);
  const [cTR, setCTR] = useState((adClicks / adImpressions) * 100);
  const [conversions, setConversions] = useState(0);
  const [convRate, setConvRate] = useState((conversions / adClicks) * 100);

  //Functions For Click Through Rate

  function handleClicksChange(event) {
    setAdClicks(+event.target.value);
  }

  function handleImpChange(event) {
    setAdImpressions(event.target.value);
  }

  function calculateCTR(event) {
    event.preventDefault();
    setCTR((adClicks / adImpressions) * 100);
  }

  //Functions For Conversion Rate

  function handleClicksChange2(event) {
    setAdClicks(+event.target.value);
  }

  function handleConvChange(event) {
    setConversions(+event.target.value);
  }

  function calculateConversionRate(event) {
    event.preventDefault();
    setConvRate((conversions / adClicks) * 100);
  }

  return (
    <div>
      <h1>Calculate Your Ad's Conversion Rate & Click Through Rate</h1>
      <div id="ctr">
        <h2>Calculate Click Through Rate</h2>
        <form>
          <label htmlFor="adImpressions">
            Number Of Impressions On Your Ad
            <input
              name="adImpressions"
              type="number"
              value={adImpressions}
              onChange={handleImpChange}
            />
          </label>
          <label htmlFor="adClicks">
            Number Of Clicks On Your Ad
            <input
              name="adClicks"
              type="number"
              value={adClicks}
              onChange={handleClicksChange}
            />
          </label>
          <button onClick={calculateCTR}>Calculate CTR</button>
          <h3>Click Through Rate: {Math.round(cTR)}%</h3>
        </form>
      </div>
      <div id="conversionRate">
        <h2>Calculate Conversion Rate</h2>
        <form>
          <label htmlFor="adClicks2">
            Number Of Clicks On Your Ad
            <input
              name="adClicks2"
              type="number"
              value={adClicks}
              onChange={handleClicksChange2}
            />
          </label>
          <label htmlFor="conversions">
            Number Of Conversions From Your Ad
            <input
              name="conversions"
              type="number"
              value={conversions}
              onChange={handleConvChange}
            />
          </label>
          <button onClick={calculateConversionRate}>
            Calculate Conversion Rate
          </button>
          <h3>Conversion Rate: {Math.round(convRate)}%</h3>
        </form>
      </div>
    </div>
  );
}

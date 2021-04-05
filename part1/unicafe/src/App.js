import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}> {text}</button>
    </>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return <>Feedback not given</>;
  } else {
    const average = ((good * 1 + neutral * 0 + bad * -1) / all).toFixed(2);
    const positive = ((good / all) * 100).toFixed(2) + "%";
    return (
      <>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all} />
        <Statistic text="average" value={average} />
        <Statistic text="positive" value={positive} />
      </>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <br />
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

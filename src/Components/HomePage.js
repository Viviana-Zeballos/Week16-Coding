import React from "react";
import ReturnJournal from "./ReturnJournal";
import BeforeJournal from "./BeforeJournal";
import ConnectJournal from "./ConnectJournal";

const HomePage = () => {
  return (
    <div>
      <h1>ׂ╰┈➤ Memories ┄ Adventures ┄ Stories ✈</h1>
      <div className="flex-container">
        <div className="flex-item">
          <BeforeJournal />
          <ReturnJournal />
          <ConnectJournal />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

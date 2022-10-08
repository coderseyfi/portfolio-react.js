import React from "react";
import { InlineWidget } from "react-calendly";
import "./Calendly.css";
function Calendly() {
  return (
    <div className="calendar-container">
      <div className="calendar-container-headings">
        <p>
          Make sure before you join the meeting,
          <br />
          you have all the necessary documents or reference you would like to
          show me or share with me
        </p>
      </div>
      <div className="calendy-calendar">
        <InlineWidget url="https://calendly.com/seyfaddinmn/test?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ff002c" />
      </div>
    </div>
  );
}

export default Calendly;

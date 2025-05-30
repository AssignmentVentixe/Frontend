import React from "react";

const TermsList = () => {
  return (
    <ol>
      <li>
        <h4>Ticket Purchase and Entry</h4>
        <ul className="ulList">
          <li>All attendees must possess a valid ticket for entry.</li>
          <li>
            Tickets are non-refundable and non-transferable unless specified by
            the event organizer.
          </li>
          <li>
            Attendees must present a valid government-issued ID along with their
            ticket at the gate.
          </li>
        </ul>
      </li>
      <li>
        <h4>Security and Safety</h4>
        <ul className="ulList">
          <li>
            Attendees are subject to security checks, including bag inspections,
            upon entry.
          </li>
          <li>
            Prohibited items include weapons, drugs, alcohol, fireworks, and
            other hazardous materials.
          </li>
          <li>
            The event organizer reserves the right to deny entry to individuals
            deemed a security risk.
          </li>
        </ul>
      </li>
      <li>
        <h4>Code of Conduct</h4>
        <ul className="ulList">
          <li>
            Attendees are expected to behave responsibly and respectfully toward
            others.
          </li>
          <li>
            Any disruptive behavior, harassment, or illegal activity will result
            in immediate removal from the event without refund.
          </li>
        </ul>
      </li>
      <li>
        <h4>Event Schedule and Changes</h4>
        <ul className="ulList">
          <li>The event schedule is subject to change without prior notice.</li>
          <li>
            The event organizer is not responsible for delays or cancellations
            caused by weather, technical issues, or unforeseen circumstances.
          </li>
        </ul>
      </li>
      <li>
        <h4>Liability and Indemnification</h4>
        <ul className="ulList">
          <li>
            The event organizer and venue are not liable for personal injury,
            loss, or damage to personal property.
          </li>
          <li>
            Attendees agree to indemnify and hold harmless the organizer against
            any claims arising from their actions.
          </li>
          <li>
            Attendees are encouraged to purchase personal insurance for added
            protection.
          </li>
        </ul>
      </li>
      <li>
        <h4>Recording and Photography</h4>
        <ul className="ulList">
          <li>
            The event may be recorded or photographed; attendee appearance
            grants permission for use in promotional materials.
          </li>
          <li>
            Professional camera equipment requires prior approval from the event
            organizer.
          </li>
          <li>
            Unauthorized livestreaming or rebroadcasting of performances is
            prohibited.
          </li>
        </ul>
      </li>
      <li>
        <h4>Accessibility and Accommodation</h4>
        <ul className="ulList">
          <li>
            The venue provides wheelchair access and accessible seating areas.
          </li>
          <li>
            Attendees requiring special accommodations should contact customer
            service at least 72 hours before the event.
          </li>
          <li>
            Service animals are welcome; please carry appropriate documentation.
          </li>
        </ul>
      </li>
    </ol>
  );
};

export default TermsList;

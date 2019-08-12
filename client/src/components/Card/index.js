import React from "react";

// card component with 3 props
function Card({ icon, title, children }) {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            {/* icon prop inserted to precede title prop */}
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      {/* children will be elements contained within Card tags */}
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;

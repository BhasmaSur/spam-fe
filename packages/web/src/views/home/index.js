import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link to="/question">Questions</Link>
      </div>
      <div>
        <Link to="/add-spam">Add Spam</Link>
      </div>
    </div>
  );
}

export default Home;

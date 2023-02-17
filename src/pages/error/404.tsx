import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pe-5 screen-height d-flex flex-column align-item-center justify-content-center">
      <div className="text-center">
        <h1> 404 page not found</h1>
      </div>

      <div className="text-center">
        <Link to={"/"}>
          <button className="btn btn-secondary"> Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

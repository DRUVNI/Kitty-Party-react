import { useNavigate } from "react-router-dom";

const HomePage= () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Make Memories, Enjoy</h3>

      <p>
        Want to join as a member? <button onClick={navigate("/ChooseHub")}>Join Now</button>
      </p>
      <p>or</p>
      <p>
        Create your own Group{" "}
        <button onClick={() => navigate("/registration-form")}>Create</button>
      </p>
    </div>
  );
};

export default HomePage;
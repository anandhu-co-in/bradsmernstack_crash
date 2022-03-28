import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalForm from "./GoalForm";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goal
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getGoals());

    //below clean up function to clear the goals when user unmounts dashboard
    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <>SPINNER Dashboard</>;
  }

  return (
    <>
      <h1>Dashboard for user {user && user.name}</h1>
      <GoalForm />

      {goals.map((goal) => (
        <b>
          {goal.text + goal.createdAt}
          <br />
        </b>
      ))}
    </>
  );
}

export default Dashboard;

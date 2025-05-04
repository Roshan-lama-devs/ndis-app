import { useReducer } from "react";

const initialState = {
  isOpen: false,
};

// define a reducer function that does the actuall changes

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { isOpen: !state.isOpen };

    default:
      return state;
  }
};

const FormToggle = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE" })}>
        {state.isOpen ? "Hide Form" : "Show Form"}
      </button>

      {state.isOpen && (
        <form>
          <input type="text" placeholder="name" />
        </form>
      )}
    </div>
  );
};
export default FormToggle;

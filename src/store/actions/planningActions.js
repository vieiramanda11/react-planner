export const createPlanning = (planning) => {
  return (dispatch, getState) => {
    // make async call to databse
    dispatch({
      type: "CREATE_PLANNING",
      planning: planning,
    });
  };
};

export const createPlanning = (planning) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("plannings")
      .add({
        ...planning,
        authorFirstName: "Amanda",
        authorLastName: "Vieira",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "CREATE_PLANNING",
          planning: planning,
        })
      });
  };
};

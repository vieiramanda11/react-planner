const initState = {
  plannings: [
    {
      id: "1",
      title: "First planning",
      content: "This is my first planning description",
    },
    {
      id: "2",
      title: "Second planning",
      content: "This is my second planning description",
    },
    {
      id: "3",
      title: "Third planning",
      content: "This is my third planning description",
    },
  ],
};

const planningReducer = (state = initState, action) => {
  if (action.type === 'CREATE_PLANNING') {
    console.log('created planning', action.planning)
    return state;
  } else if (action.type === 'CREATE_PLANNING_ERROR') {
    console.log('error', action.err);
    return state;
  }
  return state;
};

export default planningReducer;

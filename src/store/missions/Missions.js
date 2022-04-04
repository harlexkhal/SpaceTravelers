const missionsReducer = (state = '', action) => {
  switch (action.type) {
    case 'change-this':
      return 'change-this';
    default:
      return state;
  }
};

export default missionsReducer;

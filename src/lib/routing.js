export function navigate(path, state /* evt */) {
  const newState = {
    ...state,
    location: {
      ...state.location,
      path
    }
  };
  window.history.pushState(newState, '', path);
  return newState;
}

export function register(dispatch) {
  window.onpopstate = function onpopstate() {
    const path = document.location.pathname;
    dispatch((state) => ({
      ...state,
      location: {
        ...state.location,
        path
      }
    }));
  };
}

import { location } from '@hyperapp/router';

export const actions = {
  location: location.actions,
  getState: () => (state) => state,
  debug: () => (state) => console.log(state)
};

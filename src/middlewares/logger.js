export const loggerMiddleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  console.log(type, payload);
  const firstState = store.getState();
  next(action);
  const nextState = store.getState();
  console.log("First State: ", firstState);
  console.log("Next state: ", nextState);
};

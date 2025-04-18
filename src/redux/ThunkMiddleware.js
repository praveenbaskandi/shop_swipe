function thunkMiddleware({getState, dispatch}) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else if (action.type === 'RESET') {
      return next({type: 'RESET', payload: undefined});
    } else {
      return next(action);
    }
  };
}
export default thunkMiddleware;

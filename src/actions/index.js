// action types
export const SET_NAME = "SET_NAME";
export const SET_PREFIX = "SET_PREFIX";
export const SET_BODY = "SET_BODY";
export const SET_DESCRIPTION = "SET_DESCRIPTION";

// function to generate simple action creators
function makeActionCreator(type, ...argNames) {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

// action creators
export const setName = makeActionCreator(SET_NAME, "name");
export const setPrefix = makeActionCreator(SET_PREFIX, "prefix");
export const setBody = makeActionCreator(SET_BODY, "body");
export const setDescription = makeActionCreator(SET_DESCRIPTION, "description");

import { alertInterface } from "@/core/interfaces/alert.interface";

// action types
export const CLOSE_ALERT = "closeAlert";

// mutation types
export const SET_ALERT = "setAlert";

const state = {
  text: "",
  isError: false,
  visibility: false,
} as alertInterface;

const getters = {
  alertVisibility(state: alertInterface) {
    return state.visibility;
  },
  alertText(state: alertInterface) {
    return state.text;
  },
};

const actions = {
  [CLOSE_ALERT](context: any) {
    // for better show :
    context.commit(SET_ALERT, {
      // first hide the snackbar
      text: state.text,
      visibility: false,
    });
    setTimeout(() => {
      // then reset the "text" and "isError"
      context.commit(SET_ALERT, {
        text: "",
        visibility: state.visibility,
      });
    }, 100);
  },
};

const mutations = {
  [SET_ALERT](state: alertInterface, data: alertInterface) {
    state.visibility = data.visibility;
    state.text = data.text;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};

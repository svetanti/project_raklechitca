export const state = () => ({
  popupShown: false,
});

export const mutations = {
  open(state) {
    state.popupShown = true;
  },
  close(state) {
    state.popupShown = false;
  },
};

// export const getters = {
//     getPopupShown(state) {
//         return state.popupShown
//     }
// }

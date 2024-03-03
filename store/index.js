// store/index.js

export const state = () => ({
  user: null // пример глобального состояния
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

export const actions = {
  // действия для изменения состояния, если нужно
}

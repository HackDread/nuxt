<!-- Файл pages/auth/login.vue -->
<template>
    <div>
      <h2>Вход</h2>
      <form @submit.prevent="login">
        <input type="text" v-model="email" placeholder="Email" required style="color: white;">
        <input type="password" v-model="password" placeholder="Пароль" required style="color: white;">
        <button type="submit">Войти</button>
      </form>
      <p v-if="loginError" style="color: red;">{{ loginError }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loginError: ''
      };
    },
    methods: {
      async login() {
        try {
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          });
          this.$router.push('/profile');
        } catch (error) {
          this.loginError = 'Ошибка аутентификации: ' + error.message;
        }
      }
    }
  }
  </script>
  
<!-- Файл pages/profile.vue -->
<template>
    <div>
      <h2>Профиль пользователя</h2>
      <p>Email: {{ user.email }}</p>
      <input type="text" v-model="newName" placeholder="Новое имя">
      <button @click="updateProfile">Обновить профиль</button>
      <button @click="logout">Выйти</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newName: ''
      };
    },
    computed: {
      user() {
        return this.$auth.user;
      }
    },
    methods: {
      async updateProfile() {
        try {
          await this.$axios.post('/api/updateProfile', { name: this.newName });
          await this.$auth.fetchUser();
          this.newName = '';
        } catch (error) {
          console.error('Ошибка обновления профиля:', error);
        }
      },
      async logout() {
        try {
          await this.$auth.logout();
          this.$router.push('/');
        } catch (error) {
          console.error('Ошибка выхода:', error);
        }
      }
    }
  }
  </script>
  
<template>
  <div>
    <h2>Регистрация</h2>
    <form @submit.prevent="register" class="registration-form">
      <input type="text" v-model="email" placeholder="Email" required style="color: white;">
      <input type="password" v-model="password" placeholder="Пароль" required style="color: white;">
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  mounted() {
    console.error(this.$auth);
  },
  methods: {
  async register() {
    try {
      if (this.$auth) {
        await this.$auth.register({
          data: {
            email: this.email,
            password: this.password
          }
        });
        this.$router.push('/profile');
      } else {
        console.error('Ошибка регистрации: объект $auth недоступен.');
      }
    } catch (error) {
      console.error('Ошибка регистрации:', error);
    }
  }
}
}
</script>

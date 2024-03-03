<!-- Файл pages/index.vue -->
<template>
  <div>
    <h1>Домашняя страница</h1>
    <p>Это главная страница вашего сайта.</p>
    <nuxt-link to="/auth/login">Войти</nuxt-link>
    <nuxt-link to="/auth/register">Зарегистрироваться</nuxt-link>
  </div>
</template>

<script>
export default {
  // Дополнительные настройки страницы
}
</script>

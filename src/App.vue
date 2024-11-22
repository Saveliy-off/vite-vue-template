<template>
  <div>
    <header>
      <div class="container">
        <div class="header__inner">
          <router-link class="nav_logo" to="/">Савелий Капаклы</router-link>
          <nav>
            <router-link class="nav_link" to="/auth">Войти</router-link>
          </nav>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

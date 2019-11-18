<template>
  <div id="app" class="app">
    <h1>
      products <font-awesome-icon :icon="['fab', 'vuejs']" class="icon" /> app
    </h1>
    <nav>
      <div class="row">
        <div class="grid">
          <router-link to="/">Home</router-link> |
        </div>
        <div class="grid">
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '../node_modules/@mohssineaboutaj/grid-system/scss/grid-system.scss';
@import './assets/app.scss';
</style>

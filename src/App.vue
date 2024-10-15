<script setup>
  import MainLeftView from './components/MainLeftView.vue';
  import AboutMeView from './components/AboutMeView.vue';
</script>

<template>
  <div class="container">
    <div class="flex-item flex-item-l">
      <MainLeftView />
    </div>
    <div class="flex-item flex-item-r">
      <AboutMeView/>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  margin: 0 auto;
  width: 60%;
  position: relative;
}

.flex-item-l {
  width: 35%;
  position: sticky;
  top: 2%;
  align-self: flex-start;
  z-index: 900;
  background-color: inherit;
}

.flex-item-r {
  width: 65%;
  padding-left: 20px;
  position: relative;
  z-index: 800;
  overflow: hidden;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    width: 100%;
    padding: 0 15px;
  }

  .flex-item-l, .flex-item-r {
    width: 100%;
    padding-left: 0;
  }

  .flex-item-l {
    position: relative;
    top: auto;
    text-align: center;
    padding: 10px 0;
  }

  .flex-item-r {
    padding: 10px 0;
  }
}

.menu-text {
  font-size: 1.5rem;
  font-weight: bolder;
}
</style>

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
  top: 2%; /* Dostosowane do wysokości nawigacji */
  align-self: flex-start;
  z-index: 900; /* Mniejsze niż nawigacja */
  background-color: inherit; /* Dziedziczy tło */
}

.flex-item-r {
  width: 65%;
  padding-left: 20px;
  position: relative; /* Przyjmuje względne pozycjonowanie */
  z-index: 800; /* Mniejsze niż lewa kolumna */
  overflow: hidden; /* Ukrywamy elementy wychodzące poza kolumnę */
}

.menu-text {
  font-size: 1.5rem;
  font-weight: bolder;
}
</style>

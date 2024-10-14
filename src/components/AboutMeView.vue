<template>
    <div id="aboutme-nav" class="scroll-top">
      <h1 class="text-header margin-top-60">O mnie</h1>
      <p class="paragraph-indent padding-left-20">{{profile.description}}</p>
    </div>
    <div class="margin-top-60 scroll-top" id="experience-nav">
    <h1 class="text-header">Doświadczenie</h1>
    <ul v-if="profile.experience.length" class="user-list">
      <li v-for="item in profile.experience" :key="item.id" class="user-item list-no-dot">
        <div class="float-right-maring-r">
            <a :href="item.link" target="_blank" rel="noopener noreferrer" class="img-transform">
            <img :alt="item.university" :src="`/${item.icon}`" width="50" height="50" />
          </a>
        </div>
        <div>
          <p class="second-header">{{ item.name }}</p>
          <p class="second-header">{{ item.place_date }}</p>
        </div>
        <div class="padding-left-30">
          <li v-for="job in item.responsibility" class="item-list">
            {{ job }}            
          </li>
        </div>
      </li>
    </ul>
  </div>
  <div class="margin-top-60 width-100 scroll-top" id="tech-nav">
    <h1 class="text-header">Technologie</h1>
    <div class="image-grid width-30 margin-top-30 padding-left-30">
    <div v-for="item in profile.techstack" :key="item.id" >
      <a :href=item.documentationLink target="_blank" rel="noopener noreferrer">
        <img alt={{item.name}}   :src="`/${item.icon}`" width="60" height="60" />
      </a>
    </div>
    </div>
  </div>
  <div class="margin-top-60 width-100 vh-top scroll-top" id="school-nav">
    <h1 class="text-header">Wykształcenie</h1>
    <li v-for="item in profile.education" :key="item.id" class="list-no-dot padding-left-30 margin-top-30">
      <a :href="item.link" target="_blank" rel="noopener noreferrer" class="img-transform">
        <img :alt="item.university" :src="`/${item.icon}`" width="60" height="60" class="float-right-maring-r"/>
      </a>
        <div class="margin-t--2">
          <p class="second-header">{{ item.university }}</p>
          <p>{{ item.info }}</p>
        </div>
    </li>
  </div>
</template>

<script>
import profile_data from '../data/cv_data.json'

export default {
  data() {
    return {
      profile: profile_data,
    }
  }
}
</script>

<style>
.user-list {
  margin: 0 auto;
}

.width-100 {
  width: 100%;
}

.width-30 {
  width: 30%;
}

.user-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.user-item:last-child {
  border-bottom: none;
}

.paragraph-indent {
  text-indent: 20px;
}

.padding-left-20 {
  padding-left: 20px;
}

.responible-list {
  list-style: disc;
  padding-left: 30px;
}

.second-header {
  list-style: none;
  font-weight: bold;
  font-size: 1.5rem;
}

.header-list {
  list-style: none;
  font-weight: bold;
  font-size: 2.3rem;
}

.item-list {
  list-style-type: disc ; 
}

.padding-left-30 {
  padding-left: 30px;
}

.margin-top-30 {
  margin-top:30px;
}



.list-no-dot {
  list-style-type: none;
}

.test {
  border-radius: 5px;
    background-color: #1e3448;
    padding: 20px
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

.image-grid img {
  transition: transform 0.3s ease, border 0.3s ease;
}

.image-grid img:hover {
  transform: scale(0.75);
}

a {
  text-decoration: none; 
  background-color: transparent;
}

a:hover {
  background-color: transparent;
}

.float-right-maring-r {
  float: left;
  margin-right: 20px;
  margin-top: 10px;
}

.img-transform img {
  transition: transform 0.3s ease; /* Płynne przejście dla transformacji */
}

.img-transform img:hover {
  transform: scale(0.9); /* Zmniejsz rozmiar do 90% oryginalnej wielkości */
}

.margin-t--2 {
  margin-top: -2.5%;
}

.vh-top {
  height: 100vh;
} 

.scroll-top {
  scroll-margin-top: 60px;
}
</style>

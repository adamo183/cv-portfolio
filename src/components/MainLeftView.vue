<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <h1 class="text-header margin-top-60">Adam Majerski</h1>
    <h3>
      Full-stack developer
    </h3>
    <img alt="Profile picture" class="top-margin-5" src="@/assets/profile_cv.jpeg" width="216" height="310" />

    <div class="nav-container">
      <ul class="nav-list color-white">
        <a href="#aboutme-nav"><li><span>O mnie</span></li></a>
        <a href="#experience-nav"><li><span>Doświadczenie</span></li></a>
        <a href="#tech-nav"><li><span>Technologie</span></li></a>
        <a href="#school-nav"><li><span>Wykształcenie</span></li></a>
        <a v-on:click="onDownloadCvClick()"><li><span>Pobierz CV</span></li></a>
      </ul>
    </div>
</template>

<script>
import cv_data from '../assets/data/cv_data.json'

export default {
  methods: {
    onDownloadCvClick: function () {
      const fileId = cv_data.download_id;
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'cv_adam_majerski.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  },
  data() {
    return {
      profile: cv_data,
    }
  }
}
</script>

<style scoped>
  .top-margin-5 {
    margin-top: 5%;
  }
  .top-margin-20 {
    margin-top: 20%;
  }
  .padding-r-10 {
    padding-right: 10%;
  }
  .color-white {
    color: white;
  }
  .nav-list {
    list-style-type: disc;
    padding-left: 20px;
  }

  .nav-list a {
    text-decoration: none;
    color: inherit;
    display: block;
    font-size: 1.17em;
  }

  .nav-list li {
    list-style-position: inside;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .nav-list li:hover {
    transform: translateX(10px);
  }
</style>

<script setup lang="ts">
import { campTypes } from '../lib'
</script>

<template>
  <ul>
    <li v-for="camp in campTypes" :key="camp">
      <router-link tag="li" :to="`/${camp.toLowerCase()}`" v-text="camp" />
    </li>
  </ul>
</template>

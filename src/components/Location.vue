<script setup lang="ts">
const props = defineProps({
  location: Object,
})

const getField = (field: string) => props.location!.fields[field]?.[0]
</script>

<template>
  <a
    :href="getField('LocationUrl')"
    class="list-group-item list-group-item-action"
    target="_top"
  >
    <div class="d-flex w-100 justify-content-between">
      <p class="h6 mb-1" v-text="getField('LocationName')"></p>
    </div>
    <p class="mb-1" v-text="getField('LocationAddress')"></p>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  location: Object,
})

const getField = (field: string) => {
  const fieldValue = props.location!.fields[field]
  return Array.isArray(fieldValue) ? fieldValue[0] : fieldValue
}
</script>

<template>
  <a
    :href="getField('LocationUrl')"
    class="list-group-item list-group-item-action"
    target="_top"
  >
    <div class="d-flex w-100 justify-content-between">
      <p class="h6 mb-1" v-text="getField('LocationName')"></p>
      <small
        v-if="getField('LunchAvailable')"
        class="badge rounded-pill bg-secondary"
        >Lunch Available</small
      >
    </div>
    <p class="mb-1" v-text="getField('LocationAddress')"></p>
    <small v-text="getField('LocationPhone')"></small>
  </a>
</template>

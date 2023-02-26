<template lang="pug">
.layout
  h2 {{ content }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GhostVenue',
  setup() {
    const content = ref('Welcome - 幽靈場地');
    return {
      content,
    };
  },
});
</script>

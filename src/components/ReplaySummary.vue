<script setup lang="ts">
import { Buffer } from "buffer"
import { parse } from "thrpy-parser"
import { ref } from "vue"

const props = defineProps<{
  file: File
}>()

const info = ref()
const shadowColor = ref()

props.file.arrayBuffer().then((buffer) => {
  info.value = parse(Buffer.from(buffer))
  shadowColor.value = `table-${info.value.game}`

  // Process the received data
  info.value.date = new Date(info.value.date).toUTCString()
})

</script>

<template>
  <table class="table" :class="shadowColor">
    <thead>
      <tr>
        <th class="table-border cell" colspan="3">{{ file.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in info" :key="key">
        <th class="table-border cell">{{ key }}</th>
        <td class="table-border cell">{{ value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  @apply container;
  @apply border border-separate border-slate-500;
  @apply text-left;
}

.table-border {
  @apply border border-slate-500;
}

.table-th01 { @apply shadow-lg shadow-th01/50 }
.table-th02 { @apply shadow-lg shadow-th02/50 }
.table-th03 { @apply shadow-lg shadow-th03/50 }
.table-th04 { @apply shadow-lg shadow-th04/50 }
.table-th05 { @apply shadow-lg shadow-th05/50 }
.table-th06 { @apply shadow-lg shadow-th06/50 }
.table-th07 { @apply shadow-lg shadow-th07/50 }
.table-th08 { @apply shadow-lg shadow-th08/50 }
.table-th10 { @apply shadow-lg shadow-th10/50 }
.table-th11 { @apply shadow-lg shadow-th11/50 }
.table-th12 { @apply shadow-lg shadow-th12/50 }
.table-th128 { @apply shadow-lg shadow-th128/50 }
.table-th13 { @apply shadow-lg shadow-th13/50 }
.table-th14 { @apply shadow-lg shadow-th14/50 }
.table-th15 { @apply shadow-lg shadow-th15/50 }
.table-th16 { @apply shadow-lg shadow-th16/50 }
.table-th17 { @apply shadow-lg shadow-th17/50 }
.table-th18 { @apply shadow-lg shadow-th18/50 }

.cell {
  @apply px-3 py-1
}
</style>
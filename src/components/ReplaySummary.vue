<script setup>
import { Buffer } from "buffer"
import { parse, CONSTANTS } from "thrpy-parser"
import { ref } from "vue"
import { useToast } from "primevue/usetoast"
const toast = useToast()

const props = defineProps(["file"])

const info = ref({})

props.file.arrayBuffer().then((buffer) => {
  info.value = parse(Buffer.from(buffer))
  toast.add({ severity: "success", summary: "Success", detail: `Uploaded ${props.file.name}.`, life: 3000 })
}).catch(err => {
  toast.add({ severity: "error", summary: "Error", detail: `${props.file.name} ${err}`, life: 5000 })
})

</script>

<template>
  <Th06Summary v-if="info.game == CONSTANTS.GAME.TH06.ID" :filename="file.name" :info="info"></Th06Summary>
  <Th08Summary v-if="info.game == CONSTANTS.GAME.TH08.ID" :filename="file.name" :info="info"></Th08Summary>
  <Th10Summary v-if="info.game == CONSTANTS.GAME.TH10.ID" :filename="file.name" :info="info"></Th10Summary>
  <Th11Summary v-if="info.game == CONSTANTS.GAME.TH11.ID" :filename="file.name" :info="info"></Th11Summary>
  <Th12Summary v-if="info.game == CONSTANTS.GAME.TH12.ID" :filename="file.name" :info="info"></Th12Summary>
  <Th13Summary v-if="info.game == CONSTANTS.GAME.TH13.ID" :filename="file.name" :info="info"></Th13Summary>
</template>

<style scoped>

.table-th01 { @apply shadow-lg shadow-th01/50 }
.table-th02 { @apply shadow-lg shadow-th02/50 }
.table-th03 { @apply shadow-lg shadow-th03/50 }
.table-th04 { @apply shadow-lg shadow-th04/50 }
.table-th05 { @apply shadow-lg shadow-th05/50 }
.table-th06 { @apply shadow-lg shadow-th06/50 }
.table-th07 { @apply shadow-lg shadow-th07/50 }
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

</style>
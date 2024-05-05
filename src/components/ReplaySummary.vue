<script setup>
import { Buffer } from "buffer"
import { parse, CONSTANTS } from "thrpy-parser"
import { ref } from "vue"
import { useToast } from "primevue/usetoast"
import { appendStartingStage } from "@/utilities/replay"
const toast = useToast()

const props = defineProps(["file"])

const info = ref({})

props.file
  .arrayBuffer()
  .then((buffer) => {
    info.value = appendStartingStage(parse(Buffer.from(buffer)))
    toast.add({
      severity: "success",
      summary: "Success",
      detail: `Uploaded ${props.file.name}.`,
      life: 3000
    })
  })
  .catch((err) => {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: `${props.file.name} ${err}`,
      life: 5000
    })
  })
</script>

<template>
  <Th06Summary
    v-if="info.game == CONSTANTS.GAME.TH06.ID"
    :filename="file.name"
    :info="info"
  ></Th06Summary>
  <Th07Summary
    v-if="info.game == CONSTANTS.GAME.TH07.ID"
    :filename="file.name"
    :info="info"
  ></Th07Summary>
  <Th08Summary
    v-if="info.game == CONSTANTS.GAME.TH08.ID"
    :filename="file.name"
    :info="info"
  ></Th08Summary>
  <Th09Summary
    v-if="info.game == CONSTANTS.GAME.TH09.ID"
    :filename="file.name"
    :info="info"
  ></Th09Summary>
  <Th10Summary
    v-if="info.game == CONSTANTS.GAME.TH10.ID"
    :filename="file.name"
    :info="info"
  ></Th10Summary>
  <Th11Summary
    v-if="info.game == CONSTANTS.GAME.TH11.ID"
    :filename="file.name"
    :info="info"
  ></Th11Summary>
  <Th12Summary
    v-if="info.game == CONSTANTS.GAME.TH12.ID"
    :filename="file.name"
    :info="info"
  ></Th12Summary>
  <Th128Summary
    v-if="info.game == CONSTANTS.GAME.TH128.ID"
    :filename="file.name"
    :info="info"
  ></Th128Summary>
  <Th13Summary
    v-if="info.game == CONSTANTS.GAME.TH13.ID"
    :filename="file.name"
    :info="info"
  ></Th13Summary>
  <Th14Summary
    v-if="info.game == CONSTANTS.GAME.TH14.ID"
    :filename="file.name"
    :info="info"
  ></Th14Summary>
  <Th15Summary
    v-if="info.game == CONSTANTS.GAME.TH15.ID"
    :filename="file.name"
    :info="info"
  ></Th15Summary>
  <Th16Summary
    v-if="info.game == CONSTANTS.GAME.TH16.ID"
    :filename="file.name"
    :info="info"
  ></Th16Summary>
  <Th17Summary
    v-if="info.game == CONSTANTS.GAME.TH17.ID"
    :filename="file.name"
    :info="info"
  ></Th17Summary>
  <Th18Summary
    v-if="info.game == CONSTANTS.GAME.TH18.ID"
    :filename="file.name"
    :info="info"
  ></Th18Summary>
</template>

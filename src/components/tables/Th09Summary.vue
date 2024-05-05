<script setup lang="ts">
import { ref } from "vue"
import dayjs from "dayjs"
import { CONSTANTS } from "thrpy-parser"

defineProps(["filename", "info"])

const stagesActive = ref(false)
</script>

<template>
  <div class="flex flex-row space-x-3">
    <table
      class="container border border-separate border-slate-500 text-left shadow-lg shadow-th09/50"
    >
      <thead>
        <tr>
          <th class="border border-slate-500 bg-th09 text-slate-100 px-3 py-1" colspan="3">
            {{ filename }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.game`) }}</th>
          <td class="border border-slate-500 px-3 py-1">
            {{ $t(`table.values.${info.game}.title`) }}
          </td>
        </tr>
        <tr>
          <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.difficulty`) }}</th>
          <td class="border border-slate-500 px-3 py-1">
            {{ $t(`table.values.difficulty.${info.difficulty}`) }}
          </td>
        </tr>
        <tr>
          <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.shot`) }}</th>
          <td class="border border-slate-500 px-3 py-1">
            {{ $t(`table.values.${info.game}.shot[${info.shot}]`) }}
          </td>
        </tr>
        <tr>
          <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.date`) }}</th>
          <td class="border border-slate-500 px-3 py-1">
            {{ dayjs(info.date).format("YYYY-MM-DD") }}
          </td>
        </tr>
        <tr>
          <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.name`) }}</th>
          <td class="border border-slate-500 px-3 py-1">{{ info.name }}</td>
        </tr>
        <tr>
          <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.type`) }}</th>
          <td class="border border-slate-500 px-3 py-1">
            {{ $t(`table.values.type[${info.type}]`) }}
          </td>
        </tr>
        <tr>
          <Button
            class="mx-2 my-1 bg-th09 active:bg-th09/50"
            v-if="info.type === CONSTANTS.REPLAY_TYPE.FULL_GAME"
            @click="stagesActive = !stagesActive"
          >
            <span
              >Stages
              <span
                class="pi"
                :class="{ 'pi-caret-left': stagesActive, 'pi-caret-right': !stagesActive }"
              ></span
            ></span>
          </Button>
        </tr>
      </tbody>
    </table>
    <!-- TODO: Add more features to each stage -->
    <Transition name="stages-slide">
      <table
        class="container border border-separate border-slate-500 text-left shadow-lg shadow-th09/50"
        v-show="stagesActive"
      >
        <thead>
          <tr>
            <th class="border border-slate-500 bg-th09 text-slate-100 px-3 py-1" colspan="2">
              Stages
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stage in info.stages" :key="stage.stage">
            <th class="border border-slate-500 px-3 py-1">
              Stage {{ $t(`table.values.${info.game}.stage[${stage.stage}]`) }}
            </th>
            <td class="border border-slate-500 px-3 py-1">{{ $n(stage.score) }}</td>
          </tr>
        </tbody>
      </table>
    </Transition>
  </div>
</template>

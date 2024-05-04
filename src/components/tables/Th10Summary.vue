<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs"
import { CONSTANTS } from "thrpy-parser";

defineProps(["filename", "info"])

const stagesActive = ref(false)

</script>

<template>
    <div class="flex flex-row space-x-3">
        <table class="container border border-separate border-slate-500 text-left shadow-lg shadow-th10/50">
            <thead>
                <tr>
                    <th class="border border-slate-500 bg-th10 text-slate-100 px-3 py-1" colspan="3">{{ filename }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.game`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $t(`table.values.${info.game}.title`) }}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.difficulty`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $t(`table.values.difficulty.${info.difficulty}`) }}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.shot`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">
                        {{ $t(`table.values.${info.game}.shot[${info.shot}]`) }}{{ $t(`table.values.${info.game}.subshot[${info.subshot}]`) }}
                    </td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.score`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $n(info.score)}}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.date`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ dayjs(info.date.getTime() + info.date.getTimezoneOffset() * 60000).format("YYYY-MM-DD HH:mm:ss") }}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.name`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ info.name }}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.slowdown`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ info.slowdown.toFixed(2) }}%</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.type`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $t(`table.values.type[${info.type}]`) }}</td>
                </tr>
                <tr>
                    <Button
                        class="mx-2 my-1 bg-th10 active:bg-th10/50"
                        v-if="info.type === CONSTANTS.REPLAY_TYPE.FULL_GAME && info.difficulty !== CONSTANTS.DIFFICULTY.EXTRA"
                        @click="stagesActive = !stagesActive"
                    >
                        <span>Stages <span class="pi" :class="{ 'pi-caret-left': stagesActive, 'pi-caret-right': !stagesActive }"></span></span>
                    </Button>
                </tr>
            </tbody>
        </table>
        <!-- TODO: Add more features to each stage -->
        <Transition name="stages-slide">
            <table class="container border border-separate border-slate-500 text-left shadow-lg shadow-th10/50" v-show="stagesActive">
                <thead>
                    <tr>
                        <th class="border border-slate-500 bg-th10 text-slate-100 px-3 py-1" colspan="2">Stages</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="stage in info.stages" :key="stage.stage">
                        <th class="border border-slate-500 px-3 py-1">Stage {{ $t(`table.values.stage[${stage.stage}]`) }}</th>
                        <td class="border border-slate-500 px-3 py-1">{{ $n(stage.score) }}</td>
                    </tr>
                </tbody>
            </table>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs"
import { CONSTANTS } from "thrpy-parser";

defineProps(["filename", "info"])

</script>

<template>
    <div class="flex flex-row space-x-3">
        <table class="container border border-separate border-slate-500 text-left shadow-lg shadow-th128/50">
            <thead>
                <tr>
                    <th class="border border-slate-500 bg-th128 text-slate-100 px-3 py-1" colspan="3">{{ filename }}</th>
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
                <tr v-if="info.difficulty !== CONSTANTS.DIFFICULTY.EXTRA">
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.route`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $t(`table.values.th128.route.${info.route}`) }}</td>
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
            </tbody>
        </table>
    </div>
</template>
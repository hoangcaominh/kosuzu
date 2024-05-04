<script setup lang="ts">
import dayjs from "dayjs"

defineProps(["filename", "info"])

</script>

<template>
    <div class="flex flex-row space-x-3">
        <table class="container border border-separate border-slate-500 text-left shadow-lg shadow-th09/50">
            <thead>
                <tr>
                    <th class="border border-slate-500 bg-th09 text-slate-100 px-3 py-1" colspan="3">{{ filename }}</th>
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
                    <td class="border border-slate-500 px-3 py-1">{{ $t(`table.values.${info.game}.shot[${info.shot}]`) }}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.score`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $n(info.score)}}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.date`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ dayjs(info.date).format("YYYY-MM-DD") }}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.name`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ info.name }}</td>
                </tr>
                <tr>
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.type`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $t(`table.values.type[${info.type}]`) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

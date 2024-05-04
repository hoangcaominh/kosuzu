<script setup lang="ts">
import dayjs from "dayjs"

defineProps(["filename", "info"])

</script>

<template>
    <div class="flex flex-row space-x-3">
        <table class="container border border-separate border-slate-500 text-left shadow-lg shadow-th08/50">
            <thead>
                <tr>
                    <th class="border border-slate-500 bg-th08 text-slate-100 px-3 py-1" colspan="3">{{ filename }}</th>
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
                    <td class="border border-slate-500 px-3 py-1">{{ $n(info.score) }}</td>
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
                <tr v-if="info.spell_card_id">
                    <th class="border border-slate-500 px-3 py-1">{{ $t(`table.labels.spell_card_id`) }}</th>
                    <td class="border border-slate-500 px-3 py-1">{{ $t(`table.values.${info.game}.spell_card_id[${info.spell_card_id}]`) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

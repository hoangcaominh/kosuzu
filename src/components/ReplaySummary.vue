<script setup lang="ts">
import { Buffer } from "buffer";
import { parse } from "thrpy-parser"
import { ref } from "vue"

const props = defineProps<{
    file: File
}>()

const info = ref()

props.file.arrayBuffer()
    .then(buffer => info.value = parse(Buffer.from(buffer)))

</script>

<template>
    <p>{{ info }}</p>
    <!-- <p>Hello World</p> -->
</template>
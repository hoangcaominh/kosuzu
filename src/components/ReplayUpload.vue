<script setup lang="ts">
import { ref } from "vue"
import type { FileUploadUploaderEvent } from "primevue/fileupload"

// 512 KB
const MAX_FILE_SIZE = 1024 * 512
// 20 replays
const MAX_FILE_COUNT = 20

const results = ref<File[]>([])

const replayUploader = (event: FileUploadUploaderEvent) => {
  const replays = event.files as File[]
  results.value = []
  replays.forEach((replay) => results.value.push(replay))
}
</script>

<template>
  <FileUpload
    multiple
    :max-file-size="MAX_FILE_SIZE"
    :file-limit="MAX_FILE_COUNT"
    custom-upload
    @uploader="replayUploader($event)"
  >
    <template #empty>
      <p>Drag and drop replay files here to upload.</p>
    </template>
    <template #content="{ files, uploadedFiles, removeFileCallback, removeUploadedFileCallback }">
      <div v-if="files.length > 0">
        <div
          class="flex flex-row items-center space-x-12 px-5 py-1"
          v-for="(file, index) in files"
          :key="file.name + index"
        >
          <div>{{ file.name }}</div>
          <Badge class="px-3" severity="info">{{ (file.size / 1024).toFixed(2) }} KB</Badge>
          <Button
            icon="pi pi-times"
            @click="removeFileCallback(index)"
            outlined
            rounded
            severity="danger"
          ></Button>
        </div>
      </div>
      <div v-if="uploadedFiles.length > 0">
        <div v-for="(file, index) in uploadedFiles" :key="file.name + index">
          <div>{{ file.name }}</div>
          <div>{{ (file.size / 1024).toFixed(2) }} KB</div>
          <Badge class="px-3" value="Completed" severity="success" />
          <Button
            icon="pi pi-times"
            @click="removeUploadedFileCallback(index)"
            outlined
            rounded
            severity="danger"
          ></Button>
        </div>
      </div>
    </template>
  </FileUpload>
  <ReplaySummary v-for="result in results" :key="result.name" :file="result"></ReplaySummary>
</template>

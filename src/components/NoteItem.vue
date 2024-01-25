<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();


const { note } = defineProps({
  note: {
    type: Object,
    required: true
  }
})

function deleteNote() {
  const isConfirmed = window.confirm('Are you sure you want to delete this note?');
  if (isConfirmed) {
    fetch(`http://localhost:3000/notes/${note.id}`, {
      method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
          console.log('Note deleted:', data);
        })
        .catch(error => {
          console.error('Error deleting note:', error);
        });
  }
}
function newNote() {
  router.push('/note/new')
}

</script>

<template>
  <div class="p-4 border rounded shadow-sm">
    <h3 class="text-lg font-semibold">{{ note.title }}</h3>
    <p class="text-gray-700">{{ note.content }}</p>
    <div class="mt-4 flex space-x-3">
      <router-link :to="{ name: 'note-edit', params: { id: note.id }, query: { title: note.title, content: note.content } }" class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</router-link>
      <button @click="deleteNote" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
      <button @click="newNote" class="bg-emerald-500 text-white px-3 py-1 rounded hover:bg-emerald-500">New Note</button>
    </div>
  </div>
</template>

<style scoped></style>

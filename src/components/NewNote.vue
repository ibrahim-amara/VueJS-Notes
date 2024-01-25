<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Use refs for new note properties
const title = ref('');
const content = ref('');

// Function to handle form submission for new note
function submitNewNote() {
  const newNote = {
    title: title.value,
    content: content.value,
  };
  fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newNote),
  })
      .then(response => response.json())
      .then(data => {
        console.log('New Note created:', data);
        router.push('/');
      })
      .catch(error => {
        console.error('Error creating new note:', error);
      });
}
</script>

<template>
  <div class="p-4 border rounded shadow-lg">
    <form @submit.prevent="submitNewNote">
      <div class="mb-4">
        <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
            id="title"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="title"
        />
      </div>
      <div class="mb-4">
        <label for="content" class="block text-gray-700 text-sm font-bold mb-2">Content</label>
        <textarea
            id="content"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="content"
            rows="4"
        />
      </div>
      <button class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600">
        Save
      </button>
    </form>
  </div>
</template>

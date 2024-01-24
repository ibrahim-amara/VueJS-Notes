import { createRouter, createWebHistory } from 'vue-router'
import NoteList from '../components/NoteList.vue'
import NoteEditor from "@/components/NoteEditor.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: NoteList // todo: make this in a home page that has a menu to navigate between sections
    },
    {
      path: '/note/:id/edit',
      name: 'note-edit',
      component: NoteEditor,
      props: true,
    },
    // todo: editor for saving new note
    // todo: editor to show or edit a note
  ]
})

export default router

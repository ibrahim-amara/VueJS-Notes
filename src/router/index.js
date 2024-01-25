import { createRouter, createWebHistory } from 'vue-router'
import NoteList from '../components/NoteList.vue'
import NoteEditor from "@/components/NoteEditor.vue";
import NewNote from "@/components/NewNote.vue";

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
    {
      path: '/note/new',
      name: 'note-new',
      component: NewNote,
      props: true,
    },
  ]
})

export default router

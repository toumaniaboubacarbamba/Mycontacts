import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useAuthStore = defineStore('auth', () =>{
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const isAuth = computed(() => !token.value)

  const login = async( credentials) =>{
    try{
      const response = await axios.post()
    }
  }
})

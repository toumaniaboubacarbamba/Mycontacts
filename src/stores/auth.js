import { axios } from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const isAuth = computed(() => !token.value)

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        'https://api-contact.epi-bluelock.bj/api/users/login',
        credentials,
      )
      user.value = response.data.user
      token.value = response.data.token
      isAuth.value = true
      localStorage.setItem('token', token.value)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  const register = async (userData) => {
    try {
      const response = await axios.post('https://api-contact.epi-bluelock.bj/api/users', userData)
      return response.data
    } catch (error) {
      throw error.response.data
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    isAuth.value = false
    localStorage.removeItem('token')
  }

  return {
    user,
    token,
    isAuth,
    login,
    register,
    logout,
  }
})

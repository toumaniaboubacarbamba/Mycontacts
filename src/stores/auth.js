import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const isAuth = computed(() => !!token.value)

  const login = async (credentials) => {
    try {
      const response = await axios.post(
        'https://api-contact.epi-bluelock.bj/api/users/login',
        credentials,
      )

      console.log('Login response:', response.data)

      user.value = response.data.user || response.data.data || { name: credentials.email }
      token.value = response.data.token || response.data.access_token

      localStorage.setItem('token', token.value)
      return response.data
    } catch (error) {
      console.error('Login error:', error.response?.data)
      throw error.response?.data || { message: 'Login failed' }
    }
  }

  const register = async (userData) => {
    try {
      const registrationData = {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password_confirmation: userData.password_confirmation
      }

      const response = await axios.post(
        'https://api-contact.epi-bluelock.bj/api/users',
        registrationData
      )

      console.log('Register response:', response.data)
      return response.data
    } catch (error) {
      console.error('Register error:', error.response?.data)
      throw error.response?.data || { message: 'Registration failed' }
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
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

import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from './auth'

export const useContactsStore = defineStore('contacts', () => {
  const authStore = useAuthStore()
  const contacts = ref([])
  const currentContact = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const API_BASE = 'https://api-contact.epi-bluelock.bj/api'

  const getAuthHeaders = () => {
    return {
      Authorization: `Bearer ${authStore.token}`
    }
  }

  const fetchContacts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`${API_BASE}/contacts`, {
        headers: getAuthHeaders()
      })
      contacts.value = response.data.data || response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Erreur lors de la récupération des contacts'
      console.error('Fetch contacts error:', err)
    } finally {
      loading.value = false
    }
  }

  const fetchContact = async (id) => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.get(`${API_BASE}/contacts/${id}`, {
        headers: getAuthHeaders()
      })
      currentContact.value = response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Erreur lors de la récupération du contact'
      console.error('Fetch contact error:', err)
    } finally {
      loading.value = false
    }
  }

  const createContact = async (contactData) => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.post(`${API_BASE}/contacts`, contactData, {
        headers: getAuthHeaders()
      })
      contacts.value.push(response.data)
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Erreur lors de la création du contact'
      console.error('Create contact error:', err)
      throw error.value
    } finally {
      loading.value = false
    }
  }

  const updateContact = async (id, contactData) => {
    loading.value = true
    error.value = null
    try {
      const response = await axios.put(`${API_BASE}/contacts/${id}`, contactData, {
        headers: getAuthHeaders()
      })
      const index = contacts.value.findIndex(contact => contact.id === id)
      if (index !== -1) {
        contacts.value[index] = response.data
      }
      return response.data
    } catch (err) {
      error.value = err.response?.data?.message || 'Erreur lors de la mise à jour du contact'
      console.error('Update contact error:', err)
      throw error.value
    } finally {
      loading.value = false
    }
  }

  const deleteContact = async (id) => {
    loading.value = true
    error.value = null
    try {
      await axios.delete(`${API_BASE}/contacts/${id}`, {
        headers: getAuthHeaders()
      })
      contacts.value = contacts.value.filter(contact => contact.id !== id)
    } catch (err) {
      error.value = err.response?.data?.message || 'Erreur lors de la suppression du contact'
      console.error('Delete contact error:', err)
      throw error.value
    } finally {
      loading.value = false
    }
  }

  const searchContacts = (query) => {
    if (!query) return contacts.value
    return contacts.value.filter(contact =>
      (contact.name && contact.name.toLowerCase().includes(query.toLowerCase())) ||
      (contact.email && contact.email.toLowerCase().includes(query.toLowerCase())) ||
      (contact.phone && contact.phone.toLowerCase().includes(query.toLowerCase()))
    )
  }

  return {
    contacts,
    currentContact,
    loading,
    error,
    fetchContacts,
    fetchContact,
    createContact,
    updateContact,
    deleteContact,
    searchContacts
  }
})

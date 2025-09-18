<template>
  <div class="p-4">
    <div v-if="loading" class="text-center py-12">
      <p>Chargement...</p>
    </div>

    <div v-else-if="error" class="text-center py-12 text-red-500">
      <p>{{ error }}</p>
      <button @click="$router.back()" class="mt-4 px-4 py-2 bg-gray-200 rounded-md">Retour</button>
    </div>

    <div v-else-if="contact" class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-3xl font-bold text-slate-900">Détails du contact</h1>
        <button @click="$router.back()" class="px-4 py-2 bg-gray-200 rounded-md">Retour</button>
      </div>

      <div class="flex flex-col md:flex-row gap-6">
        <div class="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
          <span class="text-4xl text-gray-500">{{ contact.name.charAt(0).toUpperCase() }}</span>
        </div>

        <div class="flex-1">
          <h2 class="text-2xl font-semibold mb-4">{{ contact.name }}</h2>

          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-500">Téléphone</p>
              <p class="text-lg">{{ contact.phone || 'Non renseigné' }}</p>
            </div>

            <div>
              <p class="text-sm text-gray-500">Email</p>
              <p class="text-lg">{{ contact.email || 'Non renseigné' }}</p>
            </div>

            <div v-if="contact.gender">
              <p class="text-sm text-gray-500">Genre</p>
              <p class="text-lg">{{ contact.gender }}</p>
            </div>

            <div v-if="contact.address">
              <p class="text-sm text-gray-500">Adresse</p>
              <p class="text-lg">{{ contact.address }}</p>
            </div>
          </div>

          <div class="mt-8 flex space-x-4">
            <button
              @click="editContact"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Modifier
            </button>
            <button
              @click="deleteContact"
              class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useContactsStore } from '@/stores/contacts'

const route = useRoute()
const router = useRouter()
const contactsStore = useContactsStore()

const contactId = route.params.id
const contact = computed(() => contactsStore.currentContact)
const loading = computed(() => contactsStore.loading)
const error = computed(() => contactsStore.error)

onMounted(() => {
  contactsStore.fetchContact(contactId)
})

const editContact = () => {
  router.push(`/contacts/edit/${contactId}`)
}

const deleteContact = async () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
    try {
      await contactsStore.deleteContact(contactId)
      router.push('/contacts')
    } catch (err) {
      console.error('Erreur lors de la suppression:', err)
    }
  }
}
</script>

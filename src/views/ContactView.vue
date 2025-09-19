<template>
  <div class="p-4">
    <div class="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
      <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 class="text-3xl font-bold text-slate-900">Mes Contacts</h2>
        <div class="flex space-x-4 mt-4 sm:mt-0">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher un contact..."
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            @click="showAddForm = true"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Ajouter un contact
          </button>
        </div>
      </div>

      <div v-if="loading" class="text-center py-12">
        <p>Chargement des contacts...</p>
      </div>

      <div v-else-if="error" class="text-center py-12 text-red-500">
        <p>{{ error }}</p>
      </div>

      <div v-else>
        <div v-if="filteredContacts.length === 0" class="text-center py-12">
          <p class="text-gray-500">Aucun contact trouvé.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          <div
            v-for="contact in filteredContacts"
            :key="contact.id"
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            @click="viewContact(contact.id)"
          >
            <div class="bg-gray-100 aspect-[23/16] flex items-center justify-center">
              <span class="text-4xl text-gray-500" v-if="contact && contact.name">
                {{ contact.name.charAt(0).toUpperCase() }}
              </span>
              <span class="text-4xl text-gray-500" v-else>?</span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-slate-900 mb-2">
                {{ contact && contact.name ? contact.name : 'Nom non disponible' }}
              </h3>
              <p class="text-slate-600 text-[15px] mb-1">
                {{ contact && contact.phone ? contact.phone : 'Aucun téléphone' }}
              </p>
              <p class="text-slate-600 text-[15px]">
                {{ contact && contact.email ? contact.email : 'Aucun email' }}
              </p>
              <div class="mt-4 flex space-x-2">
                <button
                  @click.stop="editContact(contact.id)"
                  class="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                >
                  Modifier
                </button>
                <button
                  @click.stop="deleteContact(contact.id)"
                  class="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                >
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showAddForm || showEditForm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h3 class="text-xl font-semibold mb-4">
          {{ showEditForm ? 'Modifier le contact' : 'Ajouter un contact' }}
        </h3>

        <form @submit.prevent="showEditForm ? updateContact() : createContact()">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
              <input
                v-model="form.firstname"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
              <input
                v-model="form.lastname"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                v-model="form.email"
                type="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Genre</label>
              <select
                v-model="form.gender"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionner</option>
                <option value="Male">Homme</option>
                <option value="Female">Femme</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
              <input type="date" name="birthdate" id="birthdate" v-model="form.birthdate" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Position</label>
              <input type="text" name="position" id="position" v-model="form.position" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Company</label>
              <textarea
                v-model="form.company"
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
          </div>

          <div class="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              @click="closeForm"
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              type="submit"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {{ showEditForm ? 'Modifier' : 'Ajouter' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/stores/contacts'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const contactsStore = useContactsStore()
const authStore = useAuthStore()

const searchQuery = ref('')
const showAddForm = ref(false)
const showEditForm = ref(false)
const editingContactId = ref(null)

const form = ref({
  name: '',
  phone: '',
  email: '',
  gender: '',
  address: '',
  birthdate: '',
  position: '',
  company: '',
})

const loading = computed(() => contactsStore.loading)
const error = computed(() => contactsStore.error)
const contacts = computed(() => contactsStore.contacts || [])
const filteredContacts = computed(() => {
  if (!contacts.value) return []
  return contactsStore.searchContacts(searchQuery.value)
})

onMounted(() => {
  contactsStore.fetchContacts()
})

const viewContact = (id) => {
  router.push(`/contacts/${id}`)
}

const editContact = (id) => {
  const contact = contacts.value.find(c => c.id === id)
  if (contact) {
    form.value = { ...contact }
    editingContactId.value = id
    showEditForm.value = true
  }
}

const deleteContact = async (id) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
    try {
      await contactsStore.deleteContact(id)
    } catch (err) {
      console.error('Erreur lors de la suppression:', err)
    }
  }
}

const createContact = async () => {
  try {
    await contactsStore.createContact(form.value)
    closeForm()
  } catch (err) {
    console.error('Erreur lors de la création:', err)
  }
}

const updateContact = async () => {
  try {
    await contactsStore.updateContact(editingContactId.value, form.value)
    closeForm()
  } catch (err) {
    console.error('Erreur lors de la modification:', err)
  }
}

const closeForm = () => {
  showAddForm.value = false
  showEditForm.value = false
  editingContactId.value = null
  form.value = {
    name: '',
  phone: '',
  email: '',
  gender: '',
  birthdate: '',
  position: '',
  company: '',
  }
}

// Fermer le modal en appuyant sur Échap
const handleEscape = (e) => {
  if (e.key === 'Escape') {
    closeForm()
  }
}

watch([showAddForm, showEditForm], ([addVisible, editVisible]) => {
  if (addVisible || editVisible) {
    window.addEventListener('keydown', handleEscape)
  } else {
    window.removeEventListener('keydown', handleEscape)
  }
})
</script>

<template>
  <div class="flex flex-col justify-center min-h-screen p-4 bg-gray-50">
    <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8 bg-white">
      <div class="text-center mb-12">
        <h1 class="font-bold text-slate-950 text-2xl">Inscription</h1>
      </div>

      <form @submit.prevent="register">
        <div class="space-y-6">
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Nom complet</label>
            <input v-model="form.name" name="name" type="text" id="name" required
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Entrez votre nom" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Email</label>
            <input v-model="form.email" name="email" type="email" id="email" required
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Entrez votre email" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Mot de passe</label>
            <input v-model="form.password" name="password" type="password" id="password" required
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Entrez votre mot de passe" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Confirmer le mot de passe</label>
            <input v-model="form.confirm_password" name="confirm_password" type="password" id="confirm_password" required
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Confirmez votre mot de passe" />
          </div>

          <div v-if="registerError" class="text-red-500 text-sm">
            {{ registerError }}
          </div>

          <div class="flex items-center">
            <input id="terms" name="terms" type="checkbox" required
              class="h-4 w-4 shrink-0 text-black focus:ring-black border-gray-500 rounded" />
            <label for="terms" class="text-slate-800 ml-3 block text-sm">
              J'accepte les <a href="javascript:void(0);" class="text-black font-medium hover:underline ml-1">Conditions d'utilisation</a>
            </label>
          </div>
        </div>

        <div class="mt-12">
          <button type="submit" :disabled="loading"
            class="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-black bg-[#DADDD8] hover:bg-[#DADDC8] focus:outline-none cursor-pointer disabled:opacity-50">
            {{ loading ? 'Inscription...' : 'Créer un compte' }}
          </button>
        </div>
        <p class="text-slate-800 text-sm mt-6 text-center">Vous avez déjà un compte? <a href="javascript:void(0);"
            class="text-black font-medium hover:underline ml-1 ">
            <RouterLink to="/login" class="nav-link">Connectez-vous ici</RouterLink>
          </a></p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirm: ''
})

const loading = ref(false)
const registerError = ref('')

const register = async () => {
  if (form.value.password !== form.value.password_confirm) {
    registerError.value = 'Les mots de passe ne correspondent pas'
    return
  }

  loading.value = true
  registerError.value = ''

  try {
    await authStore.register(form.value)
    router.push('/login')
  } catch (error) {
    registerError.value = error.message || "Échec de l'inscription. Veuillez réessayer."
  } finally {
    loading.value = false
  }
}
</script>

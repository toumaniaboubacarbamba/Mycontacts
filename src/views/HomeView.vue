<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-mindaro-50 to-sage-50 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <section class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-drab-900 mb-4">Bienvenue sur MyContacts</h1>
        <p class="text-xl text-drab-700 mb-8 max-w-3xl mx-auto">
          Gérez tous vos contacts en un seul endroit. Simple, rapide et sécurisé.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/register"
            class="bg-[#DADDD8] hover:bg-[#DADDC2] text-[#050517] font-semibold px-6 py-3 rounded-lg transition">
            Commencer gratuitement
          </RouterLink>
          <RouterLink to="/login"
            class="border-2 border-[#DADDC2] text-[#1C1C1C] hover:bg-[#ECEBE4] font-semibold px-6 py-3 rounded-lg transition">
            Se connecter
          </RouterLink>
        </div>
      </section>

      <section class="mb-16">
        <h2 class="text-3xl font-bold text-[#050517] text-center mb-12">
          Pourquoi choisir MyContacts ?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-[#DADDD8] rounded-lg shadow-md">
            <div class="w-16 h-16 bg-mindaro-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl"><img src="../assets/telephone.png" alt=""></span>
            </div>
            <h3 class="text-xl font-semibold text-[#050517] mb-3">Gestion simplifiée</h3>
            <p class="text-[#1C1C1C]">Organisez tous vos contacts en quelques clics.</p>
          </div>

          <div class="text-center p-6 bg-[#DADDD8] rounded-lg shadow-md">
            <div class="w-16 h-16 bg-mindaro-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl"><img src="../assets/bouclier(1).png" alt=""></span>
            </div>
            <h3 class="text-xl font-semibold text-[#050517] mb-3">Sécurisé</h3>
            <p class="text-[#1C1C1C]">Vos données sont protégées et privées.</p>
          </div>

          <div class="text-center p-6 bg-[#DADDD8] rounded-lg shadow-md">
            <div class="w-16 h-16 bg-mindaro-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl"><img src="../assets/accessibilite.png" alt=""></span>
            </div>
            <h3 class="text-xl font-semibold text-[#050517] mb-3">Accessible</h3>
            <p class="text-[#1C1C1C]">Disponible sur tous vos appareils.</p>
          </div>
        </div>
      </section>

      <section class="bg-[#DADDD8] rounded-lg shadow-md p-8 mb-16">
        <h2 class="text-3xl font-bold text-[#050517] text-center mb-8">Comment ça marche ?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-reseda-600  rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              <span><img src="../assets/numero-1.png" alt=""></span>
            </div>
            <h3 class="text-lg font-semibold text-[#050517] mb-2">Créez un compte</h3>
            <p class="text-drab-600">Inscrivez-vous en moins d'une minute.</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-reseda-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              <span><img src="../assets/numero-2.png" alt=""></span>
            </div>
            <h3 class="text-lg font-semibold text-[#050517] mb-2">Ajoutez vos contacts</h3>
            <p class="text-drab-600">Saisissez les informations de vos contacts.</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-reseda-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              <span><img src="../assets/numero-3.png" alt=""></span>
            </div>
            <h3 class="text-lg font-semibold text-[#050517] mb-2">Organisez</h3>
            <p class="text-drab-600">Retrouvez facilement tous vos contacts.</p>
          </div>
        </div>
      </section>

      <section class="text-center">
        <h2 class="text-3xl font-bold text-[#050517] mb-6">Prêt à commencer ?</h2>
        <p class="text-xl text-drab-700 mb-8">
          Rejoignez des milliers d'utilisateurs qui gèrent leurs contacts avec MyContacts.
        </p>
        <RouterLink to="/register"
          class="bg-[#DADDD8] hover:bg-[#DADDC2] text-[#050517] font-semibold px-8 py-4 rounded-lg text-lg transition inline-block">
          Créer mon compte gratuit
        </RouterLink>
      </section>
    </div>
  </main>
</template>

<style scoped></style>

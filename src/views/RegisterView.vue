<template>
  <div class="flex flex-col justify-center sm:h-screen p-4">
    <div class="max-w-md w-full mx-auto border border-gray-300 rounded-2xl p-8">
      <div class="text-center mb-12">
        <!-- <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
            class="w-40 inline-block" />
        </a> -->
        <h1 class="font-bold text-slate-950">Contact Register</h1>
      </div>

      <form @submit.prevent="register">
        <div class="space-y-6">
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Name</label>
            <input v-model="name" name="name" type="text"
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Email</label>
            <input v-model="email" name="email" type="text"
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter email" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <input v-model="password" name="password" type="password"
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter password" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
            <input v-model="cpassword" name="cpassword" type="password"
              class="text-slate-900 bg-white border border-gray-500 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
              placeholder="Enter confirm password" />
          </div>

          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 shrink-0 text-black focus:ring-black border-gray-500 rounded" />
            <label for="remember-me" class="text-slate-800 ml-3 block text-sm">
              I accept the <a href="javascript:void(0);" class="text-black font-medium hover:underline ml-1">Terms
                and Conditions</a>
            </label>
          </div>
        </div>

        <div class="mt-12">
          <button type="submit"
            class="w-full py-3 px-4 text-sm tracking-wider font-medium rounded-md text-black bg-[#DADDD8] hover:bg-[#DADDC8] focus:outline-none cursor-pointer">
            Create an account
          </button>
        </div>
        <p class="text-slate-800 text-sm mt-6 text-center">Already have an account? <a href="javascript:void(0);"
            class="text-black font-medium hover:underline ml-1 ">
            <RouterLink to="/login" class="nav-link">Login Here</RouterLink>
          </a></p>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>

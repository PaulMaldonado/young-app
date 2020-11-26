<template>
  <div>
    <button class="btn btn-google btn-block mt-3" @click="$emit('google-sign-in')">
        <img src="../../assets/image/google-icon.svg" alt="google" class="icon-google">
        Iniciar sesión con google
    </button>
  </div>
</template>

<script>
export default {
    name: 'Google'
}
</script>

<style scoped>
    .btn-google {
        background-color: #8c8b96;
        color: #ffffff;
        border-radius: 20px;
    }

    .icon-google {
        width: 25px;
        height: 25px;
    }
</style>
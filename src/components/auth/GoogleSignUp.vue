<template>
  <div>
    <button class="btn btn-google btn-block mt-3" @click="$emit('google-sign-up')">
        <img src="../../assets/image/google-icon.svg" alt="google" class="icon-google">
        Crear cuenta con google
    </button>
  </div>
</template>

<script>
export default {
    name: 'GoogleSignUp'
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
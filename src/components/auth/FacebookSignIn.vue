<template>
  <div>
    <button class="btn btn-facebook-login btn-block mt-3" @click="$emit('facebook-sign-in')">
        <span>
            <i class="fab fa-facebook"></i>
        </span>
        Iniciar sesión con facebook
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .btn-facebook-login {
        background-color: #1877F2;
        color: #ffffff;
        border-radius: 20px;
    }
</style>
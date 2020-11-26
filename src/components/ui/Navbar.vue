<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-app p-4">
        <a href="#" class="navbar-brand home-app">Young app</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <template v-if="user.logged">
                <li class="nav-item active">
                    <router-link to="/profile" class="nav-link links">Mi perfil</router-link>
                </li>

                <li class="nav-item active">
                    <router-link to="/create" class="nav-link links">Registrar abono</router-link>
                </li>

                <li class="nav-item active">
                    <router-link to="/show" class="nav-link links">Lista de abonos</router-link>
                </li>
            </template>

            <template v-else>
                <li class="nav-item active">
                    <router-link to="/" class="nav-link links">Inicio</router-link>
                </li>

                <li class="nav-item active">
                <router-link to="/register" class="nav-link links">Crear cuenta</router-link>
                </li>
            </template>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Navbar',

    computed: {
        ...mapGetters({
            user: 'user'
        })
    }
}
</script>

<style scoped>
    .bg-app {
        background-color: #ffffff;
    }

    .home-app {
        color: #2b2936;
        font-size: 1.5em;
        font-weight: bold;
    }

    .links {
        color: #2b2936;
        font-size: 1.2em;
        font-weight: bold;
    }
</style>
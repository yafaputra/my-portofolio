<template>
  <Navbar />
  <router-view />
  <mycontact />
</template>

<script>
import Navbar from './components/NavBar.vue'
import mycontact from './components/MyContact.vue'

export default {
  components: {
    Navbar,
    mycontact
  }
}
</script>

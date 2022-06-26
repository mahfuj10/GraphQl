<template>

  <div>
    <Navigation />
    <Header />
    <Blogs />
  </div>

</template>

<script>

import Navigation from '@/components/Navigation.vue';
import Header from '@/components/Header.vue';
import Blogs from '../views/Blogs/Blogs';

export default {
  name: 'HomeView',
  components: {
    Navigation,
    Header,
    Blogs
  }
}
</script>

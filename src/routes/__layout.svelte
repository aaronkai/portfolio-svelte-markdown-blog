<script>import "../app.postcss";
import Header from '$lib/Header.svelte';
import Footer from '$lib/Footer.svelte'
</script>


<div class="grid grid-rows-layout min-h-full">
  <Header />
  <slot></slot>
  <Footer />

</div>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="jumbotron">
          <div class="container">
            <span class="display-4 h1">Vue.js Blog</span>
            <p class="lead">Simple example how to connect to the server, paginate results, create single page app...</p>
          </div>
        </div>
     </div>

     <router-view></router-view>

     <footer class="col-sm-12">
       <hr>
       <p class="text-center"><a href="http://www.codepress.com" target="_blank">codepress </a> &copy; 2019 </p>
     </footer>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.container {
  max-width: 700px;
}
h1:first-letter, h2:first-letter {
  text-transform:uppercase;
}
</style>

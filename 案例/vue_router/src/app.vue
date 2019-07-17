<template> 
    <div>
        <header-vue></header-vue>
        <router-link :to = "{ name: 'music' }">music</router-link>
        <hr>
        <router-view></router-view>
        <hr>
         <footerVue></footerVue>
    </div>
   
</template>

<script>
    export default {
    
    }
</script>

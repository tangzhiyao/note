<template>
    <div>
        <router-link :to = "{ name: 'neidi' }">内地</router-link>
        <router-link :to = "{ name: 'oumei' }">欧美</router-link>
        
        <router-view ></router-view>
    </div>
</template>

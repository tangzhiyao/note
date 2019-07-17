<template> 
    <div>
       {{ data }}
       <button @click="getdata">get</button>
       <button @click="postto">sent</button>
    </div>
   
</template>

<script>
    export default {
        data() {
            return {
                data: []
            }
        },
        methods: {
            postto() {
                this.$axios.post('http://127.0.0.1:50001/add',{
                    asdasd: '4'
                }).then(res => {
                    console.log(res)
                })               
            },
            getdata() {
                this.$axios.post('http://127.0.0.1:50001/')
                .then(res => {
                    this.data = res.data
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

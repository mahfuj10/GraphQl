<template>

    <nav>
        <img width="110" src="../assets/572.png" alt="">
        <span>
            <router-link to="/">Home</router-link>
            <router-link to="/home">About</router-link>
            <router-link to="/home">Login</router-link>
            <router-link to="/addblog">Add Blog</router-link>
        </span>
    </nav>

</template>

<script>


export default {
    name: 'Navigation',
    components: {
    }
}
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #19191B;
    height: 20px;
    padding: 30px;
}

nav span a {
    text-decoration: none;
    margin-left: 20px;
    font-weight: bold;
    color: white;
}

nav span a.router-link-exact-active {
    color: #DC3545;
    text-decoration: line-through;
}
</style>
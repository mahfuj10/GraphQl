<template>
    <header :style="{ backgroundImage: `url('https://tripster-23f55.web.app/static/media/image2.4ebe8428.jpg')` }">

        <h1>My Daily Travel Blog To Inspire And <br>
            Get You Motivated!</h1>

    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    height: 100vh;
    width: 100vw;
    background-size: cover;
    display: flex;
    background-attachment: fixed;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 3.75rem;
    font-family: Nunito, sans-serif;
    color: white;
    font-weight: 300;
    text-align: center;
}
</style>
<template>

    <el-col v-if="blog.blogImg != ''" :span="8">

        <el-card class="blog">

            <img :src="blog.blogImg" alt="blogImage">

            <h3>{{ blog.name }}</h3>

        </el-card>

    </el-col>

</template>

<script>




export default {
    name: 'Blog',
    props: {
        blog: Object
    },

}

</script>


<style scoped>
.blog {
    width: 100%;
    cursor: pointer;
}

.blog img {
    height: 350px;
    width: 100%;
}

.link {
    text-decoration: none !important;
}
</style>

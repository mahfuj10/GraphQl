<template>


    <section>


        <el-row :gutter="20" style="padding: 0 50px;">


            <Blog v-for="blog of blogs" :blog="blog" />



        </el-row>


    </section>


</template>

<script>

import gql from "graphql-tag";
import Blog from "@/components/Blog.vue";

export default {
    name: 'Blogs',
    apollo: {
        books: gql` {
        books {
            name
        }
    }`,
        blogs: gql` {
        blogs {
            name,
            blogImg,
            id,
        }
    }`,
    },
    components: {
        Blog,

    },

}

</script>


<style scoped>
.el-row {
    margin-bottom: 20px;

}

.el-col {
    border-radius: 4px;
    margin-top: 20px;
}



.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>

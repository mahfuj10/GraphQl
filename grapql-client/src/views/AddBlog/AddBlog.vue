<template>

    <section>

        <Navigation />


        <article>
            <el-card id="card">



                <el-input class="field" placeholder="Blog name" v-model="name"></el-input>
                <el-input class="field" placeholder="Blog description" v-model="description"></el-input>
                <el-input class="field" placeholder="Location" v-model="loaction"></el-input>
                <el-input class="field" placeholder="Writer name" v-model="writer"></el-input>
                <el-input class="field" placeholder="Blog image url" v-model="blogImg"></el-input>
                <el-input class="field" placeholder="Date" type="date" v-model="date"></el-input>



                <el-button type="primary" v-on:click="sendPost" plain>POST</el-button>
            </el-card>
        </article>

    </section>

</template>

<script>

import Navigation from '@/components/Navigation.vue';
import gql from "graphql-tag";

export default {
    name: "AddBlog",
    data() {
        return {
            name: '',
            loaction: '',
            writer: '',
            id: String(Math.ceil(Math.random() * 1000)),
            blogImg: '',
            date: '',
            description: '',
        }
    },
    components: {
        Navigation
    },
    methods: {



        // ....


        async sendPost() {

            if (!this.name || !this.loaction || !this.loaction || !this.writer || !this.blogImg || !this.date || !this.description) {
                alert("Please give the data");
                return;
            }


            try {


                await this.$apollo.mutate({

                    mutation: gql`
            mutation($name:String!, $loaction:String!, $writer:String!, $id:String!, $blogImg:String!, $date:String!, $description: String!){
                
                addBlog(name: $name, loaction: $loaction, writer: $writer, blogImg: $blogImg, date: $date, description: $description, id: $id){
                    name
                    loaction
                    writer
                    id
                    blogImg
                    date
                    description
                  }
              }`,
                    variables: {
                        name: this.name,
                        loaction: this.loaction,
                        writer: this.writer,
                        id: this.id,
                        blogImg: this.blogImg,
                        date: this.date,
                        description: this.description
                    },
                })

                this.name = '';
                this.loaction = '';
                this.writer = '';
                this.id = '';
                this.blogImg = '';
                this.date = '';
                this.description = '';
                alert("Successfully post.")
            }
            catch (err) {
                console.error(err.message)
            }


        }




        // ....












    }
}

</script>

<style scoped>
section {
    width: 100%;
    height: 100vh;
}

article {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
}

#card {
    width: 450px;
}

.field {
    /* padding: 10px;

    margin-bottom: 50px; */
    width: 100%;
    margin-bottom: 20px;
}
</style>
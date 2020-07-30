<template>
    <div class="about">
         <Loader :isVisible = "showLoader" />
        <div class="container">
            <h1>Coming soon</h1>
        </div>
       
    </div>
</template>

<script>

import Loader from "../components/Loader"
import { mapGetters , mapActions } from "vuex";

export default {
    name : "About",
    components : {
       Loader
    },
   
      data () {
        return {
            showLoader: true,
            users: [
                {
                  user_image : require("../assets/pics-1.png"),
                  username : "Dannie Trops",
                  user_upvote : "23"
                },
            ]

        }
    },
    methods: { 
        isLoaded(){
            this.showLoader = false
        },
        ...mapActions(['fetchReddits'])
    },

    computed: mapGetters(['allReddits'])  ,
        async created() {
            await this.fetchReddits(); 
        }
};

</script>

<style lang="scss" scoped>
        // .container{
        //     margin-top:40px;
        //     color:#8F8F8F;
        //     font-weight: 600;
        //     .row{
        //         .col-md-2{
        //             h2{
        //                 font-size:15px;
        //                 font-weight:700;
        //             }
        //             ul{
        //                 padding:0;
        //                 margin-top: 25px;
        //                 li{
        //                     list-style:none;
        //                     font-size:14px;
        //                     padding: 5px;
        //                     margin-bottom: 5px;;
        //                 }
        //                 .active{
        //                     background-color: #E8EBFB;
        //                     border-left:8px solid #3D5AF1;
        //                     color:#3D5AF1;
        //                 }
        //             }
        //         }
        //         .col-md-8{
        //             padding:0 50px;
        //         }
        //     }
        //     @media only screen and (max-width:320px){
        //        .row{
        //            .col-md-2{
        //                display:none;
        //            }
        //            .col-md-8{
        //                padding:0 15px;
        //            }
        //        }
        //    }
        //     @media only screen and (min-width:321px) and (max-width:540px){
        //         .row{
        //            .col-md-2{
        //                display:none;
        //            }
        //            .col-md-8{
        //                padding:0 25px;
        //            }
        //        }
        //     }
        //     @media only screen and (min-width:541px) and (max-width:720px){
        //         .row{
        //            .col-md-2{
        //                display:none;
        //            }
        //            .col-md-8{
        //                padding:0 50px;
        //            }
        //        }
        //     }
        // }
</style>

<template>
    <div>
       <Loader :isVisible = "showLoader" />

        <div class="container">
            <div class="row">
                <div class="col-md-2 lists">
                    <h2>Menu</h2>
                    <ul>
                        <li class="active">Home</li>
                        <li>Explore Topics</li>
                        <li>My Topics</li>
                        <li>My Answers</li>
                    </ul>
                </div>
                <div class="col-md-8">
                    <SortReddit />
                    
                    <SubReddit 
                        v-for= "reddit in allReddits" 
                        :key="reddit.id"
                        :reddit="reddit"
                    />
                </div>
                <div class="col-md-2 top">
                    <SideInfo 
                         v-for= "user in users" 
                        :key="user.color"
                        :user="user"
                    />
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import SubReddit from "../components/SubReddit"
import Loader from "../components/Loader"
import SideInfo from "../components/SideInfo"
import SortReddit from "../components/SortReddit"
import { mapGetters , mapActions } from "vuex";

export default {
    name:"Home",
    components : {
       SubReddit,
       Loader,
       SideInfo,
       SortReddit

    },
      data () {
        return {
            showLoader: false,
            users: [
                {
                  user_image : require('../assets/pics-1.png'),
                  username : "Dannie Trops",
                  user_upvote : "23"
                },
            ]

        }
    },

    // methods : {
    //     isLoaded(){
    //         this.showLoader = false
    //     }
    // },
    methods: { 
        isLoaded(){
            this.showLoader = false
        },
        ...mapActions(['fetchReddits'])
    },

    computed: mapGetters(['allReddits']),

    created() {
        this.fetchReddits(); 
    }
};
</script>

<style lang="scss" scoped>
        .container{
            margin-top:40px;
            color:#8F8F8F;
            font-weight: 600;
            position: relative;
            .row{
                position: relative;
                left:0;
                .col-md-2{
                    h2{
                        font-size:15px;
                        font-weight:700;
                    }
                    ul{
                        padding:0;
                        margin-top: 25px;
                        li{
                            list-style:none;
                            font-size:14px;
                            padding: 5px;
                            margin-bottom: 5px;;
                        }
                        .active{
                            background-color: #E8EBFB;
                            border-left:8px solid #3D5AF1;
                            color:#3D5AF1;
                        }
                    }
                }
                .col-md-8{
                    padding:0 50px;
                }
            }
            @media only screen and (max-width:320px){
               .row{
                   .col-md-2{
                       display:none;
                   }
                   .col-md-8{
                       padding:0 15px;
                   }
               }
           }
            @media only screen and (min-width:321px) and (max-width:540px){
                .row{
                   .col-md-2{
                       display:none;
                   }
                   .col-md-8{
                       padding:0 25px;
                   }
               }
            }
            @media only screen and (min-width:541px) and (max-width:720px){
                .row{
                   .col-md-2{
                       display:none;
                   }
                   .col-md-8{
                       padding:0 50px;
                   }
               }
            }
        }
</style>

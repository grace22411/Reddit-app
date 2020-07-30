<template>
    <div>
        
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-2 col-2 logo">
                        <router-link to="/" ><i class="fab fa-reddit-square"></i></router-link>
                    </div>
                    <div class="col-md-8 col-8 search-input">
                        <input @input="searchReddits(reddit.title)" type="text" placeholder="Search for topic">
                    </div>
                    <div class="col-md-2 col-2 profile">
                        <i class="far fa-bell"></i>
                        <img src="../assets/pics-1.png" alt="">
                    </div>
                </div>
            </div>
            
        </header>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name : "AppNavigation",
    methods: { 
        ...mapActions(['searchReddits'])
    },
   
}
</script>

<style lang="scss" scoped>
    header{
        box-shadow:0px 2px 5px rgba(0,0,0,0.1);
        height:80px;
        width:100%;
        background-color: #fff;
        padding:20px 0;
        .container{
            background-color: #fff;
        }
        .col-md-2{
            padding-top:5px;
        }
        .logo{
            .fa-reddit-square{
                color:#3D5AF1;
                font-size:30px;
            }
        }
        .search-input{
            text-align:center;
            input{
                 width:60%;
                 border:none;
                 background-color: #F3F3F3;
                 height:40px;
                 padding:15px;
                 border-radius:5px;
            }
           @media only screen and (max-width:320px){
               input{
                   width:100%;
               }
           }
            @media only screen and (min-width:321px) and (max-width:540px){
                 input{
                   width:95%;
               }
            }
            @media only screen and (min-width:541px) and (max-width:720px){
                 input{
                   width:85%;
               }
            }
        }
        .profile{
            text-align: right;
            img{
                height:30px;
                width:30px;
                margin-left: 15px;
            }
            @media only screen and (max-width:320px){
              .fa-bell{
                  display: none;
              }
              img{
                  margin-left: 0;;
              }
           }
            @media only screen and (min-width:321px) and (max-width:540px){
                 input{
                   width:95%;
               }
            }
            @media only screen and (min-width:541px) and (max-widt
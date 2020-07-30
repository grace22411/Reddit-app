<template>
<router-link class="router-link" to="/about">
    <div id="feed">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-1 col-2">
                    <i class="fas fa-arrow-up"></i><br>
                    <p>{{reddit.upVotes}}</p>
                    <i class="fas fa-arrow-down"></i>
                </div>
                <div class="col-md-11 col-10">
                    <div class="inner-card">
                            <div class="image-wrap">
                                <h5>{{reddit.title}}</h5>
                            </div>

                            <div class="post-image">
                                <img :src="reddit.images" class="img-fluid" />
                            </div>
                            <div class="text-wrap">
                                <p>{{reddit.details}}</p>
                            </div>
                        <div class="story-detail">
                            <img :src="reddit.src" />
                            <p>
                                posted by
                                <span>{{reddit.author_fullname}}</span>
                            </p>
                            <p>{{reddit.date}}</p>
                            <div class="comment">
                                
                                <p><i class="far fa-comment-alt"></i> {{reddit.comment}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</router-link>
</template>

<script>

export default {
    name: 'SubReddit',
    props: ['reddit'],
    
};
</script>

<style lang="scss" scoped>
a{
    color:#8F8F8F;
}
a:hover{
     text-decoration: none;
}
#feed {
    background-color: #fff !important;
    width: 100%;
    margin-bottom: 50px;
    cursor:pointer;
    padding: 20px 50px 10px 0 ;
    height: auto;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
    border-radius: 8px;
    .container-fluid {
        .row {
            .col-md-1{
                text-align: center;
                font-size:14px;
                p{
                    margin-bottom:0;
                }
            }
            .col-md-11 {
                h5 {
                    color: #545454;
                }
                .post-image{
                    height:auto;
                    width:100%;
                    padding:8px 0;
                    img{
                        width:100%;
                        height:350px;
                    }
                }
                .text-wrap{

                }
                .inner-card{
                    .story-detail{
                        border-top:1px solid rgba(0, 0, 0, 0.05);
                        padding-top:10px;
                        display: flex;
                        img{
                            height:20px;
                            width:20px;
                        }
                        p{
                            font-size:13px;
                            font-weight: 600;
                            margin-left: 20px;;
                            span{
                                color:#3D5AF1;
                            }
                        }
                        .comment{
                            margin-left:auto;
                            display: flex;
                            p{
                                margin:0 0 0 10px ;
                            }
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width:320px){
        padding: 20px 0px 10px 0 ;
    }
    @media only screen and (min-width:321px) and (max-width:540px){
        padding: 20px 0px 10px 0 ;
    }
    @media only screen and (min-width:541px) and (max-width:720px){
          padding: 20px 0px 10px 0 ;
    }
}
</style>
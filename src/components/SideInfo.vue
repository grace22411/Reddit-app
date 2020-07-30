<template>
    <div class="side-info">
        <button><i class="fas fa-plus"></i> Start A New Topic</button>
        <div class="container-fluid top-users">
            <h4>Top Users</h4>
            <div class="row">
                <div class="col-md-1">
                    <img :src="user.src" />
                </div>
                <div class="col-md-8">
                    <p>{{user.username}}</p>
                </div>
                <div class="col-md-3">
                    <p><i class="fas fa-arrow-up"></i> {{user.user_upvote}}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-1">
                    <img :src="user.src" />
                </div>
                <div class="col-md-8">
                    <p>{{user.username}}</p>
                </div>
                <div class="col-md-3">
                    <p><i class="fas fa-arrow-up"></i> {{user.user_upvote}}</p>
                </div>
            </div>
        </div>
        <div class="container-fluid short-links">
            <div class="row">
                <div class="col-md-6">
                    <li>Help</li>
                    <li>Topics</li>
                    <li>Top</li>
                    <li>Blog</li>
                    <li>Advertise</li>
                </div>
                <div class="col-md-6">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Press</li>
                    <li>Terms</li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SideInfo",
    props: ['user']
}
</script>

<style lang="scss" scoped>
    .side-info{
       
        button{
            width:100%;
            height:35px;
            color:#fff;
            border:none;
            border-radius:3px;
            font-size:13px;
            font-weight:600;
            background-color: #3D5AF1;
            .fa-plus{
                margin-right: 10px;
            }
        }
        .top-users{
            height:300px;
             box-shadow: 0 15px 20px rgba(0, 0, 0, 0.02);
             background-color: #fff;
             border-radius: 5px;;
             margin-top:20px;
             padding-top:15px;
             padding-bottom:15px;
             h4{
                 font-size:14px;
             }
             .row{
                 display: flex;
                 .col-md-1{
                     img{
                         height:10px;
                         width:10px;
                     }
                     p{
                         font-size:11px;
                     }
                 }
                 .col-md-8{
                     p{
                         font-size:11px;
                         margin: 0;
                         color:#3D5AF1;
                     }
                 }
                 .col-md-3{
                     font-size: 12px;
                 }
             }
        }

        .short-links{
            @extend .top-users;
            height:auto;
            .row{
                .col-md-6{
                    li{
                        list-style:none;
                        font-size:12px;
                        margin-bottom: 7px;
                        font-weight: 400;
                    }
                }
            }
            
        }
    }

</style>
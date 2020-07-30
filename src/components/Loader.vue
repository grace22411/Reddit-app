<template>
    <div v-show="isVisible">
        <i class="fa fa-spinner fa-spin"></i>
    </div>
</template>

<script>
export default {
    name: "Loader",
    props : ["isVisible"]
}
</script>

<style lang="scss" scoped>
    div{
        background:rgba(255, 255, 255, 0.8);
        width:100%;
        height:100%;
        text-align: center;
        z-index:9999;
        padding-top:300px;
        position:fixed;
        top:0;
        bottom:0;
        .fa-spinner{
            font-size:50px;
        }
    }
</style>
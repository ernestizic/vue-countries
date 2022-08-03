<script>

</script>

<template>
    <div class="spinner-container">
        <img src="../assets/spinner.gif" alt='spinner' />
    </div>
</template>

<style scoped>
    img {
        width: 50px;
        height: 50px;
        position: fixed;
        left: 50%;
        top: 50%;
    }
    @media screen and (max-width: 375px) {
        img {
            left: 45%;
        }
    }
</style>
<script>
    export default {
        name: 'Header',
        props: {
            title: {
                String,
                default: 'Where in the world?'
            }
        }

    }
</script>

<template>
    <header>
        <h3>{{ title }}</h3>
        <div class="theme">
            <i class="far fa-moon"></i> Dark Mode
        </div>
    </header>
</template>

<style scoped>
    header{
        background: #fff;
        box-shadow: 0 0 3px rgb(208, 205, 205);
        display: flex;
        justify-content: space-between;
        padding: 15px 50px;
        font-weight: 800;
    }
    .theme {
        cursor: pointer;
    }

    @media screen and (max-width: 375px) {
        header{
            padding: 20px 10px;
        }
    }
</style>
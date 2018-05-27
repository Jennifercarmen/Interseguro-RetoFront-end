<template>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>
<script>
    const routes=[
        {
        //Sin propiedades
            patch:'/',component:About
        }
    ]
</script>

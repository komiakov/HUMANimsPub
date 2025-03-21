<template>
    <div id="allPage">
        <BlocksHeader />
        <NuxtPage></NuxtPage>
    </div>
</template>

<style lang="scss">
    #allPage{
        display: grid; grid-template-rows: auto auto 1fr; gap: 6px;
        width: 100vw; height: 100vh;
        overflow: hidden; white-space: nowrap;

        #pageMenu{
            display: flex; align-items: center; justify-content: space-between; gap: 9px;
            padding: 12px; margin: 0 6px; height: 60px !important;
            border-radius: 9px;
            background-color: $bg-main-color;
            section{display: flex; align-items: center; justify-content: space-between; gap: 9px;}
        }

        #content{
            white-space: nowrap; overflow: auto;
            margin: 0 6px 6px 6px; padding: 12px;
            border-radius: 9px;
            background-color: $bg-main-color;
        }
    }
</style>
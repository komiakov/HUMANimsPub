<script setup lang="js">
    const route = useRoute()

    const navItems = [
        { icon: 'home', label: 'Dashboard', to: '/' },
        { icon: 'databases', label: 'Databases', to: '/databases' },
        { icon: 'reports', label: 'Reports', to: '/reports', disabled: true },
    ];

    const userInfo = {
        name: 'Andrii Komiakov',
        email: 'andrii.komiakov@icloud.com',
        organization: 'Acted'
    };

    function isActiveUrl(address) {
        if(address === "/" && route.path === "/") return true
        else if (address !== "/" && route.path.startsWith(address)) return true
        return false
    }
</script>

<template>
        <header>
            <section>
                <NuxtLink to="/">
                    <UiComponentsHmnIcon name="logo" size="36" />
                </NuxtLink>
                <nav>
                    <UiComponentsHmnNavButton
                            v-for="item in navItems"
                            :key="item.to"
                            :icon="item.icon"
                            :label="item.label"
                            :to="item.to"
                            :class="isActiveUrl(item.to) ? 'accent' : 'primary'"
                            :disabled="item.disabled"
                    />
                </nav>
            </section>
            <section>
                <UiComponentsHmnButton icon="ntf" class="primary" :disabled="true" />
            </section>
        </header>
</template>

<style lang="scss">
   header{
        display: flex; align-items: center; justify-content: space-between; gap: 12px;
        padding: 12px;
        background-color: $bg-main-color;
        section, nav{
            display: flex; align-items: center; justify-content: space-between; gap: 12px;
        }
    }

    @media (max-width: 600px) {
        nav{
            .hmnButton{
                .hmnButtonLabel{display: none;}
            }
        }
    }
</style>
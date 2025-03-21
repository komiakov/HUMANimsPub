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
                <UPopover>
                    <UiComponentsHmnButton class="accent" label="Andrii"></UiComponentsHmnButton>

                    <template #content>
                        <div id="headerUserMenu">
                            <div id="headerUserMenuInfo">
                                <p id="headerUserMenuInfo_FullName">{{ userInfo.name }}</p>
                                <hr>
                                <p id="headerUserMenuInfo_Email">{{ userInfo.email }}</p>
                                <p id="headerUserMenuInfo_Organization">Organization: {{ userInfo.organization }}</p>
                                <hr>
                            </div>
                            <UiComponentsHmnButton icon="settings" class="primary" label="Settings" :disabled="true" />
                            <UiComponentsHmnButton icon="license" class="primary" label="License" :disabled="true" />
                            <hr>
                            <UiComponentsHmnButton icon="documentation" class="primary" label="Documentation" :disabled="true" />
                            <UiComponentsHmnButton icon="support" class="primary" label="Support" :disabled="true" />
                            <UiComponentsHmnButton icon="updates" class="primary" label="Updates" :disabled="true" />
                            <hr>
                            <UiComponentsHmnButton icon="logOut" class="primary" label="Log out" :disabled="true" />
                        </div>
                    </template>
                </UPopover>
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

    #headerUserMenu{
        display: grid; gap: 9px;
        min-width: 240px;
        padding: 9px; margin-top: 12px;
        border-radius: 9px;            
        background-color: $bg-main-color;
        border: 1px solid $primary;
        .hmnButton{justify-content: start;}
        hr{
            width: 100%; margin: 2px;
            opacity: .25;
        }
        #headerUserMenuInfo{
            display: grid; gap: 6px;
            margin: 12px 0; padding: 0 12px;
            p{ color: $white;}
            #headerUserMenuInfo_FullName{
                font-size: 18px; font-weight: 600;
            }
            #headerUserMenuInfo_Email, #headerUserMenuInfo_Organization{
                font-size: 12px; opacity: .75; font-weight: 300;
            }
        }
    }

    @media (max-width: 600px) {
        nav{.hmnButton{.hmnButtonLabel{display: none;}}}
    }
</style>
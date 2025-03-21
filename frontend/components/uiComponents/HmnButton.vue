<script setup lang="js">
    const props = defineProps({
        label: String,
        disabled: Boolean,
        icon: String,
    });

    const { label, disabled, icon } = toRefs(props)

    function handleClick(event) {
        if (props.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
</script>

<template>
    <button class="hmnButton" :class="{ disabled }" :disabled="disabled" @click="handleClick">
        <ClientOnly>
            <UiComponentsHmnIcon :name="icon" :size="18" v-if="icon" />
        </ClientOnly>  
        <span class="hmnButtonLabel" v-if="label">{{ label }}</span>
    </button>
</template>

<style lang="scss">
    .hmnButton{
        display: inline-flex; align-items: center; justify-content: center; gap: 9px;
        height: 36px; min-width: 36px; padding: 0 8px;
        background-color: transparent; border: none; outline: none;
        border-radius: 6px;
        transition: .2s all;
        cursor: pointer;
        .hmnButtonLabel{font-size: 12px; font-weight: 500; margin: 0 6px;}
        &.accent{
            background-color: $accent-color;
            svg{path{fill: $black}}
            .hmnButtonLabel{color: $black;}
            &:hover{background-color: $accent-color-75;}
        }
        &.primary{
            background-color: $primary;
            .hmnButtonLabel{color: $white;}
            svg{path{fill: $white;}}
        }  
        &.secondary{
            border: 1px solid transparent;
            .hmnButtonLabel{color: $white;}
            svg{
                opacity: 0.5;
                path{fill: $white;}
            }
            &.active{
                svg{opacity: 1;}
                border-color: $primary;
            }
        }  
        
        &.error{
            background-color: $error-color-75;
            svg{path{fill: $error-color;}}
            .hmnButtonLabel{color: $error-color;}
        }

        &.disabled, &:disabled {
            cursor: not-allowed;
            opacity: 0.25 !important;
            pointer-events: none;
        }
    }

    @media (max-width: 600px) {
        .hmnButton.mobile .hmnButtonLabel{
            display: none;
        }
    }
</style>
<script setup lang="js">
    const props = defineProps({
        label: String,
        to: [String, Object],
        disabled: Boolean,
        icon: String,
    });

    const { label, disabled, icon, to } = toRefs(props)

    function handleClick(event) {
        if (props.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    }
</script>

<template>
    <NuxtLink class="hmnButton" :to="!disabled ? to : null" :class="{ disabled }" :disabled="disabled" @click="handleClick">
        <ClientOnly>
            <UiComponentsHmnIcon :name="icon" :size="18" v-if="icon" />
        </ClientOnly>
        <span class="hmnButtonLabel" v-if="label">{{ label }}</span>
    </NuxtLink>
</template>
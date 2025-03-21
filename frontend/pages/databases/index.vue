<script setup lang="js">
    
</script>

<template>
    <div id="pageMenu">
        <section>
            <UiComponentsHmnNavButton icon="add" class="accent mobile" label="Create" to="/databases/new" />
            <UiComponentsHmnButton  icon="draft" class="primary mobile" label="Draft  &nbsp; &nbsp; 0" :disabled="true" />
        </section>
        <section>
            <UiComponentsHmnButton icon="delete" class="error" :disabled="true" />
            <UiComponentsHmnButton icon="share" class="primary mobile" label="Share" :disabled="true" />
        </section>
    </div>
</template>

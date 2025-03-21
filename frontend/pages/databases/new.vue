<script setup lang="js">
    const dbName = ref("New database")

    const columns = ref([])
    const columnID = ref(1)

    function addColumn() {
        columns.value.push({
            id: columnID.value,
            name: "hmnColumn"+columnID.value,
            label: "New column "+columnID.value,
            type: "Text",
            format: "",
            unique: "Yes",
            required: "Yes",
            min: "",
            max: "",
            default: ""
        })
        columnID.value = columnID.value + 1
    }

    onMounted(() => {
        addColumn();
    });
</script>

<template>
    <div id="pageMenu">
        <section>
            <UiComponentsHmnButton icon="add" class="primary mobile" label="Add column" @click="addColumn" />
        </section>
        <section>
            <UiComponentsHmnButton icon="preview" class="primary mobile" label="Preview" :disabled="true" />
            <UiComponentsHmnButton icon="save" class="accent mobile" label="Publish" :disabled="true" />
        </section>
    </div>
    
</template>

<style lang="scss">

</style>
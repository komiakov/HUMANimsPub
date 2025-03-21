<script setup lang="js">
    const dbName = ref("New database")

    const columns = ref([])
    const columnID = ref(1)

    const router = useRouter();
    const route = useRoute();
    const showLeaveModal = ref(false);
    const nextRoute = ref(null);
    const resolveLeave = ref(null);

    onBeforeRouteLeave((to, from, next) => {
        showLeaveModal.value = true;
        nextRoute.value = to;
        resolveLeave.value = next;
    });

    function stayOnPage() {
        showLeaveModal.value = false;
        resolveLeave.value(false);
    }

    function discardChanges() {
        showLeaveModal.value = false;
        resolveLeave.value(true);
    }
    function saveDraftAndLeave() {
        showLeaveModal.value = false;
        resolveLeave.value(true);
    }

    onMounted(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
    });

    function handleBeforeUnload(event) {
        event.preventDefault();
        event.returnValue = '';
    }

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

    <div v-if="showLeaveModal" id="modalPreventClose">
        <div id="modalPreventCloseBackground"></div>
        <div id="modalPreventCloseBody">
            <div id="modalPreventCloseBodyHeader">
                Are you sure you want to leave this page?
            </div>
            <div id="modalPreventCloseBodyBody">
                <UiComponentsHmnButton class="primary" label="Cancel" @click="stayOnPage" />
                <UiComponentsHmnButton class="accent" label="Save to draft" @click="saveDraftAndLeave" />
                <UiComponentsHmnButton class="error" label="Dismiss all changes" @click="discardChanges" />
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    #modalPreventClose{
        position: absolute;
        display: flex;justify-content: center;align-items: center;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        #modalPreventCloseBackground{
            position: absolute;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background-color: $bg-main-color;
            opacity: 0.75;
        }
        #modalPreventCloseBody{
            position: relative;
            background-color: $bg-main-color;
            border-radius: 9px;
            #modalPreventCloseBodyHeader{
                text-align: center;
                padding: 24px;
                font-size: 14px; color: $white;
                border-bottom: 1px solid $white-50;
            }
            #modalPreventCloseBodyBody{
                padding: 24px;
                display: flex; align-items: center; gap: 9px;
            }
        }
    }
</style>
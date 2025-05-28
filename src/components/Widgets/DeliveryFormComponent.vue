<template>
    <n-modal
        v-model:show="visible"
        :mask-closable="false"
    >
        <n-card
            style="width: 800px"
            title="Modal"
            :bordered="false"
            size="huge"
            role="dialog"
            aria-modal="true"
        >
            <template #header-extra>
                Oops!
            </template>
            <n-select 
                v-model:value="selectValue" 
                filterable 
                :options="options"
                placeholder="Выберите регион"
            />
            <template #footer>
                Footer
            </template>
        </n-card>
    </n-modal>

</template>

<script>
import { computed, defineComponent, ref } from "vue"
import { useStore } from 'vuex'

export default defineComponent({
    name: "DeliveryFormComponent",
    setup() {
        const vis = ref(true)
        const store = useStore()
        return {
            visible: vis,
            selectValue: ref(null),
            options: computed(() => {
                return store.getters.regions.map((region) => {
                    return {
                        label: region.region,
                        value: region.region_code,
                    }
                })
            })
        };
    },
    mounted() {
        this.$store.dispatch("fetchRegionsData")
    },
})
</script>
<template>
    <div class="alert-message" v-if="visible" :style="styleObj">
        <button @click="close">X</button>
        <div class="alert-message-content">
            <span>{{ props.message }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    type: "info" | "success" | "warning"
    message: string
    visible: boolean
}>()

const emit = defineEmits<{
    (e: "close"): void
    (e: "update:visible", value: boolean): void
}>()


const close = () => {
    emit("update:visible", false);
    emit("close");
}

const styleObj = computed(() => {
    if(props.type === "info") {
        return {
            backgroundColor: "green"
        }
    } else if(props.type === "success") {
        return {
            backgroundColor: "blue"
        }
    } else if(props.type === "warning") {
        return {
            backgroundColor: "yellow"
        }
    }
})



</script>

<style scoped></style>
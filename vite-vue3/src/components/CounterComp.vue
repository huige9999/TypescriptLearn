<template>
  <div>
    <h2>{{ title }}</h2>
    <p>count:{{ count }}</p>
    <button @click="addCount">Add Count</button>
    <br>
    <input type="text" @input="changeCount" ref="el">
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue"
// defineProps运行时推导
/* defineProps({
  count: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    default: "计算"
  }
}) */

// interface IProps {
//   count: number,
//   title?: string
// }

// // defineProps类型声明方式
// const props = withDefaults(defineProps<IProps>(), {
//   title:"CounterComp"
// })

// defineEmits运行时处理
// const emit = defineEmits(["change"])

// defineEmits 类型声明
/* const emit = defineEmits<{
  (e: "change", id: number): void
}>();

const addCount = () => { 
  emit("change", props.count + 1)
}

const changeCount = (e: Event) => { 
  let n = parseInt((e.target as HTMLInputElement).value);
  if (!n) n = 0;
  emit("change", n)
} */

// 类似于vue2 .sync的语法糖
/* const emit = defineEmits<{
  // vue3.3+新语法
  "update:count":[id:number]
}>();

const addCount = () => { 
  emit("update:count", props.count + 1)
}

const changeCount = (e: Event) => { 
  let n = parseInt((e.target as HTMLInputElement).value);
  if (!n) n = 0;
  emit("update:count", n)
} */

// vue3.4新的宏 defineModel

const count = defineModel("count", { type: Number, required: true });
const title = defineModel("title", { type: String, default: "CounterComp" });

const addCount = () => { 
  count.value++;
}

const changeCount = (e: Event) => { 
  let n = parseInt((e.target as HTMLInputElement).value);
  if (!n) n = 0;
  count.value = n;
}

const reset = (initialValue: number) => {
  count.value = initialValue;
}

const el = ref<HTMLInputElement | null>(null);
onMounted(() => { 
  el.value?.focus();
})

defineExpose({
  reset
})

</script>

<style scoped>
</style>
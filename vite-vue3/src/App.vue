<script setup lang="ts">
import { ref } from "vue";
import CounterComp from "@/components/CounterComp.vue";
import MyComp from "./components/MyComp.vue";
import AlertMessage from "./components/AlertMessage.vue";
import { useFetch } from "./composables/useFetch.ts";

const myComp = ref<InstanceType<typeof MyComp> | null>(null);
const alertVisible = ref<boolean>(false);
const alertInfo = ref<{ type: "info" | "success" | "warning", message: string }>({ type: "info", message: "" });
const counterCompRef = ref<InstanceType<typeof CounterComp> | null>(null);

const openModal = () => { 
  myComp.value?.toggleShown();
}

const closeAlert = () => {
  alertVisible.value = false;
  console.log("关闭告警框");
}

const showAlert = () => {
 // 定义一个数组，里面有三个对象，每个对象有type和message属性
 const alerts = [
  { type: "info", message: "这是一条信息" },
  { type: "success", message: "这是一条成功信息" },
  { type: "warning", message: "这是一条警告信息" },
 ]

 // 随机选择一个对象
 const randomAlert = alerts[Math.floor(Math.random() * alerts.length)] as { type: "info" | "success" | "warning", message: string };

  alertInfo.value = randomAlert;
  console.log(alertInfo.value);

  alertVisible.value = true;
}

const count = ref<number>(0);
const title = ref("计算器");

// const change = (v: number) => { 
//   count.value = v;
// }

const resetCounter = () => {
  counterCompRef.value!.reset(100);
}

const { data, isLoading, error } = useFetch<{ id: number, title: string, completed: boolean }>("https://jsonplaceholder.typicode.com/todos/1");

</script>

<template>
  <div>
    <AlertMessage :type="alertInfo.type" :message="alertInfo.message" v-model:visible="alertVisible" @close="closeAlert"/>
    <button @click="openModal">点击显示/隐藏 MyComp</button>
    <button @click="showAlert">点击显示告警框</button>
    <MyComp ref="myComp"/>
    <!-- <CounterComp :count="count" :title="title" @change="change"/> -->
    <CounterComp v-model:count="count" v-model:title="title" ref="counterCompRef"/>
  </div>
  <button @click="resetCounter">重置计数器</button>

  <div>
    <div v-if="isLoading">加载中...</div>
    <div v-else-if="error">加载失败: {{ error.message }}</div>
    <div v-else>数据: {{ data }}</div>
  </div>
</template>

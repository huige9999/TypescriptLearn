非常棒的想法！从被动学习转向主动实战是掌握任何编程语言最快、最有效的方法。你提供的课件和代码库非常完整，这为我们设计一套循序渐进的实战练习提供了绝佳的基础。

我将为你设计一个**「TypeScript 实战训练营」**，分为三个阶段，每个阶段都紧密结合你的课程内容，从基础巩固到框架实战。

---

### 学习建议
1.  **独立完成**：尽量不要直接复制粘贴课程代码，尝试凭借记忆和理解来手写代码。
2.  **善用演练场**：对于小的语法练习，可以直接在 [TypeScript Playground](https://www.typescriptlang.org/play) 中快速验证。
3.  **查阅文档**：遇到不确定的类型或API时，主动查阅 TypeScript、React、Vue 的官方文档，这是非常重要的开发技能。
4.  **建立新项目**：对于每个阶段的练习，建议你新建一个练习目录，或者复制课程项目到一个新的文件夹中，保持原始课程代码的整洁。

---

### 第一阶段：TypeScript 基础巩固 (基于 `01` 到 `08` 模块)

这个阶段的目标是脱离框架，纯粹地练习和巩固 TypeScript 的核心语法和概念。

#### **练习 1：万物皆有类型 (基于 `04.TS常见类型-1`)**

**任务：** 在你的 `proj` 目录下新建一个 `practice.ts` 文件，完成以下变量和类型的定义。

1.  定义一个 `userName` 变量，类型为 `string`，并赋值。
2.  定义一个 `userAge` 变量，类型为 `number`，并赋值。
3.  定义一个 `isVip` 变量，类型为 `boolean`。
4.  创建一个 `hobbies` 数组，它应该能同时存放 `string` 和 `number` 类型的元素 (联合类型)。
5.  创建一个 `userProfile` 元组 (Tuple)，它应该严格按照 `[ID: number, Name: string, IsAdmin: boolean]` 的顺序和类型来定义。
6.  定义一个 `role` 变量，它的值只能是 `"admin"`, `"user"`, `"guest"` 三者之一 (字面量联合类型)。

**目标：** 熟练掌握 TypeScript 的基础类型、联合类型、数组和元组的声明。

#### **练习 2：函数的艺术 (基于 `05.TS常见类型-2`)**

**任务：** 继续在 `practice.ts` 文件中编写以下函数。

1.  **创建 `calculateArea` 函数：**
    *   该函数接收两个参数 `width` 和 `height`，均为 `number` 类型。
    *   函数需要返回它们的乘积，返回值类型也应为 `number`。
    *   添加第三个可选参数 `unit`，类型为 `string`，默认值为 `"px"`。函数最终返回一个包含计算结果和单位的字符串，例如 `"100px"`。

2.  **创建泛型函数 `findFirst`：**
    *   这个函数的功能是查找数组中第一个满足条件的元素。
    *   它应该是一个泛型函数 `<T>`。
    *   接收两个参数：一个类型为 `T[]` 的数组 `arr`，和一个回调函数 `predicate`。
    *   回调函数 `predicate` 接收一个 `T` 类型的参数，返回 `boolean`。
    *   函数返回找到的第一个元素 (类型为 `T`)，如果找不到则返回 `undefined`。
    *   **测试：** 用一个数字数组和一个字符串数组分别调用它。

**目标：** 掌握函数参数、返回值、可选参数的类型定义，并理解和实践泛型的强大之处。

#### **练习 3：数据建模大师 (基于 `06 & 07.TS常见类型-3, 4`)**

**任务：** 模拟一个电商场景，为商品数据建立类型模型。

1.  **使用 `interface` 定义 `Product`：**
    *   `id`: `number`
    *   `name`: `string`
    *   `price`: `number`
    *   `description`: `string` (可选属性)
    *   `getDiscountPrice`: 一个函数，接收一个 `number` 类型的折扣率，返回折扣后的价格 (`number`)。

2.  **使用 `type` 定义 `Category`：**
    *   创建一个类型别名 `Category`，它的值只能是 `"electronics"`, `"books"`, `"clothing"` 之一。

3.  **使用交叉类型 `&` 创建 `DetailedProduct`：**
    *   创建一个新类型 `DetailedProduct`，它必须同时拥有 `Product` 的所有属性，并额外增加一个 `category` 属性，类型为上面定义的 `Category`。
    *   创建一个 `product` 实例，其类型为 `DetailedProduct`，并填充数据。

**目标：** 熟练区分和使用 `interface` 和 `type`，掌握可选属性、函数属性和交叉类型。

#### **练习 4：与 JavaScript 共舞 (基于 `08.类型声明`)**

**任务：** 假设你有一个旧的、纯 JavaScript 编写的工具库，现在要为它提供类型支持。

1.  **创建 JS 文件：** 在项目中创建一个 `utils.js` 文件，内容如下：
    ```javascript
    export function capitalize(str) {
      if (!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    export const PI = 3.14159;
    ```

2.  **编写类型声明文件：** 创建一个 `utils.d.ts` 文件，为 `capitalize` 函数和 `PI` 常量编写类型声明。
    *   `capitalize` 应该接收一个 `string` 并返回一个 `string`。
    *   `PI` 应该是一个 `number`。

3.  **使用与验证：** 在你的 `practice.ts` 文件中，导入 `capitalize` 和 `PI`，并使用它们。观察 VS Code 是否提供了正确的类型提示和错误检查。

**目标：** 理解 `.d.ts` 声明文件的作用和基本写法，这是在 TS 项目中使用非 TS 库的关键。

---

### 第二阶段：React + TypeScript 实战进阶 (基于 `09` 到 `11` 模块)

**准备工作：** 将 `11.TS+React案例-3/vite-react` 项目复制一份到新的练习目录，并 `npm install`。

#### **练习 5：强化组件 Props**

**任务：** 创建一个 `StatusIndicator.tsx` 组件。

1.  **定义 Props：** 组件接收一个 `status` prop，其类型只能是 `"loading"`, `"success"`, `"error"`。
2.  **条件渲染：**
    *   当 `status` 为 `"loading"` 时，显示 "正在加载..."。
    *   当 `status` 为 `"success"` 时，显示 "数据加载成功！" (绿色字体)。
    *   当 `status` 为 `"error"` 时，显示 "加载失败，请重试。" (红色字体)。
3.  **应用组件：** 在 `TodoView.tsx` 中引入并使用这个新组件，可以先硬编码一个 status prop 来测试。

**目标：** 熟练掌握组件 Props 的类型定义，特别是使用字面量联合类型来约束 props 的取值。

#### **练习 6：事件处理与 State 类型**

**任务：** 改造 `AddItem.tsx` 组件。

1.  **输入验证：** 当输入框为空时，"添加" 按钮应为禁用 (disabled) 状态。
2.  **处理键盘事件：** 除了点击按钮，当用户在输入框中按下回车键 (`Enter`) 时，也应该能触发表单提交。你需要为 `input` 元素添加 `onKeyDown` 事件处理器，并正确地为事件对象 `e` 添加 `React.KeyboardEvent` 类型。
3.  **清空逻辑：** 确保添加成功后，输入框内容被正确清空。

**目标：** 掌握 React 中常见事件（如键盘事件）的类型定义，并结合 `useState` 进行逻辑控制。

#### **练习 7：打造你的第一个自定义 Hook**

**任务：** 创建一个 `useDebounce` 自定义 Hook。

1.  **功能：** 这个 Hook 用于实现防抖功能，常用于搜索框等场景，避免频繁触发 API 请求。
2.  **创建 `hooks/useDebounce.ts` 文件。**
3.  **Hook 定义：**
    *   它应该是一个泛型 Hook: `useDebounce<T>(value: T, delay: number): T`。
    *   它接收两个参数：需要被防抖的 `value` (类型为 `T`) 和延迟时间 `delay` (毫秒)。
    *   它返回一个经过防抖处理后的值 (类型为 `T`)。
    *   内部使用 `useState` 和 `useEffect` 来实现。当 `value` 变化后，等待 `delay` 毫秒再更新返回的 state。
4.  **应用 Hook：**
    *   在 `TodoView.tsx` 中添加一个搜索框。
    *   使用 `useState` 管理搜索框的输入值 `searchTerm`。
    *   使用你的 `useDebounce` Hook 来创建一个 `debouncedSearchTerm`。
    *   `useEffect` 监听 `debouncedSearchTerm` 的变化，当它变化时，在控制台打印一条 "正在搜索..." 的消息，并根据这个值来过滤 `filterTodos()` 的结果。

**目标：** 实践自定义 Hook 的编写，并深入理解泛型在 Hook 中的应用，这是编写可复用、类型安全逻辑的核心。

---

### 第三阶段：Vue + TypeScript 实战进阶 (基于 `12` 到 `13` 模块)

**准备工作：** 将 `13.TS+Vue案例-2/vite-vue3` 项目复制一份到新的练习目录，并 `npm install`。

#### **练习 8：`defineProps` 和 `defineEmits` 的类型艺术**

**任务：** 创建一个 `AlertMessage.vue` 组件。

1.  **Props 定义：**
    *   使用 `<script setup lang="ts">`。
    *   组件接收 `type` prop，值只能是 `"info"`, `"success"`, `"warning"` 之一。
    *   组件接收 `message` prop，类型为 `string`。
2.  **Emits 定义：**
    *   组件有一个关闭按钮，点击时会触发一个 `close` 事件。
    *   使用 `defineEmits` 为 `close` 事件添加类型声明，它不携带任何参数。
3.  **模板与逻辑：**
    *   使用一个 `v-if` 来控制组件的显示和隐藏 (可以通过一个本地的 `ref` state 控制)。
    *   根据 `type` prop 的不同，给告警框添加不同的背景色（简单的 style 绑定即可）。
    *   在父组件 `App.vue` 中使用它，监听 `@close` 事件并在控制台打印消息。

**目标：** 彻底掌握在 Vue `<script setup>` 中为 props 和 emits 提供强类型支持的最佳实践。

#### **练习 9：Template Refs 与组件实例类型**

**任务：** 增强 `CounterComp.vue` 组件。

1.  **暴露方法：** 使用 `defineExpose` 暴露一个 `reset(initialValue: number): void` 方法，该方法可以将 `count` 重置为指定的 `initialValue`。
2.  **获取实例：** 在 `App.vue` 中，我们已经有了 `CounterComp` 的 `ref`。
3.  **添加按钮：** 在 `App.vue` 中添加一个 "重置计数器" 按钮。
4.  **调用方法：** 点击该按钮时，调用 `CounterComp` 实例上的 `reset` 方法，将计数器重置为 100。
5.  **类型安全：** 确保你在 `App.vue` 中定义的 `ref` (比如叫 `counterCompRef`) 拥有正确的组件实例类型，以便在调用 `.value.reset()` 时获得类型提示。课程代码中 `MyComp` 的例子可以给你启发。

**目标：** 掌握如何通过 `defineExpose` 暴露组件 API，以及如何在父组件中安全地获取和调用子组件实例上的方法。

#### **练习 10：组合式函数 (Composable) 的力量**

**任务：** 创建一个 `useFetch.ts` 组合式函数。

1.  **功能：** 封装通用的数据获取逻辑。
2.  **创建 `src/composables/useFetch.ts` 文件。**
3.  **函数定义：**
    *   它应该是一个泛型函数 `useFetch<T>(url: Ref<string> | string)`。
    *   它返回三个 `ref`：`data: Ref<T | null>`，`error: Ref<Error | null>`，和 `isLoading: Ref<boolean>`。
    *   函数内部应该立即开始获取数据 (`isLoading` 设为 `true`)。
    *   使用 `fetch` API，并处理成功和失败的情况，相应地更新 `data` 和 `error` ref。
    *   当 `url` 是一个 `ref` 时，使用 `watchEffect` 来在 `url` 变化时重新获取数据。
4.  **应用 Composable：**
    *   在 `App.vue` 中，使用 `useFetch` 来从一个公共 API (例如 `https://jsonplaceholder.typicode.com/todos/1`) 获取数据。
    *   在模板中根据 `isLoading`, `error`, 和 `data` 的状态显示不同的内容（加载中、错误信息、或获取到的数据）。

**目标：** 实践 Vue3 核心的组合式函数，学习如何封装和复用带有响应式状态的逻辑，并应用泛型来使其更具通用性。

---

完成以上所有练习后，你对 TypeScript 的理解和在主流框架中的应用能力将会有质的飞跃。坚持练习，你会发现 TypeScript 带来的代码健壮性和开发效率提升是无与伦比的。祝你学习愉快！
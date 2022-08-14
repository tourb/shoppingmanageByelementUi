<template>
  <div>
    <demo :msg="msgData" :math="mathData"></demo>
  </div>
</template>
<script>
// @ is an alias to /src
import Demo from "@/components/HelloWorld/HelloWorld.vue";

export default {
  data() {
    return {
      msgData: "从父组件接收来的数据",
      mathData: 2,
    };
  },
  components: {
    Demo,
  },
};
</script>

<template>
  <div>
    <input type="text" v-model.trim="msg" @keyup.enter="push" />
    <button @click="msg = 'new vue'">btn</button>
    <ul>
      <li v-for="(item, index) in list" :key="index" @click="deleteItem(index)">
        {{ index }} {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      msg: "",
      list: [],
    };
  },
  methods: {
    push() {
      this.list.push({ name: this.msg });
      this.msg = "";
    },
    deleteItem(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>

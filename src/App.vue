<template>
  <div id="app">
    <div class="header" v-html="msg"></div>
    <div class="inputBox">
      <input type="text" v-model="info" @keyup.enter="addNew">
    </div>
    <div class="dataList">
      <ul>
        <li v-for="item in items" @click="change(item)" :class="{Change: item.state}">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Storage from './localstorage'
  export default {
    name: 'App',
    data () {
      return {
        msg: '简单的todoMVC',
        info: '',
        items: Storage.fetch()
      }
    },
    methods: {
      addNew () {
        this.items.push({
          name: this.info,
          state: false
        });
      },
      change (item) {
        item.state = !item.state;
      }
    }
  }
</script>

<style scoped>
  /*初始化样式 begin*/
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "微软雅黑";
    overflow: hidden;
  }

  body, html {
    -webkit-text-size-adjust: none;
    width: 100%;
    height: 100%;
  }

  * {
    text-decoration: none;
    list-style: none;
  }

  img {
    border: 0px;
  }

  ul, li, dl, dd, dt, p, ol, h1, h2, h3, h4, h5 {
    font-size: 12px;
    font-weight: 100;
    padding: 0;
    margin: 0;
  }

  .header {
    line-height:24px;
    text-align: center;
    font-weight: bold;
    font-size: 40px;;
    margin-bottom: 20px;
  }
  .inputBox {
    margin-bottom: 20px;
  }
  .inputBox input {
    outline: none;
    width: 200px;
  }
  .dataList ul li {
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    text-align: center;
    color: #70b4d0;
    font-size: 18px;
    background: red;
    cursor: pointer;
  }
  .dataList ul li.Change {
    background: pink;
  }
</style>

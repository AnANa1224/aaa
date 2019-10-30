<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Index</router-link> |-->
<!--      <router-link to="/list">List</router-link> |-->
<!--      <router-link to="/find">Find</router-link> |-->
<!--      <router-link to="/infor">Infor</router-link>-->
      <router-view/>
<!--    </div>-->

  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  /*padding: 30px;*/

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body,ul{margin: 0; padding: 0;}
li{list-style: none;}
a{text-decoration: none;}
p{margin: 0; font-size: 12px;}
.fl{float: left;}
.fr{float: right;}
.cf::after{clear: both; content: ''; display: table; }
.tac{text-align: center;}
</style>

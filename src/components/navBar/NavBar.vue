<template>
    <div>
      
      <div id="nav">
        <img src="@/assets/logo.png" alt="Logo" class="logo"/>
        <router-link to="/">
          Operação
        </router-link>
        <router-link to="/veiculos">
          Veículos
        </router-link>
        <router-link to="/clientes">
          Clientes
        </router-link>
        <router-link to="/planos">
          Planos
        </router-link>
        <router-link to="/contratos">
          Contratos
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "Navbar",
  }
  </script>
  
  <style scoped>
    #nav {
      position: fixed;
      top: 0;
      width: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      padding: 20px 20px 20px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .logo {
      position: absolute;
      top: auto;
      left: 30px;
      width: 60px;
      height: 60px;
    }
  
    #nav a {
      color: black;
      text-decoration: none;
      padding: 10px 20px;
      transition: .5s;
    }
  
    #nav a:hover {
      color: white;
      background-color: rgba(0, 0, 0, 0.3);
    }
  </style>
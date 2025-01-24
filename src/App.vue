<template>
    <div id="app">
      <nav class="navbar">
        <router-link to="/" class="nav-brand">Dance Events</router-link>
      </nav>
      
      <main>
        <router-view></router-view>
      </main>
  
      <footer>
        <p>&copy; 2024 Dance Events</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .navbar {
    padding: 1rem 2rem;
    background-color: #333;
    color: white;
  }
  
  .nav-brand {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  main {
    flex: 1;
    padding: 2rem;
  }
  
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #f5f5f5;
  }
  </style>
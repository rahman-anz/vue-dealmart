<template>
  <header>
    <h2>DealMart</h2>
    <nav>
      <ul>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/cart">Cart</router-link></li>
      </ul>
    </nav>
    <button>Login</button>
  </header>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap");
header {
  background-color: #47efd0;
  height: 9rem;
  padding: 0 3%;
  margin: 0 13%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
h2 {
  font-family: "Bungee Inline", sans-serif;
  font-size: 3.8rem;
}
ul {
  list-style: none;
  font-size: 1.8rem;
  margin-top: 1rem;
  display: flex;
  gap: 8rem;
}
a:link,
a:visited {
  font-size: 1.6rem;
  text-decoration: none;
  padding: 0.3rem 0;
  color: #333;
}

a:hover,
a:active,
a.router-link-active {
  border-bottom: 4px solid whitesmoke;
}
button {
  border: 2px solid whitesmoke;
  padding: 1rem 2rem;
  border-radius: 20px;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: transparent;
}
</style>

import { Component } from "solid-js";

export const Nav: Component<{}> = () => {
  
  return (
    <nav class="flex gap-2">
        <a href="/">Strona główna</a>
        <a href="/news">Nowości</a>
        <a href="/perfumes">Szukaj perfum</a>
        <a href="/wishlist">Wyczekiwane</a>
        <a href="/profile">Konto</a>
    </nav>
  );
};
<template>
    <footer>
        <nav class="footer_nav">
            <ul class="footer_nav_list">
                <li class="footer_nav_list_item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    19, rue de Fenouillet 31200 TOULOUSE
                </li>
                <li class="footer_nav_list_item">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    07 56 81 50 87
                </li>
                <li class="footer_nav_list_item">
                    -
                </li>
                <li class="footer_nav_list_item">
                    <nuxt-link to="/legalInformations"></nuxt-link>
                </li>
                <li class="footer_nav_list_item">
                    <a class="footer_nav_list_item_instagram" href="https://www.instagram.com/cecilia_orsi_coaching/" alt="Mon instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                        </svg>
                    </a>
                </li>
                <li class="footer_nav_list_item">
                    -
                </li>
                <li class="footer_nav_list_item">
                    <span class="footer_nav_list_item_credit">Réalisé par Maxime Authié</span>
                </li>
            </ul>
        </nav>
    </footer>
</template>

<script lang="ts">

</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #B05447;
}
.footer_nav_list {
    list-style: none;
    font-family: 'La Belle Aurore', cursive;
    font-size: 1.5em;
    color: #FFFFFF;
}
.footer_nav_list_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.footer_nav_list_item svg {
    stroke: #FFFFFF;
    width: 5vh;
    height: 5vh;
    margin-right: 1vw;
}
.footer_nav_list_item_instagram svg {
    stroke: #FFFFFF;
    width: 10vh;
    height: 10vh;
    margin: 0;
}
.footer_nav_list_item_instagram:visited {
    color: #FFFFFF;
}

.footer_nav_list_item_credit {
    font-family: 'Playfair', serif;
}
</style>
<template>
    <div class="comment_card">
        <div class="comment_card_header">
            Article : Notre rapport à la nature
        </div>
        <div class="comments_card_content">
            <div class="comments_card_content_top">
                <div class="comments_card_content_top_informations">
                    De Josiane Ducoin - le 27/06/2022 à 19:55
                </div>
                <div class="comments_card_content_top_validation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#15ba52" class="w-6 h-6" >
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E04F5F" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
            <div class="comments_card_content_bottom">
                Je trouve le contenu de votre article complètement absurde. Mais comme on dit, il en faut pour tous les goûts!!! :/
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            comments: []
        }
    },
    methods: {
    }
}
</script>
<style scoped>
    .comment_card {
        display: flex;
        flex-direction: column;
        width: 90%;
        border: 1px solid #E04F5F;
        border-radius: 1vh;
        background-color: #FFFFFF;
        margin-top: 5vh;
        overflow: hidden
    }

    .comment_card_header {
        position: relative;
        width: 100%;
        border: 1px solid #E04F5F;
        font-size: 1.8em;
        color: #FFFFFF;
        background-color: #E04F5F;
        text-align: center;
        padding: 1vh 0;
    }
    .comments_card_content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 3em;
    }
    .comments_card_content svg {
        width: 4vh;
        height: 4vh;
    }

    .comments_card_content_top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 95%;
        padding-top: 1vh;
        font-size: 0.5em;
        font-weight: bold;
    }

    .comments_card_content_bottom {
        width: 95%;
        font-size: 0.5em;
        margin: 3vh 0;
    }
</style>
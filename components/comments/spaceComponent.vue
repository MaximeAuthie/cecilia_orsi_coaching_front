<template>
    <div class="display_comments_div">
        <h3>Commentaires</h3>
        <CommentsDisplayComponent v-for="comment in comments" :id="comment.id" :author-name="comment.authorName" :date="comment.date" :content="comment.content" ></CommentsDisplayComponent>
        <div class="display_comments_div_form">
            <form v-if="!isFormSubmit" @submit.prevent="">
                <h6>Poster un commentaire</h6>
                <label for="authorName">Votre prénom</label><br>
                <input v-model="newComment.authorName" @keyup="checkImputKeyUp" :class="isEmpty.authorName ? 'bad_input' : 'normal_input'" type="text" name="authorName" id="authorName"><br>
                <p v-if="isEmpty.authorName" class="error_message">Veuillez saisir votre nom</p>

                <label for="authorEmail">Votre adresse mail</label><br>
                <input v-model="newComment.authorEmail" @keyup="checkImputKeyUp" :class="isEmpty.authorEmail ? 'bad_input' : 'normal_input'" type="email" name="authorEmail" id="authorEmail"><br>
                <p v-if="isEmpty.authorEmail" class="error_message">Veuillez saisir votre adresse email</p>
                <p v-if="!isMailCorrect" class="error_message">Format de l'adresse mail incorrect</p>

                <label for="content">Votre commentaire</label><br>
                <textarea v-model="newComment.content" @keyup="checkImputKeyUp" :class="isEmpty.content ? 'bad_textarea' : 'normal_textarea'"  name="content" id="content">Saisir votre message ici</textarea>
                <p v-if="isEmpty.content" class="error_message">Veuillez saisir un commentaire</p>

                <input @click="submitForm" class="button button_form" type="button" value="Poster">
            </form>
            <div v-else class="content_validation_message">
                <h6>Votre commentaire à bien été pris en compte. <br> Il sera affiché après validation par nos équipes</h6>
            </div>

        </div>
    </div>
</template>

<script lang="ts">

    export default {
        props: {
            comments: {
                type:       Object,
                required:   true
            }
        },
        data() {
            return {
                isFormSubmit:   false as boolean,
                isMailCorrect:  true as boolean,
                newComment: {
                    authorName:     '' as string,
                    authorEmail:    '' as string,
                    content:        '' as string
                },
                isEmpty: {
                    authorName:     false as boolean,
                    authorEmail:    false as boolean,
                    content:        false as boolean,
                    atLeastOne:     false as boolean
                }
            }
        },
        methods: {
            submitForm() {
                //? Exécuter les fonction de vérification des saisies
                this.checkImputSubmit();
                this.checkMailFormat();

                //? Vérifier si les saisies sont correctes
                if (this.isEmpty.atLeastOne == false && this.isMailCorrect == true) {
                    this.isFormSubmit = true;
                }
            },
            resetEmptyData() { //Remet tous les booléen de l'objet isEmpty à false
                this.isEmpty.authorName =   false;
                this.isEmpty.authorEmail =  false;
                this.isEmpty.content =      false;
                this.isEmpty.atLeastOne =   false;
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
        
                //? Réinitialiser les booléens
                this.resetEmptyData();

                //? Vérifier chaque data pour modifier la valeur des booléens
                if (this.newComment.authorName == '') {
                    this.isEmpty.authorName =   true;
                    this.isEmpty.atLeastOne =   true;
                }
                if (this.newComment.authorEmail == '') {
                    this.isEmpty.authorEmail =  true;
                    this.isEmpty.atLeastOne =   true;
                }
                if (this.newComment.content == '') {
                    this.isEmpty.content =      true;
                    this.isEmpty.atLeastOne =   true;
                }
            },
            checkImputKeyUp() { // Vérifie si le champs est remplis au moment où l'utilisateur saisi dans un champs

                if (this.newComment.authorName != '') {
                    this.isEmpty.authorName = false;
                } 
                if (this.newComment.authorEmail != '') {
                    this.isEmpty.authorEmail = false;
                } 
                if (this.newComment.content != '') {
                    this.isEmpty.content = false;
                } 
            },
            checkMailFormat() { // Vérifie si le format du mail est correct

                //? Réinitialiser le booléen
                this.isMailCorrect = true;

                //? Définir le regex pour le format mail
                const pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);

                //? Vérifier le si le mail est saisi
                if (this.newComment.authorEmail != '') {

                    //? Vérifier si la saisie correspond au regex
                    if (pattern.test(this.newComment.authorEmail)) {
                        this.isMailCorrect = true;
                    } else {
                        this.isMailCorrect = false;
                    }
                }
            }
        }
    }

</script>

<style scoped>
    h3 {
        margin-bottom: 3vh;
    }

    .display_comments_div {
        display: block;
        width: 100;
        margin: 10vh 0;
    }
    .content_validation_message {
        height: 60vh;
    }
</style>
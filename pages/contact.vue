<template>
    <BannerComponent :imgUrl="page.bannerUrl" :messages="bannerMessages" :isMainButtonActive="page.isMainButtonActive" :isSecondButtonActive="page.isSecondaryButtonActive" ></BannerComponent>
    <div class="content">
        
        <section v-if="!isFormSubmit" class="content_form">
            <h2>Envoyer un message</h2>
            <form @submit.prevent="">
                <label for="firstName">Votre prénom</label><br>
                <input v-model="formData.firstName" @keyup="checkImputKeyUp" :class="isEmpty.firstName ? 'bad_input' : 'normal_input'" type="text" name="firstName" id="firstName"><br>
                <p v-if="isEmpty.firstName" class="error_message">Veuillez saisir votre prénom</p>

                <label for="lastName">Votre nom</label><br>
                <input v-model="formData.lastName" @keyup="checkImputKeyUp" :class="isEmpty.lastName ? 'bad_input' : 'normal_input'" type="text" name="lastName" id="lastName"><br>
                <p v-if="isEmpty.lastName" class="error_message">Veuillez saisir votre nom</p>

                <label for="email">Votre adresse mail</label><br>
                <input v-model="formData.email" @keyup="checkImputKeyUp" :class="isEmpty.email ? 'bad_input' : 'normal_input'" type="mail" name="email" id="email"><br>
                <p v-if="isEmpty.email" class="error_message">Veuillez saisir votre adresse mail</p>
                <p v-if="!isMailCorrect" class="error_message">Format de l'adresse mail incorrect</p>

                <label for="subject">Sujet de votre message</label><br>
                <input v-model="formData.subject" @keyup="checkImputKeyUp" :class="isEmpty.subject ? 'bad_input' : 'normal_input'" type="text" name="subject" id="subject"><br>
                <p v-if="isEmpty.subject" class="error_message">Veuillez saisir un sujet pour votre message</p>

                <label for="content">Votre message</label><br>
                <textarea v-model="formData.content" @keyup="checkImputKeyUp" :class="isEmpty.content ? 'bad_textarea' : 'normal_textarea'"  name="content" id="content">Saisir votre message ici</textarea>
                <p v-if="isEmpty.content" class="error_message">Veuillez saisir un message</p>

                <input @click="submitForm" class="button button_form" type="button" value="Envoyer">
            </form>
        </section>
        <section v-else class="content_validation_message">
            <h4>Votre message à bien été envoyé.</h4>
        </section>
        <section class="content_tiles">
            <TileComponent v-for="tile in tilesList" :pageTitle="tile.title" :pagePath="tile.path" :pageImgUrm="tile.imgUrl" ></TileComponent>
        </section>
    </div>
</template>

<script lang="ts">

    export default {
        data() {
            return {
                isFormSubmit:   false as boolean,
                isMailCorrect:  true as boolean,
                isEmpty:  {
                    firstName:      false as boolean,
                    lastName:       false as boolean,
                    email:          false as boolean,
                    subject:        false as boolean,
                    content:        false as boolean,
                    atLeastOne:     false as boolean
                },
                formData: {
                    firstName:  '' as string,
                    lastName:   '' as string,
                    email:      '' as string,
                    subject:    '' as string,
                    content:    '' as string,
                },
                page: {
                    title:                      'Contact',
                    bannerUrl:                  'url(https://images.pexels.com/photos/261599/pexels-photo-261599.jpeg)',
                    img1Url:                    '',
                    img1Alt:                    '',
                    img2Url:                    '',
                    img2Alt:                    '',
                    text1:                      '',
                    text2:                      '',
                    isMainButtonActive:         true,
                    isSecondaryButtonActive :   false
                },
                tilesList: [
                    {
                        title:  "Qui suis-je?",
                        path:   "/owner",
                        imgUrl: "url(/cecilia-orsi.png)"
                    },
                    {
                        title:  "Tarifs",
                        path:   "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg)"
                    },
                    {
                        title:  "Blog",
                        path:   "/blog",
                        imgUrl: "url(https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg)"
                    },
                    {
                        title:  "Prendre rendez-vous",
                        path:   "/appointment",
                        imgUrl: "url(https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg)"
                    },
                    {
                        title:  "Mon instagram",
                        path:   "https://www.instagram.com/cecilia_orsi_coaching/",
                        imgUrl: "url(https://images.pexels.com/photos/13288521/pexels-photo-13288521.jpeg)"
                    }
                ],
                bannerMessages: [
                    'Contact',
                ],
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
                this.isEmpty.firstName =    false;
                this.isEmpty.lastName =     false;
                this.isEmpty.email =        false;
                this.isEmpty.subject =      false;
                this.isEmpty.content =      false;
                this.isEmpty.atLeastOne =   false;
            },
            checkImputSubmit() { // Vérifie si tous les champs sont remplis
        
                //? Réinitialiser les booléens
                this.resetEmptyData();

                //? Vérifier chaque data pour modifier la valeur des booléens
                if (this.formData.firstName == '') {
                    this.isEmpty.firstName =    true;
                    this.isEmpty.atLeastOne =   true;
                }
                if (this.formData.lastName == '') {
                    this.isEmpty.lastName  =    true;
                    this.isEmpty.atLeastOne =   true;
                }
                if (this.formData.email == '') {
                    this.isEmpty.email =        true;
                    this.isEmpty.atLeastOne =   true;
                }
                if (this.formData.subject == '') {
                    this.isEmpty.subject =      true;
                    this.isEmpty.atLeastOne =   true;
                }
                if (this.formData.content == '') {
                    this.isEmpty.content =      true;
                    this.isEmpty.atLeastOne =   true;
                }
            },
            checkImputKeyUp() { // Vérifie si le champs est remplis au moment où l'utilisateur saisi dans un champs

                if (this.formData.firstName != '') {
                    this.isEmpty.firstName = false;
                } 
                if (this.formData.lastName != '') {
                    this.isEmpty.lastName = false;
                } 
                if (this.formData.email != '') {
                    this.isEmpty.email = false;
                } 
                if (this.formData.subject != '') {
                    this.isEmpty.subject = false;
                } 
                if (this.formData.content != '') {
                    this.isEmpty.content = false;
                } 
            },
            checkMailFormat() { // Vérifie si le format du mail est correct

                //? Réinitialiser le booléen
                this.isMailCorrect = true;
                
                //? Définir le regex pour le format mail
                const pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);

                //? Vérifier le si le mail est saisi
                if (this.formData.email != '') {

                    //? Vérifier si la saisie correspond au regex
                    if (pattern.test(this.formData.email)) {
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

    form {
        margin: 0;
        width: 100%;
    }
    label {
        font-size: 1.2em;
        color: #B05447;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .error_message {
        color: red;
        margin-top: 0;
        margin-bottom: 2vh;
        text-align: center;
    }

    .normal_input {
        border: #B05447 solid 2px;
        border-radius: 20px;
        width: 95%;
        height: 30px;
        padding: 0 2%;
        font-family: 'Playfair', serif;
        font-size: 1.1em;
        margin-bottom: 1vh;
        font-size: 1.2em;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    .bad_input {
        border: red solid 2px;
        border-radius: 20px;
        width: 95%;
        height: 30px;
        padding: 0 2%;
        font-family: 'Playfair', serif;
        font-size: 1.1em;
        margin-bottom: 1vh;
        font-size: 1.2em;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    .normal_textarea {
        border: #B05447 solid 2px;
        border-radius: 10px;
        width: 95%;
        height: 25vh;
        padding: 0 2%;
        font-family: 'Playfair', serif;
        font-size: 1.2em;
        resize: vertical;
    }

    .bad_textarea {
        border: red solid 2px;
        border-radius: 10px;
        width: 95%;
        height: 25vh;
        padding: 0 2%;
        font-family: 'Playfair', serif;
        font-size: 1.2em;
        resize: vertical;
    }

    .content_validation_message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 80vh;
        width: 100%;
    }

    @media screen and (min-width: 1210px) {
  
    form {
        width: 75%;
    }

    .normal_input, .bad_input {
        padding: 0 1%;
        width: 98%;
        height: 35px;
    }
    
    .normal_textarea, .bad_textarea {
        padding: 0 1%;
        width: 98%;
    }
    
}
</style>
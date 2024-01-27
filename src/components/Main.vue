<template>
    <main class="main">
        <section class="result" id="result">
            <div class="container result__content">
                <div class="result__content__info">
                    <span>5+</span>
                    Satisfied clients
                </div>
                <div class="result__content__info">
                    <span>20+</span>
                    Projects completed
                </div>
                <div class="result__content__info">
                    <span>5+</span>
                    Reviews given
                </div>
            </div>
        </section>
        <section class="skills" id="skills">
            <div class="container skills__content">
                <h2 class="skills__content__title">My Skills</h2>
                <p class="skills__content__descr">
                    Here about my <span>knowledge</span> and <span>capabilities</span>
                </p>
                <router-link to="/" class="skills__content__btn">
                    Hire Me
                </router-link>
                <div class="cards">
                    <div class="cards__card">
                        <img src="../assets/images/school-outline.svg" alt="">
                        <h5 class="cards__card__title">
                            Languages
                        </h5>
                        <p class="cards__card__descr">
                            Russin,Uzbek,English B2
                        </p>
                    </div>
                    <div class="cards__card">
                        <img src="../assets/images/diamond-outline.svg" alt="">
                        <h5 class="cards__card__title">
                            Programs
                        </h5>
                        <p class="cards__card__descr">
                            JS,HTML5,CSS3,VUE.JS,SASS/SCSS,Adaptive layout,OPTION AND COMPOSITION
                            API,PINIA,GIT,GITBASH,API,HTTP,Router,NODEjs and more.
                        </p>
                    </div>
                    <div class="cards__card">
                        <img src="../assets/images/pulse-outline.svg" alt="">
                        <h5 class="cards__card__title">
                            Additional skills
                        </h5>
                        <p class="cards__card__descr">
                            PHOTOSHOP,DESIGN,TESTINGБ,EDITING,DOWNLOAD,UPLOAD,COPY,MOUNT
                        </p>
                    </div>
                </div>
                <img class="skills__content__el1" src="../assets/images/bg1.svg" alt="PNG">
                <img class="skills__content__el2" src="../assets/images/bg1.svg" alt="PNG">
            </div>

        </section>
        <section class="myWorks" id="myWorks">
            <div class="container myWorks__content">
                <h2 class="myWorks__content__title">
                    Portfolio
                </h2>
                <p class="myWorks__content__descr">
                    My Creative Works
                    Latest <span>Projects</span>
                </p>
                <div class="myWorks__content__descr2">
                    I have selected and mentioned here some of my latest projects to share with you.
                </div>
                <a src="!#" class="myWorks__content__btn">
                    Show More
                </a>
                <img class="myWorks__content__el1" src="../assets/images/bg1.svg" alt="PNG">
                <img class="myWorks__content__el2" src="../assets/images/bg1.svg" alt="PNG">
                <img class="myWorks__content__el3" src="../assets/images/bg2.svg" alt="PNG">
            </div>
        </section>
        <section class="slider" id="slider">
            <div class="slider__content container">
                <swiper :pagination="true" :modules="modules" class="mySwiper slider__content__cards">
                    <swiper-slide v-for="(card, index) in cards" :key="index" class="slider__content__cards__card">
                        <h3 class="slider__content__cards__card__title">
                            {{ card.name }}
                        </h3>
                        <img class="slider__content__cards__card__img" :src="card.img" alt="">
                        <p class="slider__content__cards__card__descr">
                            {{ card.descr }}
                        </p>
                        <a :href="card.link" class="slider__content__cards__card__btns">
                            <span class="slider__content__cards__card__btns__btn">Visit</span>
                            <img src="../assets/images/Frame.svg" alt="">
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </section>
        <section class="contactUs" id="contactUs">
            <div class="container contactUs__content">
                <h4 class="contactUs__content__title">
                    Contact
                </h4>
                <p class="contactUs__content__descr">
                    Let’s Discuss Your <Span>Project</Span>
                </p>
                <p class="contactUs__content__descr2">
                    Let’s make something new, different and more meaningful or make thing more visual or conceptual
                </p>
                <div class="contactUs__content__contacts">
                    <div class="contactUs__content__contacts__info">
                        <div class="contactUs__content__contacts__info__card">
                            <img src="../assets/images/tell.svg" alt="phone">
                            <div class="contactUs__content__contacts__info__card__title">
                                Call me
                                <span>+8801613968687</span>
                            </div>
                        </div>
                        <div class="contactUs__content__contacts__info__card">
                            <a href="https://t.me/Sardor0_0">
                                <img src="../assets/images/tg.svg" alt="">
                            </a>
                            <div class="contactUs__content__contacts__info__card__title">
                                Sardor
                                <a href="https://t.me/Sardor0_0">Send Massage</a>
                            </div>
                        </div>
                    </div>
                    <div class="contactUs__content__contacts__info">
                        <div class="contactUs__content__contacts__info__card">
                            <img src="../assets/images/massage.svg" alt="phone">
                            <div class="contactUs__content__contacts__info__card__title">
                                Email
                                <span>sobitjonovsardor07@gmail.com</span>
                            </div>
                        </div>
                        <div class="contactUs__content__contacts__info__card">
                            <a href="mailto:sobitjonovsardor07@gmail.com">
                                <img src="../assets/images/massage.svg" alt="">
                            </a>
                            <div class="contactUs__content__contacts__info__card__title">
                                Sobitjonov
                                <a href="mailto:sobitjonovsardor07@gmail.com">Send Massage</a>
                            </div>
                        </div>
                    </div>
                    <div class="contactUs__content__contacts__info">
                        <div class="contactUs__content__contacts__info__card">
                            <img src="../assets/images/adress.svg" alt="adress">
                            <div class="contactUs__content__contacts__info__card__title">
                                Address
                                <span>Uzbekista/Tashkent/Yangiyol</span>
                            </div>
                        </div>
                        <div class="contactUs__content__contacts__info__card">
                            <a href="https://www.instagram.com/sardor_22_2/">
                                <img src="../assets/images/insta.svg" alt="">
                            </a>
                            <div class="contactUs__content__contacts__info__card__title">
                                Sardor_22_2
                                <a href="https://www.instagram.com/sardor_22_2/">Send Massage</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default {
    data() {
        return {
            cards: [
                {
                    name: 'TSX',
                    img: require('../assets/images/Tsx.png'),
                    link: "https://sobitjonov-sardor.github.io/App/",
                    descr: 'This is one of my first orders'
                },
                {
                    name: 'Vue-ciname',
                    img: require('../assets/images/vue-cinema.png'),
                    link: "https://sobitjonov-sardor.github.io/Vue-cinema/",
                    descr: 'In this project we went through many animations in css'
                },
                {
                    name: 'Vertual Reality',
                    img: require('../assets/images/vertual.png'),
                    link: "https://sobitjonov-sardor.github.io/Vertual-reality/", descr: 'Project made using dynamic classes'
                },
                {
                    name: 'Grayson',
                    img: require('../assets/images/Grayson.png'),
                    link: "https://sobitjonov-sardor.github.io/Grayson/",
                    descr: 'This is one of my projects'
                },
                {
                    name: 'DBurger',
                    img: require('../assets/images/DBurger.png'),
                    link: "https://sobitjonov-sardor.github.io/DBurger/",
                    descr: 'This project taught me JS'
                },
                {
                    name: 'NOTES',
                    img: require('../assets/images/desk1.png'),
                    link: "https://sobitjonov-sardor.github.io/First-work-page2/", descr: 'This is one of my projects'
                },
                {
                    name: 'GlobalTalk',
                    img: require('../assets/images/GlobalTalk.png'),
                    link: "https://sobitjonov-sardor.github.io/First-work-page2/", descr: 'This project taught me VUE.JS'
                },
                {
                    name: 'Cryptocurrency',
                    img: require('../assets/images/1.png'),
                    link: "https://sobitjonov-sardor.github.io/Cryptocurrency-exchange//",
                    descr: 'Project'
                },
            ],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
}
</script>

<style lang="scss">
.result {
    margin-bottom: 188px;

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__info {
            &:nth-child(3) {
                border: none;
            }

            display: flex;
            flex-direction: column;
            gap: 24px;
            border-right: 1px solid #0DB760;
            color: #000;
            font-family: Roboto;
            font-size: 28px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            padding-right: 106px;

            & span {
                color: #0DB760;
                font-family: Roboto;
                font-size: 48px;
                font-style: normal;
                font-weight: 600;
                line-height: 48px;
            }
        }
    }
}

.skills {
    &__content {
        display: flex;
        flex-direction: column;
        position: relative;

        &__el1 {
            position: absolute;
            top: -155px;
            right: 0;
        }

        &__el2 {
            position: absolute;
            top: -155px;
            left: 0;
        }

        &__title {
            color: #0DB760;
            font-family: Inter;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 145%;
        }

        &__descr {
            color: #0B0C0C;
            font-family: Inter;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 54px;
            max-width: 515px;

            & span {
                color: #0DB760;
                font-family: Inter;
                font-size: 40px;
                font-style: normal;
                font-weight: 600;
                line-height: 54px;
            }
        }

        &__btn {
            margin-top: 30px;
            color: #FFF;
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            background: #0DB760;
            border-radius: 10px;
            padding: 16px 39px;
            max-width: 138px;
        }

        .cards {
            margin-top: 40px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &__card {
                max-width: 300px;
                padding: 21px 17px;

                &__title {
                    margin: 16px 0 12px 0;
                    color: #000;
                    font-family: Roboto;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 20px;
                }

                &__descr {
                    color: #323433;
                    font-family: Inter;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%;
                    max-width: 250px;
                    word-break: break-all;

                }
            }
        }



    }
}

.myWorks {
    margin-top: 200px;

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        &__title {
            color: #0DB760;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
        }

        &__descr {
            margin-top: 10px;
            color: #0B0C0C;
            font-family: Inter;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 54px;
            letter-spacing: -1.2px;
            max-width: 350px;

            & span {
                color: #0DB760;
                font-family: Inter;
                font-size: 40px;
                font-style: normal;
                font-weight: 600;
                line-height: 54px;
            }
        }

        &__descr2 {
            color: #323433;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            max-width: 350px;
            margin-top: 24px;
            margin-bottom: 50px;
        }

        &__btn {
            color: #FFF;
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
            padding: 16px 26px;
            background: #0DB760;
            border-radius: 15px;
        }

        &__el1 {
            position: absolute;
            top: 30px;
            right: 0;
        }

        &__el2 {
            position: absolute;
            top: 30px;
            left: 0;
        }

        &__el3 {
            position: absolute;
            top: -190px;
            transform: rotate(90deg);

        }
    }
}

.slider {
    margin-top: 40px;
    margin-bottom: 200px;

    &__content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    &__btn {
        width: 50px;
        height: 50px;
        background: #0DB760;
        border-radius: 15px;
        transition: .3s;
        position: absolute;
        right: 0;

        &:nth-child(2) {
            left: 0;
        }

        &:active {
            transform: scale(0.9);
        }
    }
}

.slider__content__cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 50px;

    &__card {
        padding: 10px;
        width: 500px;
        height: 620px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        border-radius: 15px;

        &__title {
            color: #0DB760;
            font-family: Roboto;
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%;
            margin-bottom: 20px;
        }

        &__descr {
            margin-top: 20px;
            color: #323433;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            max-width: 300px;
            min-height: 20px;
        }

        &__img {
            height: 400px;
            max-width: 100%;
        }

        &__btns {
            margin-top: 30px;
            display: flex;
            align-items: center;
            gap: 40px;

            &__btn {
                display: flex;
                align-items: center;
                gap: 10px;
                color: #000;
                text-align: center;
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%;
                padding: 12px 24px;
                background: white;
                border-radius: 15px;

            }
        }
    }
}

.contactUs {

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__title {
            color: #0DB760;
            text-align: center;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%;
        }

        &__descr {
            color: #0B0C0C;
            text-align: center;
            font-family: Inter;
            font-size: 40px;
            font-style: normal;
            font-weight: 600;
            line-height: 54px;
            margin-top: 10px;
            margin-bottom: 24px;

            & span {
                color: #0DB760;
                font-family: Inter;
                font-size: 40px;
                font-style: normal;
                font-weight: 600;
                line-height: 54px;
            }
        }

        &__descr2 {
            color: #323433;
            text-align: center;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            max-width: 509px;
        }

        &__contacts {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 100px;
            margin-top: 64px;

            &__info {
                display: flex;
                align-items: center;
                justify-content: space-between;

                &__card {
                    display: flex;
                    align-items: center;
                    gap: 18px;

                    & img {
                        background: #0DB760;
                        padding: 14px;
                        border-radius: 15px;
                    }

                    &__title {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        color: #92929D;
                        font-family: Inter;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 14px;
                        letter-spacing: 0.128px;

                        & span {
                            color: #11142D;
                            font-family: Inter;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 18px;
                            letter-spacing: 0.08px;
                        }

                        & a {
                            color: #11142D;
                            font-family: Inter;
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 18px;
                            letter-spacing: 0.08px;
                        }
                    }
                }
            }
        }
    }
}
</style>
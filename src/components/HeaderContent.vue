<template>
    <Transition class="container" name="fade">
        <div v-show="menu" class="nav__list1__menu menu">
            <li><a href="#result" class="nav__list1__menu__link">About</a></li>
            <li><a href="#skills" class="nav__list1__menu__link">Skills</a></li>
            <li><a href="#slider" class="nav__list1__menu__link">My Works</a></li>
            <li><a href="#contactUs" class="nav__list1__menu__link">Contac Us</a></li>
        </div>
    </Transition>
    <div class="header__content container">
        <div class="header__content-info slide-in-elliptic-right-fwd">
            <h2 class="header__title">
                HI I'M <span>Sardor Front-end</span> Developer
            </h2>
            <p class="header__descr">
                I am 16 years old, I am very energetic, I always get things done to the end, I try to do things quickly and
                efficiently.
            </p>
            <div class="header__btns">
                <router-link class="header__btns-btn" to="/myWorks">View My works</router-link>
                <button>Contact Me <img src="../assets/images/Frame.svg" alt="png">
                </button>
            </div>
            <img class="header__content-info__el" src="../assets/images/bg3.svg" alt="png">
        </div>
        <img class="header__content-photo" src="../assets/images/s4.png" alt="">
    </div>
</template>

<script>
import 'animate.css';
export default {
    props: {
        menu: Boolean,
    }
}
</script>

<style lang="scss">
.header__content {
    display: flex;
    align-items: center;
    justify-content: center;

    &-photo {
        width: 400px;
        margin: 40px 0 100px 0;
        -webkit-box-shadow: -19px 19px 29px -11px rgba(1, 255, 0, 1);
        -moz-box-shadow: -19px 19px 29px -11px rgba(1, 255, 0, 1);
        box-shadow: -19px 19px 29px -11px rgba(1, 255, 0, 1);
        border-radius: 20px;
    }
}

.header__content-info {
    display: flex;
    flex-direction: column;
    position: relative;

    &__el {
        position: absolute;
        bottom: -150px;
        left: 0;
    }
}

.header__title {
    max-width: 718px;
    color: #0B0C0C;
    font-family: Inter;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 70px;

    & span {
        color: #0DB760;
        font-family: Inter;
        font-size: 58px;
        font-style: normal;
        font-weight: 700;
        line-height: 70px;
    }
}

.header__descr {
    color: #323433;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    max-width: 540px;
    margin-top: 20px;
    margin-bottom: 40px;
}

.header__btns {
    display: flex;
    align-items: center;
    gap: 24px;

    &-btn {
        color: #FFF;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        background: #0DB760;
        padding: 16px 24px;
        border-radius: 20px;
    }

    & button:nth-child(2) {
        display: flex;
        align-items: center;
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
    }
}

.nav__list1 {
    display: none;
    align-items: center;
    transition: 1s;

    &__menu {
        display: flex;
        justify-content: space-between;
        transition: .4s;
        background: #0DB760;

        &.menu {
            padding: 30px 10px;
        }

        &__link {
            transition: 1s;
            color: #ffffff;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: 145%;

            &:hover {
                color: #01ff7c;
            }

            &:active {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 3px;
                    background: #01ff7c;
                    left: 0;
                    bottom: -10px;
                }
            }
        }
    }
}



.fade-enter-active,
.fade-leave-active {
    opacity: 0;
    left: 500px;
}
</style>
<template>
    <header class="header">
        <nav class="nav">
            <div class="container nav__content">
                <h1 class="logo">Web-Programmer</h1>
                <ul class="nav__list">
                    <li><a href="#result" class="nav__list__link">About</a></li>
                    <li><a href="#skills" class="nav__list__link">Skills</a></li>
                    <li><a href="#slider" class="nav__list__link">My Works</a></li>
                    <li><a href="#contactUs" class="nav__list__link">Contac Us</a></li>
                </ul>
                <ul class="nav__list1">
                    <button class="nav__list1__btn" @click="ShowMenu()">
                        <img class="menu__img" v-show="!menu" src="../assets/images/menu__list.svg" alt="png">
                        <img v-show="menu" src="../assets/images/close__list.svg" alt="png">
                    </button>
                </ul>
            </div>
        </nav>
        <HeaderContent :menu="menu" />
    </header>
</template>

<script>
import HeaderContent from "@/components/HeaderContent.vue";
export default {
    data() {
        return {
            links: [
                { title: '', path: '/' },
                { title: '', path: '/skills' },
                { title: '', path: '/myWorks' },
                { title: '', path: '/contactUs' },
            ],
            menu: false,
        }
    },
    components: {
        HeaderContent,
    },
    methods: {
        ShowMenu() {
            this.menu = !this.menu;
        },
    }
}
</script>

<style lang="scss">
.header {}

nav {
    padding-top: 40px;
}

.nav__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    color: #0DB760;
    font-family: Roboto;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
}

.nav__list {
    display: flex;
    align-items: center;
    gap: 40px;
    transition: 1s;

    &__link {
        transition: 1s;
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 145%;
        position: relative;

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

.nav__list1__btn {
    cursor: pointer;
    transition: .5s ease;

    &:active {
        transform: scale(0.95);
    }

    & img {
        width: 28px;
        height: 28px;
    }
}
</style>
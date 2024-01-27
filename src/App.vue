<template>
    <div class="wrapper__load" v-show="show">
        <div class="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div v-show="!show" class="wrapper">
        <Header />
        <Main />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";
export default {
    data() {
        return {
            show: true,
        }
    },
    components: {
        Header,
        Main,
        Footer,
    },
    created() {
        setTimeout(() => {
            this.show = !this.show;
        }, 500);
    },
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

button {
    border: none;
    outline: none;
    background: none;
    transition: .3s;

    &:active {
        transform: scale(0.95);
    }
}

input {
    border: none;
    outline: none;
    background: none;
}

.container {
    max-width: 1140px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
}


@font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/Roboto-Regular.ttf');
    font-weight: 400;
}

@font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/Roboto-Bold.ttf');
    font-weight: 700;
}

@font-face {
    font-family: 'Inter';
    src: url('./assets/fonts/Inter-Regular.ttf');
    font-weight: 400;
}

@font-face {
    font-family: 'Inter';
    src: url('./assets/fonts/Inter-Bold.ttf');
    font-weight: 700;
}

.wrapper__load {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #162434;
}

.loader {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(#00FF00, #00FF00, #00FF00);
    animation: animate 1s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.loader span {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(#00b3ff, #00ffbb, #6bff6b);
}

.loader span:nth-child(1) {
    filter: blur(5px);
}

.loader span:nth-child(2) {
    filter: blur(10px);
}

.loader::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: #162434;
    border-radius: 50%;
}
</style>
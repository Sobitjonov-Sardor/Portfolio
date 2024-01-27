<template>
    <footer class="footer">
        <div class="footer__content container">
            <span>@ 2024. All Rights Reserved</span>
            <span>Designed by Sardor Sobitjonov</span>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
    border-top: 1px solid #BEC0BF;
    margin-top: 164px;
    padding: 44px 0 36px;

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        & span {
            color: #000;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
        }
    }
}
</style>
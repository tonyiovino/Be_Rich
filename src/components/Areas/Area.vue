<template>
    <app-text-link :path="'/input_area/' + data.id">
        <div class="area">
            <span class="area__text">
                {{id}}
            </span>
        </div>
    </app-text-link>
</template>

<script>
export default {
    props: { data: Object, id: String},
}
</script>

<style lang="scss">
.area {
    background-color: $color-secondary;
    height: 40px;
    width: 40px;
    margin: .25rem;

    &:hover{
        border: solid $color-black 2px;
    }

    &__text {
        text-align: center;
        color: $color-black;
    }
}
</style>
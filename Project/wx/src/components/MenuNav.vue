<template>
    <div class="menuNav">
        <ul>
            <li>↑</li>
            <li>☆</li>
            <li>A</li>
            <li>B</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>O</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>U</li>
            <li>V</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
            <li>#</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuNav"
    }
</script>

<style scoped lang="scss">
    .menuNav{
        position: absolute;
        right: 1%;
        top: 16vh;
        li{
            width: 10px;
            text-align: center;
            margin-bottom: 0.8vh;
            font-size: 8px;
        }
    }
</style>
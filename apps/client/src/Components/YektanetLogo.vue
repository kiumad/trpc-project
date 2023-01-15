<template>
    <div class="wrapper">
        <div class="holder">
            <div class="out1"></div>
            <div class="out2"></div>
            <div class="out3"></div>
            <div class="out4"></div>
            <span class="one"></span>
            <div class="dots-base">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="dots-base2">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="triangle-base">
                <span class="gray-triangle"></span>
                <span class="gray-triangle"></span>
                <span class="gray-triangle"></span>
                <span class="gray-triangle"></span>
                <span class="gray-triangle"></span>
                <span class="gray-triangle"></span>
                <span class="gray-triangle"></span>
                <span class="gray-triangle"></span>
            </div>
            <div class="yellow-triangle-base">
                <span class="yellow-triangle"></span>
                <span class="yellow-triangle"></span>
                <span class="yellow-triangle"></span>
                <span class="yellow-triangle"></span>
                <span class="yellow-triangle"></span>
                <span class="yellow-triangle"></span>
                <span class="yellow-triangle"></span>
                <span class="yellow-triangle"></span>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style  scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
}

.holder {
    position: relative;
    width: 80px;
    aspect-ratio: 1;
    font-size: 10vw;
}

.out1 {
    position: absolute;
    background: #231f20;
    /*   background: red; */
    width: 100%;
    height: 100%;
    clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
    );
    -moz-clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
    );
    -webkit-clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
    );
    -o-clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
    );
    animation: out1 1.5s ease-out;
}

.out1::after {
    content: '';
    position: absolute;
    width: 94%;
    height: 94%;
    left: 3%;
    top: 3%;
    background: white;
    clip-path: inherit;
    -moz-clip-path: inherit;
    -webkit-clip-path: inherit;
    -o-clip-path: inherit;
}

.holder img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: -2px;
    top: -2px;
    z-index: 100;
    opacity: 0.4;
    display: none;
}

.out2 {
    animation: out2 1s ease-out;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #231f20;
    clip-path: polygon(
        30% 0,
        50% 15%,
        70% 0,
        75% 25%,
        100% 30%,
        85% 50%,
        100% 70%,
        75% 75%,
        70% 100%,
        50% 85%,
        30% 100%,
        25% 75%,
        0 70%,
        15% 50%,
        0 30%,
        25% 25%
    );

    -moz-clip-path: polygon(
        15% 50%,
        25% 25%,
        30% 5%,
        50% 15%,
        75% 25%,
        95% 30%,
        85% 50%,
        75% 75%,
        70% 95%,
        50% 85%,
        25% 75%,
        5% 70%
    );
    -webkit-clip-path: polygon(
        30% 0,
        50% 15%,
        70% 0,
        75% 25%,
        100% 30%,
        85% 50%,
        100% 70%,
        75% 75%,
        70% 100%,
        50% 85%,
        30% 100%,
        25% 75%,
        0 70%,
        15% 50%,
        0 30%,
        25% 25%
    );
    -o-clip-path: polygon(
        30% 0,
        50% 15%,
        70% 0,
        75% 25%,
        100% 30%,
        85% 50%,
        100% 70%,
        75% 75%,
        70% 100%,
        50% 85%,
        30% 100%,
        25% 75%,
        0 70%,
        15% 50%,
        0 30%,
        25% 25%
    );
}

.out2::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    background: white;
    clip-path: inherit;
    -moz-clip-path: inherit;
    -webkit-clip-path: inherit;
    -o-clip-path: inherit;
}

.out4 {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #231f20;
    clip-path: polygon(
        50% 15%,
        75% 25%,
        85% 50%,
        75% 75%,
        50% 85%,
        25% 75%,
        15% 50%,
        25% 25%
    );
    -moz-clip-path: polygon(
        50% 15%,
        75% 25%,
        85% 50%,
        75% 75%,
        50% 85%,
        25% 75%,
        15% 50%,
        25% 25%
    );
    -webkit-clip-path: polygon(
        50% 15%,
        75% 25%,
        85% 50%,
        75% 75%,
        50% 85%,
        25% 75%,
        15% 50%,
        25% 25%
    );
    -o-clip-path: polygon(
        50% 15%,
        75% 25%,
        85% 50%,
        75% 75%,
        50% 85%,
        25% 75%,
        15% 50%,
        25% 25%
    );
    animation: out2 1s ease-out;
}

.out4::after {
    content: '';
    position: absolute;
    width: 90%;
    height: 90%;
    left: 5%;
    top: 5%;
    background: white;
    clip-path: inherit;
    -moz-clip-path: inherit;
    -webkit-clip-path: inherit;
    -o-clip-path: inherit;
}

.one {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: bold;
}

.one::after {
    content: '1';
    animation: number 1.5s ease-out;
    color: #231f20;
}

@keyframes number {
    0% {
        content: '10';
        opacity: 0.1;
    }
    10% {
        content: '9';
        opacity: 0.1;
    }
    20% {
        content: '8';
        opacity: 0.1;
    }
    30% {
        content: '7';
        opacity: 0.1;
    }
    40% {
        content: '6';
        opacity: 0.1;
    }
    60% {
        content: '5';
        opacity: 0.1;
    }
    70% {
        content: '4';
        opacity: 0.1;
    }
    80% {
        content: '3';
    }
    90% {
        content: '2';
    }
    100% {
        content: '1';
        opacity: 1;
    }
}

.dots-base {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: out1 1.5s ease-out;
    /*   animation: mymove 4s; */
    /*   display: none; */
}

.dots-base2 {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation: out2 1s ease-out;
}

.dots-base > * {
    position: absolute;
    width: 8%;
    height: 8%;
    border-radius: 50%;
    background: #231f20;
    z-index: 200;
}

.dots-base2 > * {
    position: absolute;
    width: 8%;
    height: 8%;
    border-radius: 50%;
    background: #231f20;
    z-index: 200;

    /*   background: red; */
}

.dots-base > *:nth-child(1) {
    left: 27%;
    top: -1%;
}

.dots-base > *:nth-child(2) {
    left: 65%;
    top: -1%;
}

.dots-base > *:nth-child(3) {
    left: 94%;
    top: 26%;
}

.dots-base > *:nth-child(4) {
    left: 94%;
    top: 65%;
}

.dots-base > *:nth-child(5) {
    left: 65%;
    top: 94%;
}

.dots-base > *:nth-child(6) {
    left: 26%;
    top: 94%;
}

.dots-base > *:nth-child(7) {
    left: -2%;
    top: 64%;
}

.dots-base > *:nth-child(8) {
    left: -2%;
    top: 27%;
}

.dots-base2 > *:nth-child(1) {
    left: 12%;
    top: 46%;
}

.dots-base2 > *:nth-child(2) {
    left: 22%;
    top: 22%;
}

.dots-base2 > *:nth-child(3) {
    left: 46%;
    top: 12%;
}

.dots-base2 > *:nth-child(4) {
    left: 70%;
    top: 22%;
}

.dots-base2 > *:nth-child(5) {
    left: 79%;
    top: 45%;
}

.dots-base2 > *:nth-child(6) {
    left: 70%;
    top: 70%;
}

.dots-base2 > *:nth-child(7) {
    left: 45%;
    top: 79%;
}

.dots-base2 > *:nth-child(8) {
    left: 22%;
    top: 70%;
}

.gray-triangle {
    position: absolute;
    width: 16%;
    height: 14%;
    background: #929496;
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    -moz-clip-path: polygon(50% 0, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(50% 0, 100% 100%, 0 100%);
    -o-clip-path: polygon(50% 0, 100% 100%, 0 100%);
    animation: fade 2.2s;
}

.triangle-base {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /*   top: 1.5%;
  left: 1.5%; */
}

.triangle-base > *::after {
    content: '';
    position: absolute;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background: white;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.triangle-base > *:nth-child(1) {
    left: 27%;
    top: 6%;
    transform: rotate(291deg);
    -moz-transform: rotate(291deg);
    -webkit-transform: rotate(338deg);
    -o-transform: rotate(291deg);
}

.triangle-base > *:nth-child(2) {
    left: 57%;
    top: 6%;
    transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
    -o-transform: rotate(20deg);
}

.triangle-base > *:nth-child(3) {
    left: 79%;
    top: 28%;
    transform: rotate(68deg);
    -moz-transform: rotate(68deg);
    -webkit-transform: rotate(68deg);
    -o-transform: rotate(68deg);
}

.triangle-base > *:nth-child(4) {
    left: 79%;
    top: 58%;
    transform: rotate(110deg);
    -moz-transform: rotate(110deg);
    -webkit-transform: rotate(110deg);
    -o-transform: rotate(110deg);
}

.triangle-base > *:nth-child(5) {
    left: 57%;
    top: 80%;
    transform: rotate(159deg);
    -moz-transform: rotate(159deg);
    -webkit-transform: rotate(159deg);
    -o-transform: rotate(159deg);
}

.triangle-base > *:nth-child(6) {
    left: 27%;
    top: 80%;
    transform: rotate(202deg);
    -moz-transform: rotate(202deg);
    -webkit-transform: rotate(202deg);
    -o-transform: rotate(202deg);
}

.triangle-base > *:nth-child(7) {
    left: 5%;
    top: 58%;
    transform: rotate(249deg);
    -moz-transform: rotate(249deg);
    -webkit-transform: rotate(249deg);
    -o-transform: rotate(249deg);
}

.triangle-base > *:nth-child(8) {
    left: 5%;
    top: 28%;
    transform: rotate(291deg);
    -moz-transform: rotate(291deg);
    -webkit-transform: rotate(291deg);
    -o-transform: rotate(291deg);
}

.yellow-triangle {
    position: absolute;
    width: 27%;
    height: 12%;
    background: #fbd73a;
    clip-path: polygon(50% 30%, 100% 100%, 0 100%);
    -moz-clip-path: polygon(50% 30%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(50% 30%, 100% 100%, 0 100%);
    -o-clip-path: polygon(50% 30%, 100% 100%, 0 100%);
    animation: fade 2.1s;
}

.yellow-triangle-base > *::after {
    content: '';
    position: absolute;
    width: 35%;
    height: 50%;
    border-radius: 50%;
    background: white;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.yellow-triangle-base {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    /*   top: -10%;
  left: -17%; */
}

.yellow-triangle-base > *:nth-child(1) {
    left: 9%;
    top: 16%;
    transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    -o-transform: rotate(135deg);
}

.yellow-triangle-base > *:nth-child(2) {
    left: 37%;
    top: 4%;
    transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
}

.yellow-triangle-base > *:nth-child(3) {
    left: 64%;
    top: 16%;
    transform: rotate(225deg);
    -moz-transform: rotate(220deg);
    -webkit-transform: rotate(225deg);
    -o-transform: rotate(220deg);
}

.yellow-triangle-base > *:nth-child(4) {
    left: 77%;
    top: 44%;
    transform: rotate(270deg);
    -moz-transform: rotate(270deg);
    -webkit-transform: rotate(270deg);
    -o-transform: rotate(270deg);
}

.yellow-triangle-base > *:nth-child(5) {
    left: 65%;
    top: 72%;
    transform: rotate(315deg);
    -moz-transform: rotate(315deg);
    -webkit-transform: rotate(315deg);
    -o-transform: rotate(315deg);
}

.yellow-triangle-base > *:nth-child(6) {
    left: 37%;
    top: 84%;
    transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
}

.yellow-triangle-base > *:nth-child(7) {
    left: 8%;
    top: 72%;
    transform: rotate(44deg);
    -moz-transform: rotate(44deg);
    -webkit-transform: rotate(44deg);
    -o-transform: rotate(44deg);
}

.yellow-triangle-base > *:nth-child(8) {
    left: -4%;
    top: 44%;
    transform: rotate(90deg);
    -moz-transform: rotate(44deg);
    -webkit-transform: rotate(90deg);
    -o-transform: rotate(44deg);
}
@keyframes out1 {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes out2 {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    60% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
    }
}
</style>
<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/logo.png" alt="">
            <h1>{{ title }}</h1>
        </div>
        <nav>
            <ul class="nav-links">
                <li v-for="link in links" :key="link.name">
                    <router-link :to="link.path">{{ link.name }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Link {
    name: string;
    path: string;
    navId?: string;
}

const props = defineProps<{
    title?: string;
    links?: Link[];
}>();

const defaultLinks: Link[] = [
    { name: '图片剪切', navId: 'cut', path: '/cut' },
    { name: '图片压缩', navId: 'compress', path: '/compress' },
    { name: '图片拼接', navId: 'merge', path: '/merge' },
];

const title = props.title || '耶温-图片工具';
const links = props.links || defaultLinks;
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background-color: #282c34;
    color: white;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.5);
    border-radius: 0 0 12px 12px;
}


.logo h1 {
    display: inline-block;
    line-height: 32px;
    font-size: 20px;
    font-weight: normal;
    margin: 0;
}

.logo img {
    border-radius: 12px;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    vertical-align: bottom;
}

.nav-links {
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
}

.nav-links li {
    display: inline;
    padding: 12px;
    border-radius: 12px;
}

.nav-links li:hover {
    background-color: #666;
    cursor: pointer;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-links a:hover {
    text-decoration: underline;
}
</style>
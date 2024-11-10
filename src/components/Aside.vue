<template>
    <aside class="aside">
        <h2>关于作者</h2>
        <p>{{ bio }}</p>
        <h3>社交媒体</h3>
        <ul class="social-links">
            <li v-for="link in socialLinks" :key="link.name">
                <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.name }}</a>
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface SocialLink {
    name: string;
    url: string;
}

const props = defineProps<{
    bio: string;
    socialLinks: SocialLink[];
}>();

// 默认的作者简介和社交链接
const defaultBio = "这是一位热爱编程的开发者，专注于前端技术，喜欢分享知识和经验。";
const defaultSocialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' }
];

const bio = props.bio || defaultBio;
const socialLinks = props.socialLinks || defaultSocialLinks;
</script>

<style scoped>
.aside {
    margin: 18px 18px 18px 0;
    padding: 12px;
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 12px;
    width: 240px;
    background-color: #282c347e;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
}

.social-links {
    list-style: none;
    padding: 0;
}

.social-links li {
    margin: 0.5rem 0;
}

.social-links a {
    text-decoration: none;
    color: #007bff;
}

.social-links a:hover {
    text-decoration: underline;
}
</style>
<template>
    <span class="outline-badge">
        <slot />
    </span>
</template>
<style scoped>
.outline-badge {
    align-items: center;
    background: rgba(255,255,255,.035);
    border: 1px solid var(--line);
    border-radius: 99px;
    color: #ded3d7;
    display: inline-flex;
    font-size: .82rem;
    font-weight: 600;
    gap: .4rem;
    padding: .48rem .82rem;
    transition: all .2s ease;
}

.outline-badge:hover{
    border-color: rgba(251,93,93,.65);
    color: white;
    transform: translateY(-2px);
}
</style>

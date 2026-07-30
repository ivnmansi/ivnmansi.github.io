<script setup lang="ts">
    import { onMounted, ref, onBeforeUnmount } from 'vue';
    import { Render, WalkingAnimation } from 'skin3d';

    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let viewer: Render | null = null;

    onMounted(() => {
        if(!canvasRef.value) return;

        viewer = new Render({
            canvas: canvasRef.value,
            width: 200,
            height: 400
        });

        viewer.loadSkin('/skin.png')
        viewer.autoRotate = true;
        viewer.animation = new WalkingAnimation();
    })

    onBeforeUnmount(() => {
        viewer = null;
    })

</script>

<template>
     <div>
        <canvas
            ref="canvasRef"
        />
    </div>
</template>


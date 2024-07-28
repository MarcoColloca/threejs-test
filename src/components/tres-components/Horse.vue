<script setup lang="ts">
import { useAnimations, useGLTF } from '@tresjs/cientos'


const { scene: model, animations, ...rest } = await useGLTF(
  '/models/Test/Horse.gltf',
)

const { actions, mixer } = useAnimations(animations, model)
//const currentAction = ref(actions.Greeting)
//currentAction.value.play()
</script>

<template>
  <primitive :object="model" :scale="[0.005, 0.005, 0.005]"/>
</template>
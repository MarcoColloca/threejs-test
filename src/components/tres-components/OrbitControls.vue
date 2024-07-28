<script setup>
import { extend, useTresContext } from '@tresjs/core'
import { OrbitControls } from 'three/addons/controls/OrbitControls'

const { camera, renderer } = useTresContext()

extend({OrbitControls})

</script>


<template>
    <TresOrbitControls
     v-if="renderer"
     :args="[camera, renderer?.domElement]"
    />

</template>

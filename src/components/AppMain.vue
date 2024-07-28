<script>
    import { TresCanvas } from '@tresjs/core'
    import OrbitControls from './tres-components/OrbitControls.vue';
    import Torus from './tres-components/Torus.vue'
    import Horse from './tres-components/Horse.vue'

    export default {
        data(){
            return{

            }
        },
        mounted(){
        },
        components:{
            OrbitControls,
            Torus,
            Horse
        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <TresCanvas 
         alpha
        >
            <!-- scene -->
            <TresPerspectiveCamera
             :position="[1,1,5]"
             :look-at="[0,0,0]"
            ></TresPerspectiveCamera>
            <OrbitControls />


            <TresAxesHelper
             :args="[2]"
            ></TresAxesHelper>

            <TresAmbientLight
             :args="[0xffffff, 1.5]"
            ></TresAmbientLight>
            
            <TresDirectionalLight
             :args="[0xffffff, 2]" 
            ></TresDirectionalLight>

            <Torus></Torus>
            
            <Suspense>
                <Horse></Horse>
            </Suspense>
        </TresCanvas>
    </main>
</template>



<style lang="scss" scoped>

</style>
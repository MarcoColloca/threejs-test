<script>
    import { TresCanvas } from '@tresjs/core'
    import OrbitControls from './tres-components/OrbitControls.vue';

    export default {
        data(){
            return{

            }
        },
        mounted(){
        },
        components:{
            OrbitControls
        }
    }
</script>



<template>
    <!-- Page Main -->
    <main>
        <TresCanvas clear-color="#000000">
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
             :args="[0xffffff, 2]"
            ></TresAmbientLight>

            <TresMesh>
                <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
                <TresMeshStandardMaterial color="coral" />
            </TresMesh>
        </TresCanvas>
    </main>
</template>



<style lang="scss" scoped>

</style>
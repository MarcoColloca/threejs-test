<script setup>
    import { shallowRef } from 'vue';
    import { useLoop } from '@tresjs/core'
    const { onBeforeRender } = useLoop()

    let right = true
    let left = false

    const torusRef = shallowRef()
    onBeforeRender(({delta, elapsed}) => {
        if(torusRef.value){
            

            //torusRef.value.rotation.y = 2
            torusRef.value.position.y = 0.5;
            // console.log(torusRef.value)
            //torusRef.value.rotation.y = Math.sin(elapsed * 4)
            //torusRef.value.position.x = Math.sin(elapsed * 4)
            //torusRef.value.position.z = Math.sin(elapsed * 1)
            if(right === true)
            {
                //console.log(torusRef.value.rotation.y)
                torusRef.value.rotation.y +=  0.01

                if(torusRef.value.rotation.y > 10){
                    right = false
                    left = true
                }
                
            }
            else if(left === true)
            {
                //console.log(torusRef.value.rotation.y)
                torusRef.value.rotation.y -=  0.01
                if(torusRef.value.rotation.y < 1)
                {
                    right = true
                    left = false
                }
            }

            // if(torusRef.value.rotation.y === 5)
            // {
            //     right = false;
            //     left = true;
            // }
            
            // if(right === true && torusRef.value.rotation.y > 1)
            // {
            //     torusRef.value.rotation.y -= Math.sin(elapsed * 0.1)
            // }

            // if(torusRef.value.rotation.y === 1){
            //     right = true;
            //     left = false;
            // }


        }
    })

</script>


<template>
    <TresMesh ref="torusRef">
        <TresTorusGeometry :args="[1, 0.2, 3, 7]" />
        <TresMeshStandardMaterial color="black" />
    </TresMesh>
</template>
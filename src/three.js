import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import * as THREE from 'three'


console.log(THREE)

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1, 2, 2)
const material = new THREE.MeshNormalMaterial()


const mesh = new THREE.Mesh(geometry, material)


scene.add(mesh)

const temp = {
    with: 1024,
    height: 720
}

const camera = new THREE.PerspectiveCamera(
    75, 
    temp.with / temp.height, 
    0.1, 
    10
)

const render = new THREE.WebGLRenderer()
render.setSize(temp.with, temp.height)

const canvasDOMElement = document.querySelector('#canvas')

canvasDOMElement.appendChild(render.domElement)

camera.position.z = 4
// mesh.rotation.y = Math.PI / 4
// mesh.rotation.x = Math.PI / 4



function tic() {  
    render.render(scene, camera)

    mesh.rotation.y += 0.01
    mesh.rotation.x += 0.01
    mesh.rotation.z += 0.01
    requestAnimationFrame(tic)
}

requestAnimationFrame(tic)
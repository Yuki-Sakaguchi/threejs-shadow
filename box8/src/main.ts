import './style.css';

import {
  Scene,
  WebGLRenderer,
  OrthographicCamera,
  Mesh,
  SpotLight,
  MeshStandardMaterial,
  PlaneGeometry,
  AmbientLight
} from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from './assets/chair_blue.glb?url';

import { gsap } from 'gsap';

let scene = new Scene();

// アイソメトリックな写りにするためにカメラを調整
let aspect = window.innerWidth / window.innerHeight; 
let d = 10;
let camera = new OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
camera.position.set(50, 15, 50);
camera.lookAt(scene.position);

// 環境光を生成
const ambientLight = new AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

// 証明を作成
const light = new SpotLight(0xEEEEEE, 1, 100, Math.PI / 4, 1);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.position.set(32, 32, -32);
scene.add(light);

// レンダラー
const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
//@ts-ignore
renderer.gammaOutput = true;
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// カメラの視点移動
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();

// オブジェクト作成
const size = 1.5;
const gltfLoader = new GLTFLoader();
gltfLoader.load(model, (data) => {
  const base = data.scene;
  base.traverse((object: any) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  const startY = 20;
  const endY = -(size*1.5) + 0.2;

  base.scale.set(size, size, size);
  base.position.set(0, startY, 0);
  scene.add(base);

  const basePosition = base.position;

  const animate = () => {
    gsap
      .timeline()
      .to(base.position, {
        y: endY,
        duration: 1,
        onComplete() {
          setTimeout(() => {
            document.querySelector('.title')?.classList.add('active');
          }, 200);
        }
      })
      .to(base.position, {
        x: basePosition.x - (size*1.5),
        z: basePosition.z + (size*1.5),
        delay: 0.25,
        duration: 0.5,
        ease: 'sine.out',
      })
  };

  setTimeout(animate, 500);
});

// 床の生成
const plane = new Mesh(
  new PlaneGeometry(300, 300, 1, 1),
  new MeshStandardMaterial({ color: 0xEEEEEE, roughness: 0.5 })
);
plane.position.set(0, 0, 0);
plane.rotateX(-0.5 * Math.PI);
plane.position.y = -size*1.5;
plane.receiveShadow = true;
plane.castShadow = true;
scene.add(plane);


// アニメーション
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();

// リサイズ処理
const resize = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  aspect = width / height;
  camera.left = -aspect * d;
  camera.right = aspect * d;
  camera.top = d;
  camera.bottom = -d;
  camera.updateProjectionMatrix();
};
resize();
window.addEventListener('resize', resize);

import './style.css';

import {
  Scene,
  WebGLRenderer,
  OrthographicCamera,
  Mesh,
  SpotLight,
  MeshStandardMaterial,
  PlaneGeometry,
  AmbientLight,
  Raycaster,
  Intersection,
  Group
} from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from './assets/chair_blue.glb?url'

const objectList: Chair[] = [];
const mouse = { x: 0, y: 0 };
const clickPoint = { x: 0, y: 0 };
let targetObj: Intersection<Chair>[] = [];
let canvasEl: HTMLElement;

let scene = new Scene();

// アイソメトリックな写りにするためにカメラを調整
let aspect = window.innerWidth / window.innerHeight; 
let d = 10;
let camera = new OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
camera.position.set(50, 50, 50);
camera.lookAt(scene.position);

// 環境光を生成
const ambientLight = new AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

// 証明を作成
const light = new SpotLight(0xEEEEEE, 1, 100, Math.PI / 4, 1);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.position.set(12, 12, -12);
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

class Chair extends Group {
  meshList: Mesh[];
  isAnimation: Boolean;

  constructor(meshList: Mesh[]) {
    super();
    this.meshList = meshList;
    this.isAnimation = false;
    for (let i = 0; i < meshList.length; i++) {
      meshList[i].castShadow = true;
      meshList[i].receiveShadow = true;
      this.add(meshList[i].clone());
    }
  }

  animate() {
    if (this.isAnimation) return;
    this.isAnimation = true;

    const positionY = this.position.y;
    const rotationY = this.rotation.y;
    const power = 2;

    gsap
      .timeline()
      .to(this.position, {
        y: positionY + power,
        ease: 'sine.out',
        duration: 0.3,
      })
      .to(this.rotation, {
        y: rotationY + Math.PI * 2,
        ease: 'sine.in',
        duration: '0.2',
      }, 0.08)
      .to(this.position, {
        y: positionY,
        ease: 'sine.in',
        duration: 0.15,
        delay: 0.25,
        onComplete: () => {
          this.isAnimation = false;
        }
      })
  }
}


// オブジェクト作成
const count = 15;
const size = 1;
const offset = 4;

// オブジェクトを作って敷き詰める関数
const createChair = (meshList: Mesh[]) => {
  for (let z = -count/2; z < count/2; z++) {
    for (let x = -count/2; x < count/2; x++) {
      const object = new Chair(meshList);
      object.scale.set(size, size, size);
      object.position.set(x * (size * offset), 0, z * (size * offset));
      scene.add(object);
      objectList.push(object);
    }
  }
}

const gltfLoader = new GLTFLoader();
gltfLoader.load(model, (data) => {
  const base = data.scene;
  const meshList: Mesh[] = [];

  // 使っているメッシュを全て格納
  base.traverse((object: any) => {
    if (object.isMesh) {
      meshList.push(object);
    }
  });

  // 使っているメッシュを元にオブジェクトを作る
  createChair(meshList);
});

// 床の生成
const plane = new Mesh(
  new PlaneGeometry(150, 150, 1, 1),
  new MeshStandardMaterial({ color: 0xEEEEEE, roughness: 0.0 })
);
plane.position.set(-5, -size, 0);
plane.rotateX(-0.5 * Math.PI);
plane.receiveShadow = true;
plane.castShadow = true;
scene.add(plane);


// アニメーション
const animate = () => {
  requestAnimationFrame(animate);

  if (canvasEl) {
    if (targetObj.length > 0) {
      canvasEl.style.cursor = 'pointer';
    } else {
      canvasEl.style.cursor = 'auto';
    }
  }

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

// アイソメトリックでのレイキャスターの確認
// 参考）https://codepen.io/U-YA/pen/KVaEMO
const ray = new Raycaster();
canvasEl = document.querySelector('canvas') as HTMLElement;

// ホバーで当たり判定があるオブジェクトを保存
canvasEl?.addEventListener('mousemove', (event) => {
  mouse.x = (event.offsetX - (window.innerWidth / 2)) / window.innerWidth * 2;
  mouse.y = (-event.offsetY + (window.innerHeight / 2)) / window.innerHeight * 2;

  ray.setFromCamera(mouse, camera);
  targetObj = ray.intersectObjects(objectList);
});


// クリックで要素と当たり判定があればアニメーションを実行
canvasEl?.addEventListener('click', (event) => {
  clickPoint.x = (event.offsetX - (window.innerWidth / 2)) / window.innerWidth * 2;
  clickPoint.y = (-event.offsetY + (window.innerHeight / 2)) / window.innerHeight * 2;

  ray.setFromCamera(clickPoint, camera);

  const target = ray.intersectObjects(objectList);
  if (target.length > 0) {
    for (let i = 0; i < objectList.length; i++) {
      if (target[0].object.parent === objectList[i]) {
        objectList[i].animate(); 
      }
    }
  }
});


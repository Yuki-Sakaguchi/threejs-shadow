import './style.css';

import {
  Scene,
  WebGLRenderer,
  OrthographicCamera,
  Mesh,
  SpotLight,
  BoxGeometry,
  MeshStandardMaterial,
  PlaneGeometry,
  AmbientLight,
  Raycaster,
  Intersection,
  Color
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const objectList:Mesh[] = [];
const mouse = { x: 0, y: 0 };
let targetObj: Intersection[] = [];

let scene = new Scene();

// アイソメトリックな写りにするためにカメラを調整
let aspect = window.innerWidth / window.innerHeight; 
let d = 20;
let camera = new OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
camera.position.set(50, 50, 50);
camera.lookAt(scene.position);

// 環境光を生成
const ambientLight = new AmbientLight(0xFFFFFF, 1.0);
scene.add(ambientLight);

// 証明を作成
const light = new SpotLight(0xEEEEEE, 1, 100, Math.PI, 0.5);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
const t = 200000; // 特に意味のない数字なのでいい感じに調整する
const r = 50.0;
const lx = r * Math.cos(t);
const lz = r * Math.sin(t);
const ly = 20.0 + 5.0 * Math.sin(t / 3.0);
light.position.set(lx, ly, lz);
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
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// オブジェクト作成
const count = 12;
const size = 10;
for (let z = -count; z < count; z++) {
  for (let x = -count; x < count; x++) {
    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshStandardMaterial({ color: 0xAA0000, roughness: 0.0 });
    const object = new Mesh(geometry, material);
    object.receiveShadow = true;
    object.castShadow = true;
    object.position.set(x * (size * 1.5), 0, z * (size * 1.5));
    scene.add(object);
    objectList.push(object);
  }
}

// 床の生成
const plane = new Mesh(
  new PlaneGeometry(150, 150, 1, 1),
  new MeshStandardMaterial({ color: 0xEEEEEE, roughness: 0.0 })
);
plane.position.set(-5, 0, 0);
plane.rotateX(-0.5 * Math.PI);
plane.position.y = -size/2;
plane.receiveShadow = true;
plane.castShadow = true;
scene.add(plane);

// アニメーション
const animate = () => {
  requestAnimationFrame(animate);

  if (targetObj.length > 0) {
    // @ts-ignore
    targetObj[0].object.material.color = new Color(0xFFFFFF);
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
document.querySelector('canvas')?.addEventListener('mousemove', (event) => {
  mouse.x = (event.offsetX - (window.innerWidth / 2)) / window.innerWidth * 2;
  mouse.y = (-event.offsetY + (window.innerHeight / 2)) / window.innerHeight * 2;

  ray.setFromCamera(mouse, camera);
  targetObj = ray.intersectObjects(objectList);
});


import './style.css';

import {
  Scene,
  WebGLRenderer,
  OrthographicCamera,
  Mesh,
  SpotLight,
  BoxGeometry,
  MeshStandardMaterial
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene = new Scene();

// アイソメトリックな写りにするためにカメラを調整
let aspect = window.innerWidth / window.innerHeight; 
let d = 20;
let camera = new OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
camera.position.set(50, 50, 50);
camera.lookAt(scene.position);

// 証明を作成
const light = new SpotLight(0xFFFFFF, 2, 100, Math.PI / 4, 1);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
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
const size = 10;
const geometry = new BoxGeometry(size, size, size);
const material = new MeshStandardMaterial({ color: 0xAA0000, roughness: 0.0 });
const object = new Mesh(geometry, material);
object.receiveShadow = true;
scene.add(object);

// アニメーション
const animate = () => {
  requestAnimationFrame(animate);
  const t = Date.now() / 500;
  const r = 20.0;
  const lx = r * Math.cos(t);
  const lz = r * Math.sin(t);
  const ly = 20.0 + 5.0 * Math.sin(t / 3.0);
  light.position.set(lx, ly, lz);
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


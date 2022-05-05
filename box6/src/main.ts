import './style.css';

import {
  Scene,
  WebGLRenderer,
  OrthographicCamera,
  Mesh,
  SpotLight,
  BoxGeometry,
  Material,
  MeshStandardMaterial,
  PlaneGeometry,
  AmbientLight,
  Raycaster,
  Intersection,
  Color
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { gsap } from 'gsap';

const objectList:Box[] = [];
const mouse = { x: 0, y: 0 };
let targetObj: Intersection<Box>[] = [];

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


// ボックスクラス
class Box extends Mesh {
  isAnimation: Boolean;
  baseColor: Color;
  constructor(geometry: BoxGeometry, material: Material) {
    super(geometry, material);
    this.isAnimation = false;
    // @ts-ignore
    this.baseColor = this.material.color;
  }
  animate() {
    if (this.isAnimation) return;
    this.isAnimation = true;
    // @ts-ignore
    this.material.color = new Color(0x888888);
    setTimeout(() => {
      // @ts-ignore
      this.material.color = this.baseColor;
      this.isAnimation = false;
    }, 200);
  }
}

// オブジェクト作成
const count = 15;
const size = 5;
for (let z = -count/2; z < count/2; z++) {
  for (let x = -count/2; x < count/2; x++) {
    const geometry = new BoxGeometry(size, size, size);
    const material = new MeshStandardMaterial({ color: 0x880000, roughness: 0.5 });
    const object = new Box(geometry, material);
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


// ウエーブのアニメーション
const boxWave = (column: number) => {
  for (let i = column; i < count * count; i += count) {
    gsap
      .timeline()
      .to(objectList[i].scale, {
        y: 2,
        ease: 'sine.out',
        duration: 0.5
      })
      .set(objectList[i].scale, {
        y: 2,
      })
      .to(objectList[i].scale, {
        y: 1,
        ease: 'sine.in',
        duration: 0.5
      });
  }
};

// アニメーション
let frame = 0;
let column = 1;
const animate = () => {
  requestAnimationFrame(animate);

  frame += 1;

  if (frame % 15 === 0) {
    boxWave(column);
    column += 1;
    if (column > count - 1) {
      column = 1;
    }
  }

  if (targetObj.length > 0) {
    targetObj[0].object.animate();
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


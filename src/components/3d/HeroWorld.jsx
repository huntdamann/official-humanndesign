import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function HeroWorld({ container }) {
  //   const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls, world;
    let animationId;
    let isMounted = true; // guards against setting state / running after unmount

    async function init() {
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xcccccc, 500, 10000);

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        30000
      );
      camera.position.set(-900, -200, 900);

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.current.appendChild(renderer.domElement);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.target.set(0, 0, 0);

      scene.add(new THREE.AmbientLight(0xffffff, 1));
      const dirLight = new THREE.DirectionalLight(0xffffff, 2);
      dirLight.position.set(5, 10, 7.5);
      scene.add(dirLight);

      //   const loader = new GLTFLoader();
      //   try {
      //     const gltf = await loader.loadAsync("/models/grand_piano.glb");
      //     if (!isMounted) return; // unmounted while loading — bail out
      //     scene.add(gltf.scene);
      //   } catch (err) {
      //     console.error("Failed to load piano model:", err);
      //   }

      if (!isMounted) return;

      const materialArray = [];
      const paths = [
        "humble_ft.jpg",
        "humble_bk.jpg",
        "humble_up.jpg",
        "humble_dn.jpg",
        "humble_rt.jpg",
        "humble_lf.jpg",
      ];
      for (const p of paths) {
        const tex = new THREE.TextureLoader().load(`/3dassets/penguins4/${p}`);
        materialArray.push(
          new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
        );
      }
      const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
      world = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(world);

      animate();
    }

    function animate() {
      animationId = requestAnimationFrame(animate);
      if (world) world.rotation.y += 0.0007;
      controls.update();
      renderer.render(scene, camera);
    }

    function handleResize() {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    init();

    // Cleanup on unmount
    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);

      if (controls) controls.dispose();

      if (renderer) {
        renderer.dispose();
        if (
          container.current &&
          renderer.domElement.parentNode === container.current
        ) {
          container.current.removeChild(renderer.domElement);
        }
      }

      // Dispose geometries/materials/textures to avoid GPU memory leaks
      if (scene) {
        scene.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            const materials = Array.isArray(obj.material)
              ? obj.material
              : [obj.material];
            materials.forEach((mat) => {
              if (mat.map) mat.map.dispose();
              mat.dispose();
            });
          }
        });
      }
    };
  }, []); // empty deps — run once on mount

  return (
    <div
      ref={container}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    />
  );
}

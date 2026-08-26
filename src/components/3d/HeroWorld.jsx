import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function HeroWorld({ container, userSelection }) {
  //   const containerRef = useRef(null);

  const [liveWorld, setLiveWorld] = useState(false);

  const sceneRef = useRef(null);
  const worldRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls;
    let animationId;
    var world;
    const paths = [
      [
        "humble_ft.jpg",
        "humble_bk.jpg",
        "humble_up.jpg",
        "humble_dn.jpg",
        "humble_rt.jpg",
        "humble_lf.jpg",
      ],
      [
        "trance_ft.jpg",
        "trance_bk.jpg",
        "trance_up.jpg",
        "trance_dn.jpg",
        "trance_rt.jpg",
        "trance_lf.jpg",
      ],
    ];
    let secondPaths;
    let materialArray = [];
    let isMounted = true; // guards against setting state / running after unmount

    let skyboxGeo;

    function init() {
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

      //If user clicks option, changeScene()

      //changeScene()? Needs a window event listener/ref for when button is clicked
      //once changeScene()? look at current option and load the new materials
      //

      //Have two parts of use effect that runs when my state changes from user clicking the
      //option they want
      //Part one(Stage-Mode ) will run on intial useeffect in order to stage info and initialize
      //the necessary values
      //Part 2(Live mode) will see if live mode variable has been set,
      //so that when the users clicks his option, the useEffect skips intialization
      //and moves to focus on rendering the new selection

      if (!isMounted) return;

      // const materialArray = [];

      let initPath = paths[0];

      for (const p of initPath) {
        const tex = new THREE.TextureLoader().load(`/3dassets/penguins4/${p}`);
        materialArray.push(
          new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
        );
      }
      skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
      world = new THREE.Mesh(skyboxGeo, materialArray);
      scene.add(world);

      animate();
    }

    //Loads renderer to the canvas and adds a small rotation to
    //scene
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
    // init();

    if (!liveWorld) {
      init();
      console.log("Running Scene Initialization on first mount");
      setLiveWorld(!liveWorld);
    } else {
      changeScene(paths[1], world);
    }

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
  }, [userSelection]); // empty deps — run once on mount

  function changeScene(path) {
    if (!sceneRef.current) return;

    // Remove the previous world from the scene
    if (worldRef.current) {
      sceneRef.current.remove(worldRef.current);
    }

    const materialArray = [];
    for (const p of path) {
      const tex = new THREE.TextureLoader().load(`/3dassets/penguins4/${p}`);
      materialArray.push(
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide })
      );
    }

    const skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
    const newWorld = new THREE.Mesh(skyboxGeo, materialArray);

    // Add the new world to the scene
    sceneRef.current.add(newWorld);
    worldRef.current = newWorld; // Update the reference to the current world
  }

  // function changeScene(slugs) {

  //   let tempArray = [];
  //   console.log(slugs);
  //   for (const p of slugs) {
  //     const texture = new THREE.TextureLoader().load(
  //       `/3dassets/penguins_combined/${p}`
  //     );

  //     tempArray.push(
  //       new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide })
  //     );
  //     console.log(world);
  //     if (worldMesh) {
  //       worldMesh.material = tempArray;

  //       // Ensure the materials are updated
  //       worldMesh.material.forEach((material) => {
  //         material.needsUpdate = true;
  //       });
  //     }
  //   }
  //   // world = new THREE.Mesh(skyboxGeo, materialArray);
  //   // scene.add(world);
  // }

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

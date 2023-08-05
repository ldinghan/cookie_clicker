import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  console.log('mount')
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(150, 150);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 2;
      // Add this inside the useEffect hook after initializing the renderer
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      // Add this function inside the useEffect hook
      const renderScene = () => {
        cube.rotation.x += 0.006;
        cube.rotation.y += 0.006;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };

      // Call the renderScene function to start the animation loop
      renderScene();
    }
    
  }, []);
  return <div className="w-[400px] h-[400px] select-none" ref={containerRef}/>
};
export default ThreeScene;
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeScene = ({ sceneType, isVisible }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x00d4ff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffd700, 0.5);
    pointLight.position.set(-5, 5, 0);
    scene.add(pointLight);

    // Create different geometries based on scene type
    let mainObject;

    switch (sceneType) {
      case 'ai':
        // Floating cube with neural mesh effect
        const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const cubeMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x00d4ff,
          metalness: 0.9,
          roughness: 0.1,
          transparent: true,
          opacity: 0.8,
          envMapIntensity: 1,
          clearcoat: 1,
          clearcoatRoughness: 0.1,
        });
        mainObject = new THREE.Mesh(cubeGeometry, cubeMaterial);

        // Add wireframe overlay
        const wireframeGeometry = new THREE.EdgesGeometry(cubeGeometry);
        const wireframeMaterial = new THREE.LineBasicMaterial({ 
          color: 0x00ffff,
          transparent: true,
          opacity: 0.5
        });
        const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
        mainObject.add(wireframe);

        // Add small orbiting spheres
        for (let i = 0; i < 8; i++) {
          const sphereGeometry = new THREE.SphereGeometry(0.05, 16, 16);
          const sphereMaterial = new THREE.MeshBasicMaterial({ 
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.8
          });
          const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
          const angle = (i / 8) * Math.PI * 2;
          sphere.position.set(Math.cos(angle) * 2, Math.sin(angle) * 2, 0);
          sphere.userData.angle = angle;
          sphere.userData.radius = 2;
          mainObject.add(sphere);
        }
        break;

      case 'web':
        // Expanding circular form with rings
        const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
        const torusMaterial = new THREE.MeshPhysicalMaterial({
          color: 0xffd700,
          metalness: 0.8,
          roughness: 0.2,
          transparent: true,
          opacity: 0.9,
        });
        mainObject = new THREE.Mesh(torusGeometry, torusMaterial);

        // Add multiple rings
        for (let i = 1; i <= 3; i++) {
          const ringGeometry = new THREE.TorusGeometry(1 + i * 0.3, 0.02, 16, 100);
          const ringMaterial = new THREE.MeshBasicMaterial({
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.3,
          });
          const ring = new THREE.Mesh(ringGeometry, ringMaterial);
          ring.rotation.x = Math.PI / 2;
          ring.userData.scaleSpeed = 0.001 * i;
          mainObject.add(ring);
        }
        break;

      case 'app':
        // Vertical glass slab
        const slabGeometry = new THREE.BoxGeometry(1, 2.5, 0.1);
        const slabMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x00d4ff,
          metalness: 0.1,
          roughness: 0.1,
          transparent: true,
          opacity: 0.4,
          transmission: 0.9,
          thickness: 0.5,
        });
        mainObject = new THREE.Mesh(slabGeometry, slabMaterial);

        // Add glowing edges
        const edgesGeometry = new THREE.EdgesGeometry(slabGeometry);
        const edgesMaterial = new THREE.LineBasicMaterial({ 
          color: 0x00ffff,
          linewidth: 2
        });
        const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        mainObject.add(edges);

        // Add light particles inside
        const particleCount = 20;
        const particlesGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 0.8;
          positions[i + 1] = (Math.random() - 0.5) * 2.3;
          positions[i + 2] = (Math.random() - 0.5) * 0.05;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const particlesMaterial = new THREE.PointsMaterial({
          color: 0xffd700,
          size: 0.03,
          transparent: true,
          opacity: 0.8,
        });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        mainObject.add(particles);
        break;

      case 'arvr':
        // Intersecting spheres
        const sphere1Geometry = new THREE.SphereGeometry(0.8, 32, 32);
        const sphere1Material = new THREE.MeshPhysicalMaterial({
          color: 0x00d4ff,
          metalness: 0.7,
          roughness: 0.2,
          transparent: true,
          opacity: 0.7,
        });
        mainObject = new THREE.Mesh(sphere1Geometry, sphere1Material);

        const sphere2Geometry = new THREE.SphereGeometry(0.8, 32, 32);
        const sphere2Material = new THREE.MeshPhysicalMaterial({
          color: 0xff00ff,
          metalness: 0.7,
          roughness: 0.2,
          transparent: true,
          opacity: 0.5,
        });
        const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Material);
        sphere2.position.x = 0.6;
        mainObject.add(sphere2);

        const sphere3Geometry = new THREE.SphereGeometry(0.8, 32, 32);
        const sphere3Material = new THREE.MeshPhysicalMaterial({
          color: 0xffd700,
          metalness: 0.7,
          roughness: 0.2,
          transparent: true,
          opacity: 0.5,
        });
        const sphere3 = new THREE.Mesh(sphere3Geometry, sphere3Material);
        sphere3.position.x = -0.6;
        mainObject.add(sphere3);

        // Add fog for depth
        scene.fog = new THREE.Fog(0x000000, 3, 10);
        break;

      default:
        // Default geometry
        const defaultGeometry = new THREE.SphereGeometry(1, 32, 32);
        const defaultMaterial = new THREE.MeshPhysicalMaterial({
          color: 0x00d4ff,
          metalness: 0.8,
          roughness: 0.2,
        });
        mainObject = new THREE.Mesh(defaultGeometry, defaultMaterial);
        break;
    }

    scene.add(mainObject);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseMove = (event) => {
      const rect = canvasRef.current.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      targetRotationX = mouseY * 0.3;
      targetRotationY = mouseX * 0.3;
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mousemove', onMouseMove);
    }

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth rotation towards target
      mainObject.rotation.x += (targetRotationX - mainObject.rotation.x) * 0.05;
      mainObject.rotation.y += (targetRotationY - mainObject.rotation.y) * 0.05;

      // Auto-rotation
      mainObject.rotation.y += 0.003;

      // Scene-specific animations
      switch (sceneType) {
        case 'ai':
          // Pulse effect on cube
          const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
          mainObject.scale.set(scale, scale, scale);
          
          // Orbit small spheres
          mainObject.children.forEach((child, index) => {
            if (child.geometry?.type === 'SphereGeometry' && child.userData.angle !== undefined) {
              const angle = child.userData.angle + elapsedTime * 0.5;
              const radius = child.userData.radius;
              child.position.x = Math.cos(angle) * radius;
              child.position.y = Math.sin(angle) * radius;
            }
          });
          break;

        case 'web':
          // Rotate rings
          mainObject.children.forEach((child) => {
            if (child.userData.scaleSpeed) {
              child.rotation.z += 0.01;
              const breathe = 1 + Math.sin(elapsedTime + child.userData.scaleSpeed * 1000) * 0.1;
              child.scale.set(breathe, breathe, breathe);
            }
          });
          break;

        case 'app':
          // Move particles
          mainObject.children.forEach((child) => {
            if (child.type === 'Points') {
              const positions = child.geometry.attributes.position.array;
              for (let i = 1; i < positions.length; i += 3) {
                positions[i] += Math.sin(elapsedTime + i) * 0.002;
                if (positions[i] > 1.15) positions[i] = -1.15;
              }
              child.geometry.attributes.position.needsUpdate = true;
            }
          });
          break;

        case 'arvr':
          // Intersecting spheres animation
          mainObject.children.forEach((child, index) => {
            if (child.geometry?.type === 'SphereGeometry') {
              const offset = index * Math.PI * 0.66;
              child.position.x = Math.cos(elapsedTime + offset) * 0.6;
              child.position.z = Math.sin(elapsedTime + offset) * 0.3;
            }
          });
          break;

        default:
          // No additional animation for default case
          break;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!canvasRef.current) return;
      camera.aspect = canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      const canvas = canvasRef.current;
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', onMouseMove);
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, [sceneType]);

  return (
    <canvas
      ref={canvasRef}
      className="three-canvas"
      style={{
        width: '100%',
        height: '100%',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease',
      }}
    />
  );
};

export default ThreeScene;

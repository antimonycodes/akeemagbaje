import React, { useEffect, useRef } from "react";
import ThreeGlobe from "three-globe";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const GlobalVisualization = () => {
  const containerRef = useRef();
  const globeRef = useRef();
  const rendererRef = useRef();
  const sceneRef = useRef();
  const cameraRef = useRef();
  const controlsRef = useRef();

  // Sample data for points and arcs
  const pointsData = [
    {
      lat: 40.7128,
      lng: -74.006,
      size: 1,
      color: "#ff4444",
      label: "New York",
    },
    { lat: 51.5074, lng: -0.1278, size: 1, color: "#4444ff", label: "London" },
    { lat: 35.6762, lng: 139.6503, size: 1, color: "#44ff44", label: "Tokyo" },
  ];

  const arcsData = [
    {
      startLat: 40.7128,
      startLng: -74.006,
      endLat: 51.5074,
      endLng: -0.1278,
      color: "#ffff44",
    },
    {
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 35.6762,
      endLng: 139.6503,
      color: "#ff44ff",
    },
  ];

  useEffect(() => {
    // Initialize only once
    if (!globeRef.current) {
      // Scene
      sceneRef.current = new Scene();

      // Camera
      cameraRef.current = new PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      cameraRef.current.position.z = 300;

      // Renderer
      rendererRef.current = new WebGLRenderer({ antialias: true });
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(rendererRef.current.domElement);

      // Globe
      globeRef.current = new ThreeGlobe()
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
        .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
        .atmosphereColor("lightskyblue")
        .atmosphereAltitude(0.1)
        .pointsData(pointsData)
        .pointAltitude("size")
        .pointColor("color")
        .pointLabel("label")
        .arcsData(arcsData)
        .arcColor("color")
        .arcAltitude(0.2)
        .arcStroke(0.5);

      // Add globe to scene
      sceneRef.current.add(globeRef.current);

      // Lights
      const ambientLight = new AmbientLight(0xbbbbbb);
      sceneRef.current.add(ambientLight);
      const directionalLight = new DirectionalLight(0xffffff, 0.6);
      directionalLight.position.set(300, 300, 400);
      sceneRef.current.add(directionalLight);

      // Controls
      controlsRef.current = new OrbitControls(
        cameraRef.current,
        rendererRef.current.domElement
      );
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.05;
      controlsRef.current.screenSpacePanning = false;
      controlsRef.current.minDistance = 200;
      controlsRef.current.maxDistance = 500;

      // Animation
      function animate() {
        requestAnimationFrame(animate);
        controlsRef.current.update();
        rendererRef.current.render(sceneRef.current, cameraRef.current);
        globeRef.current.rotation.y += 0.001;
      }
      animate();

      // Handle window resize
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        containerRef.current?.removeChild(rendererRef.current.domElement);
        controlsRef.current.dispose();
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen bg-black"
      style={{ cursor: "grab" }}
    />
  );
};

export default GlobalVisualization;

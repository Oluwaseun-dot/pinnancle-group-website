import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef(null);
  const [activeNode, setActiveNode] = useState(null);
  const [hasError, setHasError] = useState(false);

  // Exact 8 Nodes required by Section 33 & Phase 5
  const businessNodes = [
    { name: 'LEADS', top: '16%', left: '18%', desc: 'Capture & Instant Response' },
    { name: 'CRM', top: '22%', right: '18%', desc: 'Centralized Pipeline & Records' },
    { name: 'AI', top: '42%', left: '10%', desc: 'Autonomous Reasoning & Triage' },
    { name: 'CUSTOMERS', top: '48%', right: '12%', desc: '24/7 Intelligent Service' },
    { name: 'AUTOMATION', top: '70%', left: '16%', desc: 'Zero Manual Repetitive Tasks' },
    { name: 'DATA', top: '75%', right: '22%', desc: 'Real-Time Sync & Hygiene' },
    { name: 'SALES', top: '32%', left: '32%', desc: 'Automated Pipeline Follow-Up' },
    { name: 'COMMUNICATION', top: '62%', right: '34%', desc: 'Voice, SMS & WhatsApp' },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer, animationFrameId;
    let coreGeo, coreMat, sphereGeo, matWhite, matSilver, matLime;
    let lineGeometry, lineMaterial, orbitGeo, orbitMat;
    let handleMouseMove, handleScroll, handleResize;

    try {
      const isMobile = window.innerWidth < 768;
      const particleCount = isMobile ? 30 : 65;

      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      // 1. Scene & Fog
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050505, 0.002);

      // 2. Camera
      const camera = new THREE.PerspectiveCamera(52, width / (height || 1), 0.1, 1000);
      camera.position.z = 220;

      // 3. WebGLRenderer with fallback safety
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: !isMobile,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const networkGroup = new THREE.Group();
      scene.add(networkGroup);

      // 4. Central Geometric Core
      coreGeo = new THREE.OctahedronGeometry(22, 1);
      coreMat = new THREE.MeshBasicMaterial({
        color: 0x333333,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      networkGroup.add(coreMesh);

      // 5. Network Nodes
      const nodes = [];
      sphereGeo = new THREE.SphereGeometry(1.4, 8, 8);
      matWhite = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
      matSilver = new THREE.MeshBasicMaterial({ color: 0x888888, transparent: true, opacity: 0.7 });
      matLime = new THREE.MeshBasicMaterial({ color: 0xccff00, transparent: true, opacity: 0.95 });

      const radius = 90;
      for (let i = 0; i < particleCount; i++) {
        const phi = Math.acos(-1 + (2 * i) / particleCount);
        const theta = Math.sqrt(particleCount * Math.PI) * phi;
        const r = radius + (Math.random() - 0.5) * 36;

        const x = r * Math.cos(theta) * Math.sin(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(phi);

        let mat = matWhite;
        if (i % 8 === 0) {
          mat = matLime;
        } else if (i % 2 === 0) {
          mat = matSilver;
        }

        const node = new THREE.Mesh(sphereGeo, mat);
        node.position.set(x, y, z);
        node.userData = {
          originX: x,
          originY: y,
          originZ: z,
          speed: 0.15 + Math.random() * 0.3,
          phase: Math.random() * Math.PI * 2,
        };

        networkGroup.add(node);
        nodes.push(node);
      }

      // 6. Dynamic Connecting Lines
      const maxLines = isMobile ? 25 : 60;
      const linePositions = new Float32Array(maxLines * 2 * 3);
      const lineColors = new Float32Array(maxLines * 2 * 3);

      lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
      });
      const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
      networkGroup.add(linesMesh);

      // 7. Outer Orbit
      orbitGeo = new THREE.BufferGeometry();
      const orbitPoints = [];
      const segments = 64;
      const orbitRadius = 115;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        orbitPoints.push(Math.cos(theta) * orbitRadius, Math.sin(theta) * orbitRadius, 0);
      }
      orbitGeo.setAttribute('position', new THREE.Float32BufferAttribute(orbitPoints, 3));
      orbitMat = new THREE.LineBasicMaterial({ color: 0x444444, transparent: true, opacity: 0.25 });
      const orbitRing = new THREE.Line(orbitGeo, orbitMat);
      orbitRing.rotation.x = Math.PI / 3;
      networkGroup.add(orbitRing);

      // 8. Mouse & Scroll interaction
      let mouseX = 0;
      let mouseY = 0;
      let targetRotationX = 0;
      let targetRotationY = 0;
      let scrollY = 0;

      handleMouseMove = (e) => {
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / (rect.width || 1) - 0.5;
        const y = (e.clientY - rect.top) / (rect.height || 1) - 0.5;
        mouseX = x * 1.4;
        mouseY = y * 1.4;
      };

      handleScroll = () => {
        scrollY = window.scrollY;
      };

      handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / (h || 1);
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize);

      // 9. Render Loop
      const clock = new THREE.Clock();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        networkGroup.rotation.y += 0.001;
        coreMesh.rotation.x += 0.0015;
        coreMesh.rotation.y += 0.002;
        orbitRing.rotation.z += 0.0008;

        targetRotationY += (mouseX - targetRotationY) * 0.04;
        targetRotationX += (mouseY - targetRotationX) * 0.04;

        networkGroup.rotation.y += targetRotationY * 0.015;
        networkGroup.rotation.x = targetRotationX * 0.015 + scrollY * 0.0003;
        networkGroup.position.y = -scrollY * 0.04;

        nodes.forEach((node) => {
          const { originX, originY, originZ, speed, phase } = node.userData;
          const delta = Math.sin(elapsedTime * speed + phase) * 1.6;
          node.position.x = originX + delta;
          node.position.y = originY + delta;
          node.position.z = originZ + delta;
        });

        let connectionIdx = 0;
        const positions = lineGeometry.attributes.position.array;
        const colors = lineGeometry.attributes.color.array;

        for (let i = 0; i < nodes.length && connectionIdx < maxLines; i++) {
          for (let j = i + 1; j < nodes.length && connectionIdx < maxLines; j++) {
            const dist = nodes[i].position.distanceTo(nodes[j].position);
            if (dist < 40) {
              const pIdx = connectionIdx * 6;
              positions[pIdx] = nodes[i].position.x;
              positions[pIdx + 1] = nodes[i].position.y;
              positions[pIdx + 2] = nodes[i].position.z;
              positions[pIdx + 3] = nodes[j].position.x;
              positions[pIdx + 4] = nodes[j].position.y;
              positions[pIdx + 5] = nodes[j].position.z;

              const alpha = 1 - dist / 40;
              const cIdx = connectionIdx * 6;
              const isLime = i % 8 === 0 || j % 8 === 0;
              if (isLime) {
                colors[cIdx] = 0.8 * alpha;
                colors[cIdx + 1] = 1.0 * alpha;
                colors[cIdx + 2] = 0.1 * alpha;
                colors[cIdx + 3] = 0.8 * alpha;
                colors[cIdx + 4] = 1.0 * alpha;
                colors[cIdx + 5] = 0.1 * alpha;
              } else {
                colors[cIdx] = 0.9 * alpha;
                colors[cIdx + 1] = 0.9 * alpha;
                colors[cIdx + 2] = 0.9 * alpha;
                colors[cIdx + 3] = 0.4 * alpha;
                colors[cIdx + 4] = 0.4 * alpha;
                colors[cIdx + 5] = 0.4 * alpha;
              }
              connectionIdx++;
            }
          }
        }

        lineGeometry.setDrawRange(0, connectionIdx * 2);
        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();
    } catch (err) {
      console.warn('Three.js initialization failed gracefully, falling back to static visual:', err);
      setHasError(true);
    }

    // Safe Cleanup
    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleScroll) window.removeEventListener('scroll', handleScroll);
      if (handleResize) window.removeEventListener('resize', handleResize);

      try {
        if (container && renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        if (renderer) renderer.dispose();
        if (lineGeometry) lineGeometry.dispose();
        if (lineMaterial) lineMaterial.dispose();
        if (coreGeo) coreGeo.dispose();
        if (coreMat) coreMat.dispose();
        if (sphereGeo) sphereGeo.dispose();
        if (matWhite) matWhite.dispose();
        if (matSilver) matSilver.dispose();
        if (matLime) matLime.dispose();
        if (orbitGeo) orbitGeo.dispose();
        if (orbitMat) orbitMat.dispose();
      } catch (cleanupErr) {
        console.warn('Three.js cleanup warning:', cleanupErr);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* Three.js Canvas Container */}
      {!hasError && <div ref={containerRef} className="w-full h-full" />}

      {/* Fallback Static Visual if Three.js fails or is unsupported */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <svg className="w-full h-full max-w-4xl" viewBox="0 0 800 600" fill="none">
            <circle cx="400" cy="300" r="160" stroke="#333333" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="400" cy="300" r="80" stroke="#444444" strokeWidth="1" />
            <circle cx="400" cy="300" r="6" fill="#ccff00" />
            <path d="M 280 200 L 400 300 L 520 220 M 400 300 L 400 440 M 400 300 L 250 360 M 400 300 L 550 380" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <circle cx="280" cy="200" r="4" fill="#ffffff" />
            <circle cx="520" cy="220" r="4" fill="#ffffff" />
            <circle cx="400" cy="440" r="4" fill="#ccff00" />
            <circle cx="250" cy="360" r="4" fill="#888888" />
            <circle cx="550" cy="380" r="4" fill="#ffffff" />
          </svg>
        </div>
      )}

      {/* The 8 Business Automation Labels from Section 33 & Phase 5 */}
      {businessNodes.map((node, i) => (
        <div
          key={i}
          className="absolute hidden md:flex items-center gap-2 pointer-events-auto group cursor-default"
          style={{
            top: node.top,
            left: node.left,
            right: node.right,
          }}
          onMouseEnter={() => setActiveNode(node.name)}
          onMouseLeave={() => setActiveNode(null)}
        >
          <div className="relative flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-white group-hover:bg-brand-lime transition-colors" />
            <span className="absolute w-3 h-3 rounded-full border border-white/20 group-hover:border-brand-lime/60 transition-colors" />
          </div>

          <div className="px-2.5 py-1 rounded-full bg-brand-charcoal/80 border border-brand-border backdrop-blur-md transition-all duration-200 group-hover:border-brand-lime/50 group-hover:bg-brand-card">
            <span className="text-[10px] font-mono tracking-widest uppercase text-brand-silver group-hover:text-white transition-colors">
              {node.name}
            </span>
          </div>

          {activeNode === node.name && (
            <div className="absolute -bottom-8 left-0 whitespace-nowrap bg-brand-card text-[11px] text-brand-light px-2.5 py-1 rounded border border-brand-borderLight shadow-xl z-20 animate-fade-in font-mono">
              {node.desc}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

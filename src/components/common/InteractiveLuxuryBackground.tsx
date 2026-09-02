'use client';

import React, { useEffect, useRef } from 'react';

export default function InteractiveLuxuryBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smooth linear interpolation (lerp)
    let targetMouse = { x: width / 2, y: height / 2, active: false };
    let currentMouse = { x: width / 2, y: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
      targetMouse.active = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouse.x = e.touches[0].clientX;
        targetMouse.y = e.touches[0].clientY;
        targetMouse.active = true;
      }
    };

    const handleMouseLeave = () => {
      targetMouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // 3 Large Drifting Aurora Light Blobs
    const orbs = [
      { x: width * 0.2, y: height * 0.3, vx: 0.15, vy: 0.12, radius: 380, color: 'rgba(184, 134, 47, 0.055)' },
      { x: width * 0.8, y: height * 0.4, vx: -0.12, vy: 0.16, radius: 450, color: 'rgba(18, 58, 51, 0.045)' },
      { x: width * 0.5, y: height * 0.8, vx: 0.1, vy: -0.14, radius: 400, color: 'rgba(231, 199, 122, 0.045)' },
    ];

    let time = 0;
    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastTime = performance.now();
    const dotSpacing = 48;

    const render = (now: number) => {
      if (!isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      time += dt;

      ctx.clearRect(0, 0, width, height);

      // Smooth Cursor Lerp
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;

      // 1. Render Drifting Fluid Aurora Orbs
      if (!prefersReducedMotion) {
        orbs.forEach((orb) => {
          orb.x += orb.vx;
          orb.y += orb.vy;

          if (orb.x < -orb.radius) orb.x = width + orb.radius;
          if (orb.x > width + orb.radius) orb.x = -orb.radius;
          if (orb.y < -orb.radius) orb.y = height + orb.radius;
          if (orb.y > height + orb.radius) orb.y = -orb.radius;

          const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
          grad.addColorStop(0, orb.color);
          grad.addColorStop(1, 'rgba(245, 241, 230, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // 2. Interactive Soft Radial Cursor Spotlight Aura
      if (targetMouse.active && !prefersReducedMotion) {
        const auraGradient = ctx.createRadialGradient(
          currentMouse.x,
          currentMouse.y,
          0,
          currentMouse.x,
          currentMouse.y,
          320
        );
        auraGradient.addColorStop(0, 'rgba(184, 134, 47, 0.09)');
        auraGradient.addColorStop(0.5, 'rgba(18, 58, 51, 0.04)');
        auraGradient.addColorStop(1, 'rgba(245, 241, 230, 0)');

        ctx.fillStyle = auraGradient;
        ctx.beginPath();
        ctx.arc(currentMouse.x, currentMouse.y, 320, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Elegant Micro-Dot Matrix (Interactive Proximity Brightness)
      const cols = Math.ceil(width / dotSpacing);
      const rows = Math.ceil(height / dotSpacing);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const dx = c * dotSpacing;
          const dy = r * dotSpacing;

          let alpha = 0.035;

          if (targetMouse.active && !prefersReducedMotion) {
            const dist = Math.hypot(dx - currentMouse.x, dy - currentMouse.y);
            if (dist < 220) {
              alpha += (1 - dist / 220) * 0.22;
            }
          }

          ctx.fillStyle = `rgba(184, 134, 47, ${alpha})`;
          ctx.beginPath();
          ctx.arc(dx, dy, 0.9, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: 0.95,
        mixBlendMode: 'normal',
      }}
      aria-hidden="true"
    />
  );
}

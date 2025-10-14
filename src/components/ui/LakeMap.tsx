"use client";

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

const islands = [
  // Major Named Islands
  { id: 'island-1', name: 'Akampene (Punishment Island)', x: '25%', y: '45%' },
  { id: 'island-2', name: 'Bushara Island', x: '45%', y: '35%' },
  { id: 'island-3', name: 'Bwama Island (Njuyeera)', x: '65%', y: '25%' },
  { id: 'island-4', name: 'Kyahugye Island', x: '35%', y: '65%' },
  { id: 'island-5', name: 'Bucuranuka Island', x: '55%', y: '75%' },
  { id: 'island-6', name: 'Akabucuranuka Island', x: '75%', y: '55%' },
  { id: 'island-7', name: 'Habuharo Island', x: '20%', y: '25%' },
  { id: 'island-8', name: 'Njonga Island', x: '80%', y: '40%' },
  { id: 'island-9', name: 'Kahungye Island', x: '15%', y: '60%' },
  { id: 'island-10', name: 'Rwanjogyera Island', x: '85%', y: '70%' },
  
  // Smaller Islands - Northern Section
  { id: 'island-11', name: 'Northern Isle', x: '40%', y: '15%' },
  { id: 'island-12', name: 'Eagle Point', x: '60%', y: '18%' },
  { id: 'island-13', name: 'Misty Isle', x: '30%', y: '20%' },
  { id: 'island-14', name: 'Cedar Island', x: '50%', y: '22%' },
  
  // Central Cluster
  { id: 'island-15', name: 'Central Haven', x: '42%', y: '50%' },
  { id: 'island-16', name: 'Twin Rock East', x: '58%', y: '48%' },
  { id: 'island-17', name: 'Twin Rock West', x: '52%', y: '52%' },
  { id: 'island-18', name: 'Fisherman Isle', x: '38%', y: '55%' },
  
  // Southern Islands
  { id: 'island-19', name: 'Southern Bay', x: '25%', y: '80%' },
  { id: 'island-20', name: 'Sunset Point', x: '45%', y: '85%' },
  { id: 'island-21', name: 'Crane Roost', x: '35%', y: '75%' },
  { id: 'island-22', name: 'Palm Island', x: '65%', y: '80%' },
  
  // Eastern Shores
  { id: 'island-23', name: 'Morning Light', x: '90%', y: '30%' },
  { id: 'island-24', name: 'Hillside Isle', x: '88%', y: '50%' },
  { id: 'island-25', name: 'Canoe Landing', x: '85%', y: '60%' },
  
  // Western Edge
  { id: 'island-26', name: 'Sunrise Isle', x: '10%', y: '35%' },
  { id: 'island-27', name: 'Rocky Point', x: '12%', y: '50%' },
  { id: 'island-28', name: 'Quiet Cove', x: '8%', y: '45%' },
  { id: 'island-29', name: 'Heritage Isle', x: '18%', y: '70%' },
];

const LakeMap = () => {
  const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false)
  const svgRef = useRef<SVGSVGElement | null>(null)
  type Position = { id: string; name: string; x: number; y: number }
  type Cluster =
    | { type: 'cluster'; x: number; y: number; items: Position[] }
    | { type: 'single'; item: Position; x: number; y: number; r: number }
  const [clusters, setClusters] = useState<Cluster[] | null>(null)
  const [expandedCluster, setExpandedCluster] = useState<string | null>(null)

  useEffect(() => {
    setIsTouch(typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0));
    // intentionally lightweight: just detect touch-capable devices
  }, [])

  // compute simple clustering for small screens
  useEffect(() => {
    const compute = () => {
      if (!svgRef.current) return
      const isSmall = typeof window !== 'undefined' && window.innerWidth < 640
      if (!isSmall) {
        setClusters(null)
        return
      }
      const bbox = svgRef.current.getBoundingClientRect()
      const scale = 800 / (bbox.width || 800)
      const thresholdPx = 40 // cluster items closer than ~40px
      const threshold = thresholdPx * scale

      const positions = islands.map((it) => {
        const px = parseFloat(it.x as string) || 0
        const py = parseFloat(it.y as string) || 0
        return { ...it, x: (px / 100) * 800, y: (py / 100) * 600 }
      })

  const used = new Set<string>()
  const out: Cluster[] = []

      for (let i = 0; i < positions.length; i++) {
        const a = positions[i]
        if (used.has(a.id)) continue
        const clusterItems = [a]
        used.add(a.id)
        for (let j = i + 1; j < positions.length; j++) {
          const b = positions[j]
          if (used.has(b.id)) continue
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist <= threshold) {
            clusterItems.push(b)
            used.add(b.id)
          }
        }

        if (clusterItems.length > 1) {
          // compute centroid
          const cx = clusterItems.reduce((s, it) => s + it.x, 0) / clusterItems.length
          const cy = clusterItems.reduce((s, it) => s + it.y, 0) / clusterItems.length
          out.push({ type: 'cluster', x: cx, y: cy, items: clusterItems })
        } else {
          const it = clusterItems[0]
          const isMajor = islands.findIndex((id) => id.id === it.id) < 10
          const isSmall = islands.findIndex((id) => id.id === it.id) > 20
          const r = isMajor ? 7 : isSmall ? 3.5 : 5
          out.push({ type: 'single', item: it, x: it.x, y: it.y, r })
        }
      }

      setClusters(out)
    }

    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Animated water ripples effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 md:top-20 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-blue-300/30 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-16 md:bottom-32 right-1/3 w-24 md:w-48 h-24 md:h-48 bg-emerald-300/30 rounded-full animate-ping" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-playfair-display font-bold text-center mb-4 bg-gradient-to-r from-blue-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent"
        >
          Explore Lake Bunyonyi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-sm md:text-lg text-gray-600 mb-8 md:mb-16 max-w-2xl mx-auto px-4"
        >
          Navigate 29 legendary islands formed by ancient Virunga lava flows, fed by River Kagoma from Kigezi Highlands and drained by River Heissesero - Africa&apos;s second deepest lake awaits your exploration
        </motion.p>
        <div className="relative">
          {/* SVG inline map for crisp scaling and precise marker placement */}
          <svg viewBox="0 0 800 600" className="w-full h-auto block">
            <defs>
              <linearGradient id="islandGrad" x1="0" x2="1">
                <stop offset="0%" stopColor="#FFDD7A" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF9A3C" stopOpacity="1" />
              </linearGradient>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.15" />
              </filter>
            </defs>
            <rect width="800" height="600" fill="#aadaff" />
            <text x="50%" y="50%" fontSize="48" textAnchor="middle" dy=".3em" fill="#0f172a">Lake Bunyonyi Map</text>

            {/* Islands rendered in SVG coordinates (viewBox units) */}
            {/* clustering: compute clusters on small viewports */}
            {clusters ? (
              clusters.map((c, ci) => {
                if (c.type === 'cluster') {
                  const { x, y, items } = c
                  return (
                    <g key={`cluster-${ci}`} transform={`translate(${x}, ${y})`} onClick={() => setExpandedCluster(expandedCluster === `cluster-${ci}` ? null : `cluster-${ci}`)} role="button" tabIndex={0} aria-label={`Cluster with ${items.length} islands`}>
                      <circle r={12} fill="#FFB86B" stroke="#fff" strokeWidth={1.5} filter="url(#shadow)" />
                      <text x={0} y={4} textAnchor="middle" fontSize={10} fill="#0f172a">{items.length}</text>
                      {expandedCluster === `cluster-${ci}` && (
                        <g transform={`translate(0, -28)`}>
                          <rect x={-60} y={-20} rx={6} ry={6} width={120} height={20 + items.length * 18} fill="rgba(255,255,255,0.98)" stroke="rgba(255,255,255,0.9)" />
                          {items.map((it: Position, idx: number) => (
                            <text key={it.id} x={0} y={-4 + idx * 18} textAnchor="middle" fontSize={10} fill="#0f172a">{it.name}</text>
                          ))}
                        </g>
                      )}
                    </g>
                  )
                }
                // single island fallback
                const island = c.item
                const { x, y } = c
                const r = c.r
                return (
                  <g key={island.id} transform={`translate(${x}, ${y})`} onMouseEnter={() => { if (!isTouch) setHoveredIsland(island.name) }} onMouseLeave={() => { if (!isTouch) setHoveredIsland(null) }} onClick={() => { if (isTouch) setHoveredIsland((v) => (v === island.name ? null : island.name)) }} tabIndex={0} role="button" aria-label={island.name} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setHoveredIsland((v) => (v === island.name ? null : island.name)) }}>
                    <circle r={r + 6} fill="none" className="ring" stroke="rgba(255,160,60,0.45)" strokeWidth={2} />
                    <circle r={r} fill="url(#islandGrad)" stroke="#fff" strokeWidth={1.5} filter="url(#shadow)" />
                    {hoveredIsland === island.name && (
                      <g transform={`translate(0, -${r + 24})`}>
                        <rect x={-80} y={-28} rx={8} ry={8} width={160} height={40} fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.8)" />
                        <text x={0} y={-6} textAnchor="middle" fontSize={12} fill="#0f172a" fontFamily="Inter, system-ui">{island.name}</text>
                        <rect x={-20} y={-4} width={40} height={4} rx={2} fill="url(#islandGrad)" />
                      </g>
                    )}
                  </g>
                )
              })
            ) : (
              islands.map((island, index) => {
                const pctX = parseFloat(island.x as string) || 0
                const pctY = parseFloat(island.y as string) || 0
                const x = (pctX / 100) * 800
                const y = (pctY / 100) * 600
                const isMajorIsland = index < 10
                const isSmallIsland = index > 20
                const r = isMajorIsland ? 7 : isSmallIsland ? 3.5 : 5

                return (
                  <g key={island.id} transform={`translate(${x}, ${y})`} onMouseEnter={() => { if (!isTouch) setHoveredIsland(island.name) }} onMouseLeave={() => { if (!isTouch) setHoveredIsland(null) }} onClick={() => { if (isTouch) setHoveredIsland((v) => (v === island.name ? null : island.name)) }} tabIndex={0} role="button" aria-label={island.name} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setHoveredIsland((v) => (v === island.name ? null : island.name)) }}>
                    <circle r={r + 6} fill="none" className="ring" stroke="rgba(255,160,60,0.45)" strokeWidth={2} />
                    <circle r={r} fill="url(#islandGrad)" stroke="#fff" strokeWidth={1.5} filter="url(#shadow)" />
                    {hoveredIsland === island.name && (
                      <g transform={`translate(0, -${r + 24})`}>
                        <rect x={-80} y={-28} rx={8} ry={8} width={160} height={40} fill="rgba(255,255,255,0.95)" stroke="rgba(255,255,255,0.8)" />
                        <text x={0} y={-6} textAnchor="middle" fontSize={12} fill="#0f172a" fontFamily="Inter, system-ui">{island.name}</text>
                        <rect x={-20} y={-4} width={40} height={4} rx={2} fill="url(#islandGrad)" />
                      </g>
                    )}
                  </g>
                )
              })
            )}
          </svg>
          {/* ring animation styles (SVG) */}
          <style>{`
            .ring { transform-origin: center; animation: svg-pulse 2.6s ease-out infinite; }
            @keyframes svg-pulse { 0% { transform: scale(0.85); opacity: 0.6 } 70% { transform: scale(1.6); opacity: 0 } 100% { opacity: 0 } }
            @media (prefers-reduced-motion: reduce) { .ring { animation: none } }
            /* make svg groups focusable */
            svg g[tabindex] { outline: none; }
            svg g[tabindex]:focus circle { transform: scale(1.25); }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default LakeMap;

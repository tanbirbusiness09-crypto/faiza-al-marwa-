'use client';

import React, { useEffect, useState } from 'react';

export interface TypePart {
  text: string;
  br?: boolean;
  gold?: boolean;
}

interface TypeWriterProps {
  parts: TypePart[];
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TypeWriter({
  parts,
  className = '',
  speed = 55,
  delay = 450,
}: TypeWriterProps) {
  const full = parts.map((p) => p.text).join('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      setCount(full.length);
      return;
    }

    let i = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      i += 1;
      setCount(i);
      if (i < full.length) timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, delay);
    return () => clearTimeout(timer);
  }, [full.length, speed, delay]);

  let cursor = 0;
  const rendered = parts.map((part) => {
    const start = cursor;
    cursor += part.text.length;
    const end = cursor;
    const shown = count <= start ? '' : part.text.slice(0, Math.min(count, end) - start);
    return { ...part, shown, end };
  });

  const typing = count < full.length;

  return (
    <span className={className}>
      <span className="sr-only">{full}</span>
      <span aria-hidden="true">
        {rendered.map((part, i) => (
          <React.Fragment key={i}>
            <span className={part.gold ? 'text-gold font-bold' : undefined}>{part.shown}</span>
            {part.br && count >= part.end && <br />}
          </React.Fragment>
        ))}
        {typing && <span className="type-cursor">|</span>}
      </span>
    </span>
  );
}

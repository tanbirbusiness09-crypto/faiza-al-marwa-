'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IconRenderer({
  name,
  className = 'w-5 h-5',
  size = 20,
}: IconRendererProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string; size?: number }>>)[name] || LucideIcons.Sparkles;

  return <IconComponent className={className} size={size} />;
}

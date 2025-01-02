'use client';

import { usePathname } from 'next/navigation';

import FlickeringGrid from './ui/flickering-grid';

export function Background() {
  const pathname = usePathname();

  if (pathname.startsWith('/docs')) {
    return null;
  } else {
    return (
      <div className="fixed inset-0 z-0">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.1}
        />
      </div>
    );
  }
}

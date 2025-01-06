'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

const BetterStackStatusWidget = () => {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(resolvedTheme === 'dark' ? 'dark' : 'light');
  }, [resolvedTheme]);

  const widgetHTML = `
    <iframe
      src="https://tusflow.betteruptime.com/badge?theme=${theme}"
      width="250"
      height="30"
      frameborder="0"
      scrolling="no"
      style="color-scheme: none;"
    ></iframe>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{ __html: widgetHTML }}
      style={{ colorScheme: 'none' }}
    />
  );
};

export default BetterStackStatusWidget;

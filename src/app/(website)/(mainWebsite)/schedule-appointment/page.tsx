'use client';

import { InlineWidget } from 'react-calendly';

export default function CalendlyButton() {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden pt-[10vh]">
      <InlineWidget
        url="https://calendly.com/adaired-team/30-min-meeting-with-adaired"
        styles={{
          height: '100%',
          width: '100%',
        }}
      />
    </div>
  );
}

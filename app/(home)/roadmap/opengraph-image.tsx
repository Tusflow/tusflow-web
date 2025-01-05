import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tusflow Roadmap';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(128,128,128,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.07) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Orange Gradient Top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background:
              'linear-gradient(180deg, rgba(251, 146, 60, 0.2) 0%, transparent 100%)',
            opacity: 0.15,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '20px 40px',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: '82px',
              fontWeight: 'bold',
              background: 'linear-gradient(to right, #EA580C, #DC2626)',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: 1.2,
            }}
          >
            Roadmap
          </div>

          {/* Features */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '16px',
            }}
          >
            {['In Progress', 'Planned', 'Completed'].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontSize: '20px',
                  fontWeight: '500',
                  color: '#EA580C',
                  background: 'rgba(251, 146, 60, 0.1)',
                  border: '1px solid rgba(251, 146, 60, 0.2)',
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '24px',
            color: '#6B7280',
          }}
        >
          tusflow.vercel.app/roadmap
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cal Sans',
          data: await fetch(
            new URL(
              '../../../public/fonts/CalSans-SemiBold.woff',
              import.meta.url
            )
          ).then((res) => res.arrayBuffer()),
          style: 'normal',
          weight: 600,
        },
      ],
    }
  );
}

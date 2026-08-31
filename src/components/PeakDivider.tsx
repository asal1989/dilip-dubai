// Signature transition element used at every major section seam.
// The silhouette echoes the triangular peaks in the company mark, so the
// brand's geometry shows up structurally, not just in the logo.
export default function PeakDivider({
  from = '#F4F2E7',
  to = '#0F294A',
  flip = false,
}: {
  from?: string;
  to?: string;
  flip?: boolean;
}) {
  return (
    <div className="peak-divider" aria-hidden="true">
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        <rect x="0" y="0" width="1200" height="64" fill={from} />
        <polygon points="0,64 260,10 520,64" fill={to} />
        <polygon points="480,64 640,0 800,64" fill={to} />
        <polygon points="760,64 980,20 1200,64" fill={to} />
      </svg>
    </div>
  );
}

export function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="sparkle-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#EA4335" />
          <stop offset="33%" stopColor="#FBBC05" />
          <stop offset="66%" stopColor="#34A853" />
          <stop offset="100%" stopColor="#4285F4" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L14.4 8.4L21 9.2L16.2 14L17.4 21L12 17.6L6.6 21L7.8 14L3 9.2L9.6 8.4L12 2Z"
        fill="url(#sparkle-gradient)"
      />
    </svg>
  );
}

const ScrollIndicator = () => {
  return (
    <div className="w-10 h-[70px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 70"
        className="w-full h-full"
      >
        <rect
          x="5"
          y="2"
          width="30"
          height="66"
          rx="15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="20" cy="20" r="4" fill="#811812">
          <animate
            attributeName="cy"
            values="20;40;20"
            dur="1.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
          <animate
            attributeName="opacity"
            values="1;0;1"
            dur="1.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </circle>
      </svg>
    </div>
  );
};

//  --color-primary: #c8a549;
//   --color-secondary: #811812;
//   --color-support: #186144;

export default ScrollIndicator;

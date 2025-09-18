const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57.827"
      height="55.615"
      viewBox="0 0 57.827 55.615"
      className="h-[2vh] w-auto"
    >
      <defs>
        <filter
          id="Path_19"
          x="0"
          y="0"
          width="57.827"
          height="55.615"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" in="SourceAlpha" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feFlood floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_19)">
        <path
          id="Path_19-2"
          data-name="Path 19"
          d="M19.914,0l6.273,12.219,13.641,2.148-9.764,9.7,2.158,13.547L19.914,31.39,7.606,37.615,9.764,24.068,0,14.367l13.641-2.148Z"
          transform="translate(9 6)"
          fill="#efe177"
        />
      </g>
    </svg>
  );
};

export default Star;

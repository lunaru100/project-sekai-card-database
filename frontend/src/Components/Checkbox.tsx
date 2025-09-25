interface Props {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({ label, checked, onChange }: Props) {
  return (
    <label className="flex items-start cursor-pointer gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div className="w-7 h-7 rounded-md flex flex-shrink-0 items-center justify-center border-2 border-white">
        {checked && (
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <span className="text-xs whitespace-normal break-words self-center">{label}</span>
    </label>
  );
}

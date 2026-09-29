const Alert = ({ type = "info", message, onClose }) => {
  if (!message) return null;

  const styles = {
    success: {
      container:
        "border-[#006B3F] bg-[#EAF6F0] text-[#14532D]",
      icon: "✓",
    },
    error: {
      container:
        "border-[#C65D3A] bg-[#FCEDEA] text-[#7F1D1D]",
      icon: "!",
    },
    warning: {
      container:
        "border-[#D9A441] bg-[#FFF8E1] text-[#6B4E00]",
      icon: "!",
    },
    info: {
      container:
        "border-[#8A8178] bg-[#F1EBDD] text-[#2F2A25]",
      icon: "i",
    },
  };

  const currentStyle = styles[type] || styles.info;

  return (
    <div
      role="alert"
      className={`fixed right-4 top-4 z-[9999] flex w-[calc(100%-2rem)] max-w-md items-start gap-3 rounded-xl border px-4 py-3 shadow-lg ${currentStyle.container}`}
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current font-bold">
        {currentStyle.icon}
      </div>

      <p className="flex-1 pt-1 text-sm font-medium leading-5">
        {message}
      </p>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close alert"
          className="rounded-md px-2 py-1 text-lg leading-none opacity-70 transition hover:opacity-100"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
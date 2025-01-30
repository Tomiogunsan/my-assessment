helperText ? (
    <p
      className={`text-[12px] ${
        error ? 'text-red-500' : 'text-gray-500'
      } font-[400] mt-[2px]`}
    >
      {helperText}
    </p>
  ) : null;
const PATHS = {
  download: 'M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2',
  mail: 'M3 7.5A1.5 1.5 0 0 1 4.5 6h15A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5zM3.4 7l8.6 6 8.6-6',
  phone:
    'M6.6 3h-1A2.6 2.6 0 0 0 3 5.7C3 14.7 9.3 21 18.3 21a2.6 2.6 0 0 0 2.7-2.6v-1a1 1 0 0 0-.8-1l-3.4-.7a1 1 0 0 0-1 .4l-.9 1.2a12.6 12.6 0 0 1-5.2-5.2l1.2-.9a1 1 0 0 0 .4-1l-.7-3.4a1 1 0 0 0-1-.8Z',
  arrow: 'M5 12h14m0 0-5.5-5.5M19 12l-5.5 5.5',
  arrowDown: 'M12 5v14m0 0 5.5-5.5M12 19l-5.5-5.5',
  external: 'M14 4h6m0 0v6m0-6L10 14M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4',
  copy: 'M9 9V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3M6 9h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z',
  check: 'M4.5 12.5 9.5 17.5 19.5 7',
  sun: 'M12 4.2V2m0 20v-2.2M19.8 12H22M2 12h2.2m12.5-4.7 1.6-1.6M5.7 18.3l1.6-1.6m9.4 0 1.6 1.6M5.7 5.7l1.6 1.6M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  moon: 'M20 14.2A8.2 8.2 0 0 1 9.8 4 8.4 8.4 0 1 0 20 14.2Z',
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6 6 18',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  sheet: 'M4 4h16v16H4zM4 9h16M9 9v11',
  expand: 'M9 4H4v5m11-5h5v5M9 20H4v-5m11 5h5v-5',
  pin: 'M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  spark: 'M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z',
}

const FILLED = {
  linkedin:
    'M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z',
}

export function Icon({ name, className = 'btn__icon', ...rest }) {
  const filled = FILLED[name]
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {filled ? (
        <path d={filled} fill="currentColor" stroke="none" />
      ) : (
        <path d={PATHS[name]} />
      )}
    </svg>
  )
}

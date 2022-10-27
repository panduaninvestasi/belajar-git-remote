const size = {
 xs: '320px',
 sm: '640px',
 md: '768px',
 lg: '1024px',
 xl: '1280px'
}

const device = {
 xs: `(min-width: ${size.xs})`,
 sm: `(min-width: ${size.sm})`,
 md: `(min-width: ${size.md})`,
 lg: `(min-width: ${size.lg})`,
 xl: `(min-width: ${size.xl})`
}

export default {size, device}
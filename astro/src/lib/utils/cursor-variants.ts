/**
 * Custom cursor variants for different states
 */
const cursorVariants = {
  default: {
    width: 16,
    height: 16,
    backgroundColor: '#ffffff',
    opacity: 1,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  hover: {
    width: 64,
    height: 64,
    backgroundColor: '#ffffff',
    opacity: 0.8,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  button: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    opacity: 0.9,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  link: {
    width: 32,
    height: 32,
    backgroundColor: '#ffffff',
    opacity: 0.8,
    transition: { duration: 0.15, ease: 'easeOut' },
  },
}

export default cursorVariants

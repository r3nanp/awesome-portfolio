interface useClickOutsideProps {
  destroy: () => void
}

export const useClickOutside = (node: Element): useClickOutsideProps => {
  const listener = (event: MouseEvent) => {
    if (
      node &&
      !node.contains(event.target as Node) &&
      !event.defaultPrevented
    ) {
      node.dispatchEvent(new CustomEvent('click_outside', event))
    }
  }

  document.addEventListener('mousedown', listener)

  return {
    destroy() {
      document.removeEventListener('mousedown', listener)
    },
  }
}

interface ITypewriterProps {
  speed: number
  loop?: boolean
}

interface Typewriter {
  duration: number
  tick: (t: number) => void
}

export function typewriter(
  node: Element,
  { speed }: ITypewriterProps
): Typewriter {
  const valid =
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE

  if (!valid) {
    throw new Error(
      'This transition only works on elements with a single text node child'
    )
  }

  const text = node.textContent
  const duration = text.length * speed

  return {
    duration,
    tick: (t: number) => {
      const i = ~~(text.length * t)
      node.textContent = text.slice(0, i)
    },
  }
}

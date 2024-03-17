import { ForwardedRef } from 'react'

export const mergeRefs = <N = HTMLElement>(...refs: ForwardedRef<any>[]): (n: N) => void => {
  return (node: N) => {
    for (const ref of refs) {
    	if (!ref) return

      if (typeof ref === 'function') {
        ref(node)
      } else {
        ref.current = node
      }
    }
  }
}

export const firstLetterUppercase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

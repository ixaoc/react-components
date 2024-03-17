import React, { ForwardedRef, useEffect, useRef, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreator, bindActionCreators } from 'redux'

import { mergeRefs } from 'helpers/utils' 

export const useAction = <T extends ActionCreator<unknown>>(action: T): T => {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(action, dispatch), [dispatch])
}

export const useStore = (name?: string): any => {
  const state: any = useSelector(state => state)

  if (name) {
  	return state[name]
  }

  const stores: Record<string, unknown> = {}

  for (const key of Object.keys(state)) {
  	stores[`${key}Store`] = state[key]
  }

  return stores
}

export const useForwardRef = <T>(
  ref: ForwardedRef<T>,
  initialValue: any = null
) => {
  const targetRef = useRef<T | null>(initialValue)

  useEffect(() => {
    if (!ref) return

    if (typeof ref === 'function') {
      ref(targetRef.current)
    } else {
      ref.current = targetRef.current
    }
  }, [ref])

  return targetRef
}

export const useMergeRefs = <T>(...refs: ForwardedRef<any>[]) => {
  const targetRef = useRef<T>(null)
  
  useEffect(() => {
    mergeRefs<T | null>(...refs)(targetRef.current)
  }, refs)

  return targetRef
}

import { useState } from 'react'


const useDebounce = () => {
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>()
  const [callbackResult, setCallbackResult] = useState<any>()

  const dispatchDebounce = (callback: () => Promise<any>, term: number): void => {
    if (timer) {
      clearTimeout(timer)
    }

    const newTimer = setTimeout(async () => {
      const result = await callback()
      setCallbackResult(result)
    }, term)
  
    setTimer(newTimer)
  }

  return [
    callbackResult,
    dispatchDebounce
  ]
}

export default useDebounce
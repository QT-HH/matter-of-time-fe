import type { NextPage } from 'next'
import React, { useState, useRef } from 'react'
import useDebounce from './useDebounce'

type oddevenType = 'odd' | 'even' | '0'

const Debounce: NextPage = () => {
  const [triggered, setTriggered] = useState<number>(0)
  const [debounceTerm, setDebounceTerm] = useState<number>(500)
  const [helperText, setHelperText] = useState<string>('')
  
  const [callbackResult, dispatchDebounce] = useDebounce()
  const debounceTermRef = useRef<HTMLInputElement>(null)

  const inputEventHandler = async (e: React.ChangeEvent<HTMLInputElement>): Promise<oddevenType> => {
    const value = e.target.value

    await new Promise((r => setTimeout(r, 1)))

    setTriggered(v => v+1)
    if (value.length === 0) {
      return '0'
    } else if (value.length % 2) {
      return 'odd'
    } else {
      return 'even'
    }
  }

  const debounceTermHandler = (value: string | number): void => {
    const term = Number(value)

    if (isNaN(term)) {
      setHelperText('only number plz')
    } else {
      setDebounceTerm(term)
      setHelperText('')
    }
  }

  return (
    <>
      <div className="debounce-term-setting">
        <input type="text" ref={debounceTermRef} />
        <button onClick={() => debounceTermHandler(debounceTermRef.current?.value ?? '0')}>change Debounce Term</button>
        <span>{ helperText }</span>
      </div>

      <div className="debounce-result">
        <div className="setting-result">
          <span>term: { debounceTerm }ms</span>
        </div>
        <input 
          type="text" 
          onChange={(e) => {
            dispatchDebounce(() => inputEventHandler(e), debounceTerm)
          } }
        />
        <span>{ callbackResult }</span>
        <div>event triggered: { triggered }</div>
      </div>
    </>
  )
}

export default Debounce
'use client'

import { useRef } from 'react'
import InputCheck from '@/components/atoms/input'

const data = [0, 1, 2]
export default function Page() {
  const formRef = useRef(null)
  const handleCheckBox = (e) => {
    if (!formRef.current) return
    const targetInput = e.target
    const data = new FormData(formRef.current)
    console.log(data.getAll('select-item'))
  }
  return (
    <div>
      <form ref={formRef} onChange={handleCheckBox}>
        <lable>
          <input name="select-all" type="checkbox" />
          전체체크
        </lable>
        {data?.map((el, idx) => (
          <InputCheck id={idx} key={idx} />
        ))}
      </form>
    </div>
  )
}

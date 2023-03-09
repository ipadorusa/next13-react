'use client'

import { useRef } from 'react'
import InputCheck from '@/components/atoms/input'

export default function Page() {
  const formRef = useRef(null)
  const handleCheckBox = (e) => {
    console.log(formRef)
    console.log(e)
  }
  return (
    <div>
      <form ref={formRef} onChange={handleCheckBox}>
        <lable>
          <input name="select-all" type="checkbox" />
        </lable>
      </form>
      <InputCheck />
    </div>
  )
}

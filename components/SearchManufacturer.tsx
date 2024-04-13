'use client'

import { SearchManufacturerProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  return (
    <div className='search-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  )
}

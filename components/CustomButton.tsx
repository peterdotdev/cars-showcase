'use client' //Makes Next.js consider this button a client side component
// By default components in Next.js are server side components but
// as this component has the onClick function that needs to run on the client we do this
import { CustomButtonProps } from '@/types'
import Image from 'next/image'

export default function CustomButton({
  title,
  containerStyles,
  textStyles,
  handleClick,
  btnType,
  rightIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled || false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  )
}

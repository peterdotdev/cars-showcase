"use client"; //Makes Next.js consider this button a client side component
// By default components in Next.js are server side components but
// as this component has the onClick function that needs to run on the client we do this
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

export default function CustomButton({title, containerStyles, handleClick, btnType }: CustomButtonProps) {
    return (
        <button
          disabled={false}
          type={btnType || "button"}
          className={`custom-btn ${containerStyles}`}
          onClick={handleClick}
        >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    )
}
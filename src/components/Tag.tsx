import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
    const{className, children, ...otherProps} = props
  return (
    <div className={twMerge('inline-flex border border-lime-400 gap-2 text-lime-400 px-3 pb-1 pt-1.5  rounded-full uppercase items-center justify-center', className)}{...otherProps}>
        <span>&#10038;</span>
        <span className='text-sm'>{children}</span>
    </div>
  )
}

export default Tag
import React, { ButtonHTMLAttributes } from 'react'
//cva gives us really easy way to define classes that are going to be applied to our btn  
import {cva} from 'class-variance-authority'
const classes = cva('border h-12 rounded-full px-6 font-medium',{
    variants:{
        // we could have different keys and ...
        variant:{
            primary:'bg-lime-400 text-neutral-950 border-lime-400',
            secondary:'border-white text-white bg-transparent'
        },
        size:{
            sm:'h-10'
        }
    }

})
const Button = (props:{variant:"primary" | "secondary"; size?:'sm'} & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {variant, className, size, ...otherProps} = props
  return (
    <button
        className={classes({
            variant,
            size,
            className
        })}
        {...otherProps}
        

    />
  )
}

export default Button
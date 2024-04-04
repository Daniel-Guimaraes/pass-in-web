import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'border border-white/10 rounded-md p-1.5 disabled:opacity-40 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-white/10',
      outline: 'bg-black/20',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function IconButton({ variant, ...props }: ButtonProps) {
  return <button className={button({ variant })} {...props} />
}

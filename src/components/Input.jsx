import React,{forwardRef, useId} from 'react'

function Input({
    label,
    className="",
    type="text",
    ...props
}, ref) {
    const id=useId();
  return (
    <div >
        { label && <label htmlFor={id}>{label}
            </label>}

        <input type={type} id={id} className={` ${className}`} {...props} ref={ref}/>
    </div>
  )
}

export default forwardRef(Input)
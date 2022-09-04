import React from 'react'

interface IinputLginProps {
    type: string;
    value: string;
    label:string;
    onPressEnter?: () => void;
    onChange: (newvalue: string) => void;
}

export const InputLgin = React.forwardRef<HTMLInputElement, IinputLginProps>((props, ref) => {
    // se eu teclar enter o input de senha é focado(Com operador ternario)
    return(
        <label>
            <span>
                {props.label}
            </span>
            <input type={props.type} 
            value={props.value}  
            ref={ref}
            onChange={e => props.onChange(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? props.onPressEnter && props.onPressEnter(): undefined}/>
            
        </label>
    )
});
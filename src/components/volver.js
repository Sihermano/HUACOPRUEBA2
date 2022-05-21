import * as React from 'react'

const Volver = () => {
    return (
        <div className='flex flex-row'>
            <div className='h-[32px] w-[32px] ml-[8px] border-white border-solid border-[1px] rounded-full lg:w-[48px] lg:h-[48px]'>
                <svg className='w-[0.96rem] h-[0.84rem] text-white fill-current lg:w-[22px] lg:h-[19px] hover:w-[27px] hover:h-[24px]' xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="22px" height="22px" viewBox="0 0 493.578 493.578"  xml:space="preserve">
                    <g>
                        <path d="M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676   L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262   c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759   c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z"/>
                    </g>
                </svg>
            </div>
            <p className='btn text-0 h-0 text-white font-sans font-[400] -tracking-[.02em] opacity-60 lg:text-[18px] lg:h-[22px]'><a>Volver</a></p>
        </div>
    ) 
    }
export default Volver
import * as React from 'react'
import Volver from '../components/volver'

const Videos = () => {
    return (    
        <div>
            <Volver></Volver>
            <div className='flex flex-row'>
                <button classname='w-auto h-[45px] mt-[48px]lg:h-[64px] lg:bg-white lg:hover:bg-gray-200 lg:border-gray-400 lg:rounded-full lg:shadow lg:mt-[80px] xl:w-[400px]'>Opción 1</button>
                <button classname='w-auto h-[45px] mt-[48px]lg:h-[64px] lg:bg-white lg:hover:bg-gray-200 lg:border-gray-400 lg:rounded-full lg:shadow lg:mt-[80px] xl:w-[400px]'>Opción 2</button>
            </div>
            
            <div>
                <p className='text-white text-[15px] font-sans font-[450] opacity-[.6] lg:text-[26px]'>Video</p>
            </div>

            <div className='grid justify-items-center'>
                <iframe className='' src="https://www.youtube.com/watch?v=nzBVXkSFD10&ab_channel=DarioIdoateFilm"></iframe>
            </div>
        </div>

    )
}

export default Videos
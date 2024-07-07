import logoImage from '../assets/images/logo.png'

export function Header(){
    return (
        <>
        <div className='w-full p-2 flex justify-center absolute bg-white h-20'>
            <img className='h-100' src={logoImage}/>
        </div>
        </>
    )
}
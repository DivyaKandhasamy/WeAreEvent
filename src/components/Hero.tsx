import heroVideo from '../assets/videos/4285931-hd_1920_1080_25fps.mp4';
export function Hero(){
    return (
        <>
        <div className='flex h-screen justify-center items-center'>
            <h1 className='text-hero'>We R Event</h1>
        </div>
        <video className='w-screen h-screen hero-video object-cover top-0 left-0 fixed brightness-25 -z-50' autoPlay loop muted>
            <source src={heroVideo} type='video/mp4' />
        </video>
        </>
    )
}
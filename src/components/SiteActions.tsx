'use client'

export default function SiteActions(): JSX.Element {

    const scrollToTop = () => {
        document.getElementById('layout')?.scrollIntoView({
            behavior: 'smooth',
        });
    }


    return (
        <div className="fixed bottom-10 right-10 z-40 flex flex-col justify-center items-center gap-[2rem]">
            <button onClick={scrollToTop} id={'scrollToTopBtn'}
                    className="bg-neutral-100 shadow-xl rounded-full p-4 text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-12 h-12">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </button>
        </div>
    );
}

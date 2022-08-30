import React from 'react'
import { FrontImage, BackImage } from './components/CardImages'
import CreationForm from './components/CreationForm'

const App = () => {
  return (
    <main className='flex flex-col space-y-20 lg:flex-row lg:space-y-0 lg:space-x-40 lg:h-screen lg:items-center'>
      <section className="w-screen h-[300px] flex bg-bgBlurMobile bg-no-repeat bg-mobile md:h-[360px] lg:bg-bgBlurDesktop lg:bg-desktop lg:h-screen lg:items-center">
        <div className="container relative h-full w-full mx-auto lg:ml-20">
          <FrontImage />
          <BackImage />
        </div>
      </section>
      <section className="container mx-auto px-4">
        <CreationForm />
      </section>
    </main>
  )
}

export default App
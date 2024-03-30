

import React from 'react'

export default function VideoComponent() {
  return (
    <div>
         <iframe className='w-full h-[580px]  rounded-lg '  src="https://www.youtube.com/embed/YKaiXY7zHxk?si=3vaadMkjqa4xflNY" 
         title="YouTube video player" 
         frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen></iframe>
    </div>
    
  )
}

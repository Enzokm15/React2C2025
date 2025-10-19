export function Banner() {
    

    return(
        <>
          <div className="px-global overflow-hidden py-5 ">
            <img className="max-h-120 w-full object-cover  rounded-xl" src="/luffy.jpeg" alt="hola" />
          </div>
            
        </>
    )
}

export function VideoPlayer() {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="relative" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Om_VWBua0_M?controls=0&modestbranding=1&rel=0"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
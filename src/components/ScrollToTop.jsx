import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react"

function ScrollToTop () {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 200) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo ({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {scrollToTop && (
      <button className="py-[0.6rem] px-[0.6rem] bg-dark/75 rounded-full fixed right-3 bottom-3 z-20" onClick={scrollUp}>
        <ArrowBigUp />
      </button>
      )}
    </>
  )
}

export default ScrollToTop
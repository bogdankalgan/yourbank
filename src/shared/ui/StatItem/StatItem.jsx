import {useState, useEffect, useRef} from "react";

export default function StatItem({percent, text}) {
    const [display, setDisplay] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
      const element = ref.current
      if (!element) return

       const observer = new IntersectionObserver(
      ([entry]) => {
          if (entry.isIntersecting) {
              animate(),
              observer.disconnect()
          }
      },
      {
          threshold: 1.0,
      }
  )

      observer.observe(element)
      return () => observer.disconnect()

      function animate() {
          const duration = 1500
          let start = null

          function step(timestamp) {
              if (!start) start = timestamp
              const progress = Math.min((timestamp - start) /
  duration, 1.0)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(eased * percent))
              if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
      }
  }, [percent])



    return (
        <div ref={ref} className="flex flex-col gap-1 max-mobile:gap-0.5">
            <p className="text-green-60 text-58 max-tablet:text-4xl max-mobile:text-2xl font-medium leading-[150%]">{`${display}%`}</p>
            <p className="text-grey-70">{text}</p>
        </div>
    )
}
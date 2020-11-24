
import gsap from "gsap";
export const fadeIn = (Element) => {
    gsap.fromTo(Element, {
      opacity: 0,
      y: -50,
      ease: 'power4',
    },
    {
        opacity: 1,
        y: 0,
        ease: 'power4.out',
        stagger: {
          amount: 0.2
        },
        
    })
  } 

  export const NavLinksMobile = (Element) => {
    gsap.fromTo(Element, {
      opacity: 0,
      duration: 0.2,
      x: -50,
      ease: "Expo.easeOut",
    },
    {
        opacity: 1,
        duration: 0.2,
        x: 0,
        ease: "Expo.easeIn",
        stagger: {
          amount: 0.4
        },
    })
}
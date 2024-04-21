const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.35}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.35}
    }
}

export const ImageAnim = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.5
        }
    }
}

export const smoothEaseIn = {
    hidden: { 
        opacity: 0, 
        y: -50 
    },

    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            ease: 'easeInOut', 
            duration: 1.25
        } 
    },
};

export const smoothEaseInX = {
    hidden: {
        opacity: 0,
        x: -30
    }, 
    
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            ease: 'easeInOut',
            duration: 1,
            delay: 0.5
        }
    }
}

export const FillAnim = {
    initial: {
        scaleY: 0,
    },
    open: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        }
    }
}

export const FillAnimX = {
    initial: {
        scaleX: 0,
    },
    open: {
        scaleX: 1,
        transition: {
            duration: 1,
            
        }
    }
}

export const background = {
    initial: {
        height: 0
    },
    open: {
        height: "100vh",
        transition
    },
    closed: {
        height: 0,
        transition
    }
}

export const blur = {
    initial: {
        filter: "blur(0px)",
        opacity: 1
    },

    open: {
        filter: "blur(4px)",
        opacity: 0.6,
        transition: {duration: 0.6}
    },

    closed: {
        filter: "blur(0px)",
        opacity: 1,
        transition: {duration: 0.6}
    }

}

export const height = {
    initial: {
      height: 0
    },

    enter: {
      height: "auto",
      transition: {...transition, delay: 0.5}
    },

    exit: {
      height: 0,
      transition: {duration: 0.5}
    }
}
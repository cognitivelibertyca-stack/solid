import { useState, useEffect, useRef } from 'react';

// Made the hook generic to allow it to be used with different specific HTML element types,
// which resolves type errors when the ref is attached to elements like <div>.
const useAnimateOnScroll = <T extends HTMLElement = HTMLElement>(threshold = 0.1): [React.RefObject<T>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};

export default useAnimateOnScroll;

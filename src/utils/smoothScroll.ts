/**
 * Smooth scroll to a target element using a custom easing animation.
 * Works regardless of CSS `scroll-behavior` overrides (e.g. Tailwind defaults).
 *
 * @param href     - CSS selector of the target element (e.g. "#experience")
 * @param offset   - Pixels to subtract from the top position (e.g. sticky header height)
 * @param duration - Animation duration in milliseconds (default: 700)
 */
export function smoothScrollTo(href: string, offset = 0, duration = 700): void {
    const target = document.querySelector(href) as HTMLElement | null;
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
    const startY = window.scrollY;
    const distance = targetTop - startY;
    let startTime: number | null = null;

    /** Ease-in-out quadratic */
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + distance * ease(progress));
        if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
}

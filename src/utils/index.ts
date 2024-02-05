import { technologies } from "@/constants";
import { getImageFromWeserv } from "@/services";

export const toggleMode = (
  isDarkMode: boolean,
  event: MouseEvent,
  changeThemesCallback: () => void
) => {
  const isAppearanceTransition =
    // @ts-expect-error: Transition API
    document.startViewTransition &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!isAppearanceTransition) {
    changeThemesCallback();
    return;
  }

  const x = event.clientX;
  const y = event.clientY;
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y)
  );

  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(changeThemesCallback);

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ];

    document.documentElement.animate(
      {
        clipPath: isDarkMode ? clipPath : [...clipPath].reverse(),
      },
      {
        duration: 400,
        easing: "ease-out",
        pseudoElement: isDarkMode
          ? "::view-transition-new(root)"
          : "::view-transition-old(root)",
      }
    );
  });
};

export const getIconsFromWeserv = () => {
  return technologies?.map((icon) => getImageFromWeserv(icon));
};

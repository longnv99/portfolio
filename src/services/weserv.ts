export const getImageFromWeserv = (icon: string) => {
  return `${process.env.NEXT_PUBLIC_WESERV_URL}/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`;
};

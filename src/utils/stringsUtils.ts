function capitalizeFirstLetter(value: string) {
  return value
    .split(' ')
    .map(
      word => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase(),
    )
    .join(' ')
    .trim();
}

export const stringsUtils = {
  capitalizeFirstLetter,
};

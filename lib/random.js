export function randomInt(min = 0, max = 100) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}

export function createRandomPicker(arr) {
  arr = [...arr];
  const randomPicker = () => {
    const len = arr.length - 1;
    const idx = randomInt(0, len);
    const picked = arr[idx];
    [arr[idx], arr[len]] = [arr[len], arr[idx]];
    return picked;
  };
  randomPicker();
  return randomPicker;
}

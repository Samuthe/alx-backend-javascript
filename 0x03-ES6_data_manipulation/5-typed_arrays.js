export default function createInt8TypedArray(length, position, value) {
  if (value >= length) {
    throw new Error('Position outside range');
  }
  const mem1 = new ArrayBuffer(length);
  const memView = new Int8Array(mem1);
  memView.set([value], position);
  return new DataView(mem1);
}

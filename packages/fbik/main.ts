interface GenerateConfig {
  length?: number;
  dist?: string | string[];
  end?: string;
  randomFunction?: (max: number) => number;
}

function generator({
  length = 4,
  dist = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  end = '.',
  randomFunction = (max) => Math.floor(Math.random() * max)
}: GenerateConfig = {}): string {
  const chars = typeof dist === 'string' ? dist : dist.join('');
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = chars[randomFunction(chars.length)];
  }
  return result.join('') + end;
}
// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(`Hi! How do you think about the name "${generator()}"?`);
}

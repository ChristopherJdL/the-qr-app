//from: https://www.digitalocean.com/community/tutorials/typescript-new-project

const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log(hello(world))
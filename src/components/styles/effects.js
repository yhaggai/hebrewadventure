const RATIOS = [1, 2, 3, 4, 7, 8, 10, 15,];
import { curry } from 'lodash';


export const glow = (radius, color) => `
  0 0 ${radius * 1}px ${color}, 
  0 0 ${radius * 2}px ${color},
  0 0 ${radius * 4}px ${color},
  0 0 ${radius * 15}px ${color};
`;

export const glowIn = curry(glow)(10);
export const glowOut = curry(glow)(5);
// export const glowIn = `
//   text-shadow: 0 0 10px rgba(255,255,255,.8),
//               0 0 20px rgba(255,255,255,.8),
//               0 0 22px  rgba(255,255,255,.8),
//               0 0 40px  rgba(66,220,219,.8),
//               0 0 60px  rgba(66,220,219,.8),
//               0 0 80px  rgba(66,220,219,.5),
//               0 0 100px rgba(66,220,219,.5),
//               0 0 140px rgba(66,220,219,.5),
//               0 0 200px rgba(66,220,219,.5);`;

// export const glowOut = `
//    text-shadow: 0 0 2px rgba(255,255,255,.8),
//                 0 0 8px rgba(255,255,255,.8),
//                 0 0 10px rgba(255,255,255,.8),
//                 0 0 20px rgba(66,220,219,.8),
//                 0 0 30px rgba(66,220,219,.8),
//                 0 0 40px rgba(66,220,219,.8),
//                 0 0 50px rgba(66,220,219,.5),
//                 0 0 80px rgba(66,220,219,.5);`;

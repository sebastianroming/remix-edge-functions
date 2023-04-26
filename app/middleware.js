import {geolocation, ipAddress, next} from '@vercel/edge';

export default function middleware(request) {
  const ip = ipAddress(request);
  const { country } = geolocation(request);
  console.log(`Country: ${country} ${ip}`);

  return next();
}

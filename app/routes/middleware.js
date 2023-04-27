import {geolocation} from '@vercel/edge';

export const config = {
  matcher: '/'
};

export default function middleware(request) {
  const url = new URL(request.url);

  const { country } = geolocation(request);
  console.log(`MIDDLEWARE app-routes: Country: ${country}`);

  url.pathname = '/404.html';

  return Response.redirect(url);  

}

```javascript
import { NextResponse } from 'next/server';

export function middleware(req) {
  const res = NextResponse.next();
  res.headers.set('Cache-Control', 'public, max-age=600');
  return res;
}

export const config = {
  matcher: '/',
};
```
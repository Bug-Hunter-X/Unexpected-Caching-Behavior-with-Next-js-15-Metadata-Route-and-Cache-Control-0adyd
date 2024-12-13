```javascript
import { MetadataRoute } from 'next/server';

export default function Metadata(): MetadataRoute {
  return {
    headers: {
      'Cache-Control': 'public, max-age=600',
    },
  };
}
```
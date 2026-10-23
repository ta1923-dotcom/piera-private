import { createClient } from 'matrix-js-sdk';

const client = createClient({
  baseUrl: 'https://matrix.org'
});

export async function checkMatrix() {
  const result = await client.getVersions();
  return result.versions;
}

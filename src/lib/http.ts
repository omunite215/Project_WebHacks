export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'HttpError';
  }
}

export async function getJson(
  url: string,
  fetchImpl: typeof fetch = fetch,
  timeoutMs = 10_000,
): Promise<unknown> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetchImpl(url, { signal: controller.signal });
    if (!res.ok) throw new HttpError(res.status, `Request failed: ${res.status}`);
    return (await res.json()) as unknown;
  } finally {
    clearTimeout(id);
  }
}

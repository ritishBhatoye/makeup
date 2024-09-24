export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-24'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: production'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: 72ue9i2x'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  'Missing environment variable: skzHCGXRsZu4hJPtLLVF15pxkvflJeQQKqUYtVND8pqsQrXhgvR8XbryTMxm7hITGYxA0UIrVLqEB2sB7fyMA8D12unIq9chvsrMZ1wDvfdAtvHCbkQtiJ0SK8XHcnASFIKsmNY3ZO4Ke6zYtkkcFcZDR4tGL5mWIgj8tCpCxqPFzALUL4nK'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}

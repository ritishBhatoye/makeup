export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-09-24'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: production'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable:sttf02s5'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  'Missing environment variable: skdw4pmN9jeslgyFClfT8jeyo7mvZqHHulEzhn058qqksMmIZZ92jpFDfACXMBj8ICItzPDh9dkCNzSWCSOhQ5IyqkPNU2a6Q1jrSy7oPM29u7tJ4WxJbAqdl0uHdBneSI2fd7CWYasrRdyD225rudqmMuBz0TknR8Rzx7oVYWr61E1s9abt'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage) 
  }

  return v
}

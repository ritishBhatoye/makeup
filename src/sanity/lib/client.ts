import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: 'skzHCGXRsZu4hJPtLLVF15pxkvflJeQQKqUYtVND8pqsQrXhgvR8XbryTMxm7hITGYxA0UIrVLqEB2sB7fyMA8D12unIq9chvsrMZ1wDvfdAtvHCbkQtiJ0SK8XHcnASFIKsmNY3ZO4Ke6zYtkkcFcZDR4tGL5mWIgj8tCpCxqPFzALUL4nK',
})

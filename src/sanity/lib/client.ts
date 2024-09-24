import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: 'sttf02s5',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2024-09-24', // use current date (YYYY-MM-DD) to target the latest API version
  token: 'skdw4pmN9jeslgyFClfT8jeyo7mvZqHHulEzhn058qqksMmIZZ92jpFDfACXMBj8ICItzPDh9dkCNzSWCSOhQ5IyqkPNU2a6Q1jrSy7oPM29u7tJ4WxJbAqdl0uHdBneSI2fd7CWYasrRdyD225rudqmMuBz0TknR8Rzx7oVYWr61E1s9abt',
   // Only if you want to update content with the client
});

// Run this script with: `sanity exec src/sanity/migrations/updateAppointmentSchema.js --with-user-token`

import {createClient} from '@sanity/client'

// Get a client configured with the project ID and dataset
const sanityClient = createClient({
  projectId: 'sttf02s5', // Replace with your actual project ID
  dataset: 'production' , // Or 'development' if you're using a different dataset
  apiVersion: '2021-03-25',
  token: process.env.SANITY_SECRET_TOKEN || // Make sure to set this environment variable
    'skdw4pmN9jeslgyFClfT8jeyo7mvZqHHulEzhn058qqksMmIZZ92jpFDfACXMBj8ICItzPDh9dkCNzSWCSOhQ5IyqkPNU2a6Q1jrSy7oPM29u7tJ4WxJbAqdl0uHdBneSI2fd7CWYasrRdyD225rudqmMuBz0TknR8Rzx7oVYWr61E1s9abt', // Make sure to set this environment variable
  useCdn: false
})

// Function to update a single document
const updateDocument = async (doc) => {
  const {
    _id,
    _rev,
    service,
    date,
    time,
    firstName,
    lastName,
    email,
    phoneNo,
    message
  } = doc

  // Construct the new document with only the fields we want
  const newDoc = {
    _id,
    _rev,
    _type: 'appointment',
    service: service || '',
    date: date || null,
    time: time || '',
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    phoneNo: phoneNo || '',
    message: message || ''
  }

  // Update the document
  return sanityClient
    .patch(_id)
    .set(newDoc)
    .commit()
}

// Main migration function
const migrationFunction = async () => {
  try {
    // Fetch all appointment documents
    const documents = await sanityClient.fetch('*[_type == "appointment"]')

    console.log(`Migrating ${documents.length} documents`)

    // Update each document
    for (const doc of documents) {
      try {
        await updateDocument(doc)
        console.log(`Successfully migrated document ${doc._id}`)
      } catch (error) {
        console.error(`Failed to migrate document ${doc._id}:`, error)
        console.error('Error details:', JSON.stringify(error, null, 2))
      }
    }

    console.log('Migration completed')
  } catch (error) {
    console.error('Migration failed:', error)
    console.error('Error details:', JSON.stringify(error, null, 2))
    process.exit(1)
  }
}

// Run the migration
migrationFunction()

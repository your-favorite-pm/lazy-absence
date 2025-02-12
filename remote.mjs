// Stable version, don't touch it

import axios from 'axios';
import { AbsenceIO } from 'absence.io';

// Initialize the AbsenceIO client with your API credentials
// Add keys to repository settings -> secrets
const absenceIO = new AbsenceIO({
  apiKey: process.env.API_KEY,
  apiKeyId: process.env.API_KEY_ID,
});

const API_BASE_URL = 'https://app.absence.io/api/v2';

// Function to create an absence for today
async function createAbsenceForToday() {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60000; // Offset in milliseconds
  const localMidnight = new Date(today.getTime() - timezoneOffset).toISOString().split('T')[0] + 'T00:00:00.000Z'; // Local midnight in UTC
  const start = localMidnight;
  const end = new Date(new Date(localMidnight).getTime() + 24 * 60 * 60 * 1000).toISOString(); // Next day local midnight in UTC

  
  const absenceData = {
    // Add ID to repository settings -> secrets
    userId: process.env.USER_ID,
    start: start,
    end: end,
    reasonId: '669667fb4f1dbb57d645eccf',
    description: 'Working remotely for today',
  };

  // Log the data being sent
  console.log('Sending absence data:', absenceData);

  try {
    const response = await absenceIO.api.absence.createAbsence(absenceData);
    console.log('Absence created successfully:', response);
  } catch (error) {
    console.error('Error creating absence:', error.response?.data || error.message);
  }
}

createAbsenceForToday();

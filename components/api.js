import meteoAPI_URL, { geocodeAPI_URL } from "./apiUrl";

// Fetch Data from Api
export async function fetchData(lat, long) {
  const res = await fetch(meteoAPI_URL(lat, long));
  return res.json();
}
export async function fetchLocation(lat, long) {
  const res = await fetch(geocodeAPI_URL(lat, long));
  return res.json();
}

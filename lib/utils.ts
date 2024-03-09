export function reformatDate(dateStr: string) {
  // Split the input date string to get year, month, and day
  const parts = dateStr.split("-").map((part) => parseInt(part, 10));

  // Create a new Date object using UTC values
  // Note: The month argument is 0-indexed (0 is January, 1 is February, etc.)
  const date = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));

  // Correctly typed options for toLocaleDateString
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC", // Specify UTC as the timezone
  };

  return date.toLocaleDateString("en-US", options);
}

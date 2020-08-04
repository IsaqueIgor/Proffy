export default function convertHourToMinute(time: string) {
  const [hour, minute] = time.split(':').map(Number);
  const timeInMinute = hour * 60 + minute;

  return timeInMinute;
}

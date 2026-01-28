import {
  format,
  parseISO,
  startOfMonth,
  startOfToday,
  startOfWeek,
  startOfYear,
} from "date-fns";

export function readableDate(isoDate: string) {
  const date = parseISO(isoDate);
  const now = new Date();
  return format(
    date,
    date.getFullYear() === now.getFullYear() ? "MMMM d" : "MMMM d, yyyy",
  );
}

export function getPeriodStartISOs() {
  const now = new Date();
  return {
    today: startOfToday().toISOString(),
    thisWeek: startOfWeek(now, { weekStartsOn: 0 }).toISOString(), // 0 = Sunday, change to 1 for Monday
    thisMonth: startOfMonth(now).toISOString(),
    thisYear: startOfYear(now).toISOString(),
  };
}

import { DateTime } from "luxon";

/***
 * @param {Date} date           JS Date.
 * @param {string} type          String with format type.
 *
 *  */
export function getPulishedDateFormatted(
  date: Date,
  type?: "title" | "diff"
): string {
  if (!date || !type) return DateTime.now().toFormat("dd/MM/yyyy");

  if (type === "title") {
    const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
    return publishedDateFormatted;
  }

  if (type === "diff") {
    const diffHours = DateTime.fromJSDate(date).diffNow("hours").hours * -1;
    return (
      DateTime.fromJSDate(date).toRelativeCalendar({
        unit: diffHours >= 24 ? "days" : diffHours >= 1020 ? "months" : "hours",
      }) || "agora"
    );
  }

  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_MED);
}

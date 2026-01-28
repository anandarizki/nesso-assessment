import { getPeriodStartISOs } from "@/utils";
import { useFilterArticles } from "../../hooks";
import { OptionList } from "@/components/shared/option-list";

const { today, thisWeek, thisMonth, thisYear } = getPeriodStartISOs();

const TIME_PERIOD_MENU = [
  { value: "", label: "All Time" },
  {
    value: today,
    label: "Today",
  },
  { value: thisWeek, label: "This Week" },
  {
    value: thisMonth,
    label: "This Month",
  },
  { value: thisYear, label: "This Year" },
];

export function FilterArticlesPeriod() {
  const { setDateFrom, filters } = useFilterArticles();
  return (
    <OptionList
      title="Period"
      options={TIME_PERIOD_MENU}
      onSelect={setDateFrom}
      selected={[filters.dateFrom || ""]}
    />
  );
}

import FilterButtons from "./filter-buttons";
import { faCircleDot, faCircleStop } from "@fortawesome/pro-regular-svg-icons";

export default function CustomFilter() {
  return (
    <div className="">
      <ul>
        <FilterButtons icon={faCircleDot} name="Option 1" type="" />
      </ul>
    </div>
  );
}

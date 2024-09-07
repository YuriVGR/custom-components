import {} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type fButton = {
  name: string;
  type: string;
  icon: IconDefinition;
};

export default function FilterButtons({
  name,
  type,
  icon,
}: fButton): React.ReactElement<fButton> {
  return (
    <button className="flex w-32 flex-row items-center justify-center gap-2 bg-slate-600">
      <FontAwesomeIcon icon={icon} />
      <p>{name}</p>
    </button>
  );
}

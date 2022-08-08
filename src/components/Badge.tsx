import { BadgeLabel, Color } from "../types";

interface IProps {
  value: number;
  type: BadgeLabel;
  color: Color;
}

export const Badge = ({ value, type, color }: IProps) => {
  return (
    <div className="col-2">
      <span className={`badge bg-${color}`}>
        {type} : {value}
      </span>
    </div>
  );
};

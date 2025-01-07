import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  //Ensure 3 decimal place
  const stringValue = value.toFixed(2);

  //Get the Int/Float
  const [intValue, floatValue] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">€</span>
      {intValue} <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default ProductPrice;

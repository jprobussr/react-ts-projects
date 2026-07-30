import './ShoppingSummary.css';

type ShoppingSummaryProps = {
  totalCount: number;
  purchasedCount: number;
  remainingCount: number;
};

const ShoppingSummary = ({
  totalCount,
  purchasedCount,
  remainingCount,
}: ShoppingSummaryProps) => {
  return (
    <section className="shopping-summary">
      <p>Total: {totalCount}</p>
      <p>Purchases: {purchasedCount}</p>
      <p>Remaining: {remainingCount}</p>
    </section>
  );
};

export default ShoppingSummary;

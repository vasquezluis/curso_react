export default function CustomTooltipContents({ step }) {
  return (
    <div className="bg-black text-white p-4 max-w-xs overflow-auto">
      <h2 className="text-xs">{step.title}</h2>
      <div>{step.content}</div>
    </div>
  );
}

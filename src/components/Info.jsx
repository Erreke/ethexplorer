import InfoItem from './InfoItem';

export default function Info({ items, mapper }) {
  return (
    <div className="py-4">
      {Object.entries(mapper).map((field, index, arr) => (
          <InfoItem
            key={index}
            header={field[1].title}
            value={items[field[0]]}
            tooltip={field[1].tooltip}
            isNotLast={arr.length !== index + 1}
          />
      ))}
    </div>
  );
}

import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <li className="item">
      <input
        id={item.id}
        type="checkbox"
        checked={item.checked}
        onChange={handleCheck.bind(undefined, item.id)}
      />
      <label
        style={{ textDecoration: item.checked ? "line-through" : null }}
        htmlFor={item.id}
        onDoubleClick={handleCheck.bind(undefined, item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={handleDelete.bind(undefined, item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.id}`}
      />
    </li>
  );
};

export default LineItem;

// Importujemy hook
import { useSelector } from "react-redux";
import { Button } from "components/Button/Button";
// Importujemy obiekt wartości filtra
import { statusFilters } from "../../redux/constants";

export const StatusFilter = () => {
  // Otrzymujemy wartość filtra ze statusu Redux
  const filter = useSelector(state => state.filters.status);

  return (
    <div>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
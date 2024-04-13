import MealsList from "./components/mealsList";
import "./App.css";
function App() {
  return (
    <div>
      <h3 className="welcome">Welcome to Meal Sharing APP</h3>
      <div>
        <MealsList />
      </div>
    </div>
  );
}
export default App;

import Navbar from "../Navbar/Navbar";
import "./mainpage.css";
import Slika from "../../assets/images/slika.jpg";
import FoodTable from "./FoodTable/FoodTable.jsx";
import Sponsors from "./Sponsors/Sponsors.jsx";

export default function Mainpage() {
  return (
    <>
      <Navbar />
      <div className="mainpage-picture">
        <img src={Slika} alt="slika" className="slika" />
        <div className="text-overlay">
          <h2>What is in your fridge?</h2>
        </div>
      </div>
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          viverra nulla ante, et egestas dui pharetra eget. Ut eu ipsum mollis,
          dignissim enim in, laoreet velit. Duis id iaculis felis. Nunc pulvinar
          massa vestibulum, posuere nisl a, lobortis diam. Sed dignissim
          consequat sem. Proin eleifend, mi et suscipit aliquet, ligula risus
          fringilla justo, pretium hendrerit nunc erat vitae nulla. Nulla mauris
          felis, tempus eget risus id, fringilla maximus dui. Donec sit amet
          tempor diam, sit amet vehicula neque. Ut lobortis, felis non euismod
          varius, enim quam mattis ante, sed egestas justo dui eu enim. Donec
          sollicitudin ut massa a sagittis. Proin et pulvinar diam. Vivamus id
          augue dui. In quis consectetur sem
        </p>
        <div>
          <FoodTable />
        </div>
        <div>
          <Sponsors />
        </div>
      </div>
    </>
  );
}

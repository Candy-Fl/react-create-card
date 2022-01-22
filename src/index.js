import { StrictMode } from "react";
import ReactDOM from "react-dom";

const product = {
    name : "3D принтер",
    article : "228",
    picture : "https://i.ibb.co/gPCq1G4/image.png",
    alt : "3D принтер",
    oldPrice : "55555",
    newPrice : "33333",
    delivery : "1 апреля",
    description : "это «текст-рыба», часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной «рыбой» для текстов на латинице с начала XVI века.В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.",
  };
  
import CreateCard from "./create-card";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <CreateCard product={product} />, rootElement
    );

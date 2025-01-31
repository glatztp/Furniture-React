import { Footer } from "../../components/Footer/Footer";
import background from "../../assets/Group 78.svg";
import nav from "../../assets/Group 57.svg";
import nav2 from "../../assets/bi_view-list.svg";
import nav3 from "../../assets/ci_grid-big-round.svg";
import "../../index.css";
import imgP from "../../assets/image 4.svg";
import Produto from "../../components/Produto/produto";

interface Produto1 {
  imageCardName: string;
  imageCardDescription: string;
  imageCardPrice: number;
  imageUrl: string;
  BeforePrice?: number;
}

const produtos: Produto1[] = [
  {
    imageCardName: "Prod 1",
    imageCardDescription: "Desc 1",
    imageCardPrice: 20.99,
    imageUrl: imgP,
  },
  {
    imageCardName: "Prod 2",
    imageCardDescription: "Desc 2",
    imageCardPrice: 29.9,
    imageUrl: imgP,
  },
  {
    imageCardName: "Prod 3",
    imageCardDescription: "Desc 3",
    imageCardPrice: 29.9,
    imageUrl: imgP,
  },
  {
    imageCardName: "Prod 4",
    imageCardDescription: "Desc 4",
    imageCardPrice: 29.9,
    imageUrl: imgP,
  },
  {
    imageCardName: "Prod 5",
    imageCardDescription: "Desc 5",
    imageCardPrice: 29.9,
    imageUrl: imgP,
  },
  {
    imageCardName: "Prod 6",
    imageCardDescription: "Desc 6",
    imageCardPrice: 29.9,
    imageUrl: imgP,
  },
  {
    imageCardName: "Prod 7",
    imageCardDescription: "Desc 7",
    imageCardPrice: 29.9,
    imageUrl: imgP,
  },
  {
    imageCardName: "Prod 8",
    imageCardDescription: "Desc 8",
    imageCardPrice: 29.9,
    imageUrl: imgP,
  },
];

export function Shop() {
  return (
    <div>
      <img className="w-12/12 object-cover " src={background} alt="" />

      <div className="bg-[#F9F1E7] w-full h-32">
        <div className="flex justify-between py-9 px-32 items-center">
          <div className="flex items-center gap-6">
            <img src={nav} />
            <img src={nav2} />
            <img src={nav3} />

            <div className="border-l border-solid pl-11 ml-5 text-2x0">
              <p>Showing 1-16 of 18 results</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-2x0">Show</p>
            <p className="text-2x0 py-4 px-5 bg-white text-[#9F9F9F]">16</p>
            <p className="text-2x0">Short by</p>
            <p className="text-2x0 bg-white text-[#9F9F9F] pl-6 pr-20 py-4">
              Default
            </p>
          </div>
        </div>
      </div>

      <div className="products">
        <div className="c_products grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mr-10 ml-10 mt-12 mb-12">
        {produtos.concat(produtos).map((produto, index) => (
            <Produto
              key={index}
              imageUrl={produto.imageUrl}
              imageCardName={produto.imageCardName}
              imageCardDescription={produto.imageCardDescription}
              imageCardPrice={produto.imageCardPrice}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
